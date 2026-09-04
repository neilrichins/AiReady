# Markdown boilerplate catalogue

These are standalone source documents. Adapt their relevant sections into the adopting project's existing documentation, issue tracker, governance system, release tooling, or knowledge base. File names and storage locations are suggestions only.

Start with [`ADOPTION_MAP.md`](ADOPTION_MAP.md). It prevents duplicate documents by recording the project's existing authoritative source for each concern.

## Project and delivery

| Boilerplate | Purpose |
| --- | --- |
| [`ADOPTION_MAP.md`](ADOPTION_MAP.md) | Map concerns to existing project records and decide what to reuse, improve, merge, or create. |
| [`DISCOVERY_AND_BASELINE.md`](DISCOVERY_AND_BASELINE.md) | Evidence-labelled system classification, requirements sources and AI access, current state, instruction currency, context locality, fresh-context mechanical-readiness probes, changeability, observed versus intended behaviour, reproducibility, risk, and authorised remediation boundary for an unfamiliar or legacy system. |
| [`PROJECT_README.md`](PROJECT_README.md) | Project landing-page boilerplate that links to existing authoritative records. |
| [`PROJECT_DEFINITION.md`](PROJECT_DEFINITION.md) | Purpose, scope, ownership, outcomes, constraints, environments, and unknowns. |
| [`REQUIREMENTS.md`](REQUIREMENTS.md) | Versioned, derived, testable requirements with distinct implementation, verification, validation, evidence, and change history. |
| [`FEATURE_REGISTER.md`](FEATURE_REGISTER.md) | Independent implementation, verification, and release states for features. |
| [`FEATURE_RECORD.md`](FEATURE_RECORD.md) | Detailed outcome, acceptance, boundaries, verification, and recovery for one feature. |
| [`ROADMAP.md`](ROADMAP.md) | Outcomes, sequencing, dependencies, capacity, assumptions, and confidence. |
| [`PROJECT_STATUS.md`](PROJECT_STATUS.md) | Evidence-based current status, blockers, decisions, and next outcomes. |
| [`DELIVERY_CHECKPOINT.md`](DELIVERY_CHECKPOINT.md) | Optional evidence for a phase, milestone, migration step, or architectural baseline without implying release approval. |

## Context, governance, and risk

| Boilerplate | Purpose |
| --- | --- |
| [`AGENT_INSTRUCTIONS.md`](AGENT_INSTRUCTIONS.md) | Layered and task-bounded context, requirements access, canonical patterns, objectives, invariants, authority, instruction currency, governed convention improvement, change impacts, stop conditions, and workflow for AI tools. |
| [`ARCHITECTURE.md`](ARCHITECTURE.md) | Components, context locality, change-amplification hotspots, canonical concepts, contracts, failure behaviour, data flow, trust boundaries, source ownership, and AI boundaries. |
| [`ARCHITECTURE_REVIEW.md`](ARCHITECTURE_REVIEW.md) | Optional point-in-time architecture review using selected internal or external lenses, stakeholder views, baseline/target/transition states, cross-quality trade-offs, findings, and owned improvement actions. |
| [`REPOSITORY_ECOSYSTEM.md`](REPOSITORY_ECOSYSTEM.md) | Repository topology, delivery units, reusable dependency baseline, interconnected components, contracts, compatibility, change-only review, coordination, and recovery. |
| [`DECISION_RECORD.md`](DECISION_RECORD.md) | Identified, evidence-led architecture, product, governance, or operational decision with drivers, alternatives, consequences, confirmation, and lifecycle history. |
| [`RISK_REGISTER.md`](RISK_REGISTER.md) | Active risks, verified controls, treatments, and time-bounded acceptance. |
| [`SECURITY_POLICY.md`](SECURITY_POLICY.md) | Reporting, AI data boundaries, permissions, incidents, and supply chain. |
| [`CONTRIBUTION_GUIDE.md`](CONTRIBUTION_GUIDE.md) | Contribution, quality, review, and documentation expectations. |
| [`AI_TASK.md`](AI_TASK.md) | Bounded AI-assisted task definition with applicable-requirement access evidence, independent of issue-tracker platform. |
| [`CHANGE_REVIEW.md`](CHANGE_REVIEW.md) | Outcome, scope, change-impact and high-blast-radius coverage, canonical-pattern and contract review, risk, AI involvement, and verification. |

## Verification and release

Surface-specific optional accessibility records are indexed separately under
[accessibility checklists](../accessibility/README.md). Use them only when
applicable and map them to existing product, legal, test, and release sources.

Applicability-first security, privacy, assurance, AI, financial-crime,
supply-chain, and sector records are indexed under [optional compliance
checklists](../compliance/README.md). Select only the relevant packs and preserve
the difference between readiness evidence and an authorised external decision.

| Boilerplate | Purpose |
| --- | --- |
| [`TRACEABILITY.md`](TRACEABILITY.md) | Bidirectional requirement, derivation, design, risk, feature, implementation, verification, validation, and release evidence chain. |
| [`TESTING.md`](TESTING.md) | Project-specific test basis, focused feedback loops, complete quality gate, coverage, completion, variance, evidence boundaries, and manual checks. |
| [`AI_SYSTEM_EVALUATION.md`](AI_SYSTEM_EVALUATION.md) | Optional evaluation contract, suite, graders, results, drift, and decision record for material AI-system behaviour. |
| [`VERIFICATION_PLAN.md`](VERIFICATION_PLAN.md) | What must be verified and validated, how, where, by whom, against which basis, and with what evidence. |
| [`OPERATIONS_AND_RECOVERY.md`](OPERATIONS_AND_RECOVERY.md) | Authority, preflight, deployment, migration, rollback, restore, and effective verification. |
| [`TECHNOLOGY_COST_AND_VALUE.md`](TECHNOLOGY_COST_AND_VALUE.md) | Optional authority, allocation, budget, forecast, anomaly, unit-value, resource-efficiency, commitment, optimisation, sustainability, and multi-repository record. |
| [`RELEASE_PROCESS.md`](RELEASE_PROCESS.md) | Lifecycle from planned scope through immutable candidate, approval, release, and closure. |
| [`RELEASE_CHECKLIST.md`](RELEASE_CHECKLIST.md) | Reusable conditions and checks for a release operation. |
| [`RELEASE_READINESS.md`](RELEASE_READINESS.md) | Working evidence and decision for one exact release candidate. |
| [Release evidence record](../releases/RELEASE_EVIDENCE_TEMPLATE.md) | Immutable historical record for approved, failed, cancelled, or rolled-back releases. |
| [Hotfix release evidence record](../releases/HOTFIX_RELEASE_EVIDENCE_TEMPLATE.md) | Constrained evidence, risk decisions, compensating controls, and follow-up for an urgent release. |
| [Release notes](../releases/RELEASE_NOTES_TEMPLATE.md) | Audience-appropriate verified changes, compatibility, migration, limitations, and support information. |

## Adaptation rules

- Reuse existing project sources before creating new ones.
- Preserve one authoritative owner and source for each fact.
- Replace every `{{PLACEHOLDER}}`; do not leave generic claims that are not true.
- Mark a concern `NOT APPLICABLE` only with evidence and an owner.
- Link to exact evidence instead of copying volatile results into multiple documents.
- Keep implemented, verified, approved, released, failed, and rolled-back states distinct.
- Keep delivery checkpoints, release candidates, approved releases, and published or deployed releases distinct.
- Adapt terminology to the project without weakening the underlying control or evidence boundary.
