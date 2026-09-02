# Architecture

## Document control

| Field | Value |
| --- | --- |
| System/scope | `{{SYSTEM_AND_BOUNDARY}}` |
| Accountable technical owner | `{{OWNER}}` |
| Status | `{{DRAFT_REVIEW_APPROVED_SUPERSEDED}}` |
| Assessed version/date | `{{COMMITS_VERSIONS_AND_DATE}}` |
| Related product/requirements | `{{LINKS_OR_LOCATIONS}}` |
| Review trigger | `{{DATE_OR_EVENT}}` |

## Purpose, context, and boundaries

Purpose and users/system consumers: `{{PURPOSE_AND_USERS}}`.

In scope: `{{BOUNDARY}}`.

Out of scope: `{{EXCLUSIONS_AND_EXTERNAL_RESPONSIBILITIES}}`.

Constraints and quality priorities: `{{SECURITY_PRIVACY_ACCESSIBILITY_RELIABILITY_PERFORMANCE_COST_VALUE_SUSTAINABILITY_COMPATIBILITY_AND_OTHER}}`.

### Stakeholders, concerns, and required views

| Stakeholder or affected group | Concern/decision | Required outcome | Architecture view/evidence | Owner | Gap/status |
| --- | --- | --- | --- | --- | --- |
| `{{STAKEHOLDER}}` | `{{CONCERN}}` | `{{OUTCOME}}` | `{{VIEW_OR_EVIDENCE}}` | `{{OWNER}}` | `{{STATUS}}` |

Include users, affected non-users, product owners, operators, support,
security/privacy/data, finance/procurement, sustainability, suppliers, and
dependent-system owners where applicable. A single diagram need not serve every
concern; each view must state its scope, currency, and limitations.

### Current baseline, target, and transition

| Architecture dimension | Current baseline/evidence | Approved target/outcome | Gap/risk | Transition/dependency | Owner |
| --- | --- | --- | --- | --- | --- |
| Business capability/service | `{{BASELINE}}` | `{{TARGET}}` | `{{GAP}}` | `{{TRANSITION}}` | `{{OWNER}}` |
| Information/data | `{{BASELINE}}` | `{{TARGET}}` | `{{GAP}}` | `{{TRANSITION}}` | `{{OWNER}}` |
| Application/component/repository | `{{BASELINE}}` | `{{TARGET}}` | `{{GAP}}` | `{{TRANSITION}}` | `{{OWNER}}` |
| Technology/infrastructure/operations | `{{BASELINE}}` | `{{TARGET}}` | `{{GAP}}` | `{{TRANSITION}}` | `{{OWNER}}` |

Keep observed baseline, approved target, implemented state, and effective state
distinct. Record compatible intermediate states, sequencing, reversibility,
partial-failure response, and the point of no return.

## Context and deployment views

Authoritative diagrams or narratives: `{{LINKS_OR_EMBEDDED_DIAGRAMS}}`.

Document people, external systems, deployable units, networks, environments, regions, data stores, queues, scheduled work, administration paths, and operational control points as applicable.

| Runtime/deployable unit | Responsibility | Repository/source | Environment/location | Owner | Scaling/availability model | Configuration source |
| --- | --- | --- | --- | --- | --- | --- |
| `{{UNIT}}` | `{{RESPONSIBILITY}}` | `{{SOURCE}}` | `{{LOCATION}}` | `{{OWNER}}` | `{{MODEL}}` | `{{CONFIGURATION}}` |

## Components and interfaces

| Component | Responsibility | Owner | Trust level | Interface/contract | Dependencies | Failure behaviour |
| --- | --- | --- | --- | --- | --- | --- |
| `{{NAME}}` | `{{RESPONSIBILITY}}` | `{{OWNER}}` | `{{TRUSTED_UNTRUSTED_MIXED}}` | `{{CONTRACT}}` | `{{DEPENDENCIES}}` | `{{BEHAVIOUR}}` |

For interconnected repositories, link the [repository ecosystem](REPOSITORY_ECOSYSTEM.md) and identify supported version combinations and authoritative shared interfaces.

### Stable responsibility boundaries

Use this section for responsibilities that must remain stable through routine
changes. A boundary change requires the named decision and migration process;
it must not emerge accidentally from implementation.

| Component/repository | Owns | Must not own | Allowed dependencies | Boundary enforcement | Change authority |
| --- | --- | --- | --- | --- | --- |
| `{{NAME}}` | `{{RESPONSIBILITIES}}` | `{{EXCLUSIONS}}` | `{{DEPENDENCIES}}` | `{{CONTROL}}` | `{{OWNER_OR_DECISION_PROCESS}}` |

### Context locality and change amplification

Use current project evidence to identify where the context needed for a safe
change is fragmented, ambiguous, duplicated, or spread across high-impact
relationships. File counts, directory depth, dependency fan-in/fan-out, graph
centrality, and context size may be useful signals; none is a universal defect,
repository-layout requirement, or sufficient reason to refactor.

| Component/domain/change surface | Minimum authoritative context and entry point | Cross-cutting sources/dependencies | Known ambiguity, duplication, or missing context | Blast-radius or coupling evidence | Safe change boundary | Additional review and verification | Owner/stale trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{SURFACE}}` | `{{SOURCES_AND_READING_ORDER}}` | `{{RELATIONSHIPS}}` | `{{FINDING_OR_NONE}}` | `{{EVIDENCE_OR_UNKNOWN}}` | `{{BOUNDARY}}` | `{{CONTROLS}}` | `{{OWNER_AND_TRIGGER}}` |

The minimum context must be sufficient to preserve applicable intent,
invariants, contracts, data and trust boundaries, failure behaviour, and
verification requirements. It is not a target to minimise documentation or
hide system-level effects. A high-impact component may be intentionally shared;
record its enhanced change controls rather than assuming it must be split.

### Compatibility and discovery contracts

| Contract/interface | Authoritative definition | Current version | Supported range/combinations | Discovery or negotiation | Failure behaviour | Compatibility verification | Migration rule |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{CONTRACT}}` | `{{SOURCE}}` | `{{VERSION}}` | `{{COMPATIBILITY}}` | `{{MECHANISM}}` | `{{BEHAVIOUR}}` | `{{CHECK}}` | `{{RULE}}` |

Document unavailable, incompatible, duplicate, partially upgraded, and unknown
component states where applicable. A declared version range is not evidence of
compatibility without the required contract or integration result.

### Canonical concepts, operations, and failure behaviour

| Concept, operation, interface, or failure | Authoritative term and intent source | Canonical implementation or contract | Intentional variants and rationale | Input/boundary validation | Error, fallback, and diagnostic behaviour | Consumers/migration | Owner/change authority |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{TERM_AND_SOURCE}}` | `{{SOURCE_OR_CONTRACT}}` | `{{VARIANTS_OR_NONE}}` | `{{VALIDATION}}` | `{{BEHAVIOUR}}` | `{{IMPACT_AND_PLAN}}` | `{{OWNER_AND_AUTHORITY}}` |

Do not treat similar names or implementations as proof of accidental
duplication. Confirm product intent, data shape, trust boundary, compatibility,
and failure semantics before consolidating them. Where multiple approaches are
intentional, document how a contributor selects the correct one.

Boundary validation, failure states, fallback rules, and material errors must
be explicit and observable enough for the relevant verification and operations.
Silent error suppression, undocumented defaults, or defensive fallback that
hides an invalid upstream state requires an owned decision and evidence; a
specific type system, exception model, or validation library is not prescribed.

## Data flow and lifecycle

Describe entry points, validation, processing, storage, transfer, output, authentication, authorisation, retention, deletion, backup, and recovery. Identify every point where data crosses a trust, organisation, region, or classification boundary.

| Data/flow | Source | Classification | Validation and authorisation | Storage/retention | Destination/output | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{SOURCE}}` | `{{CLASSIFICATION}}` | `{{CONTROLS}}` | `{{POLICY}}` | `{{DESTINATION}}` | `{{OWNER}}` |

## Source ownership

| Information or artefact | Authoritative source | Writers | Generated/copied outputs | Regeneration | Recovery source | Direct-edit rule |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{SOURCE}}` | `{{WRITERS}}` | `{{COPIES}}` | `{{PROCESS}}` | `{{RECOVERY}}` | `{{RULE}}` |

## Invariants and compatibility promises

| ID | Invariant/promise | Why required | Enforcement | Verification | Change authority |
| --- | --- | --- | --- | --- | --- |
| `ARCH-001` | `{{INVARIANT}}` | `{{RATIONALE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

## Security, privacy, and abuse boundaries

| Threat/abuse case | Asset/people affected | Boundary/control | Detection | Response/recovery | Residual risk owner |
| --- | --- | --- | --- | --- | --- |
| `{{THREAT}}` | `{{IMPACT}}` | `{{CONTROL}}` | `{{SIGNAL}}` | `{{RESPONSE}}` | `{{OWNER}}` |

Link the authoritative threat model, data-protection assessment, security decisions, and incident process where applicable.

## Failure modes and operability

| Failure/degradation | User/system effect | Detection | Automatic behaviour | Operator action | Recovery target | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| `{{FAILURE}}` | `{{EFFECT}}` | `{{SIGNAL}}` | `{{BEHAVIOUR}}` | `{{ACTION}}` | `{{TARGET}}` | `{{EVIDENCE}}` |

## Artificial intelligence boundaries

- Context available to AI: `{{BOUNDARY}}`.
- Prohibited context/data: `{{BOUNDARY}}`.
- Output accepted from AI: `{{BOUNDARY}}`.
- Deterministic validation: `{{CONTROLS}}`.
- Executable or production boundary: `{{CONTROLS_AND_HUMAN_APPROVAL}}`.
- Resource, usage, duration, and spending boundary: `{{LIMITS_ALERTS_STOP_EXPIRY_AND_CLEANUP}}`.
- Model/tool failure and shutdown path: `{{FAILURE_RESPONSE}}`.

## Cross-quality trade-offs

| Decision/change | Intended benefit | Adverse or transferred effect | Evidence/assumption | Mitigation/acceptance | Owner/review trigger | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{BENEFIT}}` | `{{RELIABILITY_SECURITY_PERFORMANCE_COST_VALUE_SUSTAINABILITY_ACCESSIBILITY_OPERATIONS_OR_OTHER}}` | `{{BASIS}}` | `{{ACTION_OR_DECISION}}` | `{{OWNER_AND_TRIGGER}}` | `{{CHECKS}}` |

Do not use improvement in one quality area to conceal degradation in another.
Link material findings and improvement work to the optional [architecture
review](ARCHITECTURE_REVIEW.md) and material cost/value effects to the optional
[technology cost and value record](TECHNOLOGY_COST_AND_VALUE.md) when selected.

## Significant decisions and technical debt

| ID | Decision/debt | Status | Impact | Owner | Due/review trigger | Record |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{ITEM}}` | `{{STATUS}}` | `{{IMPACT}}` | `{{OWNER}}` | `{{TRIGGER}}` | `{{LINK}}` |

Use the [decision-record boilerplate](DECISION_RECORD.md) only when an effective format does not already exist.

## Verification and currency

| Architecture claim | Verification method | Evidence | Last verified | Owner | Stale when |
| --- | --- | --- | --- | --- | --- |
| `{{CLAIM}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{DATE}}` | `{{OWNER}}` | `{{TRIGGER}}` |

Diagrams and narratives are models, not proof of effective runtime state. Compare material architecture claims with current source, configuration, deployed versions, and observed flows.
