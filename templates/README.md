# Adoption templates

The `init` command copies this directory's project files into a target repository without overwriting existing files. The canonical assessment template is copied from the repository root as `AiReady.md`.

| Template | Purpose |
| --- | --- |
| [`AGENTS.md`](AGENTS.md) | AI-agent objective, invariants, authority, repository map, and workflow. |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | Human and AI contribution requirements. |
| [`SECURITY.md`](SECURITY.md) | Reporting, secret, data, and AI-specific security boundaries. |
| [`docs/architecture.md`](docs/architecture.md) | Components, data flow, trust boundaries, and ownership. |
| [`docs/repository-ecosystem.md`](docs/repository-ecosystem.md) | Standalone or multi-repository ownership, contracts, compatibility, coordination, and recovery. |
| [`docs/testing.md`](docs/testing.md) | Complete automated and manual verification contract. |
| [`docs/operations.md`](docs/operations.md) | Deployment, migration, rollback, and recovery controls. |
| [`docs/decision-record.md`](docs/decision-record.md) | Architecture and governance decision template. |
| [AI task issue](.github/ISSUE_TEMPLATE/ai-task.yml) | Structured problem, scope, acceptance, risk, and evidence. |
| [Pull-request template](.github/pull_request_template.md) | Outcome, risk, AI involvement, and verification record. |
| [CI workflow](.github/workflows/ai-ready.yml) | Example structural audit workflow. |
| [`scripts/check-ai-ready.mjs`](scripts/check-ai-ready.mjs) | Dependency-free structural check used by the example workflow. |

Every placeholder must be reviewed. Do not commit boilerplate statements that are not true for the adopting project.
