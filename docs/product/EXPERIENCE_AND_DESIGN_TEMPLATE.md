# Experience and design specification: {{PRODUCT_OR_FEATURE}}

## Document control

| Field | Value |
| --- | --- |
| Status | `{{DRAFT_REVIEW_APPROVED_SUPERSEDED}}` |
| Accountable design owner | `{{OWNER}}` |
| Product and technical owners | `{{OWNERS}}` |
| Version/date | `{{VERSION_AND_DATE}}` |
| Related requirements/features | `{{LINKS_OR_IDENTIFIERS}}` |
| Research/evidence sources | `{{LINKS_OR_LOCATIONS}}` |
| Approved by | `{{APPROVERS_OR_PENDING}}` |
| Review trigger | `{{DATE_OR_EVENT}}` |

## Outcome and design problem

User or operational outcome: `{{OBSERVABLE_OUTCOME}}`.

Design problem and evidence: `{{PROBLEM_EVIDENCE_AND_LIMITATIONS}}`.

In scope: `{{JOURNEYS_SURFACES_CONTENT_AND_STATES}}`.

Out of scope: `{{EXCLUSIONS}}`.

## People and use contexts

| Person/system | Goal | Context | Need/barrier | Risk if unmet | Evidence |
| --- | --- | --- | --- | --- | --- |
| `{{USER_OR_SYSTEM}}` | `{{GOAL}}` | `{{CONTEXT}}` | `{{NEED}}` | `{{IMPACT}}` | `{{SOURCE}}` |

Include disabled people, low-confidence or infrequent users, administrators, operators, support teams, integrators, and affected non-users where applicable.

## Research evidence and assumptions

| Finding or assumption | `OBSERVED`, `RESEARCHED`, `CONFIRMED`, `INFERRED`, or `UNKNOWN` | Source/date | Design consequence | Validation needed |
| --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{LABEL}}` | `{{SOURCE}}` | `{{CONSEQUENCE}}` | `{{VALIDATION}}` |

Do not present stakeholder preference, analytics, AI-generated personas, or a prototype as direct user evidence.

## Journey and service flow

| Step | User goal/action | System/service response | Information/content | Entry/precondition | Success state | Alternate/failure/recovery state |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | `{{ACTION}}` | `{{RESPONSE}}` | `{{CONTENT}}` | `{{PRECONDITION}}` | `{{SUCCESS}}` | `{{ALTERNATE_FAILURE_RECOVERY}}` |

Identify offline, delayed, empty, loading, partial, permission-denied, validation, timeout, conflict, cancellation, undo, destructive, and support states where applicable.

## Interaction and behaviour specification

| Element/capability | Trigger/input | Required behaviour | State changes | Feedback | Keyboard/input behaviour | Acceptance criteria |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{TRIGGER}}` | `{{BEHAVIOUR}}` | `{{STATES}}` | `{{FEEDBACK}}` | `{{INPUT}}` | `{{CRITERIA}}` |

## Content and communication

| Context | Required content | User question answered | Source/owner | Error or recovery content | Localisation/accessibility notes |
| --- | --- | --- | --- | --- | --- |
| `{{CONTEXT}}` | `{{CONTENT_OR_RULE}}` | `{{QUESTION}}` | `{{SOURCE}}` | `{{CONTENT}}` | `{{NOTES}}` |

Content must expose commitments, consequences, limitations, errors, required actions, and recovery in plain language.

## Visual and responsive behaviour

| Surface/state | Reference | Layout/adaptation rules | Design-system components/tokens | Asset source/licence | Unsupported or unresolved detail |
| --- | --- | --- | --- | --- | --- |
| `{{SURFACE}}` | `{{DESIGN_LINK_OR_DESCRIPTION}}` | `{{RULES}}` | `{{COMPONENTS}}` | `{{SOURCE}}` | `{{GAP}}` |

Design files and screenshots show intent at a point in time. Record responsive, zoom, text expansion, theme, input, platform, and content-variation behaviour that static views do not establish.

## Accessibility and inclusive design

| Requirement/barrier | Design response | Acceptance criteria | Evaluation method | Evidence | Owner |
| --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{RESPONSE}}` | `{{CRITERIA}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

Link the [accessibility and inclusive-design addendum](ACCESSIBILITY_AND_INCLUSIVE_DESIGN_ADDENDUM_TEMPLATE.md) when the scope requires detailed standards, technology support, or evaluation evidence.

## Security, privacy, consent, and safety

| Decision or risk | User-facing requirement | Technical/control dependency | Failure consequence | Verification | Owner |
| --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{IMPACT}}` | `{{METHOD}}` | `{{OWNER}}` |

Cover identity, permissions, data collection, consent, disclosure, retention, destructive actions, confirmation, abuse, and recovery where applicable.

## Instrumentation and feedback

| Question/measure | Event or feedback source | Data minimisation | Expected signal/guardrail | Owner | Review trigger |
| --- | --- | --- | --- | --- | --- |
| `{{QUESTION}}` | `{{SOURCE}}` | `{{CONTROL}}` | `{{SIGNAL}}` | `{{OWNER}}` | `{{TRIGGER}}` |

Measurement must not silently introduce new personal-data, consent, performance, accessibility, or behavioural risks.

## Design decisions and unresolved gaps

| ID | Decision/gap | Alternatives | Rationale/evidence | Impact | Owner | Due/review trigger | Release effect |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{ITEM}}` | `{{OPTIONS}}` | `{{RATIONALE}}` | `{{IMPACT}}` | `{{OWNER}}` | `{{TRIGGER}}` | `{{BLOCK_CONDITION_ALLOW}}` |

## Evaluation and implementation hand-off

| Outcome/state/risk | Evaluation method | Participants/environment | Expected result | Evidence | Status | Implementation/test reference |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{REVIEW_USABILITY_TEST_ACCESSIBILITY_EVALUATION_OR_OTHER}}` | `{{CONTEXT}}` | `{{EXPECTED}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{REFERENCE}}` |

The hand-off is complete only when required journeys, states, content, assets, acceptance criteria, dependencies, gaps, and evaluation responsibilities are explicit. Implementation still requires candidate-specific verification.

## Approval

| Role | Name | Decision | Date | Conditions |
| --- | --- | --- | --- | --- |
| Product owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
| Design/research owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
| Technical owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
| Accessibility/security/data reviewer | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
