# AI-assisted task

## Identity

| Field | Value |
| --- | --- |
| Task/change-set identifier | `{{IDENTIFIER}}` |
| Accountable owner | `{{OWNER}}` |
| AI tool/model | `{{APPROVED_TOOL_OR_NONE}}` |
| Repositories/components affected | `{{LIST}}` |
| Required reviewers | `{{OWNERS}}` |

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
- Stop and escalate when: `{{CONDITIONS}}`.

## Required context

| Source | Why authoritative | Required section/version |
| --- | --- | --- |
| `{{LINK_OR_LOCATION}}` | `{{RATIONALE}}` | `{{SCOPE}}` |

## Responsibility review

| Responsibility | Applicability | Required input/decision | Owner/reviewer | Status |
| --- | --- | --- | --- | --- |
| Product/service | `{{YES_NO}}` | `{{INPUT_OR_DECISION}}` | `{{OWNER}}` | `{{STATUS}}` |
| Research/experience/design/accessibility | `{{YES_NO}}` | `{{INPUT_OR_DECISION}}` | `{{OWNER}}` | `{{STATUS}}` |
| Engineering/architecture | `{{YES_NO}}` | `{{INPUT_OR_DECISION}}` | `{{OWNER}}` | `{{STATUS}}` |
| Security/privacy/data | `{{YES_NO}}` | `{{INPUT_OR_DECISION}}` | `{{OWNER}}` | `{{STATUS}}` |
| Quality/verification | `{{YES_NO}}` | `{{INPUT_OR_DECISION}}` | `{{OWNER}}` | `{{STATUS}}` |
| Operations/reliability/support | `{{YES_NO}}` | `{{INPUT_OR_DECISION}}` | `{{OWNER}}` | `{{STATUS}}` |
| Release/communication | `{{YES_NO}}` | `{{INPUT_OR_DECISION}}` | `{{OWNER}}` | `{{STATUS}}` |

`NOT APPLICABLE` requires a reason and owner. The AI agent cannot supply reserved approval or risk-acceptance decisions.

## Verification and evidence

| Criterion/risk | Method | Environment | Expected result | Evidence | Owner |
| --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{TEST_REVIEW_INSPECTION_ANALYSIS_OR_DEMONSTRATION}}` | `{{ENVIRONMENT}}` | `{{EXPECTED}}` | `{{REQUIRED_EVIDENCE}}` | `{{OWNER}}` |

## Completion record

- Exact changes/artefacts: `{{COMMITS_LINKS_OR_IDENTIFIERS}}`.
- AI contribution: `{{ANALYSIS_CODE_DOCUMENTATION_TESTS_OR_OTHER}}`.
- Material human decisions: `{{DECISIONS}}`.
- Verification result: `{{PASS_FAIL_PARTIAL_BLOCKED}}`.
- Known limitations/follow-up: `{{ITEMS_AND_OWNERS}}`.
- Reviewer decision/date: `{{DECISION}}`.
