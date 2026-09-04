# Contributing

## Before starting

Open or select an issue. State the documentation problem, intended outcome, affected boilerplate, compatibility impact, acceptance criteria, and review evidence. Read [`AGENTS.md`](AGENTS.md), the [documentation index](README.md), and [governance](GOVERNANCE.md).

Use the readiness-question form for interpretation and the framework-improvement form for a proposed change. Follow [support guidance](SUPPORT.md) and report vulnerabilities through the [private security route](SECURITY.md).

## Document changes

- Keep the framework language-neutral and project-neutral.
- Preserve a clear route from legacy discovery through product/design intent, implementation, verification, operations, release, and feedback.
- Use precise, testable wording and expand acronyms on first use.
- Distinguish planned work, implementation, verification, release approval, and actual release results.
- Update all linked templates when a shared status, control, evidence rule, or release gate changes.
- Preserve evidence limitations and do not turn a target into a claim of achievement.
- For third-party research or guidance, use an official source, identify its
  publication type, preserve its scope and limitations, record material
  counter-evidence, and meet attribution and licensing requirements.
- Keep quotations brief and exact. Do not imply that a cited author,
  institution, publisher, or framework endorses or validates AiReady.
- Do not include private project examples, credentials, personal data, private prompts, customer information, or production identifiers.

## Review

Before requesting review:

- inspect the complete diff;
- run `git diff --check`;
- confirm internal Markdown links resolve;
- confirm placeholders remain intentional and consistently formatted;
- check tables, headings, status definitions, and document cross-references; and
- confirm no source-project information is present.

The repository's documentation workflow runs Markdown formatting and internal-link checks for pull requests. Contributors may run equivalent checks locally, but the pull-request evidence must identify what was actually checked rather than assuming workflow success.

Pull requests must explain the outcome, affected documents, adoption impact, verification performed, and known limitations.
