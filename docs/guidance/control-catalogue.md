# Control catalogue

| Area | Strong evidence | Common failure |
| --- | --- | --- |
| Ownership and authority | Named owners, permission matrix, enforced approval boundary | “The team” owns decisions; agent authority is implicit |
| Legacy discovery | Preserved baseline, evidence labels, observed-versus-intended behaviour, bounded execution | Agent edits before understanding hidden state or turns inference into fact |
| Product and design intent | Research provenance, approved outcomes, complete journeys/states, evaluated design decisions | Current implementation or generated personas treated as requirements |
| Repository context | Current AI-tool instruction source, scoped context, glossary, project map | Long generic instructions detached from actual commands |
| Architecture | Data-flow and trust-boundary record, source ownership, decision records | Generated files or production data mistaken for source |
| Repository ecosystem | Owned dependency graph, contract versions, supported combinations, coordinated release and rollback | Each repository passes independently while the combined system is incompatible |
| Task traceability | Structured issue, acceptance criteria, linked pull request, decision log | Prompt-only work with no durable acceptance criteria |
| Reproducibility | Locked dependencies, clean build, documented runtime, validated configuration | Works only on one workstation |
| Quality | Single local gate mirrored by required CI, negative and migration tests | Unit tests alone presented as complete readiness |
| Security and supply chain | Threat model, secret and code scanning, reviewed pinned dependencies | Credentials in prompts, fixtures, logs, or shell history |
| AI trust boundaries | Closed schemas, allowlists, escaping, sandboxing, verification | Generated output directly executed or published |
| Operations and recovery | Separate commands, dry runs, confirmation, backup, rollback, effective verification | Deployment doubles as a destructive smoke test |
| Human evidence | Code ownership, review record, current documentation, accepted-risk expiry | Checkboxes completed without evidence |

## Structural-validation boundary

Markdown linting and link checks can validate this framework's document structure. They do not assess an adopting project, award a readiness score, infer control effectiveness, or approve an operating level. Those decisions require project-specific evidence and accountable human review.
