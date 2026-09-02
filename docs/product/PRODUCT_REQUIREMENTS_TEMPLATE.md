# Product requirements: {{PRODUCT_OR_OUTCOME}}

## Document control

| Field | Value |
| --- | --- |
| Status | `{{DRAFT_REVIEW_APPROVED_SUPERSEDED}}` |
| Owner | `{{OWNER}}` |
| Version/date | `{{VERSION_AND_DATE}}` |
| Related product brief | `{{LINK_OR_LOCATION}}` |
| Related decision/change set | `{{LINK_OR_IDENTIFIER}}` |
| Target release/horizon | `{{RELEASE_OR_HORIZON}}` |

## Outcome and scope

Required outcome: `{{OBSERVABLE_USER_OR_OPERATIONAL_OUTCOME}}`

In scope:

- `{{SCOPE}}`

Out of scope:

- `{{EXCLUSION}}`

## Definitions

| Term | Definition |
| --- | --- |
| `{{TERM}}` | `{{PROJECT_SPECIFIC_MEANING}}` |

## Users, systems, and journeys

| ID | User/system | Starting context | Goal | Required result | Failure/recovery result |
| --- | --- | --- | --- | --- | --- |
| `JRN-001` | `{{USER_OR_SYSTEM}}` | `{{CONTEXT}}` | `{{GOAL}}` | `{{RESULT}}` | `{{RECOVERY}}` |

## Functional requirements

| ID/version | Source, parent, or derivation | Requirement | Priority/owner | Acceptance criteria | Verification method/evidence | Validation method/evidence | Lifecycle/delivery states |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `REQ-F-001/{{VERSION}}` | `{{SOURCE_AND_RELATED_REQUIREMENTS}}` | `{{TESTABLE_SHALL_STATEMENT}}` | `{{PRIORITY_AND_OWNER}}` | `{{OBSERVABLE_CRITERIA}}` | `{{METHOD_AND_EVIDENCE}}` | `{{METHOD_AND_EVIDENCE}}` | `{{APPROVAL_IMPLEMENTATION_VERIFICATION_VALIDATION_STATES}}` |

## Quality and constraint requirements

| ID/version | Source/derivation | Area | Testable requirement | Priority/owner | Verification/evidence | Validation/evidence | States |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `REQ-Q-001/{{VERSION}}` | `{{SOURCE_AND_RELATED_REQUIREMENTS}}` | Accessibility | `{{REQUIREMENT}}` | `{{PRIORITY_AND_OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATES}}` |
| `REQ-Q-002/{{VERSION}}` | `{{SOURCE_AND_RELATED_REQUIREMENTS}}` | Security/privacy | `{{REQUIREMENT}}` | `{{PRIORITY_AND_OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATES}}` |
| `REQ-Q-003/{{VERSION}}` | `{{SOURCE_AND_RELATED_REQUIREMENTS}}` | Reliability/recovery | `{{REQUIREMENT}}` | `{{PRIORITY_AND_OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATES}}` |
| `REQ-Q-004/{{VERSION}}` | `{{SOURCE_AND_RELATED_REQUIREMENTS}}` | Performance/capacity/resource efficiency | `{{REQUIREMENT}}` | `{{PRIORITY_AND_OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATES}}` |
| `REQ-Q-005/{{VERSION}}` | `{{SOURCE_AND_RELATED_REQUIREMENTS}}` | Technology cost/delivered value | `{{REQUIREMENT}}` | `{{PRIORITY_AND_OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATES}}` |
| `REQ-Q-006/{{VERSION}}` | `{{SOURCE_AND_RELATED_REQUIREMENTS}}` | Sustainability/resource lifecycle | `{{REQUIREMENT}}` | `{{PRIORITY_AND_OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATES}}` |
| `REQ-Q-007/{{VERSION}}` | `{{SOURCE_AND_RELATED_REQUIREMENTS}}` | Compatibility/migration | `{{REQUIREMENT}}` | `{{PRIORITY_AND_OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATES}}` |
| `REQ-Q-008/{{VERSION}}` | `{{SOURCE_AND_RELATED_REQUIREMENTS}}` | Operations/support | `{{REQUIREMENT}}` | `{{PRIORITY_AND_OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATES}}` |
| `REQ-Q-009/{{VERSION}}` | `{{SOURCE_AND_RELATED_REQUIREMENTS}}` | Legal/licensing | `{{REQUIREMENT}}` | `{{PRIORITY_AND_OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATES}}` |

For every material requirement, review whether it is necessary, singular,
unambiguous, feasible, implementation-neutral where appropriate, verifiable,
validatable, and traceable. Record unresolved quality defects rather than
interpreting them silently during implementation.

## Data and artificial intelligence boundaries

| Input/output/data class | Source | Allowed use | Validation | Storage/retention | Prohibited use | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{SOURCE}}` | `{{USE}}` | `{{CONTROL}}` | `{{POLICY}}` | `{{PROHIBITION}}` | `{{OWNER}}` |

Generated output is untrusted until it passes the project-defined deterministic validation and required human review.

## Dependencies and cross-component contracts

| Producer/dependency | Consumer | Contract/version | Supported combinations | Failure behaviour | Contract evidence | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{COMPONENT_OR_SERVICE}}` | `{{CONSUMER}}` | `{{CONTRACT}}` | `{{COMBINATIONS}}` | `{{BEHAVIOUR}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

## Feature, verification, and validation traceability

| Requirement/version | Experience/design state | Feature/capability | Risk | Issue/change | Implementation artefacts | Verification IDs | Validation IDs | Release |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `{{REQ_ID_AND_VERSION}}` | `{{REFERENCE_OR_NOT_APPLICABLE}}` | `{{FEATURE_ID}}` | `{{RISK_IDS}}` | `{{LINK_OR_ID}}` | `{{COMMITS_OR_ARTEFACTS}}` | `{{VERIFICATION_IDS}}` | `{{VALIDATION_IDS}}` | `{{RELEASE_OR_BACKLOG}}` |

## Gaps, changes, and decisions

| Item | Required versus current | Impact | Owner | Resolution/decision | Due | Release effect |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{GAP}}` | `{{IMPACT}}` | `{{OWNER}}` | `{{ACTION}}` | `{{DATE}}` | `{{BLOCK_CONDITION_ALLOW}}` |

## Requirement change and supersession

| Date/version | Requirement | Change and reason | Supersedes/superseded by | Affected traces/evidence | Approver |
| --- | --- | --- | --- | --- | --- |
| `{{DATE_AND_VERSION}}` | `{{REQUIREMENT_ID}}` | `{{CHANGE_AND_RATIONALE}}` | `{{REQUIREMENT_IDS_OR_NONE}}` | `{{IMPACT}}` | `{{OWNER}}` |

Preserve stable identifiers and prior evidence. Verification shows compliance
with the stated specification; validation shows that the resulting outcome
meets the intended need in its recorded context. Neither state implies release.

## Approval

Requirements are approved only when sources, derivation, owners, acceptance
criteria, verification and validation methods, dependencies, and unresolved
gaps are explicit.

| Role | Name | Decision | Date | Conditions |
| --- | --- | --- | --- | --- |
| Product owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
| Experience/design owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
| Technical owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
| Specialist owner(s) | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
