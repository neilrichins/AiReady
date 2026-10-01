# Risk and accepted-risk register

## Rating method

Likelihood: `1 Rare` to `5 Almost certain`.

Impact: `1 Negligible` to `5 Critical`.

Inherent score: likelihood × impact before controls. Residual score: likelihood × impact after verified controls.

## Active risks

| ID | Risk and cause | Affected requirements/features/releases | Inherent L/I/score | Controls | Control evidence | Residual L/I/score | Owner | Treatment/due | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `RISK-001` | `{{EVENT_CAUSE_AND_IMPACT}}` | `{{IDS}}` | `{{L_I_SCORE}}` | `{{CONTROLS}}` | `{{EVIDENCE}}` | `{{L_I_SCORE}}` | `{{OWNER}}` | `{{ACTION_AND_DATE}}` | `{{OPEN_TREATING_MONITORING_CLOSED}}` |

## Accepted risks

Accepted risk is a documented owner decision, not a closed defect or a passing
control. Record a review trigger where one is useful. An owner may choose no
expiry; record that choice, its rationale, and the events that would require
reconsideration.

| ID | Residual risk and known consequences | Related AiReady finding, blocker, or score effect | Reason accepted | Alternatives considered | Approver and authority | Accepted date | Expiry/review trigger or no-expiry rationale | Contingency |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `RISK-001` | `{{RISK_AND_IMPACT}}` | `{{REFERENCE_AND_UNCHANGED_RESULT}}` | `{{RATIONALE}}` | `{{ALTERNATIVES}}` | `{{AUTHORISED_APPROVER_AND_SCOPE}}` | `{{DATE}}` | `{{DATE_TRIGGER_OR_NONE_WITH_RATIONALE}}` | `{{RESPONSE}}` |

## Closed risks

| ID | Closure reason | Evidence | Owner | Date |
| --- | --- | --- | --- | --- |
| `{{RISK_ID}}` | `{{ELIMINATED_TRANSFERRED_EXPIRED_OR_OTHER}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{DATE}}` |
