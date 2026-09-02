# Change review

## Outcome

Problem and intended user or operational outcome: `{{DESCRIBE}}`

Linked issue/change set: `{{LINK}}`

## Scope

- Repositories affected: `{{LIST_OR_SINGLE_REPOSITORY}}`
- Interfaces/schemas/packages affected: `{{LIST_OR_NONE}}`
- Data or migration impact: `{{DESCRIBE_OR_NONE}}`
- External or production effects: `{{DESCRIBE_OR_NONE}}`
- Required merge/release order: `{{ORDER_OR_NOT_APPLICABLE}}`
- Applicable change-impact matrix/source: `{{LINK_LOCATION_OR_NOT_APPLICABLE_WITH_REASON}}`

## Change-impact review

| Triggered relationship | Expected related change or assessment | Actual result/evidence | Exception or newly discovered impact | Owner/status |
| --- | --- | --- | --- | --- |
| `{{MATRIX_ENTRY_OR_CHANGE_SURFACE}}` | `{{EXPECTED_WORK}}` | `{{RESULT_AND_EVIDENCE}}` | `{{NONE_OR_DETAILS}}` | `{{OWNER_AND_STATUS}}` |

- [ ] Every applicable impact entry was assessed across affected repositories,
  components, contracts, generated artefacts, tests, documentation, operations,
  support, release, and recovery.
- [ ] Newly discovered relationships were added to the authoritative impact
  source or retained as an owned, time-bounded exception.
- [ ] A missing related change is classified as not applicable, deferred,
  blocked, or accepted risk with evidence and the required authority.

## AI involvement

- AI tool/model: `{{APPROVED_TOOL_OR_NONE}}`
- AI contribution: `{{ANALYSIS_CODE_TESTS_DOCUMENTATION_OR_NONE}}`
- Human decisions and review: `{{DESCRIBE}}`
- Sensitive data exposed to AI: `NONE` or `{{APPROVED_CLASS_AND_CONTROL}}`

Do not include private prompts, credentials, personal data, restricted source, or sensitive generated output.

## Safety boundaries

- [ ] Architecture and source-of-truth boundaries are preserved.
- [ ] Generated output remains validated before executable or production use.
- [ ] Authentication, authorisation, privacy, security, accessibility, and recovery controls are not weakened.
- [ ] Cross-repository compatibility and partial-rollout states are tested where applicable.
- [ ] Destructive, external, production, and cost-bearing actions remain explicitly authorised.

## Verification

- [ ] Complete local quality gate: `{{COMMAND}}`
- [ ] Required CI passed
- [ ] Contract/integration combinations passed or are not applicable
- [ ] Manual/effective-environment checks completed or recorded as limitations
- [ ] Documentation and decision records updated
- [ ] Applicable change-impact and AI-instruction currency records updated
- [ ] Rollback/recovery impact reviewed

Evidence and unresolved limitations: `{{EVIDENCE}}`

## Responsibility decisions

| Responsibility | Reviewer/owner | Decision or evidence | Status/conditions |
| --- | --- | --- | --- |
| Product and design | `{{OWNER}}` | `{{DECISION_OR_NOT_APPLICABLE_WITH_REASON}}` | `{{STATUS}}` |
| Engineering and architecture | `{{OWNER}}` | `{{DECISION}}` | `{{STATUS}}` |
| Security, privacy, and data | `{{OWNER}}` | `{{DECISION_OR_NOT_APPLICABLE_WITH_REASON}}` | `{{STATUS}}` |
| Quality and verification | `{{OWNER}}` | `{{DECISION}}` | `{{STATUS}}` |
| Operations, support, and release | `{{OWNER}}` | `{{DECISION_OR_NOT_APPLICABLE_WITH_REASON}}` | `{{STATUS}}` |
