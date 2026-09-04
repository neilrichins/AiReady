# Document lifecycle

## Principle

AiReady defines information concerns, not mandatory files or directories. Each project chooses where those concerns live and records that choice in the adoption map.

## Information flow

| Information | Inputs | Downstream use | Update trigger |
| --- | --- | --- | --- |
| Discovery baseline | Source, history, configuration, runtime evidence, owner input | Adoption, architecture, remediation, AI authority | Newly discovered evidence, system-boundary change, or baseline remediation |
| Product intent | User research, strategy, obligations, evidence | Requirements, messages, roadmap, quality constraints | Problem, audience, evidence, product claim, or strategy change |
| Experience/design intent | Product intent, research, accessibility needs, constraints | Requirements, implementation, verification, content, support | Journey, state, content, design-system, accessibility, or evaluation change |
| Project definition | User need, ownership, constraints, obligations | Requirements, architecture, roadmap, AI authority | Scope, owner, environment, or obligation change |
| Requirements | Project outcomes, policy, contracts, risks, parent and source requirements | Features, acceptance criteria, verification, validation, and release scope | Requirement, derivation, source, acceptance, validation, or supersession change |
| Feature state | Requirements, implementation, decisions | Status, traceability, release scope | Implementation, verification, or release-state change |
| Delivery checkpoint | Bounded outcome, exact change set, decisions, verification, and limitations | Phase or milestone handoff, planning, later release qualification | Material change to the assessed baseline or checkpoint decision |
| Verification and validation coverage | Versioned requirements, intended needs, features, risks, architecture, and test basis | Release readiness and evidence | Code, requirement, design, configuration, dependency, environment, test basis, user context, or risk change |
| AI coding-readiness assessment | Intended AI use, authority, requirements access, architecture, context, development environment, verification, risk, and current evidence | Permitted AI operating level, blocked requirement scope, remediation, project status, and later comparison | Material requirement source/access, control, evidence, system-boundary, AI-use, authority, tooling, data, or risk change; or next review |
| AI-system evaluation | Intended behaviour, risks, exact AI system, evaluation suite, and operating context | Change, release, monitoring, fallback, and retirement decisions | Material model, provider, prompt, retrieval, tool, policy, user, environment, incident, or drift change |
| Architecture review | Stakeholder concerns, current baseline, target state, transition plan, decisions, quality evidence, and selected external lenses | Architecture decisions, improvement backlog, verification, operations, and release readiness | Material requirement, architecture, dependency, environment, risk, framework-version, or operating-evidence change |
| Technology cost and value | Allocation, budgets, forecasts, usage, unit economics, commitments, resource lifecycle, and outcomes | Product, engineering, finance, operations, sustainability, and release decisions | Material demand, design, provider, price, commitment, capacity, budget, anomaly, or resource-lifecycle change |
| External framework profile/mapping | Applicability decision, exact source/version, current and target outcomes, gaps, and owners | Selected specialist controls, improvement planning, and bounded claims | Scope, obligation, framework version, risk, control, or evidence change |
| Risk state | Threats, defects, unknowns, control evidence | Prioritisation and release decisions | New risk, treatment, control failure, or review date |
| Release readiness | Candidate artefacts, scope, evidence, provenance and consumer-policy results, risks, recovery | Approval and execution | Every candidate, attestation, trust, policy, or gate-result change |
| Release evidence | Approved candidate, supply-chain identity, and actual operation | Audit history, support, future planning | Release, failure, cancellation, rollback, revocation, or correction |
| Operational learning | Effective behaviour, monitoring, support, incidents, user feedback | Product intent, risks, requirements, design, architecture, verification | Material signal, incident, feedback, or retrospective decision |

The [product document examples](../product/README.md) provide boilerplate for approved intent and testable quality boundaries. The [release evidence examples](../releases/README.md) provide immutable records of exact candidates, decisions, execution, and outcomes. A project may map these concerns to existing authoritative systems instead of adopting the example file structure.

## Ownership rules

- Every concern has one authoritative source and owner.
- Other documents link to that source or clearly identify generated snapshots.
- Volatile results are referenced by immutable evidence rather than copied repeatedly.
- Historical AI coding-readiness assessments are preserved with their exact scope, method, evidence, decision, and limitations so later comparisons do not rewrite the baseline.
- Historical release decisions are preserved, including failed and rolled-back candidates.
- A template is removed or merged when it duplicates an effective existing record.

## Status and precedence rules

Classify records using the project's own equivalent of these states:

| State | Meaning | Default AI use |
| --- | --- | --- |
| Authoritative | Approved current source for the stated scope | Use as controlling context |
| Active planning | Current but not approved intent or implementation | Use within its stated decision boundary |
| Evidence | Preserved observation or result for exact identifiers and conditions | Use only for the claims and currency recorded |
| Historical | Retained context that no longer controls current work | Consult only when history is relevant |
| Superseded | Replaced by an identified authoritative source | Do not use as current direction |
| Template | Uncompleted example or boilerplate | Never treat placeholders or checkboxes as project evidence |

Record an authoritative reading order and precedence rule in the project's
existing index, instructions, or governance source. File recency, proximity to
code, detail, or an AI-generated summary must not silently override approved
product intent, current decisions, contracts, or candidate-specific evidence.

When two sources conflict, record the conflict, affected scope, interim safety
boundary, decision owner, and resolution. Stop affected work when choosing a
source could change safety, compatibility, authority, acceptance, or release.

## Review rules

Review affected downstream concerns whenever an upstream fact changes. For example, a changed requirement triggers review of linked features, verification, risks, roadmap, release scope, and documentation. A changed test triggers review of every claim that relied on its evidence.

Feedback also travels upstream. A production incident, support pattern, accessibility barrier, security finding, or user-research result may invalidate product assumptions, design decisions, requirements, risk ratings, or verification coverage.

Repeated review comments, failed changes, incidents, support patterns, and
manual corrections may identify missing guidance or a candidate convention.
Preserve representative evidence and the assessed time window, check current
authoritative decisions and conflicting rules, and require the appropriate
owner to approve, reject, or defer the proposal. Repetition alone does not make
feedback correct or authoritative.

Review material AI-facing context against current source and effective
behaviour, not only on a schedule. Changes to manifests, runtime versions,
commands, repository structure, interfaces, CI, permissions, dependencies, or
delivery boundaries may make instructions stale even when the instruction file
did not change.
