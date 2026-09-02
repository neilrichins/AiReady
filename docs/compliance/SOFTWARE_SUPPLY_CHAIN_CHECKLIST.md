# Software supply-chain checklist

Use this optional record for third-party source, packages, libraries, containers,
build services, hosted services, devices, datasets, models, generated artefacts,
and other dependencies that can affect a software product or release.

The United States National Telecommunications and Information Administration
(NTIA) publishes public [minimum elements for a Software Bill of Materials
(SBOM)](https://www.ntia.gov/files/ntia/publications/sbom_minimum_elements_report.pdf).
Select the actual legal, contractual, procurement, licence, security, and format
requirements that apply; an SBOM alone is not supply-chain assurance.

## Assessment identity

| Field | Value |
| --- | --- |
| Product/system and owner | `{{NAME_AND_OWNER}}` |
| Exact candidate and repositories | `{{COMMITS_ARTEFACTS_DIGESTS_AND_REPOSITORIES}}` |
| Build and distribution channels | `{{SYSTEMS}}` |
| Adopted sources/formats/versions | `{{SOURCES}}` |
| Assessment owner and reviewers | `{{NAMES_AND_ROLES}}` |
| Evidence index | `{{LOCATION}}` |
| Date/review trigger | `{{DATE_AND_TRIGGER}}` |

## 1. Dependency and supplier inventory

| Item | Type | Supplier/source | Exact version/digest | Purpose/consumer | Licence/terms | Data/access | Criticality | Owner | End-of-support |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{PACKAGE_SERVICE_MODEL_DATASET_DEVICE_OR_OTHER}}` | `{{SOURCE}}` | `{{IDENTIFIER}}` | `{{USE}}` | `{{TERMS}}` | `{{ACCESS}}` | `{{LEVEL}}` | `{{OWNER}}` | `{{DATE}}` |

- [ ] Inventory direct, transitive, development, test, build, runtime, optional,
  embedded, dynamically loaded, generated, vendored, and externally hosted dependencies.
- [ ] Include package registries, source archives, base images, operating systems,
  actions/plugins, compilers, build images, firmware, mobile software development
  kits, browser assets, models, prompts, datasets, fonts, media, and services.
- [ ] Map each dependency to consuming repositories, builds, artefacts, services,
  data, permissions, network access, users, customers, and release versions.
- [ ] Identify unknown, unowned, duplicated, abandoned, unpinned, unauthorised,
  unsupported, unverifiable, or manually introduced dependencies.

## 2. Selection and acquisition

- [ ] Define approval criteria for necessity, provenance, maintenance, security,
  privacy, accessibility, resilience, compatibility, licence, cost, sustainability,
  sanctions, export, ethical sourcing, and exit risk as applicable.
- [ ] Obtain dependencies from approved authentic sources over protected channels.
- [ ] Verify names, namespaces, publishers, versions, signatures, checksums,
  provenance, release history, and resistance to substitution or dependency confusion.
- [ ] Review supplier ownership, support, vulnerability handling, incident notice,
  sub-suppliers, data use, locations, audit evidence, contractual remedies, and termination.
- [ ] Prevent artificial intelligence (AI) from adding a dependency, licence
  obligation, external service,
  data transfer, paid commitment, or new trust boundary without required approval.

## 3. Licence and intellectual-property review

| Component/content | Licence or terms/version | Use/distribution model | Obligations | Compatibility decision | Notices/source/action | Legal owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{LICENCE}}` | `{{USE}}` | `{{OBLIGATIONS}}` | `{{DECISION}}` | `{{ACTION}}` | `{{OWNER}}` |

- [ ] Identify open-source, source-available, commercial, proprietary, data,
  model, content, media, font, documentation, and generated-output terms.
- [ ] Verify attribution, notice, licence-copy, source-offer, disclosure, marking,
  modification, distribution, network-use, patent, trademark, and use restrictions.
- [ ] Resolve incompatible obligations and missing provenance before release.
- [ ] Generate and verify notices and source bundles from the exact candidate;
  do not rely on an earlier inventory or AI classification alone.
- [ ] Obtain qualified legal review for ambiguous licences, model/data rights,
  generated material, patents, redistribution, or reciprocal obligations.

## 4. Build and artefact integrity

- [ ] Use controlled, reviewable, repeatable build definitions and isolated workers.
- [ ] Pin or otherwise control inputs according to risk and update policy.
- [ ] Protect source, dependency caches, registries, build workers, credentials,
  signing keys, provenance, artefact stores, release channels, and update metadata.
- [ ] Prevent unreviewed network downloads, mutable tags, local-only inputs,
  environment leakage, and unauthorised build substitution where required.
- [ ] Record builder, source commit, dependencies, parameters, environment,
  outputs, digests, signing, provenance, time, and verification result.
- [ ] Define which producer, build platform, distributor, consumer, and verifier
  owns each supply-chain assertion and decision.
- [ ] Verify that the distributed or deployed artefact matches the approved build
  and that its provenance satisfies a versioned consumer policy before use.

### Artefact attestation and consumer-verification record

Complete this table when provenance, attestations, signatures, or verifiable
release manifests are selected. A generated or signed record is not assurance
until the consumer verifies the exact subject and claimed properties against an
approved policy. Use the optional
[SLSA readiness checklist](SLSA_READINESS_CHECKLIST.md) when a Supply-chain
Levels for Software Artifacts (SLSA) track or level is an explicit objective.

| Element | Approved expectation | Actual identity/value | Verification method and policy version | Result/evidence | Failure/revocation behaviour | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| Subject artefact and immutable digest | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_POLICY}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Source repository, revision, and reference | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_POLICY}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Builder identity and build-platform boundary | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_POLICY}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Build definition, entry point, parameters, and inputs | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_POLICY}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Statement, predicate, or manifest type/schema/version | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_POLICY}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Signer or attestation issuer identity | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_POLICY}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Signature, certificate, keyless identity, or equivalent | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_POLICY}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Trust root, identity constraints, validity, and rotation | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_POLICY}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Distribution, discovery, transparency, retention, and correction | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_POLICY}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| Consumer-side policy decision before release, deployment, or use | `{{EXPECTATION}}` | `{{VALUE}}` | `{{METHOD_AND_POLICY}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |

- [ ] Reject, quarantine, or explicitly escalate missing, malformed, expired,
  revoked, inconsistent, untrusted, or policy-nonconforming evidence.
- [ ] Test verification failure and trust-root rotation without bypassing the gate.
- [ ] Preserve the verification policy, trusted identities, result, time, tool
  version, and subject digest—not merely the command that generated the attestation.
- [ ] Verify every producer-consumer edge across interconnected repositories;
  one valid attestation does not establish the integrity of the assembled system.

## 5. SBOM generation and verification

Where selected, identify the exact System Package Data Exchange (SPDX),
CycloneDX, Software Identification (SWID), or other format and schema version.

| SBOM field/process | Requirement | Result | Evidence/limitation |
| --- | --- | --- | --- |
| Format and schema version | `{{SPDX_CYCLONEDX_SWID_OR_OTHER}}` | `{{RESULT}}` | `{{EVIDENCE}}` |
| Supplier, component, version, identifiers, and relationships | `{{REQUIREMENT}}` | `{{RESULT}}` | `{{EVIDENCE}}` |
| Author, timestamp, scope, depth, and known unknowns | `{{REQUIREMENT}}` | `{{RESULT}}` | `{{EVIDENCE}}` |
| Candidate identity and integrity | `{{REQUIREMENT}}` | `{{RESULT}}` | `{{EVIDENCE}}` |
| Generation frequency and update trigger | `{{REQUIREMENT}}` | `{{RESULT}}` | `{{EVIDENCE}}` |
| Access, distribution, correction, retention, and disclosure | `{{REQUIREMENT}}` | `{{RESULT}}` | `{{EVIDENCE}}` |

- [ ] Generate the SBOM from the exact released artefact or reconcile it against
  that artefact, not merely a manifest or source tree.
- [ ] Test for omitted transitive, bundled, operating-system, dynamically loaded,
  generated, vendored, and container-layer components.
- [ ] Record unresolved components and known unknowns rather than silently dropping them.
- [ ] Protect sensitive supply-chain information while meeting authorised
  customer, regulator, vulnerability, and incident use cases.

## 6. Vulnerability and lifecycle management

- [ ] Monitor relevant advisories and vulnerability sources using verified component identity.
- [ ] Triage reachability, exploitability, configuration, affected artefacts,
  customers, data, severity, exposure, and compensating controls.
- [ ] Define remediation and disclosure targets according to risk and obligations.
- [ ] Test updated components for security, behaviour, compatibility, licensing,
  performance, accessibility, data, migration, rollback, and integration effects.
- [ ] Track unsupported and end-of-life components, temporary exceptions,
  replacement plans, expiry, and risk acceptance.
- [ ] Preserve affected and unaffected rationale, scans, false-positive review,
  mitigation, retest, customer communication, and effective-release evidence.

## 7. Supplier failure, incident, and exit

- [ ] Define detection and response for compromised packages, revoked keys,
  malicious maintainers, supplier breach, service outage, data misuse, legal
  restriction, sanctions change, acquisition, abandonment, and pricing or term changes.
- [ ] Test dependency unavailability, degraded mode, isolation, rollback,
  replacement, data export/deletion, credential revocation, and service exit.
- [ ] Coordinate incident facts and disclosure without making unsupported attribution.
- [ ] Update inventories, threat models, controls, SBOMs, evidence, and releases after change.

## 8. Release decision

| Input | Result/evidence |
| --- | --- |
| Complete dependency/supplier inventory | `{{RESULT}}` |
| Provenance, acquisition, and approval | `{{RESULT}}` |
| Licence and intellectual-property obligations | `{{RESULT}}` |
| Build, provenance, signing, and artefact integrity | `{{RESULT}}` |
| Candidate-specific SBOM | `{{RESULT}}` |
| Vulnerability, lifecycle, supplier, and exit risks | `{{RESULT}}` |

Decision: `{{READY_NOT_READY_DEFERRED_WITH_SCOPE_AND_CONDITIONS}}`.

| Role | Name | Decision | Date | Scope/conditions |
| --- | --- | --- | --- | --- |
| Engineering/build owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Security owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Legal/procurement owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Release authority | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{DETAILS}}` |
