import fs from "node:fs";
import vm from "node:vm";

const openrouterKey = process.env.OPENROUTER_API_KEY;
const openaiKey = process.env.OPENAI_API_KEY;
const provider = openrouterKey ? "openrouter" : openaiKey ? "openai" : null;
if (!provider) {
  throw new Error("Set OPENROUTER_API_KEY or OPENAI_API_KEY in the terminal environment before running npm run audit.");
}

const source = fs.readFileSync(new URL("../curriculum.js", import.meta.url), "utf8");
const context = { window: {} };
vm.runInNewContext(source, context);
const data = context.window.FORMAL_SCIENCES_CURRICULUM;
const compact = {
  areas: data.areas.map((area) => ({
    title: area.title,
    subfields: data.subfields.filter((item) => item.area === area.id).map((subfield) => ({
      title: subfield.title,
      concepts: data.concepts.filter((item) => item.subfield === subfield.id).map((concept) => ({
        title: concept.title,
        required: concept.required.map((id) => data.concepts.find((item) => item.id === id)?.title),
        parallel: concept.parallel.map((id) => data.concepts.find((item) => item.id === id)?.title),
        bibliography: concept.readings.map((reading) => {
          const work = data.works.find((item) => item.id === reading.work);
          return { author: work?.author, title: work?.title, edition: work?.edition, year: work?.year, locator: reading.locator };
        }),
      })),
    })),
  })),
};

const systemPrompt = "Audit formal-science curricula conservatively. Identify only material omissions, invalid prerequisite directions, and bibliography locators that are clearly implausible. Do not equate classification codes with learnable concepts.";
const userPrompt = `Audit this 14-area curriculum. Return a concise Markdown report with: critical omissions, prerequisite defects, bibliography defects, and prioritized repairs.\n\n${JSON.stringify(compact)}`;

let response, output;
if (provider === "openrouter") {
  response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${openrouterKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENROUTER_MODEL || "anthropic/claude-sonnet-4.5",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    }),
  });
  if (!response.ok) {
    throw new Error(`OpenRouter audit failed (${response.status}): ${await response.text()}`);
  }
  const result = await response.json();
  output = result.choices?.[0]?.message?.content;
  if (!output) throw new Error("The OpenRouter response did not contain text output.");
} else {
  response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${openaiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-5.6-terra",
      input: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    }),
  });
  if (!response.ok) {
    throw new Error(`OpenAI audit failed (${response.status}): ${await response.text()}`);
  }
  const result = await response.json();
  output = result.output_text || result.output?.flatMap((item) => item.content || []).find((item) => item.type === "output_text")?.text;
  if (!output) throw new Error("The OpenAI response did not contain text output.");
}
console.log(output);
