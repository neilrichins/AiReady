# Control catalogue

| Area | Strong evidence | Common failure |
| --- | --- | --- |
| Ownership and authority | Named owners, permission matrix, enforced approval boundary | “The team” owns decisions; agent authority is implicit |
| Legacy discovery | Preserved baseline, evidence labels, observed-versus-intended behaviour, bounded execution | Agent edits before understanding hidden state or turns inference into fact |
| Product and design intent | Research provenance, approved outcomes, complete journeys/states, evaluated design decisions | Current implementation or generated personas treated as requirements |
| Repository context | Current AI-tool instruction source, scoped context, glossary, project map | Long generic instructions detached from actual commands |
| Context precedence | Task-relevant reading order, lifecycle state, precedence rule, conflict owner | Agent follows the newest or most detailed record despite superseded intent |
| Mechanical comprehensibility and agent efficiency | Representative fresh-context probes with recorded discovery paths, impact analysis, actionable verification, limitations, and human-reviewed evidence | Agent confidence, generated summaries, or coached navigation presented as proof that unfamiliar agents can work safely and efficiently |
| Architecture | Data-flow and trust-boundary record, source ownership, decision records | Generated files or production data mistaken for source |
| Architecture review | Exact lens/source version, stakeholder views, baseline/target/transition, trade-offs, findings, improvement owners | Framework name or checklist treated as proof of sound architecture or conformity |
| Component boundaries | Stable ownership, forbidden responsibilities, compatibility range, discovery, failure behaviour, change authority | A routine change silently moves responsibility or assumes compatibility |
| Repository ecosystem | Owned dependency graph, contract versions, supported combinations, coordinated release and rollback | Each repository passes independently while the combined system is incompatible |
| Requirements and traceability | Stable requirement identity/version, source and derivation, verified AI access for every applicable requirement, bidirectional design/implementation/risk/test/release links, separate verification and validation | Prompt-only work, inaccessible or undiscovered requirements, silent requirement rewrites, or orphan implementation with no durable approved intent |
| Decisions | Stable decision identity, explicit drivers, alternatives, accountable roles, consequences, confirmation evidence, and supersession history | Accepted status treated as implementation proof or an old decision silently rewritten |
| Reproducibility | Locked dependencies, clean build, documented runtime, validated configuration | Works only on one workstation |
| Quality | Single local gate mirrored by required CI, risk coverage, and distinct verification levels | Simulated, component, or source tests presented as package, physical, user, or production proof |
| Execution evidence | Exact command, scope, environment, exit result, failures, skips, reruns, and limitations | “Tests passed” without reproducible context or with hidden exclusions |
| Security and supply chain | Threat model, secret and code scanning, reviewed pinned dependencies, exact subject digests, trusted producer/builder identities, and consumer-policy verification | Credentials leak, generated metadata is accepted without verification, or one valid component is treated as whole-system assurance |
| AI trust boundaries | Closed schemas, allowlists, escaping, sandboxing, verification | Generated output directly executed or published |
| Operations and recovery | Separate commands, dry runs, confirmation, backup, rollback, effective verification | Deployment doubles as a destructive smoke test |
| Failure and recovery exercises | Risk-based tabletop, simulation, failover, restore, or controlled fault evidence with actual outcomes and corrective actions | A runbook or scheduled exercise presented as proof that recovery works |
| Technology cost and value | Allocation, budgets, forecasts, anomalies, unit economics, usage limits, optimisation outcomes, and accountable owners | Lowest bill treated as value; estimates or list prices presented as actual cost |
| Sustainability and resource lifecycle | Workload-relevant resource use, useful-unit measures, data and hardware lifecycle effects, limits, and improvement evidence | Provider labels or reduced spend presented as complete environmental evidence |
| Human evidence | Code ownership, review record, current documentation, accepted-risk expiry | Checkboxes completed without evidence |
| Delivery checkpoints | Exact baseline, bounded criteria, decisions, evidence, limitations, and handoff | Completed milestone or tag presented as release approval |

## Structural-validation boundary

Markdown linting and link checks can validate this framework's document structure. They do not assess an adopting project, award a readiness score, infer control effectiveness, or approve an operating level. Those decisions require project-specific evidence and accountable human review.
