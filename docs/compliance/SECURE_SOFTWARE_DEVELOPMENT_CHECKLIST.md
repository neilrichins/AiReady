# Secure software development checklist

Use this optional record when secure development is selected by product risk,
policy, contract, procurement, standard, or law. It is project-neutral and may
be mapped to the project's existing software development lifecycle.

The [National Institute of Standards and Technology Secure Software Development
Framework, Special Publication 800-218](https://csrc.nist.gov/pubs/sp/800/218/final)
is a public starting point. Select the exact authoritative or adopted sources in
the [obligations register](OBLIGATIONS_REGISTER.md); this checklist does not
claim conformance with them. When the Secure Software Development Framework
(SSDF) is selected, use its exact versioned practice and task text rather than
this checklist's headings as the assessment basis.

## Assessment identity

| Field | Value |
| --- | --- |
| Product/system and security owner | `{{NAME_AND_OWNER}}` |
| Exact repositories/components/services | `{{SCOPE}}` |
| Candidate/build/environment | `{{IMMUTABLE_IDENTIFIERS}}` |
| Threat and data classifications | `{{CLASSIFICATIONS}}` |
| Adopted sources and versions | `{{SOURCES}}` |
| Exact SSDF version/retrieval date or not selected | `{{VERSION_DATE_OR_NOT_SELECTED}}` |
| Assessment owner and reviewers | `{{NAMES_AND_ROLES}}` |
| Evidence index | `{{LOCATION}}` |
| Assessment date/review trigger | `{{DATE_AND_TRIGGER}}` |

## SSDF task cross-reference

Complete this section only when SSDF is an adopted source. Map every applicable
task from the selected version. The identifiers and summaries below support
navigation for SSDF version 1.1; the official publication remains authoritative.

| SSDF task | Outcome to map | Applicability/scope | Authoritative implementation | Design evidence | Operating evidence/period | State/gap | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PO.1 | Define software-security requirements | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| PO.2 | Establish roles and responsibilities | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| PO.3 | Implement supporting toolchains | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| PO.4 | Define and use security-check criteria | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| PO.5 | Maintain secure development environments | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| PS.1 | Protect code from unauthorised access and tampering | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| PS.2 | Enable verification of release integrity | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| PS.3 | Archive and protect software releases | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| PW.1 | Design for security requirements and risk | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| PW.2 | Review design against security requirements and risk | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| PW.4 | Select well-secured reusable components where feasible | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| PW.5 | Apply secure coding practices | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| PW.6 | Configure compilation and build for security | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| PW.7 | Review or analyse human-readable code | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| PW.8 | Test executable code for vulnerabilities | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| PW.9 | Configure secure settings by default | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| RV.1 | Identify and confirm vulnerabilities continuously | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| RV.2 | Assess, prioritise, and remediate vulnerabilities | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |
| RV.3 | Analyse root causes and prevent recurrence | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{STATE}}` | `{{OWNER}}` |

Use the individual implementation examples from the selected SSDF version only
where appropriate to the project. A mapped task, policy, configured tool, or
passing point-in-time check does not prove design or operating effectiveness.
Preserve unmapped tasks, partial scope, conflicting evidence, and inherited
controls as gaps rather than collapsing them into an overall pass.

## 1. Prepare the organisation and development environment

- [ ] Define security objectives, requirements, risk tolerance, roles, approval
  authorities, escalation, vulnerability ownership, and release gates.
- [ ] Maintain current architecture, trust boundaries, data flows, threat models,
  deployment paths, supported environments, repositories, and component ownership.
- [ ] Protect source, issue, build, package, artefact, signing, deployment,
  secrets, test-data, production, and evidence systems with least privilege,
  strong authentication, review, logging, and prompt revocation.
- [ ] Separate development, test, staging, production, administrative, signing,
  and emergency-access authority according to risk.
- [ ] Train people for their development, review, testing, operations, incident,
  privacy, and supply-chain responsibilities and retain competence evidence.
- [ ] Define permitted artificial intelligence (AI) tools, data classifications,
  code and prompt boundaries,
  generated-output review, model/vendor retention, and prohibited disclosures.
- [ ] Verify clean-environment reproducibility, supported toolchains, controlled
  configuration, and the authority of generated files and deployment manifests.

## 2. Define security requirements and misuse cases

- [ ] Derive requirements from threats, data, safety, abuse, privacy, availability,
  customers, architecture, operations, law, standards, contracts, and incidents.
- [ ] Define authentication, authorisation, session, tenant, secrets, cryptography,
  input/output, storage, logging, privacy, resilience, recovery, update, and
  decommissioning outcomes where applicable.
- [ ] Identify attacker goals, misuse cases, privilege boundaries, confused-deputy
  paths, denial of service, fraud, data extraction, unsafe automation, and abuse at scale.
- [ ] Define failure behaviour, safe defaults, rate and resource limits, human
  approval, rollback, revocation, isolation, and recovery.
- [ ] Trace each material security requirement to design, implementation, tests,
  evidence, risk, and release decisions.

## 3. Design and architecture review

- [ ] Minimise attack surface, privilege, exposed data, trusted components,
  implicit trust, unauthenticated operations, and security-critical complexity.
- [ ] Review trust boundaries, identity propagation, tenant isolation,
  authorisation at every enforcement point, and server-side validation.
- [ ] Use approved cryptography, key management, secret storage, rotation,
  certificate validation, and failure handling; do not invent cryptographic protocols.
- [ ] Design logging and monitoring that support detection and investigation
  without recording unnecessary secrets or personal data.
- [ ] Design secure update, migration, compatibility, rollback, backup, restore,
  revocation, end-of-support, and dependency-failure behaviour.
- [ ] Review security consequences across interconnected repositories and services,
  including version skew, partial deployment, queue replay, stale clients, and vendor outage.
- [ ] Record significant security decisions and unresolved assumptions.

## 4. Protect source and produce well-secured software

- [ ] Require reviewed changes, protected branches or equivalent controls,
  traceable authorship, approved exceptions, and independent review for material risk.
- [ ] Prevent credentials, private keys, tokens, personal data, production data,
  privileged prompts, and confidential evidence from entering source history or logs.
- [ ] Apply language, framework, protocol, platform, and context-specific secure
  implementation guidance selected by qualified owners.
- [ ] Validate inputs and outputs at trust boundaries; use safe parsing,
  encoding, parameterisation, deserialisation, file, path, command, and template handling.
- [ ] Enforce authentication, object and function authorisation, tenant isolation,
  rate limits, audit trails, and transaction integrity in the authoritative component.
- [ ] Review error handling, race conditions, concurrency, retries, idempotency,
  cache behaviour, resource exhaustion, and sensitive failure disclosure.
- [ ] Build from controlled source and dependencies in an isolated, repeatable
  process; protect build workers, provenance, artefacts, signing keys, and releases.
- [ ] Link third-party and component work to the
  [software supply-chain checklist](SOFTWARE_SUPPLY_CHAIN_CHECKLIST.md).

## 5. Verification

| Verification | Scope/environment | Tool/method/version | Expected | Actual/result | Evidence/defect | Reviewer/date |
| --- | --- | --- | --- | --- | --- | --- |
| Threat-model and architecture review | `{{SCOPE}}` | `{{METHOD}}` | `{{EXPECTED}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_DATE}}` |
| Static/source/configuration analysis | `{{SCOPE}}` | `{{METHOD}}` | `{{EXPECTED}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_DATE}}` |
| Dependency, secret, licence, and artefact analysis | `{{SCOPE}}` | `{{METHOD}}` | `{{EXPECTED}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_DATE}}` |
| Unit/component security tests | `{{SCOPE}}` | `{{METHOD}}` | `{{EXPECTED}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_DATE}}` |
| Integrated/dynamic/API tests | `{{SCOPE}}` | `{{METHOD}}` | `{{EXPECTED}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_DATE}}` |
| Authentication/authorisation/tenant tests | `{{SCOPE}}` | `{{METHOD}}` | `{{EXPECTED}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_DATE}}` |
| Abuse, fuzz, load, failure, and recovery tests | `{{SCOPE}}` | `{{METHOD}}` | `{{EXPECTED}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_DATE}}` |
| Independent penetration or specialist testing | `{{SCOPE}}` | `{{METHOD}}` | `{{EXPECTED}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_DATE}}` |
| Effective-environment verification | `{{SCOPE}}` | `{{METHOD}}` | `{{EXPECTED}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_DATE}}` |

- [ ] Use manual review where automation cannot establish context, exploitability,
  business-logic abuse, authorisation, cryptographic use, or operational impact.
- [ ] Record tool coverage, configuration, inaccessible areas, false-positive
  review, false-negative risk, skipped tests, credentials, data, and environment.
- [ ] Verify suspected findings before presenting them as vulnerabilities and
  preserve unresolved uncertainty.
- [ ] Retest affected scope and deterministic regressions after remediation.

## 6. Vulnerability response and learning

- [ ] Provide protected internal and external reporting, triage, ownership,
  severity, escalation, communication, remediation, disclosure, and credit processes.
- [ ] Monitor relevant vulnerabilities, exploit activity, dependencies, platforms,
  suppliers, threat intelligence, abuse, and unsupported components.
- [ ] Determine affected versions, configurations, customers, data, services,
  exploitability, compensating controls, and disclosure duties using verified evidence.
- [ ] Coordinate fixes, advisories, updates, revocation, rollback, customer action,
  support, and post-release verification under explicit authority.
- [ ] Analyse root cause and prevalence; update requirements, threat models,
  components, tests, monitoring, training, controls, and supplier decisions.
- [ ] Never allow AI to publish a vulnerability, contact a supplier or researcher,
  access an unapproved target, or modify production without explicit authority.

## 7. Release decision

| Input | Result/evidence |
| --- | --- |
| Security requirements, threats, and architecture | `{{RESULT}}` |
| Source/build/environment protection | `{{RESULT}}` |
| Candidate-specific verification | `{{RESULT}}` |
| Open vulnerabilities, exceptions, and residual risks | `{{RESULT}}` |
| Supply-chain, deployment, rollback, and support readiness | `{{RESULT}}` |
| Monitoring, incident, and vulnerability response | `{{RESULT}}` |

Decision: `{{READY_NOT_READY_DEFERRED_WITH_SCOPE_AND_CONDITIONS}}`.

| Role | Name | Decision | Date | Scope/conditions |
| --- | --- | --- | --- | --- |
| Security owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Engineering/quality owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Risk owner | `{{NAME}}` | `{{ACCEPT_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Release authority | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{DETAILS}}` |
