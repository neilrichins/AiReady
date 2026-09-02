# Optional compliance-readiness checklists

These Markdown records help a project determine which legal, regulatory,
contractual, certification, assurance, security, privacy, financial-crime, and
supply-chain concerns apply and organise evidence for them. They are optional
examples, not a prescribed directory structure or a universal release gate.

Do not run every pack against every project. Start with applicability, select
only the relevant obligations, and map them into the project's existing legal,
risk, audit, security, privacy, procurement, quality, and release systems.

## Start here

1. Complete the [compliance applicability checklist](COMPLIANCE_APPLICABILITY_CHECKLIST.md).
2. Record current, authoritative requirements in the [obligations register](OBLIGATIONS_REGISTER.md).
3. Reuse controls across requirements through the [control and evidence register](CONTROL_AND_EVIDENCE_REGISTER.md).
4. Select only the applicable framework packs below.
5. Preserve reviewable artefacts in the [audit evidence index](AUDIT_EVIDENCE_INDEX.md).
6. Bound every statement through the [claims and approvals record](COMPLIANCE_CLAIMS_AND_APPROVALS.md).
7. Link unresolved obligations, evidence, exceptions, and approvals to the
   exact release candidate when they affect release readiness.

## Shared records

| Record | Purpose |
| --- | --- |
| [Compliance applicability checklist](COMPLIANCE_APPLICABILITY_CHECKLIST.md) | Determines whether a concern applies, does not apply, or requires specialist investigation. |
| [Obligations register](OBLIGATIONS_REGISTER.md) | Records exact authoritative sources, sections, duties, dates, exceptions, and owners. |
| [Control and evidence register](CONTROL_AND_EVIDENCE_REGISTER.md) | Maps reusable organisational and technical controls to obligations and current evidence. |
| [Audit evidence index](AUDIT_EVIDENCE_INDEX.md) | Indexes immutable, appropriately protected evidence without treating document presence as effectiveness. |
| [Compliance claims and approvals](COMPLIANCE_CLAIMS_AND_APPROVALS.md) | Prevents readiness work from being presented as certification, audit assurance, legal approval, or a broader claim. |

## Optional framework packs

| Trigger to investigate | Optional pack |
| --- | --- |
| An information security management system, customer request, procurement requirement, or certification objective | [International Organization for Standardization/International Electrotechnical Commission (ISO/IEC) 27001 readiness](ISO_IEC_27001_READINESS_CHECKLIST.md) |
| A customer assurance request or service-organisation examination | [System and Organization Controls 2 (SOC 2) readiness](SOC_2_READINESS_CHECKLIST.md) |
| The organisation wants an outcome-based cybersecurity current/target profile, governance view, or improvement plan | [National Institute of Standards and Technology Cybersecurity Framework (NIST CSF) 2.0 readiness](NIST_CSF_2_0_READINESS_CHECKLIST.md) |
| Personal data, tracking, profiling, international transfers, or data-subject rights | [European Union General Data Protection Regulation (GDPR) and privacy](GDPR_AND_PRIVACY_CHECKLIST.md) |
| Software is designed, built, acquired, maintained, or released | [Secure software development](SECURE_SOFTWARE_DEVELOPMENT_CHECKLIST.md) |
| Third-party components, build services, packages, containers, models, datasets, vendors, or open-source licences | [Software supply chain](SOFTWARE_SUPPLY_CHAIN_CHECKLIST.md) |
| A producer, build platform, consumer, customer, contract, or procurement process requires versioned source/build provenance or a supply-chain assurance level | [Supply-chain Levels for Software Artifacts (SLSA) readiness](SLSA_READINESS_CHECKLIST.md) |
| An open-source project or consumer selects a maturity-based repository and project security baseline | [Open Source Security Foundation (OpenSSF) Open Source Project Security (OSPS) Baseline readiness](OPENSSF_OSPS_BASELINE_CHECKLIST.md) |
| The organisation develops, provides, deploys, imports, distributes, or uses artificial intelligence (AI) systems | [AI governance](AI_GOVERNANCE_CHECKLIST.md) |
| A regulated activity may involve money laundering, terrorist financing, proliferation financing, sanctions, or customer due diligence | [Anti-Money Laundering and Counter-Terrorist Financing (AML/CTF) applicability and readiness](AML_CTF_APPLICABILITY_CHECKLIST.md) |
| Supply-chain transparency, forced labour, human trafficking, procurement, or reporting duties may apply | [Modern slavery and forced-labour due diligence](MODERN_SLAVERY_CHECKLIST.md) |
| A sector, market, product type, public contract, or country may add requirements | [Sector and jurisdiction discovery](SECTOR_AND_JURISDICTION_CHECKLIST.md) |

## Requirement types are not interchangeable

| Requirement type | Controlling source | Possible external decision |
| --- | --- | --- |
| Law or regulation | Current official legislation, implementing law, regulator, and binding decisions | Regulator, court, tribunal, or other competent authority |
| Contract or procurement term | Executed agreement, incorporated schedule, customer rule, or tender requirement | Contracting parties or procurement authority |
| Certifiable management-system standard | Licensed current standard, amendments, certification scheme, and scoped management system | Accredited certification body |
| Assurance framework | Current criteria, description requirements, engagement terms, and scoped controls | Qualified independent assurance practitioner |
| Industry or payment standard | Current scheme rules, programme owner, acquirer, customer, or assessor requirements | Scheme-approved assessor or programme owner |
| Voluntary guidance | Identified publication and adopted project policy | Accountable internal owner unless contract or law adopts it |

A mapping between two frameworks does not prove that either has been satisfied.
The same control may support several obligations, but each obligation retains
its own scope, evidence rules, exceptions, period, and approval authority.

## Claims boundary

These records do not establish or imply:

- legal compliance;
- ISO/IEC certification;
- a System and Organization Controls (SOC) audit opinion;
- NIST CSF implementation, alignment, conformity, certification, or a particular implementation tier;
- a SLSA Source or Build level, conformance statement, certification, or
  third-party assurance result;
- OpenSSF endorsement, OSPS Baseline compliance, project maturity, or complete
  open-source security;
- Payment Card Industry Data Security Standard validation;
- regulatory approval, registration, filing, or authorisation;
- absence of money laundering, sanctions exposure, forced labour, security
  vulnerabilities, privacy harm, bias, or other misconduct;
- effectiveness of a control throughout an audit period; or
- readiness of a release whose exact artefacts were not evaluated.

Only the authorised external or internal decision-maker may issue the relevant
certification, opinion, declaration, risk acceptance, filing, or approval.

## Artificial intelligence use boundary

Artificial intelligence (AI) may, when authorised:

- inventory repositories, systems, data flows, dependencies, vendors, records,
  policies, tests, tickets, and candidate artefacts;
- propose applicability questions and mappings to current authoritative sources;
- inspect implementation and execute approved, non-destructive verification;
- identify missing, inconsistent, stale, or contradictory evidence;
- draft control descriptions, test procedures, remediation actions, and evidence
  indexes for accountable review; and
- compare exact evidence against a stated requirement without broadening the claim.

AI must not:

- decide legal applicability, lawful basis, privilege, materiality, reportability,
  suspicious activity, sanctions disposition, or use of a statutory exception;
- approve its own control, evidence, risk, exception, or remediation;
- invent interviews, approvals, policies, operating history, user research,
  audit samples, signatures, timestamps, or test results;
- treat a source-code configuration as proof of deployed or period-long operation;
- submit regulatory, law-enforcement, customer, certification, audit, insurance,
  or public statements without explicit authority; or
- reproduce licensed or copyrighted standard text unless the project has the
  necessary rights and storage controls.

## Result states

Use explicit states rather than a checked box alone.

### Applicability states

- `NOT_ASSESSED`: applicability has not been evaluated;
- `APPLIES`: a named authoritative source and owner support applicability;
- `DOES_NOT_APPLY`: a named owner approved the evidence and rationale;
- `UNCLEAR`: specialist investigation or an external decision is required; and
- `STALE`: the prior applicability decision no longer covers the current facts.

### Implementation and evidence states

- `NOT_IMPLEMENTED`: no sufficient control is in place;
- `PARTIAL`: only part of the requirement or scope is implemented;
- `IMPLEMENTED_UNVERIFIED`: implementation is asserted but current evidence is insufficient;
- `VERIFIED_DESIGN`: evidence supports the control design for the stated scope;
- `VERIFIED_OPERATING`: evidence supports operation for the stated period and sample;
- `FAIL`: evidence identifies a requirement or control failure;
- `CANNOT_DETERMINE`: the evaluator, method, access, sample, or evidence is insufficient;
- `NOT_APPLICABLE`: the individual requirement does not apply, with approved rationale; and
- `STALE`: earlier evidence does not cover the current system, period, or candidate.

## Use rules

1. Record the exact entity, product, service, repositories, environments,
   customers, users, jurisdictions, sectors, contracts, data, and release scope.
2. Use current authoritative sources. Record versions, amendments, effective
   dates, sections, retrieval dates, and the person responsible for interpretation.
3. Keep organisation-level, service-level, system-level, repository-level,
   release-level, and time-period evidence distinct.
4. Include every interconnected repository, service, vendor, data store,
   deployment path, mobile or web client, operational process, and responsible
   entity that can affect the scoped outcome.
5. Preserve negative results, exceptions, failed tests, missing evidence,
   contradictory evidence, inherited controls, and reliance on third parties.
6. Verify design and operating effectiveness separately where the requirement
   depends on consistent operation over time.
7. Reassess after relevant changes to law, standards, contracts, markets,
   entities, architecture, data, suppliers, personnel, incidents, or releases.
8. Bind compliance-sensitive release decisions and claims to accountable human
   review and the exact evidence supporting them.
9. For a source, build, or open-source security framework, record the exact
   version, track, level, maturity scope, conditional controls, consumer policy,
   evidence, and limitations. Never infer one framework's result from another.
