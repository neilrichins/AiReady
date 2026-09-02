# Testing and quality contract

## Document control and quality policy

| Field | Value |
| --- | --- |
| Accountable quality owner | `{{OWNER}}` |
| Applies to | `{{SYSTEM_REPOSITORIES_AND_ENVIRONMENTS}}` |
| Assessed version/date | `{{VERSION_AND_DATE}}` |
| Risk/criticality basis | `{{BASIS}}` |
| Review trigger | `{{CODE_REQUIREMENT_RISK_ENVIRONMENT_OR_DATE}}` |

Quality objective: `{{OBSERVABLE_QUALITY_OUTCOME}}`.

The complete gate establishes only the claims mapped to its coverage. It does not replace manual, specialist, user, operational, or effective-environment evaluation.

## Complete local gate

```text
{{COMPLETE_QUALITY_COMMAND}}
```

Clean setup and locked environment:

```text
{{CLEAN_SETUP_AND_LOCKED_RUNTIME_COMMAND}}
```

Expected result, duration class, required services, allowed data, outputs, and evidence location: `{{DETAILS}}`.

Continuous Integration (CI) equivalence and merge protection: `{{PIPELINE_AND_ENFORCEMENT}}`.

## Focused feedback loops

Define the smallest reliable check that can return actionable evidence while a
change is being developed. Measure feedback time from starting the check until
the contributor receives a result that can distinguish a product failure from
a setup, environment, data, or dependency failure.

| Change type/surface | Focused command or procedure | Scope and claim boundary | Prerequisites, services, and isolation | Expected duration class | Actionable result/diagnostics | Complete-gate or higher-level trigger | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{CHANGE_CLASS}}` | `{{COMMAND_OR_PROCEDURE}}` | `{{SCOPE_AND_LIMIT}}` | `{{REQUIREMENTS_AND_CONTROLS}}` | `{{SECONDS_MINUTES_HOURS_OR_VARIABLE}}` | `{{EXPECTED_OUTPUT_AND_FAILURE_LOCATION}}` | `{{WHEN_THE_FULL_OR_DIFFERENT_GATE_IS_REQUIRED}}` | `{{OWNER}}` |

Record hidden global state, persistent storage, network calls, external
services, clocks, randomness, concurrency, device dependencies, and other side
effects that can make a focused check non-deterministic or non-repeatable.
Where practical, provide controlled inputs, reset procedures, observable
outputs, and test boundaries. Do not require a particular design pattern or
mocking approach when the project's existing architecture provides equivalent
control.

A fast check does not replace the complete gate, integration evidence, manual
evaluation, or effective-environment verification. A slow check is not made
reliable by labelling it focused; record the friction, risk, and improvement
owner instead.

## Test levels and ownership

Use the levels that apply to the project, rename them where necessary, and
record why an omitted level cannot affect the claim. Keep these evidence
boundaries explicit:

- simulated or unit evidence proves behaviour only within the substituted boundary;
- component evidence proves the named component, not its packaging or integrations;
- installed or packaged-artefact evidence proves the distributable form in the tested environment;
- integration evidence proves only the exact component and contract combination tested;
- representative-environment evidence proves only the recorded configuration and differences;
- physical-device, specialist, or human evaluation proves the observed scenarios and equipment; and
- effective-environment evidence proves bounded deployed behaviour at the recorded time.

No lower or adjacent level substitutes for a required higher or different
level. Automation does not turn simulation into physical, specialist, user, or
production evidence.

| Level | Purpose | Scope/boundary | Required for | Environment | Owner | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| Static/policy | `{{PURPOSE}}` | `{{SCOPE}}` | `{{CHANGES}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Unit | `{{PURPOSE}}` | `{{SCOPE}}` | `{{CHANGES}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Component | `{{PURPOSE}}` | `{{SCOPE}}` | `{{CHANGES}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Installed/package artefact | `{{PURPOSE}}` | `{{SCOPE}}` | `{{CHANGES}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Contract | `{{PURPOSE}}` | `{{SCOPE}}` | `{{CHANGES}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Integration | `{{PURPOSE}}` | `{{SCOPE}}` | `{{CHANGES}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| End-to-end/journey | `{{PURPOSE}}` | `{{SCOPE}}` | `{{CHANGES}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Representative/staging environment | `{{PURPOSE}}` | `{{SCOPE}}` | `{{CHANGES}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Physical-device/domain system | `{{PURPOSE}}` | `{{SCOPE}}` | `{{CHANGES}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Manual/specialist/user | `{{PURPOSE}}` | `{{SCOPE}}` | `{{CHANGES}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |
| Effective-environment | `{{PURPOSE}}` | `{{SCOPE}}` | `{{CHANGES}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{EVIDENCE}}` |

## Command and procedure evidence

| Command/procedure | Working scope | Environment/tool versions | Exit/result | Passed/failed/skipped | Rerun/retry | Evidence and claim boundary |
| --- | --- | --- | --- | --- | --- | --- |
| `{{EXACT_COMMAND_OR_PROCEDURE}}` | `{{DIRECTORY_COMPONENT_OR_SYSTEM}}` | `{{ENVIRONMENT}}` | `{{EXIT_CODE_AND_RESULT}}` | `{{DETAILS}}` | `{{NONE_OR_REASON}}` | `{{EVIDENCE_AND_LIMIT}}` |

Preserve material first failures and distinguish prerequisite or environment
failures from product failures. Document hidden setup, platform assumptions,
network access, external services, unavailable hardware, and excluded tests.

## Risk and coverage matrix

| Requirement/journey/risk | Failure to prevent or detect | Test levels/methods | Positive/negative/boundary cases | Required environment/data | Pass criterion | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{FAILURE}}` | `{{METHODS}}` | `{{CASES}}` | `{{CONTEXT}}` | `{{CRITERION}}` | `{{EVIDENCE}}` |

Cover normal behaviour, alternate and recovery states, malformed and adversarial input, permissions, injection, concurrency, retries, idempotency, migration, rollback, compatibility, regression, observability, and support diagnostics where applicable.

Coverage percentages may inform risk but do not prove meaningful assertions, critical-path coverage, or release readiness. Define any numeric threshold together with exclusions and rationale: `{{POLICY_OR_NOT_USED}}`.

## Quality-area strategy

| Area | Applicability/risk | Method | Environment/tool | Frequency/trigger | Acceptance boundary | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| Functional and regression | `{{RISK}}` | `{{METHOD}}` | `{{CONTEXT}}` | `{{TRIGGER}}` | `{{BOUNDARY}}` | `{{OWNER}}` |
| Security and authorisation | `{{RISK}}` | `{{METHOD}}` | `{{CONTEXT}}` | `{{TRIGGER}}` | `{{BOUNDARY}}` | `{{OWNER}}` |
| Privacy and data integrity | `{{RISK}}` | `{{METHOD}}` | `{{CONTEXT}}` | `{{TRIGGER}}` | `{{BOUNDARY}}` | `{{OWNER}}` |
| Accessibility and usability | `{{RISK}}` | `{{METHOD}}` | `{{CONTEXT}}` | `{{TRIGGER}}` | `{{BOUNDARY}}` | `{{OWNER}}` |
| Performance, reliability, capacity, and cost | `{{RISK}}` | `{{METHOD}}` | `{{CONTEXT}}` | `{{TRIGGER}}` | `{{BOUNDARY}}` | `{{OWNER}}` |
| Compatibility, installation, and migration | `{{RISK}}` | `{{METHOD}}` | `{{CONTEXT}}` | `{{TRIGGER}}` | `{{BOUNDARY}}` | `{{OWNER}}` |
| Recovery, operations, and support | `{{RISK}}` | `{{METHOD}}` | `{{CONTEXT}}` | `{{TRIGGER}}` | `{{BOUNDARY}}` | `{{OWNER}}` |
| Licensing and supply chain | `{{RISK}}` | `{{METHOD}}` | `{{CONTEXT}}` | `{{TRIGGER}}` | `{{BOUNDARY}}` | `{{OWNER}}` |

## Environments, fixtures, and test data

| Environment/data set | Purpose | Source/reset | Data classification | Isolation | Known difference from effective environment | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{PURPOSE}}` | `{{PROCESS}}` | `{{CLASSIFICATION}}` | `{{CONTROL}}` | `{{DIFFERENCE}}` | `{{OWNER}}` |

Fixtures and snapshots must be deterministic, reviewed, minimised, and free of unauthorised sensitive data. Record clock, randomness, locale, network, external-service, feature-flag, and concurrency controls where relevant.

## Cross-repository verification

| Producer version | Consumer version | Contract/integration checks | Environment | Result/evidence | Supported | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{VERSION}}` | `{{VERSION}}` | `{{CHECKS}}` | `{{ENVIRONMENT}}` | `{{RESULT}}` | `{{YES_NO}}` | `{{OWNER}}` |

System-level quality command or pipeline: `{{COMMAND_PIPELINE_OR_NOT_APPLICABLE_WITH_EVIDENCE}}`.

Record generated-artefact freshness, shared schema ownership, supported old/new combinations, staged rollout states, and exact commits or immutable artefact versions tested together.

## Flaky, quarantined, skipped, and stale checks

| Check | Classification | Evidence/reason | Risk/coverage lost | Owner | Resolution/expiry | Release effect |
| --- | --- | --- | --- | --- | --- | --- |
| `{{CHECK}}` | `{{FLAKY_QUARANTINED_SKIPPED_STALE}}` | `{{EVIDENCE}}` | `{{IMPACT}}` | `{{OWNER}}` | `{{ACTION_AND_DATE}}` | `{{BLOCK_CONDITION_ALLOW}}` |

Retries must not convert an unexplained failure into a pass. Quarantine requires visible lost-coverage ownership and a resolution deadline.

## Failure triage and defect handling

| Severity/class | Triage owner/time | Required evidence | Release rule | Escalation |
| --- | --- | --- | --- | --- |
| `{{CLASS}}` | `{{OWNER_AND_TARGET}}` | `{{EVIDENCE}}` | `{{RULE}}` | `{{ROUTE}}` |

Preserve the first failure, environment, candidate identifier, inputs, and relevant diagnostics. Remove secrets and sensitive data before sharing evidence.

## Evidence and claims boundary

For each retained result record the exact commits/artefacts, configuration, environment, data set, tool version, date, result, assessor, reruns, and limitations where applicable.

Automated tests do not by themselves prove `{{SECURITY_ACCESSIBILITY_USABILITY_PERFORMANCE_PRODUCTION_THIRD_PARTY_LEGAL_OR_DOMAIN_LIMITS}}`.
