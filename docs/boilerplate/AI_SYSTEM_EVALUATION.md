# Artificial intelligence system evaluation

Use this optional record when an artificial intelligence (AI) model, prompt,
retrieval source, tool, policy, or provider-controlled behaviour materially
affects a product, service, operational process, or development control. Do not
require it merely because AI assisted with coding. Reuse an effective existing
evaluation, model-risk, test, or release system instead of duplicating it.

This record defines bounded evaluation evidence. It does not prove safety,
fairness, security, accessibility, legal compliance, general intelligence, or
fitness for every user, population, environment, or future provider change.

## How to use this record

1. Decide whether AI materially affects behaviour or a relied-upon control. If
   it does not, record `NOT APPLICABLE` in the project's existing adoption or
   verification source and stop.
2. Identify the exact system and evaluation suite before running tests.
3. Define expected outcomes, severe failures, scope, metrics, and decision
   rules before examining candidate results.
4. Run the proportionate automated, human, specialist, integration, and
   effective-environment evaluation required by the risks and claims.
5. Preserve actual results, failures, uncertainty, exclusions, and evidence for
   the exact candidate.
6. Make an accountable decision and connect it to release, monitoring,
   fallback, reassessment, and retirement controls where applicable.

## Document control

| Field | Value |
| --- | --- |
| AI system/use and boundary | `{{NAME_PURPOSE_AND_SCOPE}}` |
| Accountable product/system owner | `{{OWNER}}` |
| Evaluation owner and reviewers | `{{OWNERS}}` |
| Evaluation-suite identifier/version | `{{IMMUTABLE_OR_CONTROLLED_IDENTIFIER}}` |
| Candidate or release-bundle identifier | `{{IDENTIFIER_OR_NOT_APPLICABLE}}` |
| Baseline/comparator | `{{APPROVED_BASELINE_OR_NONE}}` |
| Assessed population/environments | `{{SCOPE}}` |
| Status | `{{DRAFT_REVIEW_PASS_FAIL_BLOCKED_SUPERSEDED}}` |
| Assessed date and review trigger | `{{DATE_AND_EVENT}}` |
| Evidence index | `{{LOCATION}}` |

## Applicability and claims boundary

Evaluation is required because: `{{MATERIAL_AI_BEHAVIOUR_RISK_OR_CONTROL}}`.

In scope: `{{CAPABILITIES_USERS_POPULATIONS_LANGUAGES_DATA_AND_ENVIRONMENTS}}`.

Out of scope: `{{EXCLUSIONS_AND_REASONS}}`.

The results may support these decisions or claims: `{{BOUNDED_DECISIONS}}`.

They must not be used to claim: `{{UNPROVEN_OR_PROHIBITED_CLAIMS}}`.

Link applicable requirements, risks, architecture, data governance, human
oversight, security, accessibility, operations, and release records. Use the
[AI governance checklist](../compliance/AI_GOVERNANCE_CHECKLIST.md) when its
applicability conditions are met.

## Exact system under evaluation

| Element | Required identity/configuration | Actual candidate | Mutable outside project control | Evidence |
| --- | --- | --- | --- | --- |
| Code/artefacts | `{{COMMITS_VERSIONS_DIGESTS}}` | `{{IDENTIFIERS}}` | `{{YES_NO_AND_DETAILS}}` | `{{EVIDENCE}}` |
| Model/provider | `{{MODEL_VERSION_OR_CONTROLLED_ALIAS}}` | `{{IDENTIFIER}}` | `{{DETAILS}}` | `{{EVIDENCE}}` |
| System instructions/prompts/templates | `{{VERSIONS}}` | `{{IDENTIFIERS}}` | `{{DETAILS}}` | `{{EVIDENCE}}` |
| Inference parameters/thresholds | `{{REQUIRED_CONFIGURATION}}` | `{{ACTUAL}}` | `{{DETAILS}}` | `{{EVIDENCE}}` |
| Retrieval corpus/index | `{{DATA_INDEX_AND_VERSION}}` | `{{IDENTIFIERS}}` | `{{DETAILS}}` | `{{EVIDENCE}}` |
| Tools/integrations/permissions | `{{DEFINITIONS_AND_AUTHORITY}}` | `{{IDENTIFIERS}}` | `{{DETAILS}}` | `{{EVIDENCE}}` |
| Policies/guardrails/fallbacks | `{{VERSIONS_AND_CONFIGURATION}}` | `{{IDENTIFIERS}}` | `{{DETAILS}}` | `{{EVIDENCE}}` |
| Runtime/environment | `{{LOCATION_CONFIGURATION_AND_DEPENDENCIES}}` | `{{ACTUAL}}` | `{{DETAILS}}` | `{{EVIDENCE}}` |

Unknown, moving, provider-controlled, or irreproducible elements remain visible.
Record how their uncertainty affects repeatability, monitoring, approval, and
release.

## Evaluation contract

| Behaviour or risk | Authoritative expected outcome | Acceptance/refusal/abstention rule | Severe-failure rule | Evidence owner |
| --- | --- | --- | --- | --- |
| `{{CAPABILITY_OR_RISK}}` | `{{REQUIREMENT_GROUND_TRUTH_OR_RUBRIC}}` | `{{RULE}}` | `{{BLOCKING_CONDITION}}` | `{{OWNER}}` |

Define before evaluating:

- intended behaviour, prohibited behaviour, safe refusal, abstention,
  escalation, recovery, and human-intervention requirements;
- what constitutes ground truth, who may approve or change it, and how
  disagreement or ambiguity is resolved;
- metrics, rubrics, thresholds, tolerances, sample sizes, confidence or
  uncertainty treatment, and severe-failure limits;
- required subgroup, language, accessibility, device, jurisdiction, and
  environmental coverage; and
- which decisions require independent human or specialist judgment.

An average score must not conceal a severe failure or material harm. A threshold
is not meaningful without its rationale, data, exclusions, and decision rule.

## Evaluation-suite inventory

| Case/set ID | Category and risk | Input/data source and class | Expected result or rubric | Population/environment | Severity | Run trigger | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `EVAL-001` | `{{NORMAL_EDGE_ADVERSARIAL_MISUSE_REFUSAL_RECOVERY_OR_OTHER}}` | `{{SOURCE_AND_CLASS}}` | `{{EXPECTED}}` | `{{SCOPE}}` | `{{SEVERITY}}` | `{{TRIGGER}}` | `{{OWNER}}` |

Include applicable representative, real-world, boundary, malformed,
adversarial, prompt-injection, data-poisoning, tool-abuse, overreliance,
refusal, fallback, recovery, provider-failure, and drift cases. Record
provenance, consent or authority, licences, minimisation, contamination risk,
retention, and restrictions for evaluation data.

Synthetic cases require review against the intended risk and population.
Protect held-back or blind evaluation material where disclosure would invalidate
the result. Prevent training, retrieval, prompt, and evaluation leakage.

## Evaluator, grader, and human-review controls

| Evaluator/grader | Role and method | Version/configuration | Independence or correlated-failure risk | Calibration/validation | Human sample/audit | Decision authority |
| --- | --- | --- | --- | --- | --- | --- |
| `{{HUMAN_RULE_MODEL_TOOL_OR_COMBINATION}}` | `{{METHOD}}` | `{{IDENTIFIER}}` | `{{RISK}}` | `{{EVIDENCE}}` | `{{SCOPE_AND_RESULT}}` | `{{AUTHORITY}}` |

- Do not allow a model or agent to be the sole approver of its own output,
  evaluation design, ground truth, grader, or release decision.
- Validate graders against reviewed examples, difficult boundary cases, known
  failures, and held-back human judgments where appropriate.
- Record false acceptance, false rejection, inconsistency, bias, sensitivity
  to phrasing, and changes after grader or model updates.
- Use deterministic checks for properties that can be established
  deterministically. Model-based judgment does not replace them.
- Preserve unresolved human disagreement and irreducible subjectivity rather
  than manufacturing a precise pass result.

## Evaluation stages and triggers

Choose only stages justified by the system's risk, cost, and delivery model.

| Stage/trigger | Scope | Required suite/controls | Environment | Stop condition | Evidence and owner |
| --- | --- | --- | --- | --- | --- |
| Local or pre-change | `{{SCOPE}}` | `{{SUITE}}` | `{{ENVIRONMENT}}` | `{{CONDITION}}` | `{{EVIDENCE_AND_OWNER}}` |
| Change review/integration | `{{SCOPE}}` | `{{SUITE}}` | `{{ENVIRONMENT}}` | `{{CONDITION}}` | `{{EVIDENCE_AND_OWNER}}` |
| Release candidate/pre-deployment | `{{SCOPE}}` | `{{SUITE}}` | `{{ENVIRONMENT}}` | `{{CONDITION}}` | `{{EVIDENCE_AND_OWNER}}` |
| Shadow/canary/limited operation | `{{SCOPE_OR_NOT_APPLICABLE}}` | `{{SUITE}}` | `{{ENVIRONMENT}}` | `{{CONDITION}}` | `{{EVIDENCE_AND_OWNER}}` |
| Effective environment/post-release | `{{SCOPE}}` | `{{SUITE_AND_MONITORING}}` | `{{ENVIRONMENT}}` | `{{CONDITION}}` | `{{EVIDENCE_AND_OWNER}}` |

Material changes to purpose, requirements, code, model, provider, alias,
prompt, instructions, retrieval data or index, tools, permissions, parameters,
thresholds, policies, users, geography, integrations, or environment trigger
the defined reassessment. A provider-side change can invalidate evidence even
when the project repository did not change.

## Candidate result and regression comparison

| Evaluation/set | Candidate and suite version | Runs/sample | Expected/threshold | Actual result and uncertainty | Baseline difference | Severe failures | Evidence |
| --- | --- | ---: | --- | --- | --- | --- | --- |
| `{{EVALUATION}}` | `{{IDENTIFIERS}}` | `{{COUNT}}` | `{{CRITERIA}}` | `{{RESULT}}` | `{{COMPARISON}}` | `{{COUNT_AND_DETAILS}}` | `{{LOCATION}}` |

Record random seeds where available, dates, latency, cost, retries, incomplete
runs, timeouts, unavailable dependencies, excluded cases, and all material first
failures. Repeated runs do not erase an earlier failure. Report distributions
and instability where a single aggregate would mislead.

## Drift, monitoring, and response

| Behaviour/signal | Approved baseline and tolerance | Detection/source | Investigation trigger | Restrict/fallback/stop action | Owner | Evidence retention |
| --- | --- | --- | --- | --- | --- | --- |
| `{{SIGNAL}}` | `{{BASELINE}}` | `{{METHOD}}` | `{{TRIGGER}}` | `{{ACTION}}` | `{{OWNER}}` | `{{LOCATION}}` |

Monitor behaviour and affected-user outcomes where applicable, not only uptime,
latency, token use, or provider error rates. Define authority to investigate,
restrict, fall back, disable, roll back, notify, correct, or retire the AI
capability.

## Limitations, failures, and open decisions

| ID | Limitation/failure/unknown | Affected population, outcome, or claim | Control or required action | Owner | Due/review trigger | Release effect |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{ITEM}}` | `{{EFFECT}}` | `{{ACTION}}` | `{{OWNER}}` | `{{DATE_OR_EVENT}}` | `{{BLOCK_CONDITION_ALLOW}}` |

## Evaluation decision

Decision: `{{PASS_FAIL_BLOCK_DEFER_OR_LIMIT_WITH_CONDITIONS}}`.

This decision applies only to evaluation-suite version `{{SUITE_IDENTIFIER}}`,
candidate or release bundle `{{CANDIDATE_IDENTIFIER}}`, and the recorded scope.

| Role | Name | Decision | Date | Scope/conditions |
| --- | --- | --- | --- | --- |
| Product/system owner | `{{NAME}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Evaluation/quality owner | `{{NAME}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Technical/operations owner | `{{NAME}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Risk/security/privacy/specialist owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Release authority | `{{NAME_OR_NOT_APPLICABLE}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
