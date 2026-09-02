# AI-assisted task

## Identity

| Field | Value |
| --- | --- |
| Task/change-set identifier | `{{IDENTIFIER}}` |
| Accountable owner | `{{OWNER}}` |
| AI tool/model | `{{APPROVED_TOOL_OR_NONE}}` |
| Repositories/components affected | `{{LIST}}` |
| Required reviewers | `{{OWNERS}}` |
| Active phase/milestone/checkpoint | `{{IDENTIFIER_OR_NOT_APPLICABLE}}` |

## Problem and required outcome

Problem: `{{PROBLEM_WITH_EVIDENCE}}`

Required outcome: `{{OBSERVABLE_USER_OR_OPERATIONAL_OUTCOME}}`

## Acceptance criteria

- [ ] `{{TESTABLE_CRITERION}}`

## Scope and boundaries

- In scope: `{{SCOPE}}`.
- Out of scope: `{{EXCLUSIONS}}`.
- Architecture/source ownership: `{{BOUNDARY}}`.
- Security/privacy/data: `{{BOUNDARY}}`.
- Accessibility/user impact: `{{BOUNDARY}}`.
- Compatibility/migration: `{{BOUNDARY}}`.
- External, destructive, production, communication, or cost-bearing actions: `{{AUTHORITY_OR_PROHIBITION}}`.
- Permitted resource types, environments, quantities, duration, and budget: `{{LIMITS_OR_NONE}}`.
- Usage alerts, stop thresholds, expiry, and cleanup owner: `{{CONTROLS_OR_NONE}}`.
- Stop and escalate when: `{{CONDITIONS}}`.

Permission to analyse, edit, test, or execute does not imply permission to
purchase, provision, scale, retain, or delete a billable resource. State each
authority separately.

## Resource, consumption, and spending controls

Complete this section when the task can consume metered services, create
resources, change capacity, incur charges, or leave temporary assets behind.

| Activity/resource/provider | Permitted environment/account | Quantity/runs/duration ceiling | Budget or usage ceiling | Alert and stop threshold | Expiry/cleanup procedure and owner | Approver/evidence |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{SCOPE}}` | `{{LIMIT}}` | `{{LIMIT_AND_CURRENCY_OR_UNIT}}` | `{{THRESHOLD_AND_RESPONSE}}` | `{{PROCEDURE_AND_OWNER}}` | `{{OWNER_AND_EVIDENCE}}` |

Use current authoritative price, quota, and account information when a monetary
or consumption claim matters. Stop if a required limit, monitor, or cleanup
owner is missing, or if actual consumption is materially different from the
approved estimate. Link the optional [technology cost and value
record](TECHNOLOGY_COST_AND_VALUE.md) when the change has material ongoing cost,
allocation, commitment, value, or resource-efficiency effects.

## Required context

| Source | Why authoritative | Required section/version |
| --- | --- | --- |
| `{{LINK_OR_LOCATION}}` | `{{RATIONALE}}` | `{{SCOPE}}` |

Required reading order: `{{ORDER_OR_LINK_TO_AUTHORITATIVE_INSTRUCTIONS}}`.

Source precedence when records conflict: `{{RULE_OR_LINK}}`.

Governing decision records: `{{IDENTIFIERS_OR_NONE}}`.

## Invariants and compatibility

| Invariant, boundary, or contract | Required unchanged behaviour | Affected component/repository | Verification | Change authority |
| --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{BEHAVIOUR}}` | `{{SCOPE}}` | `{{CHECK}}` | `{{OWNER_OR_DECISION}}` |

## Responsibility review

| Responsibility | Applicability | Required input/decision | Owner/reviewer | Status |
| --- | --- | --- | --- | --- |
| Product/service | `{{YES_NO}}` | `{{INPUT_OR_DECISION}}` | `{{OWNER}}` | `{{STATUS}}` |
| Research/experience/design/accessibility | `{{YES_NO}}` | `{{INPUT_OR_DECISION}}` | `{{OWNER}}` | `{{STATUS}}` |
| Engineering/architecture | `{{YES_NO}}` | `{{INPUT_OR_DECISION}}` | `{{OWNER}}` | `{{STATUS}}` |
| Security/privacy/data | `{{YES_NO}}` | `{{INPUT_OR_DECISION}}` | `{{OWNER}}` | `{{STATUS}}` |
| Quality/verification | `{{YES_NO}}` | `{{INPUT_OR_DECISION}}` | `{{OWNER}}` | `{{STATUS}}` |
| Operations/reliability/support | `{{YES_NO}}` | `{{INPUT_OR_DECISION}}` | `{{OWNER}}` | `{{STATUS}}` |
| Technology cost/value/resource efficiency | `{{YES_NO}}` | `{{INPUT_OR_DECISION}}` | `{{OWNER}}` | `{{STATUS}}` |
| Release/communication | `{{YES_NO}}` | `{{INPUT_OR_DECISION}}` | `{{OWNER}}` | `{{STATUS}}` |

`NOT APPLICABLE` requires a reason and owner. The AI agent cannot supply reserved approval or risk-acceptance decisions.

## Verification and evidence

| Criterion/risk | Method | Environment | Expected result | Evidence | Owner |
| --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{TEST_REVIEW_INSPECTION_ANALYSIS_OR_DEMONSTRATION}}` | `{{ENVIRONMENT}}` | `{{EXPECTED}}` | `{{REQUIRED_EVIDENCE}}` | `{{OWNER}}` |

Verification levels required: `{{SIMULATED_COMPONENT_PACKAGED_INTEGRATION_REPRESENTATIVE_PHYSICAL_SPECIALIST_EFFECTIVE_OR_OTHER}}`.

Evidence at one level does not establish a claim assigned to another level.

## Execution results

| Command/procedure | Working scope | Environment/tool versions | Exit/result | Failures/skips/reruns | Evidence/limitations |
| --- | --- | --- | --- | --- | --- |
| `{{EXACT_COMMAND_OR_PROCEDURE}}` | `{{DIRECTORY_COMPONENT_OR_SYSTEM}}` | `{{ENVIRONMENT}}` | `{{EXIT_CODE_AND_RESULT}}` | `{{DETAILS}}` | `{{LINKS_OR_LIMITATIONS}}` |

## Completion record

- Exact changes/artefacts: `{{COMMITS_LINKS_OR_IDENTIFIERS}}`.
- AI contribution: `{{ANALYSIS_CODE_DOCUMENTATION_TESTS_OR_OTHER}}`.
- Material human decisions: `{{DECISIONS}}`.
- Verification result: `{{PASS_FAIL_PARTIAL_BLOCKED}}`.
- Verification levels completed and not completed: `{{LEVELS_AND_LIMITATIONS}}`.
- Known limitations/follow-up: `{{ITEMS_AND_OWNERS}}`.
- Actual billable resources, usage/cost, expiry, and cleanup result: `{{RESULT_OR_NOT_APPLICABLE}}`.
- Reviewer decision/date: `{{DECISION}}`.
