# Markdown boilerplate catalogue

These are standalone source documents. Adapt their relevant sections into the adopting project's existing documentation, issue tracker, governance system, release tooling, or knowledge base. File names and storage locations are suggestions only.

Start with [`ADOPTION_MAP.md`](ADOPTION_MAP.md). It prevents duplicate documents by recording the project's existing authoritative source for each concern.

## Project and delivery

| Boilerplate | Purpose |
| --- | --- |
| [`ADOPTION_MAP.md`](ADOPTION_MAP.md) | Map concerns to existing project records and decide what to reuse, improve, merge, or create. |
| [`PROJECT_README.md`](PROJECT_README.md) | Project landing-page boilerplate that links to existing authoritative records. |
| [`PROJECT_DEFINITION.md`](PROJECT_DEFINITION.md) | Purpose, scope, ownership, outcomes, constraints, environments, and unknowns. |
| [`REQUIREMENTS.md`](REQUIREMENTS.md) | Testable requirements, acceptance evidence, status, and change control. |
| [`FEATURE_REGISTER.md`](FEATURE_REGISTER.md) | Independent implementation, verification, and release states for features. |
| [`FEATURE_RECORD.md`](FEATURE_RECORD.md) | Detailed outcome, acceptance, boundaries, verification, and recovery for one feature. |
| [`ROADMAP.md`](ROADMAP.md) | Outcomes, sequencing, dependencies, capacity, assumptions, and confidence. |
| [`PROJECT_STATUS.md`](PROJECT_STATUS.md) | Evidence-based current status, blockers, decisions, and next outcomes. |

## Context, governance, and risk

| Boilerplate | Purpose |
| --- | --- |
| [`AGENT_INSTRUCTIONS.md`](AGENT_INSTRUCTIONS.md) | Objectives, invariants, authority, stop conditions, existing project map, and workflow for AI tools. |
| [`ARCHITECTURE.md`](ARCHITECTURE.md) | Components, data flow, trust boundaries, source ownership, and AI boundaries. |
| [`REPOSITORY_ECOSYSTEM.md`](REPOSITORY_ECOSYSTEM.md) | Interconnected repositories/components, contracts, compatibility, coordination, and recovery. |
| [`DECISION_RECORD.md`](DECISION_RECORD.md) | Significant architecture, product, governance, or operational decision. |
| [`RISK_REGISTER.md`](RISK_REGISTER.md) | Active risks, verified controls, treatments, and time-bounded acceptance. |
| [`SECURITY_POLICY.md`](SECURITY_POLICY.md) | Reporting, AI data boundaries, permissions, incidents, and supply chain. |
| [`CONTRIBUTION_GUIDE.md`](CONTRIBUTION_GUIDE.md) | Contribution, quality, review, and documentation expectations. |
| [`AI_TASK.md`](AI_TASK.md) | Bounded AI-assisted task definition independent of issue-tracker platform. |
| [`CHANGE_REVIEW.md`](CHANGE_REVIEW.md) | Outcome, scope, risk, AI involvement, and verification review. |

## Verification and release

| Boilerplate | Purpose |
| --- | --- |
| [`TRACEABILITY.md`](TRACEABILITY.md) | Requirements-to-feature-to-change-to-test-to-release evidence chain. |
| [`TESTING.md`](TESTING.md) | Project-specific complete quality gate, coverage, and manual checks. |
| [`VERIFICATION_PLAN.md`](VERIFICATION_PLAN.md) | What must be verified, how, where, by whom, and with what evidence. |
| [`OPERATIONS_AND_RECOVERY.md`](OPERATIONS_AND_RECOVERY.md) | Authority, preflight, deployment, migration, rollback, restore, and effective verification. |
| [`RELEASE_PROCESS.md`](RELEASE_PROCESS.md) | Lifecycle from planned scope through immutable candidate, approval, release, and closure. |
| [`RELEASE_CHECKLIST.md`](RELEASE_CHECKLIST.md) | Reusable conditions and checks for a release operation. |
| [`RELEASE_READINESS.md`](RELEASE_READINESS.md) | Working evidence and decision for one exact release candidate. |
| [`RELEASE_EVIDENCE.md`](RELEASE_EVIDENCE.md) | Immutable historical record for approved, failed, cancelled, or rolled-back releases. |

## Adaptation rules

- Reuse existing project sources before creating new ones.
- Preserve one authoritative owner and source for each fact.
- Replace every `{{PLACEHOLDER}}`; do not leave generic claims that are not true.
- Mark a concern `NOT APPLICABLE` only with evidence and an owner.
- Link to exact evidence instead of copying volatile results into multiple documents.
- Keep implemented, verified, approved, released, failed, and rolled-back states distinct.
- Adapt terminology to the project without weakening the underlying control or evidence boundary.
