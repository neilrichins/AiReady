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

| ID | Requirement | Priority | Owner | Acceptance criteria | Verification method | Evidence location | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `REQ-F-001` | `{{TESTABLE_SHALL_STATEMENT}}` | `{{MUST_SHOULD_COULD}}` | `{{OWNER}}` | `{{OBSERVABLE_CRITERIA}}` | `{{TEST_INSPECTION_ANALYSIS_OR_DEMONSTRATION}}` | `{{LOCATION}}` | `{{STATUS}}` |

## Quality and constraint requirements

| ID | Area | Testable requirement | Priority | Owner | Verification/evidence | Status |
| --- | --- | --- | --- | --- | --- | --- |
| `REQ-Q-001` | Accessibility | `{{REQUIREMENT}}` | `{{PRIORITY}}` | `{{OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATUS}}` |
| `REQ-Q-002` | Security/privacy | `{{REQUIREMENT}}` | `{{PRIORITY}}` | `{{OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATUS}}` |
| `REQ-Q-003` | Reliability/recovery | `{{REQUIREMENT}}` | `{{PRIORITY}}` | `{{OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATUS}}` |
| `REQ-Q-004` | Performance/capacity/resource efficiency | `{{REQUIREMENT}}` | `{{PRIORITY}}` | `{{OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATUS}}` |
| `REQ-Q-005` | Technology cost/delivered value | `{{REQUIREMENT}}` | `{{PRIORITY}}` | `{{OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATUS}}` |
| `REQ-Q-006` | Sustainability/resource lifecycle | `{{REQUIREMENT}}` | `{{PRIORITY}}` | `{{OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATUS}}` |
| `REQ-Q-007` | Compatibility/migration | `{{REQUIREMENT}}` | `{{PRIORITY}}` | `{{OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATUS}}` |
| `REQ-Q-008` | Operations/support | `{{REQUIREMENT}}` | `{{PRIORITY}}` | `{{OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATUS}}` |
| `REQ-Q-009` | Legal/licensing | `{{REQUIREMENT}}` | `{{PRIORITY}}` | `{{OWNER}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATUS}}` |

## Data and artificial intelligence boundaries

| Input/output/data class | Source | Allowed use | Validation | Storage/retention | Prohibited use | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{SOURCE}}` | `{{USE}}` | `{{CONTROL}}` | `{{POLICY}}` | `{{PROHIBITION}}` | `{{OWNER}}` |

Generated output is untrusted until it passes the project-defined deterministic validation and required human review.

## Dependencies and cross-component contracts

| Producer/dependency | Consumer | Contract/version | Supported combinations | Failure behaviour | Contract evidence | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{COMPONENT_OR_SERVICE}}` | `{{CONSUMER}}` | `{{CONTRACT}}` | `{{COMBINATIONS}}` | `{{BEHAVIOUR}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

## Feature and verification traceability

| Requirement | Experience/design state | Feature/capability | Issue/change | Implementation artefacts | Verification IDs | Release |
| --- | --- | --- | --- | --- | --- | --- |
| `{{REQ_ID}}` | `{{REFERENCE_OR_NOT_APPLICABLE}}` | `{{FEATURE_ID}}` | `{{LINK_OR_ID}}` | `{{COMMITS_OR_ARTEFACTS}}` | `{{VERIFICATION_IDS}}` | `{{RELEASE_OR_BACKLOG}}` |

## Gaps, changes, and decisions

| Item | Required versus current | Impact | Owner | Resolution/decision | Due | Release effect |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{GAP}}` | `{{IMPACT}}` | `{{OWNER}}` | `{{ACTION}}` | `{{DATE}}` | `{{BLOCK_CONDITION_ALLOW}}` |

## Approval

Requirements are approved only when owners, acceptance criteria, verification methods, dependencies, and unresolved gaps are explicit.

| Role | Name | Decision | Date | Conditions |
| --- | --- | --- | --- | --- |
| Product owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
| Experience/design owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
| Technical owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
| Specialist owner(s) | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
