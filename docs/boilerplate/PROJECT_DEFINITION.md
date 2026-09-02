# Project definition

## Identity

| Field | Value |
| --- | --- |
| Project | `{{PROJECT_NAME}}` |
| Purpose | `{{ONE_SENTENCE_PURPOSE}}` |
| Accountable owner | `{{NAME_OR_TEAM}}` |
| Technical owner | `{{NAME_OR_TEAM}}` |
| Product/service owner | `{{NAME_OR_TEAM}}` |
| Experience/design owner | `{{NAME_OR_TEAM_OR_NOT_APPLICABLE}}` |
| Quality/verification owner | `{{NAME_OR_TEAM}}` |
| Security/data owner | `{{NAME_OR_TEAM_OR_NOT_APPLICABLE}}` |
| Operations/release owner | `{{NAME_OR_TEAM_OR_NOT_APPLICABLE}}` |
| Repository model | `{{STANDALONE_OR_MULTI_REPOSITORY}}` |
| Lifecycle stage | `{{DISCOVERY_DEVELOPMENT_LIVE_MAINTENANCE_RETIREMENT}}` |
| Criticality | `{{LOW_MODERATE_HIGH_CRITICAL}}` |
| Data classification | `{{PUBLIC_INTERNAL_CONFIDENTIAL_RESTRICTED}}` |

## Problem and intended outcomes

Problem: `{{PROBLEM_BEING_SOLVED}}`

Intended users: `{{USERS_OR_SYSTEM_CONSUMERS}}`

Required outcomes:

- `{{MEASURABLE_OUTCOME}}`

Non-goals:

- `{{EXPLICITLY_EXCLUDED_OUTCOME}}`

## Scope

In scope:

- `{{CAPABILITY_OR_BOUNDARY}}`

Out of scope:

- `{{CAPABILITY_OR_BOUNDARY}}`

## Success measures

| Measure | Baseline | Target | Guardrail | Evidence source | Owner |
| --- | ---: | ---: | ---: | --- | --- |
| `{{MEASURE}}` | `{{VALUE}}` | `{{VALUE}}` | `{{VALUE}}` | `{{SOURCE}}` | `{{OWNER}}` |

## Constraints and obligations

| Type | Constraint or obligation | Owner | Verification |
| --- | --- | --- | --- |
| Architecture | `{{CONSTRAINT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Security/privacy | `{{CONSTRAINT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Accessibility | `{{CONSTRAINT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Legal/contractual | `{{CONSTRAINT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Performance/capacity | `{{CONSTRAINT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Technology cost/value | `{{CONSTRAINT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Sustainability/resource lifecycle | `{{CONSTRAINT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Compatibility | `{{CONSTRAINT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |

## Environments

| Environment | Purpose | Data allowed | Deployment authority | External effects | Owner |
| --- | --- | --- | --- | --- | --- |
| `{{ENVIRONMENT}}` | `{{PURPOSE}}` | `{{DATA_CLASS}}` | `{{AUTHORITY}}` | `{{EFFECTS}}` | `{{OWNER}}` |

## Project document map

| Document | Owner | Review trigger |
| --- | --- | --- |
| AI coding-readiness assessment | `{{OWNER}}` | AI tool, authority, data, or architecture change |
| Authoritative feature inventory | `{{OWNER}}` | Feature status or release scope change |
| Verification plan and evidence | `{{OWNER}}` | Requirement, risk, test, or environment change |
| Current release-readiness record | `{{OWNER}}` | Every release candidate |
| Risk and accepted-risk register | `{{OWNER}}` | New risk, control failure, or review date |

## Current unknowns

| Unknown | Decision/evidence needed | Owner | Due | Blocks |
| --- | --- | --- | --- | --- |
| `{{UNKNOWN}}` | `{{NEEDED}}` | `{{OWNER}}` | `{{DATE}}` | `{{FEATURE_RELEASE_OR_NONE}}` |
