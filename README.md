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

The curriculum contains 167 subfields and 835 learnable concepts, distributed unevenly according to each area’s actual breadth. Every published concept has:

- sequential prerequisite links;
- parallel-preparation links where justified;
- a named work, edition, and year;
- a chapter, section, part, or whole-work locator;
- a stated reading purpose.

MSC and ACM classification codes are not used as curriculum nodes. Classification systems index literature; they do not establish learning order.

## Run locally

Open `index.html`, or serve the directory with any static web server.

## Validate

```bash
npm test
```

## Semantic gap audit

The browser never accepts or stores an OpenAI API key. Run the audit locally:

```bash
export OPENAI_API_KEY="your-key"
npm run audit
```

PowerShell:

```powershell
$env:OPENAI_API_KEY="your-key"
npm run audit
```

The script uses the OpenAI Responses API. Override its default model with `OPENAI_MODEL`.

## Coverage statement

“Complete” means complete against the repository’s declared curriculum contract: all 14 areas are represented by named subfields and concepts, and every published concept passes the deterministic prerequisite and bibliography checks. It is not a claim that evolving scholarship has a closed universal denominator.
