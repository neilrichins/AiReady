# Governance

## Scope

This document governs the AI Ready open-source documentation framework. Adopting projects retain responsibility for their own policies, decisions, controls, evidence, and releases.

## Maintainer responsibility

Maintainers are accountable for:

- preserving the framework's project-, platform-, language-, and repository-layout neutrality;
- maintaining consistent states, terminology, evidence rules, and links across documents;
- keeping implementation, verification, approval, release, and effective results distinct;
- rejecting private project data, credentials, personal data, private prompts, and unsupported claims;
- reviewing compatibility and migration effects before changing templates or scoring; and
- administering releases, security reports, contribution decisions, and community conduct.

Current ownership is defined in [CODEOWNERS](../.github/CODEOWNERS).

## Decision process

Framework changes begin with an issue that defines the problem, intended outcome, evidence, compatibility effect, and acceptance criteria. Material changes require a pull request and maintainer review.

Decisions consider:

1. safety and evidence integrity;
2. usefulness across different technologies and operating models;
3. compatibility with existing assessments and adopted records;
4. clarity and burden for adopting projects; and
5. consistency across the complete document lifecycle.

Maintainers may reject changes that are technically valid for one project but prescribe a tool, directory, role title, or process that does not generalise.

## Change classes

| Class | Example | Required handling |
| --- | --- | --- |
| Editorial | Typographical correction with no meaning change | Review affected text and links |
| Compatible improvement | New optional guidance or clearer existing control | Review related documents and adoption effect |
| Material framework change | New hard blocker, status meaning, evidence rule, required field, or lifecycle gate | Issue, cross-document review, changelog entry, and migration explanation |
| Security correction | Unsafe guidance or disclosure-process defect | Follow the [security policy](SECURITY.md) and publish safe remediation information |

## Versions and compatibility

AI Ready uses Semantic Versioning for the framework:

- patch versions correct defects without changing intended assessment outcomes;
- minor versions add compatible guidance or boilerplate; and
- major versions may change scoring, required controls, meanings, or adoption obligations.

The [changelog](CHANGELOG.md) records notable changes. Completed assessments and release records remain historical evidence and must not be silently rewritten when the framework changes.

## AI-assisted contributions

AI-assisted contributions are permitted under the same evidence and review requirements as other changes. Contributors must disclose material AI involvement without publishing private prompts or sensitive data. An AI agent does not approve its own change, accept risk, or exercise maintainer authority.

## Conduct, security, support, and appeals

- Community participation follows the [Code of Conduct](CODE_OF_CONDUCT.md).
- Vulnerabilities follow the [security policy](SECURITY.md), not public issue discussion.
- Usage questions follow the [support guidance](SUPPORT.md).
- A contributor may request reconsideration by adding new evidence or identifying a material misunderstanding on the relevant issue. The maintainer records the final repository decision and rationale.
