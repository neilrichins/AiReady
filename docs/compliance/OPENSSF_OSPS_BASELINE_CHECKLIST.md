# Open Source Security Foundation Open Source Project Security Baseline readiness checklist

Use this optional record when an open-source project or its consumers select
the Open Source Security Foundation (OpenSSF) Open Source Project Security
(OSPS) Baseline as a security objective, customer expectation, procurement
input, or improvement framework.

The [official OSPS Baseline](https://baseline.openssf.org/) identifies the
current version and retains previous versions. Select one exact version and its
official checklist before assessment. Do not combine controls from different
versions or rely on the word `current` as a durable identifier.

This record is a project-owned crosswalk. It does not establish OpenSSF
endorsement, certification, complete security, consumer fitness, or release
approval. The authoritative versioned baseline prevails over this template.

## Assessment identity

| Field | Value |
| --- | --- |
| Project and accountable owner | `{{NAME_AND_OWNER}}` |
| Project maturity and target rationale | `{{LEVEL_AND_BASIS}}` |
| Exact OSPS Baseline version | `{{VERSION}}` |
| Versioned checklist/crosswalk and retrieval date | `{{URLS_AND_DATE}}` |
| Repositories, organisations, websites, and discussion channels | `{{SCOPE}}` |
| Build, release, package, and distribution systems | `{{SCOPE}}` |
| Latest assessed release/candidate | `{{IMMUTABLE_IDENTIFIERS_OR_NOT_APPLICABLE}}` |
| Assessment owner and reviewers | `{{NAMES_AND_ROLES}}` |
| Evidence index | `{{LOCATION}}` |
| Assessment date and review trigger | `{{DATE_AND_TRIGGER}}` |

Artificial intelligence (AI) authority and stop conditions:
`{{PERMITTED_DISCOVERY_ANALYSIS_VERIFICATION_AND_PROHIBITED_ACTIONS}}`.

## 1. Selection and scope

- [ ] Confirm that the project is open source and identify every repository,
  subproject, release asset, package, website, build path, security channel,
  governance route, and public contribution surface in scope.
- [ ] Select the target maturity level using the versioned baseline's rules and
  document why that level is appropriate to the project's actual maturity.
- [ ] Include all controls applicable to the selected level. Do not average
  failed or unassessed controls into a passing maturity result.
- [ ] Distinguish repository-level, project-level, organisation-level,
  release-level, and externally provided controls and evidence.
- [ ] Record conditional controls exactly as the selected baseline defines them.
  Do not mark an unconditional control `NOT APPLICABLE` for convenience.

Assessment states:

- `NOT_ASSESSED`: no current conclusion;
- `MEETS`: current evidence establishes the requirement for the exact scope;
- `PARTIAL`: only part of the requirement or scope is established;
- `DOES_NOT_MEET`: evidence shows the requirement is not satisfied;
- `NOT_APPLICABLE`: the versioned requirement is conditional and the condition
  does not apply, with evidence and an accountable owner;
- `CANNOT_DETERMINE`: access, method, evidence, or authority is insufficient; and
- `STALE`: earlier evidence no longer covers the assessed state or period.

## 2. Versioned control crosswalk

Copy every applicable control identifier from the selected official checklist.
Paraphrase only for navigation; the versioned requirement remains authoritative.

| OSPS control ID | Maturity/category | Short outcome | Exact scope/condition | Authoritative implementation | Current evidence | State | Gap/action/expiry | Owner/reviewer |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `{{CONTROL_ID}}` | `{{LEVEL_AND_CATEGORY}}` | `{{OUTCOME}}` | `{{SCOPE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{STATE}}` | `{{ACTION}}` | `{{OWNERS}}` |

## 3. Category coverage review

Use the categories in the selected version. The rows below reflect recurring
OSPS concerns and do not replace control-by-control assessment.

| Category | Applicable control IDs | Effective mechanisms | Operating evidence | Unmet/unknown controls | Owner |
| --- | --- | --- | --- | --- | --- |
| Access control | `{{IDS}}` | `{{CONTROLS}}` | `{{EVIDENCE}}` | `{{GAPS}}` | `{{OWNER}}` |
| Build and release | `{{IDS}}` | `{{CONTROLS}}` | `{{EVIDENCE}}` | `{{GAPS}}` | `{{OWNER}}` |
| Documentation | `{{IDS}}` | `{{CONTROLS}}` | `{{EVIDENCE}}` | `{{GAPS}}` | `{{OWNER}}` |
| Governance | `{{IDS}}` | `{{CONTROLS}}` | `{{EVIDENCE}}` | `{{GAPS}}` | `{{OWNER}}` |
| Legal and licensing | `{{IDS}}` | `{{CONTROLS}}` | `{{EVIDENCE}}` | `{{GAPS}}` | `{{OWNER}}` |
| Quality | `{{IDS}}` | `{{CONTROLS}}` | `{{EVIDENCE}}` | `{{GAPS}}` | `{{OWNER}}` |
| Security assessment | `{{IDS}}` | `{{CONTROLS}}` | `{{EVIDENCE}}` | `{{GAPS}}` | `{{OWNER}}` |
| Vulnerability management | `{{IDS}}` | `{{CONTROLS}}` | `{{EVIDENCE}}` | `{{GAPS}}` | `{{OWNER}}` |

## 4. Effective-control checks

### Access and source protection

- [ ] Verify multi-factor authentication, least privilege, collaborator
  onboarding and removal, sensitive actions, branch protections, review rules,
  administrator paths, bots, and emergency exceptions in the effective systems.
- [ ] Test whether direct changes, deletion, history rewriting, approval bypass,
  compromised automation, or excessive Continuous Integration/Continuous
  Delivery (CI/CD) permissions can defeat the intended controls.

### Build, release, and distribution

- [ ] Identify unique release and asset identifiers and prove that the public
  assets correspond to the approved source and build results.
- [ ] Protect untrusted and manually supplied pipeline inputs, credentials,
  build permissions, release channels, artefact stores, and signing mechanisms.
- [ ] Verify signatures, manifests, digests, provenance, and software bills of
  materials from the consumer side where the selected controls require them.
- [ ] Preserve release notes, supported versions, reporting channels, rollback,
  revocation, and response to a compromised package or release channel.

### Documentation, governance, and legal

- [ ] Verify that contribution, review, governance, role, licence, support,
  security-reporting, and public-discussion information is current and usable.
- [ ] Confirm that source and released assets carry the applicable licence and
  notices across every repository and distribution format in scope.
- [ ] Record maintainer concentration, unavailable reviewers, inactive channels,
  abandoned components, and other operating gaps that file presence cannot show.

### Quality, security assessment, and vulnerability management

- [ ] Verify public change history, dependency records, multi-repository scope,
  test instructions, automated enforcement, review evidence, and exception handling.
- [ ] Record the exact tools, versions, configurations, coverage, findings,
  false-positive decisions, omitted areas, remediation thresholds, and evidence.
- [ ] Exercise the private vulnerability-reporting path without disclosing a
  real vulnerability or sensitive information.
- [ ] Verify triage, affected-version analysis, remediation, advisory,
  Vulnerability Exploitability eXchange (VEX), disclosure, and release controls
  where required by the selected baseline.

## 5. Interconnected repositories and inherited controls

| Repository/component/service | Project role and status | Applicable control IDs | Controls provided | Controls consumed/inherited | Evidence boundary | Gap/owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{ROLE}}` | `{{IDS}}` | `{{CONTROLS}}` | `{{DEPENDENCIES}}` | `{{EVIDENCE}}` | `{{GAP_AND_OWNER}}` |

- [ ] Include every repository compiled, packaged, generated, or distributed as
  part of the project, including archived, experimental, documentation,
  infrastructure, schema, and release-management repositories where relevant.
- [ ] Verify organisation-level and platform controls for each repository; do
  not assume that one repository's configuration applies to another.
- [ ] Test supported component combinations and the public release as consumed,
  not only independent repository checks.
- [ ] Record complementary controls, evidence expiry, provider limitations,
  release order, partial failure, revocation, and recovery ownership.

## 6. Evidence and limitations

| Evidence ID | Controls supported | Exact subject/period | Method/source | Result | Integrity/version | Limitation | Location/retention |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{EVIDENCE_ID}}` | `{{CONTROL_IDS}}` | `{{SCOPE}}` | `{{METHOD}}` | `{{RESULT}}` | `{{IDENTIFIER}}` | `{{LIMITATION}}` | `{{LOCATION}}` |

Automated repository scores, badges, scans, configuration snapshots, and
generated assessments are evidence only for their stated controls, versions,
scope, time, and limitations. They do not replace manual review, operating
evidence, release verification, or the versioned OSPS control text.

## 7. Result, improvement plan, and claims

| Target maturity level | Controls assessed | Meets | Partial | Does not meet | Cannot determine | Stale | Conditional not applicable |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `{{LEVEL}}` | `{{COUNT}}` | `{{COUNT}}` | `{{COUNT}}` | `{{COUNT}}` | `{{COUNT}}` | `{{COUNT}}` | `{{COUNT}}` |

Result: `{{MEETS_TARGET_DOES_NOT_MEET_TARGET_CANNOT_DETERMINE}}` for
`{{EXACT_PROJECT_SCOPE_AND_OSPS_VERSION}}`.

| Priority | Control/gap | Risk and consumer effect | Action | Evidence required | Owner | Target/expiry |
| --- | --- | --- | --- | --- | --- | --- |
| `{{PRIORITY}}` | `{{ITEM}}` | `{{RISK}}` | `{{ACTION}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{DATE}}` |

Permitted statement: `{{BOUNDED_STATEMENT_OR_NONE}}`.

Prohibited or unsupported statements: `{{STATEMENTS_AND_REASONS}}`.

| Role | Name | Decision | Date | Scope and conditions |
| --- | --- | --- | --- | --- |
| Project/governance owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Security/quality owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Independent reviewer | `{{NAME}}` | `{{CONFIRM_REJECT_CANNOT_DETERMINE}}` | `{{DATE}}` | `{{DETAILS}}` |
| Release/risk authority | `{{NAME}}` | `{{APPROVE_REJECT_NOT_A_RELEASE_DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
