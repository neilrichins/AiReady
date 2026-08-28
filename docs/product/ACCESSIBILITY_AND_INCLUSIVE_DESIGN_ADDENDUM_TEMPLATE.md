# Accessibility and inclusive-design addendum: {{PRODUCT_NAME}}

## Document control and applicability

| Field | Value |
| --- | --- |
| Status | `{{DRAFT_REVIEW_APPROVED_SUPERSEDED}}` |
| Accountable owner | `{{OWNER}}` |
| Specialist reviewer | `{{OWNER_OR_PENDING}}` |
| Version/date | `{{VERSION_AND_DATE}}` |
| Applies to | `{{PRODUCT_SURFACES_CONTENT_AND_JOURNEYS}}` |
| Exclusions | `{{EXCLUSION_AND_JUSTIFICATION_OR_NONE}}` |
| Related requirements | `{{LINK_OR_LOCATION}}` |
| Review trigger | `{{DATE_OR_EVENT}}` |

## Target and claims boundary

Applicable accessibility standard, policy, contract, or target: `{{TARGET_AND_VERSION}}`.

Required conformance level or outcome: `{{LEVEL_OR_OUTCOME}}`.

Claim owner and approval authority: `{{OWNER}}`.

An accessibility target is a requirement, not evidence of conformance. A conformance claim must identify the tested scope, standard and version, methods, environments, dates, limitations, unresolved defects, and accountable approval.

Use the optional [website, mobile application, WCAG, and jurisdiction
checklists](../accessibility/README.md) when they fit the product. They add
surface-specific verification but do not replace this requirements record,
specialist review, disabled-user evaluation, or applicable law.

## People, contexts, and barriers

| Person/use context | Goal | Potential barrier | Required support | Evidence source |
| --- | --- | --- | --- | --- |
| `{{USER_OR_CONTEXT}}` | `{{GOAL}}` | `{{BARRIER}}` | `{{SUPPORT}}` | `{{RESEARCH_REQUIREMENT_OR_STANDARD}}` |

Consider permanent, temporary, and situational disabilities and differences in vision, hearing, mobility, speech, cognition, literacy, language, attention, and technology access where relevant.

## Interaction and content requirements

| Area | Requirement | Acceptance criteria | Verification method | Evidence location | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Structure and semantics | `{{REQUIREMENT}}` | `{{CRITERIA}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{STATUS}}` |
| Keyboard and non-pointer input | `{{REQUIREMENT}}` | `{{CRITERIA}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{STATUS}}` |
| Focus order and visibility | `{{REQUIREMENT}}` | `{{CRITERIA}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{STATUS}}` |
| Pointer targets and gestures | `{{REQUIREMENT}}` | `{{CRITERIA}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{STATUS}}` |
| Colour, contrast, and non-colour cues | `{{REQUIREMENT}}` | `{{CRITERIA}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{STATUS}}` |
| Typography, zoom, and reflow | `{{REQUIREMENT}}` | `{{CRITERIA}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{STATUS}}` |
| Motion, animation, and timing | `{{REQUIREMENT}}` | `{{CRITERIA}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{STATUS}}` |
| Images, diagrams, and media | `{{REQUIREMENT}}` | `{{CRITERIA}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{STATUS}}` |
| Forms, authentication, and errors | `{{REQUIREMENT}}` | `{{CRITERIA}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{STATUS}}` |
| Status, notifications, and dynamic content | `{{REQUIREMENT}}` | `{{CRITERIA}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{STATUS}}` |
| Help, support, and recovery | `{{REQUIREMENT}}` | `{{CRITERIA}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{STATUS}}` |

## Generated and user-provided content

| Content source | Accessibility risk | Required validation or author support | Failure handling | Owner |
| --- | --- | --- | --- | --- |
| `{{GENERATED_IMPORTED_OR_USER_CONTENT}}` | `{{RISK}}` | `{{CONTROL}}` | `{{HANDLING}}` | `{{OWNER}}` |

Artificial intelligence output, automated alternative text, captions, summaries, remediation, or code must be treated as untrusted until validated by the defined method. Automation must not be represented as complete accessibility assurance.

## Supported technology matrix

| Platform/device | Browser/client | Assistive technology/input | Version | Journey or surface | Support status | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| `{{PLATFORM}}` | `{{CLIENT}}` | `{{TECHNOLOGY_OR_INPUT}}` | `{{VERSION}}` | `{{SCOPE}}` | `{{SUPPORTED_LIMITED_UNSUPPORTED}}` | `{{EVIDENCE}}` |

Define the selection rationale, minimum supported versions, and retest trigger. Do not imply support for untested combinations.

## Evaluation plan

| Evaluation type | Scope | Method/tool | Evaluator | Environment | Frequency/trigger | Evidence retained |
| --- | --- | --- | --- | --- | --- | --- |
| Automated | `{{SCOPE}}` | `{{METHOD}}` | `{{OWNER}}` | `{{ENVIRONMENT}}` | `{{TRIGGER}}` | `{{LOCATION}}` |
| Manual expert | `{{SCOPE}}` | `{{METHOD}}` | `{{OWNER}}` | `{{ENVIRONMENT}}` | `{{TRIGGER}}` | `{{LOCATION}}` |
| Assistive-technology journey | `{{SCOPE}}` | `{{METHOD}}` | `{{OWNER}}` | `{{ENVIRONMENT}}` | `{{TRIGGER}}` | `{{LOCATION}}` |
| Disabled-user evaluation | `{{SCOPE_OR_JUSTIFIED_NOT_APPLICABLE}}` | `{{METHOD}}` | `{{OWNER}}` | `{{ENVIRONMENT}}` | `{{TRIGGER}}` | `{{LOCATION}}` |

Automated checks cover only the rules they can evaluate. Record manual checks and real task outcomes separately.

## Defects, exceptions, and accepted risks

| ID | Barrier/exception | Affected people/journey | Severity | Workaround | Owner | Resolution/date | Release effect |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{BARRIER}}` | `{{IMPACT}}` | `{{SEVERITY}}` | `{{WORKAROUND_OR_NONE}}` | `{{OWNER}}` | `{{ACTION_AND_DATE}}` | `{{BLOCK_CONDITION_ALLOW}}` |

Exceptions require evidence, named approval, an expiry date, and a tracked resolution. A workaround does not remove the underlying barrier.

## Release evidence and approval

For each release, identify the exact candidate, tested scope, environments, methods, results, defects, limitations, and post-release checks in the release evidence record.

| Role | Name | Decision | Date | Conditions |
| --- | --- | --- | --- | --- |
| Product owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
| Accessibility owner/reviewer | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
| Engineering/content owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
