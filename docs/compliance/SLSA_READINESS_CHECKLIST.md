# Supply-chain Levels for Software Artifacts readiness checklist

Use this optional record when a producer, build platform, software consumer,
customer, contract, procurement process, or risk owner selects Supply-chain
Levels for Software Artifacts (SLSA) as an assurance objective.

Use the [current approved SLSA specification](https://slsa.dev/spec/) as the
authoritative source. Record its exact version and status; do not infer them
from this template. Source and Build are separate tracks with separate levels,
requirements, roles, and evidence. A result for one track does not establish a
result for another.

This checklist organises readiness evidence. It does not establish SLSA
conformance, certification, third-party assurance, software security, or
release approval.

## Assessment identity and authority

| Field | Value |
| --- | --- |
| Product/system and owner | `{{NAME_AND_OWNER}}` |
| Assessment purpose | `{{INTERNAL_OBJECTIVE_CUSTOMER_CONTRACT_PROCUREMENT_OR_OTHER}}` |
| Exact SLSA specification version/status | `{{VERSION_AND_APPROVED_STATUS}}` |
| Authoritative source and retrieval date | `{{URL_AND_DATE}}` |
| Repositories, protected branches, and source systems | `{{SCOPE_AND_IDENTIFIERS}}` |
| Artefact types, packages, and distribution channels | `{{SCOPE_AND_IDENTIFIERS}}` |
| Candidate source revisions and artefact digests | `{{IMMUTABLE_IDENTIFIERS}}` |
| Source organisation and source control system | `{{OWNERS_AND_SYSTEMS}}` |
| Software producer and build platform | `{{OWNERS_AND_SYSTEMS}}` |
| Provenance distributor and software consumer/verifier | `{{OWNERS_AND_SYSTEMS}}` |
| Assessment owner and independent reviewer | `{{NAMES_AND_ROLES}}` |
| Evidence index | `{{LOCATION}}` |
| Assessment date and review trigger | `{{DATE_AND_TRIGGER}}` |

Artificial intelligence (AI) authority and stop conditions:
`{{PERMITTED_DISCOVERY_ANALYSIS_VERIFICATION_AND_PROHIBITED_ACTIONS}}`.

## 1. Applicability and target decision

Select tracks independently. Use the exact SLSA claim syntax required by the
selected specification, including track, level, and version. `NOT SELECTED`
means no claim is intended; it does not mean the risk is absent.

| Track | Scope | Current evidenced level | Target level | Requirement source | Consumer need | Owner | Decision/gap |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Source | `{{REPOSITORIES_BRANCHES_AND_REVISION_RANGE}}` | `{{LEVEL_OR_NOT_ASSESSED}}` | `{{LEVEL_OR_NOT_SELECTED}}` | `{{VERSIONED_LINK}}` | `{{EXPECTED_PROPERTY}}` | `{{OWNER}}` | `{{DECISION}}` |
| Build | `{{ARTEFACT_TYPES_BUILD_DEFINITIONS_AND_PLATFORMS}}` | `{{LEVEL_OR_NOT_ASSESSED}}` | `{{LEVEL_OR_NOT_SELECTED}}` | `{{VERSIONED_LINK}}` | `{{EXPECTED_PROPERTY}}` | `{{OWNER}}` | `{{DECISION}}` |

For each selected target, confirm that every requirement at that level and all
required lower levels is included. Do not average partial results into a level.

## 2. Source-track crosswalk

Map the exact requirements from the selected
[Source-track specification](https://slsa.dev/spec/v1.2/source-requirements).
The rows below are assurance concerns, not substitutes for the official text.

| Source concern | Branch/revision scope | Required level/reference | Enforced mechanism | Producer evidence | Verifier evidence | Result/gap | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Discrete, immutable source revisions in version control | `{{SCOPE}}` | `{{REFERENCE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Continuous, retained change history | `{{SCOPE}}` | `{{REFERENCE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Source provenance creation and protection | `{{SCOPE}}` | `{{REFERENCE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Organisation-defined technical controls | `{{SCOPE}}` | `{{REFERENCE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Trusted-person, trusted-robot, and administrator boundaries | `{{SCOPE}}` | `{{REFERENCE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Required independent or two-party review | `{{SCOPE}}` | `{{REFERENCE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Source provenance or verification-summary distribution | `{{SCOPE}}` | `{{REFERENCE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Consumer verification of revision identity and asserted properties | `{{SCOPE}}` | `{{REFERENCE}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |

- [ ] Identify the exact protected branches, onboarding revision, continuity
  boundary, exceptions, administrators, trusted people, and trusted automation.
- [ ] Test effective source-system enforcement; a written review policy or
  repository setting screenshot alone does not prove that controls cannot be bypassed.
- [ ] Record history rewrites, force updates, moving references, emergency paths,
  imported history, mirrored repositories, bots, and inherited platform controls.
- [ ] Verify source attestations against the consumer's expected repository,
  revision, branch or reference, issuer, level, and organisation properties.

## 3. Build-track crosswalk

Map the exact producer, build-platform, provenance-distribution, consumer, and
build-platform-assessment requirements from the selected
[Build-track specification](https://slsa.dev/spec/v1.2/build-track-basics).

| Build concern | Artefact/build scope | Required level/reference | Producer/platform implementation | Consumer verification | Evidence | Result/gap | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Consistent build process and identified build definition | `{{SCOPE}}` | `{{REFERENCE}}` | `{{IMPLEMENTATION}}` | `{{VERIFICATION}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Automatically generated provenance bound to each subject digest | `{{SCOPE}}` | `{{REFERENCE}}` | `{{IMPLEMENTATION}}` | `{{VERIFICATION}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Provenance completeness and accurate external parameters/dependencies | `{{SCOPE}}` | `{{REFERENCE}}` | `{{IMPLEMENTATION}}` | `{{VERIFICATION}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Hosted build-platform boundary where required | `{{SCOPE}}` | `{{REFERENCE}}` | `{{IMPLEMENTATION}}` | `{{VERIFICATION}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Platform-generated provenance authenticity | `{{SCOPE}}` | `{{REFERENCE}}` | `{{IMPLEMENTATION}}` | `{{VERIFICATION}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Build isolation between tenants or builds | `{{SCOPE}}` | `{{REFERENCE}}` | `{{IMPLEMENTATION}}` | `{{VERIFICATION}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Build-service identity, signing material, and privileged control protection | `{{SCOPE}}` | `{{REFERENCE}}` | `{{IMPLEMENTATION}}` | `{{VERIFICATION}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Provenance availability and association with the distributed artefact | `{{SCOPE}}` | `{{REFERENCE}}` | `{{IMPLEMENTATION}}` | `{{VERIFICATION}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Consumer policy evaluation before use, deployment, or release | `{{SCOPE}}` | `{{REFERENCE}}` | `{{IMPLEMENTATION}}` | `{{VERIFICATION}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Build-platform assessment for the claimed level | `{{SCOPE}}` | `{{REFERENCE}}` | `{{IMPLEMENTATION}}` | `{{VERIFICATION}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |

Reproducible or hermetic builds, dependency attestations, vulnerability
analysis, and software bills of materials may strengthen assurance, but do not
attribute them to a SLSA level unless the selected specification does so.

## 4. Attestation and verification contract

A generated or signed attestation is not assurance until the intended consumer
verifies the exact subject and asserted properties against an approved policy.

| Contract element | Approved expectation | Actual evidence/value | Verification method/result | Failure or revocation behaviour | Owner |
| --- | --- | --- | --- | --- | --- |
| Subject name, type, and immutable digest | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Statement and predicate type/schema/version | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Source repository, revision, reference, and history boundary | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Builder or source-issuer identity | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Build definition, entry point, parameters, and inputs | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Signature, certificate, keyless identity, or equivalent authenticity mechanism | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Trust root, identity constraints, validity, and rotation | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Transparency, timestamp, replay, and freshness controls | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Distribution, discovery, access, retention, and correction | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Consumer verification policy and policy version | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Revoked, expired, missing, malformed, inconsistent, or untrusted evidence | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |

Where selected, [in-toto](https://in-toto.io/),
[Sigstore](https://docs.sigstore.dev/), or another implementation may carry or
authenticate attestations. [The Update Framework](https://theupdateframework.io/)
may support update-system trust and compromise recovery. Selection of one tool
does not prove that its identities, policies, metadata, operations, or consumer
verification are correctly configured.

## 5. Interconnected repositories and supply-chain edges

| Producer/component | Source revision and Source result | Build subject/digest and Build result | Consuming component | Accepted policy/version | Supported combination | Verification evidence | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{PRODUCER}}` | `{{IDENTITY_AND_RESULT}}` | `{{IDENTITY_AND_RESULT}}` | `{{CONSUMER}}` | `{{POLICY}}` | `{{COMBINATION}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

- [ ] Trace generated clients, schemas, packages, containers, infrastructure,
  models, datasets, and deployment manifests to their authoritative producers.
- [ ] Verify every required producer-consumer edge, not only each repository in isolation.
- [ ] Record permitted version skew, staged-release order, intermediate states,
  stale or unavailable provenance, rollback order, and partial-failure ownership.
- [ ] Reassess the system claim when a source system, builder, trust root,
  attestation format, consumer policy, distribution path, or component changes.

## 6. Exceptions, limitations, and remediation

| Requirement/reference | Affected scope | Result | Evidence/limitation | Risk and consumer effect | Treatment/expiry | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{REFERENCE}}` | `{{SCOPE}}` | `{{MEETS_PARTIAL_DOES_NOT_MEET_CANNOT_DETERMINE_STALE}}` | `{{EVIDENCE}}` | `{{RISK}}` | `{{ACTION_AND_DATE}}` | `{{OWNER}}` |

Missing evidence, an unassessed build platform, or failure to verify provenance
must remain visible. Risk acceptance may permit a bounded release under the
project's authority, but it does not raise the evidenced SLSA level.

## 7. Result and approval

| Track | Exact scope | Evidenced result | Unmet requirements | Evidence index | Reviewer/date |
| --- | --- | --- | --- | --- | --- |
| Source | `{{SCOPE}}` | `{{EXACT_TRACK_LEVEL_VERSION_OR_NO_LEVEL}}` | `{{GAPS_OR_NONE}}` | `{{LOCATION}}` | `{{OWNER_DATE}}` |
| Build | `{{SCOPE}}` | `{{EXACT_TRACK_LEVEL_VERSION_OR_NO_LEVEL}}` | `{{GAPS_OR_NONE}}` | `{{LOCATION}}` | `{{OWNER_DATE}}` |

Permitted statement: `{{BOUNDED_INTERNAL_OR_EXTERNAL_STATEMENT}}`.

Prohibited or unsupported statements: `{{STATEMENTS_AND_REASONS}}`.

| Role | Name | Decision | Date | Scope and conditions |
| --- | --- | --- | --- | --- |
| Source owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Build-platform/producer owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Consumer/security owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Independent reviewer | `{{NAME}}` | `{{CONFIRM_REJECT_CANNOT_DETERMINE}}` | `{{DATE}}` | `{{DETAILS}}` |
| Release/risk authority | `{{NAME}}` | `{{APPROVE_REJECT_NOT_A_RELEASE_DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
