# Release process

## Purpose

This process applies to any project language, packaging model, hosting platform, or repository layout. Project-specific commands and evidence belong in the [release checklist](RELEASE_CHECKLIST.md), [verification plan](VERIFICATION_PLAN.md), and the project's versioned [release record](../releases/RELEASE_EVIDENCE_TEMPLATE.md).

## Release states

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
- Create or reserve a versioned release-evidence record in the project's existing authoritative release system.

### 2. Confirm feature and traceability state

- Every included feature is `IMPLEMENTED` and links to its requirements, implementation, tests, risks, and release.
- Deferred or removed scope has an explicit decision and user/data effect.
- Multi-repository changes identify compatible version combinations and merge/release order.

### 3. Build the candidate reproducibly

- Use the documented clean environment and locked dependencies.
- Record exact commits, configuration, toolchain, dependency lock, artefact digests, provenance, and build result.
- Do not rebuild or substitute artefacts after verification without creating a new candidate.

### 4. Verify the candidate

- Run the complete automated gate and all release-scoped checks in the [verification plan](VERIFICATION_PLAN.md).
- Complete required manual, security, privacy, accessibility, performance, compatibility, migration, recovery, operational, and documentation checks.
- Record actual evidence, failures, reruns, environment, assessor, date, and limitations.

### 5. Make the readiness decision

- Classify every failed, blocked, stale, or not-run check.
- Resolve release blockers or obtain time-bounded accepted-risk approval from the correct authority.
- Confirm backup, rollback, restore, monitoring, support, communication, and incident ownership.
- Approvers decide against the named candidate artefacts—not a moving branch.

### 6. Release under explicit authority

- Reconfirm identity, environment, candidate digest/version, approvals, maintenance window, dependencies, and stop conditions.
- Follow the ordered checklist. Do not combine build, migration, deployment, publication, or destructive operations unless the project has deliberately designed and verified an atomic process.
- For multiple repositories/components, maintain compatible intermediate states and stop on unexpected partial failure.

### 7. Verify and close

- Verify effective deployed/distributed behaviour, versions, data, configuration, logs, monitoring, security boundaries, and user-visible outcomes.
- Roll back or stop when a release criterion fails; do not rewrite the record to turn a failure into a pass.
- Record the final decision, release identifiers, deviations, incidents, rollback status, known limitations, and follow-up owners.

## Emergency release

An emergency may shorten lead time but does not remove accountability, immutable artefact identity, required security/data controls, rollback, verification, or evidence. Record every skipped check, authorising owner, reason, risk, compensating control, and completion deadline.
