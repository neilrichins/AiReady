# Repository instructions for artificial intelligence (AI) coding agents

## Objective

Maintain AI Ready as a project-neutral, evidence-based framework for assessing controlled AI-assisted software development.

## Non-negotiable rules

- Do not include customer names, source-project names, private domains, credentials, account identifiers, private prompts, or production data.
- Keep the framework technology-neutral. The reference validator may use Node.js, but assessment controls must apply to other technology stacks.
- Never describe a structural file-presence check as proof that a control is effective.
- Do not describe an AI Ready result as security certification, regulatory compliance, accessibility conformance, or permission to operate production.
- `init` must never overwrite an existing target file.
- Audit output must be deterministic for the same repository state.
- Every new required control must include documentation and automated validation where practical.
- Generated test fixtures and temporary output must remain outside version control.

## Source ownership

- `AiReady.md` is the canonical assessment template.
- `templates/` contains project-neutral files copied into adopting repositories.
- `lib/` owns reusable audit, initialisation, Markdown-link, and provenance checks.
- `bin/aiready.js` owns command-line parsing and exit behaviour.
- `test/` owns dependency-free Node.js tests.
- `.github/` owns this repository's contribution and CI controls.

## Required workflow

1. Read the README for the directory being changed.
2. Preserve unrelated changes and keep work project-neutral.
3. Add or update tests for behavioural changes.
4. Update documentation when commands, controls, output, or adoption steps change.
5. Run `npm run check` before committing.
6. Review `git diff --check`, repository status, and the complete diff before pushing.

## Commands

```bash
npm test
npm run audit:self
npm run check
node bin/aiready.js init <target-directory>
node bin/aiready.js audit <target-directory>
node bin/aiready.js audit <target-directory> --json
```
