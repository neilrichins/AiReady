# Release process

## Purpose

This process applies to any project language, packaging model, hosting platform, or repository layout. Project-specific commands and evidence belong in the [release checklist](RELEASE_CHECKLIST.md), [verification plan](VERIFICATION_PLAN.md), and the project's versioned [release record](../releases/RELEASE_EVIDENCE_TEMPLATE.md).

## Release states

A delivery checkpoint may establish that a phase, milestone, migration step, or
architectural baseline met its criteria. It remains delivery evidence only. It
does not create an immutable release candidate, approve release risk, authorise
an operation, or prove effective released behaviour. Use the optional
[delivery checkpoint record](DELIVERY_CHECKPOINT.md) where that distinction is
useful.

1. **Planned:** target outcome and provisional feature scope exist.
2. **Development:** approved scope is being implemented.
3. **Feature complete:** scoped implementation is complete; verification may remain.
4. **Release candidate:** immutable candidate artefacts exist and complete verification runs against them.
5. **Ready:** required evidence passes and unresolved risks have authorised decisions.
6. **Approved:** named release authority authorises the defined operation and artefacts.
7. **Released:** authorised artefacts are deployed/distributed and post-release checks pass.
8. **Closed:** evidence, deviations, incidents, rollback state, and follow-up work are recorded.

## Process

### 1. Define the release

- Assign version/release identifier, owner, target window, intended outcome, and change-set identifier.
- List included and explicitly excluded requirements, features, fixes, repositories, packages, migrations, and infrastructure changes.
- Define immutable candidate artefacts and supported upgrade/compatibility paths.
- Identify applicable architecture principles or external review lenses, material cross-quality trade-offs, and unresolved improvement actions.
- Define separate reliability, performance/capacity, technology cost/value, and sustainability/resource-lifecycle acceptance boundaries where applicable.
- Select any source, build, provenance, attestation, signing, Software Bill of
  Materials, or consumer-verification requirements and their exact framework,
  schema, identity, trust, and policy versions.
- When AI materially affects system behaviour, define the release bundle across code, models, prompts, retrieval, tools, permissions, parameters, policies, evaluation results, and provider-controlled state.
- Create or reserve a versioned release-evidence record in the project's existing authoritative release system.

### 2. Confirm feature and traceability state

- Every included feature is `IMPLEMENTED` and links to its requirements, implementation, tests, risks, and release.
- Review applicable checkpoint evidence, then revalidate every claim affected by the release candidate, environment, dependencies, or elapsed time.
- Deferred or removed scope has an explicit decision and user/data effect.
- Multi-repository changes identify compatible version combinations and merge/release order.

### 3. Build the candidate reproducibly

- Use the documented clean environment and locked dependencies.
- Record exact commits, configuration, toolchain, dependency lock, artefact digests, provenance, and build result.
- Bind provenance, attestations, signatures, manifests, and Software Bills of
  Materials to the immutable candidate digests and preserve the producer,
  builder, build definition, inputs, issuer, time, and distribution path.
- Do not rebuild or substitute artefacts after verification without creating a new candidate.

### 4. Verify the candidate

- Run the complete automated gate and all release-scoped checks in the [verification plan](VERIFICATION_PLAN.md).
- Complete required validation of intended user, business, operational, and
  stakeholder outcomes against the exact requirement and evaluation versions.
- Complete required manual, security, privacy, accessibility, reliability and recovery, performance and capacity, technology cost and value, sustainability, compatibility, migration, operational, and documentation checks.
- Run proportionate failure, recovery, or incident exercises required by the risk model and preserve actual outcomes and limitations.
- Complete the applicable [AI system evaluation](AI_SYSTEM_EVALUATION.md) against the exact candidate and approved evaluation-suite version.
- Where supply-chain attestations are selected, verify the subject digest,
  source revision, builder or issuer identity, signature or authenticity,
  trusted root, schema, asserted properties, freshness, and consumer policy.
- Exercise the required response to missing, malformed, expired, revoked,
  inconsistent, untrusted, or policy-nonconforming evidence without bypassing the gate.
- Record actual evidence, failures, reruns, environment, assessor, date, and limitations.
- Record the test basis, entry and exit criteria, planned and actual scope,
  failed, blocked, skipped, quarantined or stale checks, variance, and residual risk.

### 5. Make the readiness decision

- Classify every failed, blocked, stale, or not-run check.
- Resolve release blockers or obtain time-bounded accepted-risk approval from the correct authority.
- Confirm backup, rollback, restore, monitoring, support, communication, incident ownership, approved resource/budget limits, and temporary-resource cleanup, including AI behavioural baselines, safe stop, fallback, and coupled-bundle recovery where applicable.
- Approvers decide against the named candidate artefacts—not a moving branch.

### 6. Release under explicit authority

- Reconfirm identity, environment, candidate digest/version, approvals, maintenance window, dependencies, resource and spending limits, expiry/cleanup ownership, and stop conditions.
- Reconfirm that the approved consumer-verification policy and trust material
  remain current and that the exact candidate still passes them.
- Follow the ordered checklist. Do not combine build, migration, deployment, publication, or destructive operations unless the project has deliberately designed and verified an atomic process.
- For multiple repositories/components, maintain compatible intermediate states and stop on unexpected partial failure.

### 7. Verify and close

- Verify effective deployed/distributed behaviour, versions, artefact digests,
  provenance association and policy result, data, configuration, logs,
  monitoring, security boundaries, user-visible and business outcomes,
  cost/usage signals, and resource cleanup.
- Roll back or stop when a release criterion fails; do not rewrite the record to turn a failure into a pass.
- Record the final decision, release identifiers, deviations, incidents, rollback status, known limitations, and follow-up owners.

## Emergency release

An emergency may shorten lead time but does not remove accountability, immutable artefact identity, required security/data controls, rollback, verification, or evidence. Record every skipped check, authorising owner, reason, risk, compensating control, and completion deadline.
