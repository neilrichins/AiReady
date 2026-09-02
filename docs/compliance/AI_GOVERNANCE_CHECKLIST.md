# Artificial intelligence (AI) governance checklist

Use this optional record when an organisation develops, provides, deploys,
imports, distributes, operates, procures, or materially relies on an artificial
intelligence (AI) system. Product AI and AI used to develop or operate software
may have different scopes and obligations; assess both.

Possible sources include the [European Union AI Act, Regulation (EU)
2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng), national and
sector law, contracts, the public [National Institute of Standards and
Technology AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework),
and licensed [ISO/IEC 42001:2023](https://www.iso.org/standard/42001) for an AI
management system. Verify current scope, amendments, guidance, standards,
codes, dates, and authority before use.

This record does not establish legal compliance, conformity assessment,
registration, certification, safety, fairness, or fitness for purpose.

## Assessment identity

| Field | Value |
| --- | --- |
| Organisation/entity and AI role | `{{PROVIDER_DEPLOYER_IMPORTER_DISTRIBUTOR_OPERATOR_USER_OR_OTHER}}` |
| AI system/use case | `{{NAME_PURPOSE_AND_SCOPE}}` |
| Exact models/data/prompts/code/services/version | `{{IMMUTABLE_OR_CONTROLLED_IDENTIFIERS}}` |
| People, decisions, and environments affected | `{{SCOPE}}` |
| Jurisdictions/sectors/contracts | `{{SOURCES}}` |
| Risk classification and decision owner | `{{CLASSIFICATION_OWNER_AND_DATE}}` |
| Assessment owner and reviewers | `{{NAMES_AND_ROLES}}` |
| Evidence index | `{{LOCATION}}` |

## 1. Inventory and applicability

| AI system/use | Purpose and users | Entity role | Model/provider/version | Data | Decision/impact | Jurisdictions | Classification | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `AI-001` | `{{PURPOSE}}` | `{{ROLE}}` | `{{MODEL}}` | `{{DATA}}` | `{{IMPACT}}` | `{{LOCATIONS}}` | `{{CLASSIFICATION}}` | `{{OWNER}}` |

- [ ] Inventory embedded, hosted, third-party, general-purpose, fine-tuned,
  predictive, generative, decision-support, automated-decision, safety, monitoring,
  biometric, ranking, moderation, fraud, development, and operational AI uses.
- [ ] Determine roles and responsibilities for each entity, system, component,
  distribution arrangement, modification, purpose, market, and downstream use.
- [ ] Assess prohibited, restricted, high-risk, transparency, general-purpose,
  systemic, sector, employment, safety, privacy, consumer, and contract triggers
  against current authoritative sources.
- [ ] Record why a legal classification applies, does not apply, or remains
  unclear; AI cannot approve its own classification.
- [ ] Track commencement, transition, registration, notification, conformity,
  documentation, monitoring, incident, literacy, and other applicable dates.

## 2. Purpose, benefit, people, and alternatives

- [ ] Define the specific intended purpose, users, affected people, operating
  conditions, prohibited uses, foreseeable misuse, limitations, and success measures.
- [ ] Evidence the need and expected benefit rather than adopting AI because it is available.
- [ ] Assess non-AI and lower-impact alternatives, proportionality, accessibility,
  inclusion, environmental and operational cost, and the option not to deploy.
- [ ] Involve affected people, domain experts, accessibility, privacy, security,
  safety, legal, operational, and worker representatives according to impact.
- [ ] Define escalation, contest, appeal, correction, withdrawal, alternative
  service, and remedy routes that are usable by affected people.

## 3. Risk and impact management

| Risk/impact | People/system affected | Source and scenario | Likelihood/severity/uncertainty | Controls | Residual risk | Owner/decision | Monitoring |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{RISK}}` | `{{SCOPE}}` | `{{SCENARIO}}` | `{{ASSESSMENT}}` | `{{CONTROLS}}` | `{{RESIDUAL}}` | `{{OWNER}}` | `{{MEASURE}}` |

- [ ] Assess safety, fundamental rights, discrimination, accessibility, privacy,
  security, manipulation, misinformation, intellectual property, confidentiality,
  employment, financial, environmental, operational, supplier, and societal impacts.
- [ ] Include misuse, automation bias, overreliance, malicious input, prompt
  injection, data/model poisoning, extraction, evasion, leakage, unsafe tools,
  excessive agency, feedback loops, drift, outage, and correlated failure.
- [ ] Record affected groups, distribution of benefit and harm, uncertainty,
  limitations, cumulative effects, and risks not captured by aggregate metrics.
- [ ] Assign treatment, acceptance, prohibited-use, suspension, and retirement authority.
- [ ] Reassess after material changes to purpose, model, data, prompts, tools,
  integrations, thresholds, users, geography, provider, incidents, or evidence.

## 4. Data and model governance

- [ ] Record provenance, authority, licences, consent or lawful basis, purpose,
  collection, representativeness, quality, labelling, filtering, transformation,
  retention, security, access, transfer, deletion, and limitations for data.
- [ ] Separate training, fine-tuning, retrieval, evaluation, prompt, user,
  feedback, telemetry, safety, and production data flows.
- [ ] Document model/provider, architecture where available, version, configuration,
  prompts, tools, retrieval sources, safety controls, updates, hosting, and dependencies.
- [ ] Control model, prompt, dataset, threshold, tool, and policy changes with
  review, testing, versioning, rollback, and effective-environment verification.
- [ ] Prevent unauthorised use of confidential, personal, customer, production,
  privileged, copyrighted, security-sensitive, or regulated data.
- [ ] Link personal-data processing to the [GDPR and privacy checklist](GDPR_AND_PRIVACY_CHECKLIST.md)
  and dependencies to the [software supply-chain checklist](SOFTWARE_SUPPLY_CHAIN_CHECKLIST.md).

## 5. Human oversight and authority

- [ ] Define which outputs may inform, recommend, draft, execute, block, approve,
  communicate, spend, deploy, delete, investigate, or decide.
- [ ] Require meaningful human review where appropriate: competent, informed,
  independent, timely, able to inspect evidence, and able to change or stop the outcome.
- [ ] Design against automation bias, rubber-stamping, alert fatigue, inaccessible
  explanations, unclear responsibility, and pressure to accept model output.
- [ ] Provide safe stop, override, rollback, containment, escalation, and fallback.
- [ ] Never use AI as the sole approver of its own output, control, test, risk,
  model change, legal classification, regulated decision, or release.

## 6. Transparency, instructions, and records

- [ ] Provide required notices that people are interacting with or affected by AI.
- [ ] Describe intended purpose, capabilities, limitations, expected inputs,
  operating conditions, oversight, performance, accessibility, risks, and support
  accurately to operators and affected people.
- [ ] Identify generated or manipulated content where required and technically feasible.
- [ ] Preserve required technical documentation, instructions, logs, versions,
  decisions, data provenance, evaluation, incidents, changes, and approvals.
- [ ] Bound public performance, safety, fairness, compliance, and “human-reviewed” claims.

## 7. Verification and validation

Use the project's existing evaluation system or adapt the optional
[AI system evaluation](../boilerplate/AI_SYSTEM_EVALUATION.md) when a reusable,
candidate-specific evaluation record is needed. Do not duplicate authoritative
results between the two records.

| Evaluation | Population/environment | Method/version | Acceptance | Actual/result | Affected groups/limitations | Evidence/reviewer |
| --- | --- | --- | --- | --- | --- | --- |
| Intended-task quality and failure modes | `{{SCOPE}}` | `{{METHOD}}` | `{{CRITERIA}}` | `{{RESULT}}` | `{{LIMITS}}` | `{{EVIDENCE}}` |
| Bias, fairness, accessibility, and subgroup effects | `{{SCOPE}}` | `{{METHOD}}` | `{{CRITERIA}}` | `{{RESULT}}` | `{{LIMITS}}` | `{{EVIDENCE}}` |
| Privacy and data protection | `{{SCOPE}}` | `{{METHOD}}` | `{{CRITERIA}}` | `{{RESULT}}` | `{{LIMITS}}` | `{{EVIDENCE}}` |
| Security, robustness, misuse, and red-team evaluation | `{{SCOPE}}` | `{{METHOD}}` | `{{CRITERIA}}` | `{{RESULT}}` | `{{LIMITS}}` | `{{EVIDENCE}}` |
| Human oversight, contest, fallback, and recovery | `{{SCOPE}}` | `{{METHOD}}` | `{{CRITERIA}}` | `{{RESULT}}` | `{{LIMITS}}` | `{{EVIDENCE}}` |
| Integrated and effective-environment behaviour | `{{SCOPE}}` | `{{METHOD}}` | `{{CRITERIA}}` | `{{RESULT}}` | `{{LIMITS}}` | `{{EVIDENCE}}` |

- [ ] Use representative and adversarial cases, languages, groups, devices,
  contexts, edge cases, uncertainty, malformed input, provider failure, and drift.
- [ ] Prevent benchmark contamination, selective reporting, test-set leakage,
  unreviewed synthetic evidence, and substitution of average performance for severe harm.
- [ ] Independently verify high-impact evaluation and disclose irreducible limitations.

## 8. Deployment, monitoring, incidents, and retirement

- [ ] Approve the exact system, model, data, prompts, tools, configuration,
  safeguards, documentation, operators, and environments before deployment.
- [ ] Monitor performance, subgroup effects, complaints, overrides, drift,
  security, misuse, provider changes, incidents, and control operation.
- [ ] Define thresholds and authority for investigation, restriction, fallback,
  suspension, notification, correction, withdrawal, and recall.
- [ ] Maintain incident reporting, regulatory escalation, affected-person support,
  evidence preservation, root-cause analysis, and corrective action.
- [ ] Retire safely: revoke integrations and access, preserve required records,
  delete or return data, notify affected parties, maintain alternatives, and verify closure.

## 9. Decision

| Input | Result/evidence |
| --- | --- |
| Inventory, role, applicability, and classification | `{{RESULT}}` |
| Purpose, people, alternatives, and impact assessment | `{{RESULT}}` |
| Data, model, supplier, and change governance | `{{RESULT}}` |
| Human oversight, transparency, and documentation | `{{RESULT}}` |
| Verification, deployment, monitoring, incident, and retirement readiness | `{{RESULT}}` |
| Open risks, limitations, claims, and external obligations | `{{RESULT}}` |

Decision: `{{APPROVE_REJECT_DEFER_LIMIT_OR_RETIRE_WITH_CONDITIONS}}`.

| Role | Name | Decision | Date | Scope/conditions |
| --- | --- | --- | --- | --- |
| AI system/product owner | `{{NAME}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Technical/model owner | `{{NAME}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Risk/privacy/security/safety reviewers | `{{NAMES}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Legal/compliance owner | `{{NAME}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Deployment/release authority | `{{NAME}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
