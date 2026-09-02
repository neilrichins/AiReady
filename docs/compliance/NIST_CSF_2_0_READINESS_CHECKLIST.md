# National Institute of Standards and Technology Cybersecurity Framework 2.0 readiness checklist

## Purpose and claims boundary

Use this optional record only when an accountable owner selects the National
Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) 2.0
for the stated organisation, system, service, supplier, or contractual scope.

The NIST CSF is outcome-based and non-prescriptive. This checklist organises a
project's mapping and evidence; it does not reproduce the complete CSF Core,
replace the official framework or profiles, establish legal compliance,
certify cybersecurity, guarantee security, or provide an external assessment.

Use the current official sources:

- [The NIST Cybersecurity Framework 2.0](https://doi.org/10.6028/NIST.CSWP.29);
- [NIST CSF 2.0 resource centre](https://www.nist.gov/cyberframework);
- [NIST CSF 2.0 organisational and community profiles](https://www.nist.gov/cyberframework/profiles); and
- [NIST CSF 2.0 quick-start guides](https://www.nist.gov/cyberframework/quick-start-guides).

Record the exact source version and retrieval date. Use NIST's official outcome
statements and informative references directly when a detailed mapping is
required; do not rely on this summary as their substitute.

## Record control

| Field | Value |
| --- | --- |
| Organisation/entity | `{{LEGAL_ENTITY_OR_SCOPE}}` |
| System/service/workload | `{{NAME_AND_BOUNDARY}}` |
| Repositories/components/environments | `{{IDENTIFIERS}}` |
| Data, users, suppliers, and jurisdictions | `{{SCOPE}}` |
| NIST CSF source/version/retrieval date | `{{SOURCE_VERSION_AND_DATE}}` |
| Selected organisational/community profile | `{{PROFILE_AND_VERSION_OR_NONE}}` |
| Current-profile identifier/date | `{{IDENTIFIER_OR_NONE}}` |
| Target-profile identifier/date | `{{IDENTIFIER_OR_NONE}}` |
| Accountable cybersecurity-risk owner | `{{OWNER}}` |
| Assessors/reviewers | `{{NAMES_OR_ROLES}}` |
| Status | `{{NOT_ASSESSED_IN_PROGRESS_REVIEWED_APPROVED_SUPERSEDED}}` |
| Next review trigger | `{{DATE_CHANGE_INCIDENT_THREAT_OBLIGATION_OR_OTHER}}` |

## Applicability and authority

| Question | Decision and evidence | Owner/date |
| --- | --- | --- |
| Why is NIST CSF 2.0 selected for this scope? | `{{RATIONALE_AND_SOURCE}}` | `{{OWNER_AND_DATE}}` |
| Is its use voluntary, contractual, regulatory, procurement-driven, or organisational policy? | `{{BASIS_OR_UNCLEAR}}` | `{{OWNER_AND_DATE}}` |
| Which entity, systems, environments, suppliers, and period are included? | `{{BOUNDARY}}` | `{{OWNER_AND_DATE}}` |
| Which profile or implementation tier is required, if any, and by whom? | `{{REQUIREMENT_OR_NONE}}` | `{{OWNER_AND_DATE}}` |
| Which legal, regulatory, privacy, sector, contractual, or customer interpretations require specialist review? | `{{ITEMS_OR_NONE}}` | `{{OWNER_AND_DATE}}` |

An AI agent or technical assessor may not decide legal applicability, risk
appetite, target state, tier, exception, or acceptable residual risk.

## Result states

Use the shared compliance states consistently:

- `NOT_IMPLEMENTED`: no sufficient control is in place;
- `PARTIAL`: only part of the selected outcome or scope is implemented;
- `IMPLEMENTED_UNVERIFIED`: implementation is asserted but current evidence is insufficient;
- `VERIFIED_DESIGN`: evidence supports control design for the stated scope;
- `VERIFIED_OPERATING`: evidence supports operation for the stated period and sample;
- `FAIL`: evidence identifies a failure against the selected outcome;
- `CANNOT_DETERMINE`: the evidence, method, sample, or access is insufficient;
- `NOT_APPLICABLE`: an accountable owner approved the rationale and evidence; and
- `STALE`: previous evidence no longer covers the current scope, period, or system.

## Function-level readiness summary

The six functions describe related cybersecurity outcomes and operate together.
A strong result in one function does not compensate for an unresolved required
outcome in another.

| CSF function | Project concern | Applicability | Current profile/evidence | Target outcome | Status | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `GOVERN` | Organisational context, risk strategy, roles, policy, oversight, and cybersecurity supply-chain risk | `{{DECISION}}` | `{{SOURCE}}` | `{{TARGET}}` | `{{STATUS}}` | `{{OWNER}}` |
| `IDENTIFY` | Assets, services, data, dependencies, threats, vulnerabilities, risks, and improvements | `{{DECISION}}` | `{{SOURCE}}` | `{{TARGET}}` | `{{STATUS}}` | `{{OWNER}}` |
| `PROTECT` | Identity, access, awareness, data security, platform security, and resilience safeguards | `{{DECISION}}` | `{{SOURCE}}` | `{{TARGET}}` | `{{STATUS}}` | `{{OWNER}}` |
| `DETECT` | Continuous monitoring and analysis of adverse events | `{{DECISION}}` | `{{SOURCE}}` | `{{TARGET}}` | `{{STATUS}}` | `{{OWNER}}` |
| `RESPOND` | Incident management, analysis, reporting, communication, and mitigation | `{{DECISION}}` | `{{SOURCE}}` | `{{TARGET}}` | `{{STATUS}}` | `{{OWNER}}` |
| `RECOVER` | Recovery execution, restoration verification, and recovery communication | `{{DECISION}}` | `{{SOURCE}}` | `{{TARGET}}` | `{{STATUS}}` | `{{OWNER}}` |

## CSF outcome mapping

Use the exact function, category, subcategory, profile, or informative-reference
identifier from the selected current official source.

| CSF outcome/reference | Applicability/rationale | Current state | Target state | Authoritative control/source | Design evidence | Operating evidence/period | Gap/action | Owner/due |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `{{FUNCTION_CATEGORY_SUBCATEGORY_OR_REFERENCE}}` | `{{DECISION}}` | `{{CURRENT}}` | `{{TARGET}}` | `{{CONTROL_AND_LOCATION}}` | `{{EVIDENCE}}` | `{{EVIDENCE_AND_PERIOD}}` | `{{ACTION}}` | `{{OWNER_AND_DATE}}` |

Map overlapping outcomes to existing policies, risks, architecture, agent
authority, repository ecosystem, tests, operations, incident, recovery,
supplier, and release records. Do not create duplicate controls solely to fill
this table. A mapping establishes a relationship, not control effectiveness.

## Current and target profile comparison

| Outcome/reference | Current-profile result and evidence | Target-profile requirement | Difference and risk | Priority | Action/verification | Owner/due |
| --- | --- | --- | --- | --- | --- | --- |
| `{{IDENTIFIER}}` | `{{CURRENT}}` | `{{TARGET}}` | `{{GAP_AND_EFFECT}}` | `{{PRIORITY}}` | `{{ACTION_AND_EVIDENCE}}` | `{{OWNER_AND_DATE}}` |

Target outcomes require business context, threat and risk evidence, legal and
contractual inputs, dependencies, feasibility, and accountable approval. Do not
automatically select every CSF outcome or treat a larger profile as safer.

## Implementation tier context

NIST implementation tiers describe characteristics of cybersecurity risk
governance and management. They are not certification levels, maturity scores,
or substitutes for function and outcome evidence. They must not be combined
with AiReady AI operating levels.

| Field | Value |
| --- | --- |
| Current tier and evidence | `{{TIER_1_PARTIAL_TIER_2_RISK_INFORMED_TIER_3_REPEATABLE_TIER_4_ADAPTIVE_OR_NOT_SELECTED}}` |
| Target tier and business rationale | `{{TIER_AND_RATIONALE_OR_NOT_SELECTED}}` |
| Scope and organisational level | `{{SCOPE}}` |
| Decision owner/date | `{{OWNER_AND_DATE}}` |
| Gaps and actions | `{{REFERENCES}}` |

## Cybersecurity supply-chain risk

| Supplier/dependency/product/service | Criticality and access | Security requirement/source | Due-diligence and control evidence | Incident/change notification | Substitutability/exit/recovery | Owner/status |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{CRITICALITY_AND_BOUNDARY}}` | `{{REQUIREMENT}}` | `{{EVIDENCE}}` | `{{CONTROL}}` | `{{PLAN}}` | `{{OWNER_AND_STATUS}}` |

Include repositories, packages, build services, infrastructure, software as a
service, data, models, AI providers, operational suppliers, and other parties
that can affect cybersecurity outcomes. Link the authoritative dependency and
supply-chain records.

## Detection, response, recovery, and exercises

| Scenario/threat | Detection and evidence | Response authority/procedure | Recovery objective/procedure | Exercise method/scope | Result/limitations | Owner/action |
| --- | --- | --- | --- | --- | --- | --- |
| `{{SCENARIO}}` | `{{SIGNAL_AND_EVIDENCE}}` | `{{RESPONSE}}` | `{{RECOVERY}}` | `{{TABLETOP_SIMULATION_CONTROLLED_EXERCISE_OR_OTHER}}` | `{{RESULT}}` | `{{OWNER_AND_ACTION}}` |

Written procedures without appropriate exercise or operating evidence are
partial evidence. Preserve failed detections, delays, communication gaps,
manual dependencies, unsafe assumptions, and lessons.

## Gaps, exceptions, and risk treatment

| ID | CSF reference | Gap/failure/unknown | Risk and affected scope | Treatment or exception | Required evidence | Owner/approver | Due/expiry | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{REFERENCE}}` | `{{ITEM}}` | `{{RISK}}` | `{{ACTION_OR_EXCEPTION}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{DATE}}` | `{{STATUS}}` |

Exceptions require authorised, time-bounded risk acceptance with alternatives,
contingency, expiry, and a review trigger. Silence or a target-profile omission
is not risk acceptance.

## Release and claims boundary

Release-affecting outcomes, failed controls, stale evidence, open exceptions,
and incident/recovery limitations must be linked to the exact candidate's
readiness record. A release may not claim NIST CSF alignment, implementation,
conformance, certification, or a tier beyond the exact scope and authorised
evidence. Obtain specialist review for contractual, regulatory, procurement,
insurance, customer, or public claims.

## Artificial intelligence use boundary

AI may map authorised records to exact CSF references, identify missing or
conflicting evidence, draft current/target comparisons, and run approved
non-destructive checks. AI must not select risk appetite or target profiles,
assign a tier, approve controls or exceptions, infer operating effectiveness
from configuration, or issue security, compliance, certification, or customer
claims.

## Approval

| Role | Name | Decision | Date | Scope/conditions |
| --- | --- | --- | --- | --- |
| Cybersecurity-risk owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| System/service owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Technical/operations owner | `{{NAME}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Legal/compliance/contract owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Independent assessor/customer/authority | `{{NAME_OR_NOT_APPLICABLE}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
