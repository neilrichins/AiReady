# Release checklist

Copy this checklist into the release issue or versioned release record. Replace commands and applicability decisions with project-specific values.

## Identity and authority

- [ ] Release/version, candidate number, change-set identifier, owner, and window are recorded.
- [ ] Exact commits and immutable artefact identifiers/digests are recorded for every repository/component.
- [ ] Target environment, account/tenant/region/channel, and current deployed version are confirmed.
- [ ] Required approvers and operator authority are confirmed.
- [ ] Stop, rollback, cancellation, communication, and incident owners are available.

## Scope and traceability

- [ ] Included and excluded requirements, features, fixes, migrations, dependencies, and known limitations are listed.
- [ ] Every included feature is implemented and traceable to current verification evidence.
- [ ] Approved journeys, states, content, accessibility, and design requirements are represented and verified where applicable.
- [ ] Deferred scope and behavioural changes are documented.
- [ ] Cross-repository contracts, supported combinations, and release order are current.
- [ ] User, operator, support, migration, and documentation effects are covered.

## Candidate integrity

- [ ] Clean, reproducible build completed using the documented locked toolchain and dependencies.
- [ ] Candidate artefacts are immutable and match the recorded source/configuration.
- [ ] Dependency, licence, provenance, and Software Bill of Materials checks completed where applicable.
- [ ] No secrets, private data, development configuration, or unreviewed generated output is present.
- [ ] Candidate has not changed since verification; otherwise a new candidate was created.

## Verification evidence

- [ ] Complete project quality gate passed: `{{COMMAND}}`.
- [ ] Unit/component tests passed or are not applicable.
- [ ] Contract/integration/end-to-end tests passed or are not applicable.
- [ ] Security, authorisation, and vulnerability checks passed.
- [ ] Privacy and data-handling checks passed.
- [ ] Accessibility and assistive-technology checks passed where applicable.
- [ ] Website/mobile accessibility evidence identifies the exact standard, version, scope, sample, platforms, methods, assistive technologies, failures, limitations, and accountable specialist decision.
- [ ] Applicable country, regional, sector, procurement, statement, feedback, reporting, and exception requirements have current authoritative evidence and legal/compliance ownership.
- [ ] Optional compliance packs were selected from an approved applicability decision rather than assumed for or excluded from the project.
- [ ] Every release-affecting compliance obligation has a current authoritative source, owner, control, candidate-specific evidence, exception or uncertainty, and required approval.
- [ ] Certification, assurance, legal, regulatory, privacy, security, AI, financial-crime, ethical-supply-chain, and procurement claims remain within the exact evidence and decision authority.
- [ ] Performance, capacity, reliability, and cost checks passed where applicable.
- [ ] Compatibility, installation, upgrade, migration, and idempotency checks passed.
- [ ] Backup, rollback, restore, and disaster-recovery evidence is current.
- [ ] Manual and effective-environment checks passed.
- [ ] Documentation, support, monitoring, alerts, runbooks, and communications are ready.
- [ ] Failed, blocked, stale, skipped, and not-applicable checks are explicitly recorded.

## Risk and readiness decision

- [ ] Zero unresolved release blockers remain.
- [ ] Open high/critical risks are resolved or authorised by the correct risk owner.
- [ ] Accepted risks have rationale, alternatives, contingency, owner, and expiry.
- [ ] Release readiness record names the exact approved candidate.
- [ ] Technical, security/data, product, and operations approvals are recorded as applicable.
- [ ] Required legal, compliance, privacy, audit, certification, financial-crime, procurement, or governing-body decisions are recorded where an applicable obligation requires them.

## Pre-release recovery point

- [ ] Required backups/snapshots/exports completed and identifiers recorded safely.
- [ ] Restore access and recovery procedure were verified within the required period.
- [ ] Rollback version/artefacts/configuration and reverse migration are available.
- [ ] Multi-component partial-failure and rollback order is confirmed.

## Release execution

- [ ] Preconditions remain true immediately before execution.
- [ ] Commands/procedures are executed in the approved order by authorised operators.
- [ ] Each irreversible, destructive, external, or cost-bearing step receives its required confirmation.
- [ ] Actual timestamps, versions, results, deviations, and operator are recorded.
- [ ] Stop conditions are applied without improvising around failed controls.

## Post-release verification

- [ ] Effective version and configuration match the approved candidate.
- [ ] Representative user/system journeys pass in the effective environment.
- [ ] Data counts, integrity, migrations, and scheduled/background processing are correct.
- [ ] Logs, alerts, metrics, performance, cost, and security signals are acceptable.
- [ ] Public/distributed artefacts, documentation, support routes, and release notes are correct.
- [ ] Cross-repository/component versions form a supported combination.
- [ ] Release is marked successful, rolled back, or open with an owned incident—not assumed complete.

## Closure

- [ ] Versioned release record contains final evidence and approvals.
- [ ] Released feature statuses and changelog are updated.
- [ ] Temporary access, flags, windows, credentials, and recovery artefacts are handled according to policy.
- [ ] Follow-up defects, risks, deferred checks, and lessons have owners and dates.
