# Technology cost and value

## Purpose and boundary

Use this optional record when technology consumption, licensing, infrastructure,
software as a service, data, artificial intelligence (AI), or operational effort
has a material cost or resource-use effect. It is provider-neutral and may be
adapted into an existing finance, product, engineering, procurement, operations,
or FinOps (technology value and cost management) system.

This record supports decisions; it does not prove financial accuracy, savings,
profitability, environmental performance, or FinOps maturity. Reconcile figures
with the authoritative financial and usage sources and retain calculation,
allocation, currency, tax, discount, timing, and data-quality limitations.

## Record control

| Field | Value |
| --- | --- |
| Product/service/workload and boundary | `{{SCOPE}}` |
| Repositories/components/environments | `{{IDENTIFIERS}}` |
| Cost and usage period | `{{PERIOD_AND_TIMEZONE}}` |
| Currency and accounting basis | `{{CURRENCY_CASH_ACCRUAL_AMORTISED_OR_OTHER}}` |
| Accountable product/value owner | `{{OWNER}}` |
| Engineering/operations owner | `{{OWNER}}` |
| Finance/procurement owner | `{{OWNER_OR_NOT_APPLICABLE}}` |
| Sustainability owner | `{{OWNER_OR_NOT_APPLICABLE}}` |
| Authoritative cost/usage sources | `{{SOURCES_VERSIONS_AND_FRESHNESS}}` |
| Status/version/date | `{{DRAFT_REVIEW_APPROVED_SUPERSEDED_AND_DATE}}` |
| Review trigger | `{{DATE_BUDGET_VARIANCE_CHANGE_OR_EVENT}}` |

## Applicability and selected practice

| Practice/framework | Applicability and reason | Official or organisational source/version | Selected scope | Owner |
| --- | --- | --- | --- | --- |
| FinOps or other cost/value practice | `{{APPLIES_DOES_NOT_APPLY_UNCLEAR_AND_REASON}}` | `{{SOURCE_VERSION_AND_DATE}}` | `{{CAPABILITIES_OR_BOUNDARY}}` | `{{OWNER}}` |

When the FinOps Framework is selected, use the current official source and its
attribution terms. A project may iterate through understanding current use,
identifying optimisation options, and operating approved changes without
claiming a particular maturity level.

## Cost-bearing authority and guardrails

| Activity/action | Permitted account/environment/scope | Approver/operator | Budget or usage ceiling | Time/quantity limit | Stop/alert threshold | Expiry/cleanup | Evidence |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| `{{PROVISION_SCALE_QUERY_TRAIN_EVALUATE_LICENSE_PURCHASE_OR_OTHER}}` | `{{BOUNDARY}}` | `{{ROLES}}` | `{{LIMIT_AND_CURRENCY}}` | `{{LIMIT}}` | `{{THRESHOLD_AND_RESPONSE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` |

Authority to edit code or configuration does not grant authority to provision,
purchase, scale, run unbounded workloads, change commitments, or incur expense.
Define conservative defaults, alerts, automatic stops where safe, and fresh
human confirmation for material or irreversible commitments.

## Cost and usage allocation

| Cost/usage source or category | Dedicated/shared/unallocated | Allocation unit and method | Product/team/owner | Included/excluded items | Data quality/reconciliation | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{CLASSIFICATION}}` | `{{METHOD}}` | `{{OWNER}}` | `{{BOUNDARY}}` | `{{QUALITY_AND_GAPS}}` | `{{SOURCE}}` |

Record discounts, credits, taxes, currency conversion, contractual commitments,
shared platforms, support, labour, licences, data transfer, observability,
security, backup, and recovery costs when material to the decision. An explicit
decision to leave a cost unallocated is different from an unknown cost.

## Budget, forecast, and anomaly response

| Scope/period | Baseline | Approved budget | Forecast | Actual to date | Variance and explanation | Alert/anomaly threshold | Response/owner |
| --- | ---: | ---: | ---: | ---: | --- | --- | --- |
| `{{SCOPE_AND_PERIOD}}` | `{{VALUE}}` | `{{VALUE}}` | `{{VALUE}}` | `{{VALUE}}` | `{{VARIANCE}}` | `{{THRESHOLD}}` | `{{ACTION_AND_OWNER}}` |

Document the forecast method, demand assumptions, confidence range, known
provider or pricing changes, and how stale or delayed cost data affects action.
An alert must reach an owner with authority and a safe response procedure.

## Iterative cost and value cycle

When the FinOps Framework is selected, preserve its iterative `Inform`,
`Optimize`, and `Operate` phases. An adopting project may use equivalent stages
from another approved practice, but must retain the feedback loop from current
evidence through decision and verified outcome.

| Cycle stage | Current evidence/input | Decision or authorised action | Expected value and guardrails | Actual outcome/limitation | Owner/next trigger |
| --- | --- | --- | --- | --- | --- |
| Inform or understand | `{{COST_USAGE_ALLOCATION_DEMAND_AND_VALUE_EVIDENCE}}` | `{{DECISION_NEEDED}}` | `{{OUTCOME_AND_BOUNDARIES}}` | `{{RESULT_OR_NOT_YET_MEASURED}}` | `{{OWNER_AND_TRIGGER}}` |
| Optimize or improve | `{{OPPORTUNITY_AND_ALTERNATIVES}}` | `{{APPROVED_ACTION}}` | `{{EXPECTED_VALUE_AND_CROSS_QUALITY_GUARDRAILS}}` | `{{RESULT_OR_NOT_YET_MEASURED}}` | `{{OWNER_AND_TRIGGER}}` |
| Operate and learn | `{{MONITORING_ANOMALY_AND_OUTCOME_EVIDENCE}}` | `{{RETAIN_ADJUST_STOP_OR_REVERSE}}` | `{{ACCEPTANCE_AND_STOP_BOUNDARIES}}` | `{{RESULT_AND_LIMITATION}}` | `{{OWNER_AND_TRIGGER}}` |

A cycle entry is not complete because an optimisation was proposed or applied.
Verify the outcome over the stated period and feed demand, cost, quality,
resource, and business evidence into the next decision.

## Unit economics and delivered value

| Product/workload | Unit and definition | Business/user outcome | Volume | Fully loaded cost | Cost per unit | Baseline/target | Calculation/data quality | Owner |
| --- | --- | --- | ---: | ---: | ---: | --- | --- | --- |
| `{{SCOPE}}` | `{{TRANSACTION_TENANT_USER_REQUEST_CASE_TOKEN_OR_OTHER}}` | `{{OUTCOME_OR_VALUE_PROXY}}` | `{{VALUE}}` | `{{VALUE}}` | `{{VALUE}}` | `{{VALUES}}` | `{{METHOD_AND_LIMITATION}}` | `{{OWNER}}` |

Choose a unit that can influence a real decision. Do not optimise tokens,
requests, infrastructure cost, or another technical measure while ignoring
quality, accessibility, security, reliability, user harm, support effort, or
the business outcome delivered.

## Demand, utilisation, and resource efficiency

| Resource/service/licence/data/operation | Required outcome | Demand pattern | Capacity/utilisation | Unit cost or impact | Waste/idle/constraint signal | Proposed action | Verification/owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{OUTCOME}}` | `{{NORMAL_PEAK_GROWTH_OR_OTHER}}` | `{{MEASURE}}` | `{{VALUE}}` | `{{SIGNAL}}` | `{{ACTION}}` | `{{EVIDENCE_AND_OWNER}}` |

Include unused environments, orphaned resources, duplicated storage, excessive
retention, unnecessary transfer, idle licences, inefficient queries, repeated
AI evaluations, and manual operational toil where applicable. Right-sizing must
preserve the approved capacity, reliability, performance, recovery, security,
and user-experience requirements.

## Commitments, licences, suppliers, and exit

| Commitment/supplier/licence | Term and commercial boundary | Usage/coverage | Renewal/expiry | Lock-in or exit effect | Decision/owner | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{TERMS}}` | `{{USAGE}}` | `{{DATE}}` | `{{EFFECT}}` | `{{DECISION_AND_OWNER}}` | `{{SOURCE}}` |

Link to the authoritative dependency, procurement, contract, licence, and risk
records. Do not copy confidential pricing or contract terms into a repository
that is not approved to hold them.

## Optimisation decisions and verified outcomes

| ID | Evidence-backed opportunity | Expected value and trade-offs | Approved action | Baseline | Actual result | Verification period/method | Owner/status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{OPPORTUNITY}}` | `{{EXPECTED_OUTCOME_AND_EFFECTS}}` | `{{ACTION}}` | `{{BASELINE}}` | `{{MEASURED_RESULT_OR_NOT_YET_VERIFIED}}` | `{{METHOD}}` | `{{OWNER_AND_STATUS}}` |

Forecast savings are not realised savings. Preserve implementation cost,
quality effects, rebound or demand growth, migrated cost, discounts, exclusions,
and the observation period when reporting an outcome.

## Sustainability and resource-use evidence

| Impact source/scope | Metric, unit, or proxy | Baseline | Target | Method/provider/source | Data-quality limitation | Trade-off/action | Owner |
| --- | --- | ---: | ---: | --- | --- | --- | --- |
| `{{COMPUTE_STORAGE_TRANSFER_DEVICE_HARDWARE_WATER_EMISSIONS_OR_OTHER}}` | `{{MEASURE}}` | `{{VALUE}}` | `{{VALUE}}` | `{{METHOD_AND_SOURCE}}` | `{{LIMITATION}}` | `{{DECISION}}` | `{{OWNER}}` |

Consider impact per useful unit, idle consumption, data lifecycle, customer or
device effects, supplier methodology, and eventual decommissioning where
applicable. Estimates and provider reports must identify their boundary,
method, period, and uncertainty; they do not support broader environmental
claims without the required specialist review.

## Multi-repository and shared-platform effects

| Change/workload | Repositories/services affected | Shared cost or impact | Allocation/owner | Supported combination or sequence | Verification | Partial-failure or rollback effect |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{SCOPE}}` | `{{EFFECT}}` | `{{METHOD_AND_OWNER}}` | `{{COMBINATION_OR_ORDER}}` | `{{EVIDENCE}}` | `{{RESPONSE}}` |

Assess the effective system. Moving cost, resource use, operational work, or
environmental impact from one repository, provider, team, or accounting scope
to another is not an overall improvement unless the full boundary supports it.

## Artificial intelligence use boundary

AI may classify and reconcile authorised cost and usage records, calculate
documented metrics, identify anomalies, and propose optimisation options. It
must not access restricted billing or contract data, choose allocation policy,
approve budgets, purchase commitments, provision resources, alter production,
claim savings, or make environmental claims without explicit authority and
human review. Preserve calculation inputs, versions, methods, and limitations.

## Approval and review

| Role | Name | Decision | Date | Conditions/next review |
| --- | --- | --- | --- | --- |
| Product/value owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Engineering/operations owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Finance/procurement owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Sustainability/specialist owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
