# Document lifecycle

## Principle

AI Ready defines information concerns, not mandatory files or directories. Each project chooses where those concerns live and records that choice in the adoption map.

## Information flow

| Information | Inputs | Downstream use | Update trigger |
| --- | --- | --- | --- |
| Discovery baseline | Source, history, configuration, runtime evidence, owner input | Adoption, architecture, remediation, AI authority | Newly discovered evidence, system-boundary change, or baseline remediation |
| Product intent | User research, strategy, obligations, evidence | Requirements, messages, roadmap, quality constraints | Problem, audience, evidence, product claim, or strategy change |
| Experience/design intent | Product intent, research, accessibility needs, constraints | Requirements, implementation, verification, content, support | Journey, state, content, design-system, accessibility, or evaluation change |
| Project definition | User need, ownership, constraints, obligations | Requirements, architecture, roadmap, AI authority | Scope, owner, environment, or obligation change |
| Requirements | Project outcomes, policy, contracts, risks | Features, acceptance criteria, verification | Requirement or acceptance change |
| Feature state | Requirements, implementation, decisions | Status, traceability, release scope | Implementation, verification, or release-state change |
| Verification coverage | Requirements, features, risks, architecture | Release readiness and evidence | Code, configuration, dependency, environment, test, or risk change |
| Risk state | Threats, defects, unknowns, control evidence | Prioritisation and release decisions | New risk, treatment, control failure, or review date |
| Release readiness | Candidate artefacts, scope, evidence, risks, recovery | Approval and execution | Every candidate change or gate result |
| Release evidence | Approved candidate and actual operation | Audit history, support, future planning | Release, failure, cancellation, or rollback |
| Operational learning | Effective behaviour, monitoring, support, incidents, user feedback | Product intent, risks, requirements, design, architecture, verification | Material signal, incident, feedback, or retrospective decision |

The [product document examples](../product/README.md) provide boilerplate for approved intent and testable quality boundaries. The [release evidence examples](../releases/README.md) provide immutable records of exact candidates, decisions, execution, and outcomes. A project may map these concerns to existing authoritative systems instead of adopting the example file structure.

## Ownership rules

- Every concern has one authoritative source and owner.
- Other documents link to that source or clearly identify generated snapshots.
- Volatile results are referenced by immutable evidence rather than copied repeatedly.
- Historical release decisions are preserved, including failed and rolled-back candidates.
- A template is removed or merged when it duplicates an effective existing record.

## Review rules

Review affected downstream concerns whenever an upstream fact changes. For example, a changed requirement triggers review of linked features, verification, risks, roadmap, release scope, and documentation. A changed test triggers review of every claim that relied on its evidence.

Feedback also travels upstream. A production incident, support pattern, accessibility barrier, security finding, or user-research result may invalidate product assumptions, design decisions, requirements, risk ratings, or verification coverage.
