# Repository instructions for artificial intelligence (AI) agents

## Objective

Maintain AiReady as a project-neutral, documentation-first framework for controlled AI-assisted development, feature traceability, verification planning, and release assurance.

## Non-negotiable rules

- This is a Markdown document framework, not a software framework.
- Do not add executable project tooling, language-specific dependencies, build systems, or deployment implementations.
- Keep templates applicable to any programming language, repository layout, hosting model, and release platform.
- Do not include customer names, source-project names, private domains, credentials, account identifiers, private prompts, or production data.
- Never describe document presence, a completed checkbox, or an automated formatting check as proof that a control is effective.
- Keep implementation, verification, release-candidate, approval, and released states distinct.
- Do not describe an AiReady result as security certification, regulatory compliance, accessibility conformance, or permission to operate production.
- Every release claim must identify exact candidate artefacts and current evidence.
- Update related templates together when a status, control, evidence rule, or release gate changes.

## Document ownership

- `AiReady.md` owns AI coding-readiness assessment.
- `guidance/legacy-project-playbook.md` and `boilerplate/DISCOVERY_AND_BASELINE.md` own safe legacy discovery and baseline rules.
- `guidance/roles-and-decision-rights.md` owns cross-functional accountability and reserved human decisions.
- `product/` owns project-neutral product-intent, experience, design, and quality-requirement examples.
- `accessibility/` owns optional website, mobile application, WCAG result, and jurisdiction accessibility checklists and their claims boundaries.
- `compliance/` owns optional applicability, obligation, control, audit-evidence, framework-readiness, sector, and compliance-claim records. It must not present readiness as certification, assurance, legal advice, regulatory approval, or a universal project requirement.
- `boilerplate/PROJECT_DEFINITION.md`, `REQUIREMENTS.md`, `FEATURE_REGISTER.md`, and `ROADMAP.md` own project intent and planned scope.
- `boilerplate/TRACEABILITY.md`, `VERIFICATION_PLAN.md`, and `RISK_REGISTER.md` own evidence coverage and uncertainty.
- `boilerplate/DELIVERY_CHECKPOINT.md` owns optional evidence for bounded delivery states that do not imply release approval.
- `boilerplate/RELEASE_PROCESS.md`, `RELEASE_CHECKLIST.md`, and `RELEASE_READINESS.md` own release governance and the working candidate decision.
- `releases/` owns project-neutral immutable release-evidence examples.
- `boilerplate/ARCHITECTURE.md`, `ARCHITECTURE_REVIEW.md`, `REPOSITORY_ECOSYSTEM.md`, `TESTING.md`, `AI_SYSTEM_EVALUATION.md`, `TECHNOLOGY_COST_AND_VALUE.md`, `OPERATIONS_AND_RECOVERY.md`, and `DECISION_RECORD.md` own technical and operational context. The review and cost/value records are optional. `AI_SYSTEM_EVALUATION.md` applies only when AI materially affects system behaviour or a development control.
- `compliance/NIST_CSF_2_0_READINESS_CHECKLIST.md` owns the optional outcome-based National Institute of Standards and Technology Cybersecurity Framework (NIST CSF) profile and improvement record; it does not establish NIST CSF conformity, certification, or a release decision.
- `.github/` owns this repository's contribution and document-quality checks.

## Required workflow

1. Read the relevant template and linked framework guidance before editing.
2. Preserve project neutrality and unrelated changes.
3. Identify every document affected by a terminology, state, evidence, or process change.
4. Keep placeholders explicit and instructions testable.
5. Verify internal links, tables, headings, acronyms, and status definitions.
6. Keep source precedence, reading order, delivery checkpoints, verification levels, and command-result evidence consistent across affected records.
7. Review `git diff --check`, repository status, and the complete diff before pushing.
8. Confirm that no source-project or private information is present.

## Validation

Pull requests must pass the repository's Markdown formatting and internal-link checks. Human review remains responsible for accuracy, completeness, usability, and consistency across the document framework.
