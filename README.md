# AI Ready

AI Ready is an open framework for determining whether a software repository is prepared for controlled artificial intelligence (AI)-assisted coding.

It provides:

- an evidence-based readiness assessment in [`AiReady.md`](AiReady.md);
- reusable repository instructions and governance documents in [`templates/`](templates/README.md);
- a dependency-free Node.js command-line audit for structural checks;
- a Continuous Integration (CI) workflow and structured issue and pull-request templates; and
- explicit boundaries between automated evidence, human review, and claims that automation cannot prove.

AI Ready is not a security certification, a compliance standard, or permission for an AI agent to operate production systems. It is a repeatable way to expose missing controls before AI is allowed to change code.

## Quick start

Requirements: Node.js 22 or later.

```bash
git clone https://github.com/neilrichins/AiReady.git
cd AiReady
node bin/aiready.js init ../your-project
node bin/aiready.js audit ../your-project
```

`init` copies only files that do not already exist. It never overwrites a project file. Review every copied document and replace all `{{PLACEHOLDER}}` values before treating the project as assessed.

The first audit is expected to fail until the copied controls have been reviewed and completed.

To produce machine-readable output:

```bash
node bin/aiready.js audit ../your-project --json
```

The audit returns a non-zero exit code when required structural controls are missing or unresolved placeholders remain. It cannot determine whether the controls are accurate, effective, or followed.

## Readiness model

The assessment covers ten control areas:

1. purpose, ownership, and authority;
2. repository instructions and context;
3. architecture and source ownership;
4. task definition and traceability;
5. reproducible development environment;
6. tests and deterministic quality gates;
7. security, privacy, and supply-chain controls;
8. AI-output and data trust boundaries;
9. deployment, migration, rollback, and recovery; and
10. human review, documentation, and evidence.

These controls apply to standalone repositories and systems split across multiple interconnected repositories. Multi-repository projects must also document repository ownership, dependency direction, interface contracts, compatibility, coordinated testing, release order, and recovery order.

Scores are useful for prioritisation, but hard blockers take precedence. A high score with an unresolved hard blocker is not AI-ready.

See [`docs/methodology.md`](docs/methodology.md) for the scoring rules and [`docs/adoption.md`](docs/adoption.md) for a staged implementation approach.

## Repository contents

| Path | Purpose |
| --- | --- |
| [`AiReady.md`](AiReady.md) | Canonical assessment template. |
| [`templates/AGENTS.md`](templates/AGENTS.md) | Repository-wide instructions for AI coding agents. |
| [`templates/docs/`](templates/docs/README.md) | Architecture, testing, operations, and decision-record templates. |
| [`templates/.github/`](templates/.github/pull_request_template.md) | Task, review, ownership, and CI boilerplate. |
| [`bin/`](bin/README.md) | Safe `init`, `audit`, and framework-validation command-line interface. |
| [`lib/`](lib/README.md) | Dependency-free audit and template-copy implementation. |
| [`test/`](test/README.md) | Automated tests and fixtures generated at runtime. |
| [`.github/`](.github/README.md) | Ownership, issue, review, dependency, and CI governance. |

## Development

```bash
npm test
npm run check
```

`npm run check` runs tests, audits this framework repository, verifies internal Markdown links, checks required boilerplate, and scans for unresolved template defects or prohibited source-project references.

## Licence

Licensed under the [Apache License 2.0](LICENSE).
