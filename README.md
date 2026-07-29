# Formal Sciences Curriculum Atlas

An interactive prerequisite tree and concept-specific bibliography covering these 14 declared areas:

1. Logic
2. Mathematics
3. Statistics
4. Theoretical computer science
5. Artificial intelligence
6. Game theory
7. Systems theory
8. Theoretical linguistics
9. Decision theory
10. Systems science
11. Data science
12. Information theory
13. Computer science
14. Cryptography

The curriculum contains 183 subfields and 978 learnable concepts, distributed unevenly according to each area’s actual breadth. Every published concept has:

- a genuine, concept-specific summary (not a templated restatement of its subfield);
- sequential prerequisite links, resolved both within and across areas — no unresolved reference is ever silently aliased to an unrelated concept;
- parallel-preparation links where justified;
- two or more located works on average (687 deduplicated works across 1,588 total readings), each a real, verifiable named work with edition and year;
- a chapter, section, part, or whole-work locator per reading;
- a stated, reading-specific purpose per reading.

MSC and ACM classification codes are not used as curriculum nodes. Classification systems index literature; they do not establish learning order.

## Run locally

Open `index.html`, or serve the directory with any static web server.

## Validate

```bash
npm test
```

## Semantic gap audit

The browser never accepts or stores an API key. Run the audit locally with either an OpenRouter or an OpenAI key:

```bash
export OPENROUTER_API_KEY="your-key"
npm run audit
```

PowerShell:

```powershell
$env:OPENROUTER_API_KEY="your-key"
npm run audit
```

If `OPENROUTER_API_KEY` is set, the script calls OpenRouter's chat completions endpoint (default model `anthropic/claude-sonnet-4.5`, override with `OPENROUTER_MODEL`). Otherwise it falls back to `OPENAI_API_KEY` and the OpenAI Responses API (default model `gpt-5.6-terra`, override with `OPENAI_MODEL`).

## Coverage statement

“Complete” means complete against the repository’s declared curriculum contract: all 14 areas are represented by named subfields and concepts, and every published concept passes the deterministic prerequisite and bibliography checks. It is not a claim that evolving scholarship has a closed universal denominator.
