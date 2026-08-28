# Contributing

## Before starting

1. Read the project README, contribution rules, Code of Conduct, security policy, and applicable repository/AI-agent instructions.
2. Create or select an issue/change set with the problem, observable outcome, acceptance criteria, scope, constraints, risks, required evidence, and owner.
3. Identify affected requirements, journeys/design states, components, repositories, interfaces, data, operations, documentation, and releases.
4. Confirm whether architecture, security/privacy, accessibility, migration, or other specialist review is required.
5. Do not include sensitive information in issues, prompts, branches, fixtures, logs, or evidence.

## Development environment

| Requirement | Project value |
| --- | --- |
| Supported runtime/toolchain | `{{VERSIONS}}` |
| Clean installation/setup | `{{COMMAND_OR_PROCEDURE}}` |
| Local run/preview | `{{COMMAND_OR_PROCEDURE}}` |
| Complete quality gate | `{{COMMAND}}` |
| System-level/multi-repository gate | `{{COMMAND_OR_NOT_APPLICABLE}}` |
| Test data/environment policy | `{{POLICY_LINK_OR_LOCATION}}` |

A clean checkout must not depend on undocumented workstation state, personal credentials, or untracked configuration.

## Change workflow

- Preserve source ownership, generated-file boundaries, unrelated changes, and backwards-compatibility promises.
- Make the smallest coherent change that satisfies the approved outcome.
- Add or update tests for behaviour, alternate and failure states, permissions, data, compatibility, regression, and recovery as applicable.
- Update requirements, design, architecture, interfaces, operations, support, and release documentation in the same change set when affected.
- Record significant decisions and migrations; do not hide technical debt or deferred checks.
- Treat AI-generated output as untrusted and review dependencies, licences, commands, configuration, queries, markup, URLs, claims, and citations.

## Commit and pull-request expectations

- Keep commits reviewable and explain intent, not only changed files.
- Link the issue/change-set identifier across all affected repositories.
- Describe outcome, scope, compatibility, migration, data, operational, accessibility, security, and AI involvement.
- Identify exact verification commands, environments, results, manual checks, failed/skipped/stale checks, and evidence.
- State limitations, accepted risks, follow-up owners, rollback, and release effect.
- Never present a moving branch, planned check, or unrelated passing workflow as candidate-specific evidence.

## Review and approval

Pull requests require `{{NUMBER_AND_REQUIRED_ROLES}}` reviewer(s), passing required Continuous Integration (CI), resolved release-blocking findings, and recorded manual or specialist checks where applicable.

Reviewers assess:

- correctness against approved product and design intent;
- architecture, maintainability, source ownership, and compatibility;
- security, privacy, data, accessibility, reliability, and operational effects;
- test quality and evidence scope, not only test status;
- documentation, migration, rollback, monitoring, support, and release effects; and
- whether the author had authority for every action performed.

AI-generated changes receive the same or greater scrutiny as human-written changes. The author or AI agent cannot provide the only approval for a material change.

## Definition of done

A contribution is complete only when acceptance criteria pass, required reviewers approve, evidence is current for the exact change, affected documentation and operations are updated, unresolved limitations are explicit, and the change is ready to enter—but has not automatically entered—the release process.
