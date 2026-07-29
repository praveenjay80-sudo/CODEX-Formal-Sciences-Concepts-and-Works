import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";

const source = fs.readFileSync(new URL("../curriculum.js", import.meta.url), "utf8");
const context = { window: {} };
vm.runInNewContext(source, context);
const data = context.window.FORMAL_SCIENCES_CURRICULUM;

test("publishes exactly the 14 declared areas", () => {
  assert.equal(data.areas.length, 14);
  assert.equal(
    JSON.stringify(data.areas.map((item) => item.title)),
    JSON.stringify(
    [
      "Logic", "Mathematics", "Statistics", "Theoretical computer science",
      "Artificial intelligence", "Game theory", "Systems theory",
      "Theoretical linguistics", "Decision theory", "Systems science",
      "Data science", "Information theory", "Computer science", "Cryptography",
    ]),
  );
});

test("has broad subfield and concept coverage in every area", () => {
  for (const area of data.areas) {
    const subfields = data.subfields.filter((item) => item.area === area.id);
    const subfieldIds = new Set(subfields.map((item) => item.id));
    const concepts = data.concepts.filter((item) => subfieldIds.has(item.subfield));
    assert.ok(subfields.length >= 5, `${area.title} has too few subfields`);
    assert.ok(concepts.length >= 25, `${area.title} has too few concepts`);
  }
  assert.equal(data.subfields.length, 70);
  assert.equal(data.concepts.length, 350);
});

test("all identifiers and prerequisite references resolve", () => {
  const ids = new Set(data.concepts.map((item) => item.id));
  assert.equal(ids.size, data.concepts.length);
  assert.equal(data.unresolvedReferences.length, 0);
  for (const concept of data.concepts) {
    for (const id of [...concept.required, ...concept.parallel]) {
      assert.ok(ids.has(id), `${concept.id} references ${id}`);
      assert.notEqual(id, concept.id);
    }
  }
});

test("the sequential prerequisite graph is acyclic", () => {
  const byId = new Map(data.concepts.map((item) => [item.id, item]));
  const visiting = new Set();
  const visited = new Set();
  const visit = (id) => {
    if (visiting.has(id)) throw new Error(`cycle at ${id}`);
    if (visited.has(id)) return;
    visiting.add(id);
    for (const parent of byId.get(id).required) visit(parent);
    visiting.delete(id);
    visited.add(id);
  };
  for (const concept of data.concepts) visit(concept.id);
});

test("every concept has an edition-specific located bibliography", () => {
  const works = new Map(data.works.map((item) => [item.id, item]));
  for (const concept of data.concepts) {
    assert.ok(concept.readings.length >= 1, concept.id);
    for (const reading of concept.readings) {
      const work = works.get(reading.work);
      assert.ok(work, `${concept.id} references missing work ${reading.work}`);
      assert.ok(work.author && work.title && work.edition && work.year);
      assert.ok(reading.locator.length >= 18, `${concept.id} has a weak locator`);
      assert.ok(reading.role && reading.purpose);
    }
  }
});

test("static entrypoint loads the curriculum and interaction scripts", () => {
  const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.match(html, /curriculum\.js/);
  assert.match(html, /app\.js/);
  assert.match(html, /id="subfieldTree"/);
  assert.match(html, /id="bibliographyList"/);
});
