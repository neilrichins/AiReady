# Verification and validation plan

Verification asks whether the implementation satisfies its stated
requirements. Validation asks whether the resulting system meets the intended
user, business, operational, or stakeholder need in its real context. Define
and evidence them separately; one result does not imply the other.

## Evidence rules

- Evidence must identify the exact code commits, build artefacts, configuration, environment, data set, tool version, date, and result where applicable.
- Evidence must identify the exact requirement, design, interface, risk, or
  other test-basis version against which the result was obtained.
- Passing source-level tests does not prove deployed or rendered behaviour.
- Automated checks do not replace required manual, accessibility, security, usability, operational, legal, or user evaluation.
- A planned or running check is not a pass.
- A previously passing result becomes stale when affected code, configuration, dependencies, environments, requirements, or external services change.

## Verification methods

- **Test:** repeatable execution with defined expected results.
- **Inspection:** structured review of an artefact or effective configuration.
- **Analysis:** reasoned evaluation using defined inputs and method.
- **Demonstration:** observed behaviour in a representative environment.
- **Production verification:** bounded confirmation of effective deployed behaviour.

## Validation methods

Select methods appropriate to the intended need and affected people. Examples
include representative user evaluation, stakeholder acceptance, operational
exercise, field observation, measured outcome review, accessibility evaluation,
and domain-specialist assessment. Record participant or stakeholder selection,
context, scenarios, data, success criteria, limitations, and approval authority.

## Verification environments and claim boundaries

| Level/environment | Real and substituted boundaries | Claims this level may establish | Claims it cannot establish | Entry/preconditions | Evidence owner |
| --- | --- | --- | --- | --- | --- |
| Simulated/unit | `{{BOUNDARIES}}` | `{{CLAIMS}}` | `{{EXCLUSIONS}}` | `{{PRECONDITIONS}}` | `{{OWNER}}` |
| Component | `{{BOUNDARIES}}` | `{{CLAIMS}}` | `{{EXCLUSIONS}}` | `{{PRECONDITIONS}}` | `{{OWNER}}` |
| Installed/packaged artefact | `{{BOUNDARIES}}` | `{{CLAIMS}}` | `{{EXCLUSIONS}}` | `{{PRECONDITIONS}}` | `{{OWNER}}` |
| Integrated system | `{{BOUNDARIES}}` | `{{CLAIMS}}` | `{{EXCLUSIONS}}` | `{{PRECONDITIONS}}` | `{{OWNER}}` |
| Representative environment | `{{BOUNDARIES}}` | `{{CLAIMS}}` | `{{EXCLUSIONS}}` | `{{PRECONDITIONS}}` | `{{OWNER}}` |
| Physical device/domain system | `{{BOUNDARIES}}` | `{{CLAIMS}}` | `{{EXCLUSIONS}}` | `{{PRECONDITIONS}}` | `{{OWNER}}` |
| Manual/specialist/user evaluation | `{{BOUNDARIES}}` | `{{CLAIMS}}` | `{{EXCLUSIONS}}` | `{{PRECONDITIONS}}` | `{{OWNER}}` |
| Effective production/distribution | `{{BOUNDARIES}}` | `{{CLAIMS}}` | `{{EXCLUSIONS}}` | `{{PRECONDITIONS}}` | `{{OWNER}}` |

Delete or rename levels that genuinely do not apply, but preserve the rule that
evidence from one level cannot be promoted into a claim assigned to another.

## Coverage matrix

| ID | Requirement/feature/risk | Method and level | Environment | Automated/manual | Command/procedure | Expected result | Evidence location | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `VER-001` | `{{REQ_FEATURE_OR_RISK_ID}}` | `{{METHOD_AND_LEVEL}}` | `{{ENVIRONMENT}}` | `{{TYPE}}` | `{{COMMAND_OR_PROCEDURE}}` | `{{EXPECTED}}` | `{{LINK_OR_ARTEFACT}}` | `{{OWNER}}` | `{{PLANNED_PASS_FAIL_BLOCKED_STALE}}` |

## Validation coverage matrix

| ID | Intended need and requirement/version | Representative users/stakeholders/context | Method/scenarios | Success boundary | Actual result | Evidence/limitations | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `VAL-001` | `{{NEED_REQUIREMENT_AND_VERSION}}` | `{{PEOPLE_ROLES_AND_CONTEXT}}` | `{{METHOD_AND_SCENARIOS}}` | `{{EXPECTED_OUTCOME}}` | `{{RESULT}}` | `{{EVIDENCE_AND_LIMITS}}` | `{{OWNER}}` | `{{PLANNED_PASS_FAIL_BLOCKED_STALE}}` |

A stakeholder approval without an observed result is not validation evidence.
A sample or representative environment establishes only the recorded scope;
preserve excluded people, contexts, journeys, devices, and operating conditions.

## Quality areas

| Area | Applicability | Minimum evidence | Current coverage | Gap owner |
| --- | --- | --- | --- | --- |
| Functional behaviour | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |
| User journeys, states, design, content, and usability | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |
| Failure and recovery paths | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |
| Security and authorisation | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |
| Privacy and data handling | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |
| Accessibility and assistive technology | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |
| Reliability, continuity, and recovery exercises | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |
| Performance, capacity, and resource efficiency | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |
| Technology cost, allocation, and delivered value | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |
| Sustainability and resource lifecycle | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |
| Compatibility and upgrade | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |
| Cross-repository contracts | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |
| Deployment and effective configuration | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |
| Backup, rollback, and restore | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |
| Documentation and support | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |
| Licence and third-party obligations | `{{YES_NO}}` | `{{EVIDENCE}}` | `{{STATUS}}` | `{{OWNER}}` |

## Known evidence limitations

| Claim not established | Why | Required additional verification | Owner | Blocks release |
| --- | --- | --- | --- | --- |
| `{{LIMITATION}}` | `{{REASON}}` | `{{WORK}}` | `{{OWNER}}` | `{{YES_NO}}` |
