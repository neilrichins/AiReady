# Methodology

## Purpose

AI Ready assesses whether a repository provides enough context, deterministic controls, authority boundaries, and evidence for controlled artificial intelligence (AI)-assisted coding. It evaluates the development system around an AI agent, not the intelligence or reliability of a particular model.

For an unfamiliar or legacy system, complete discovery and baseline work before scoring controls as effective. Use the evidence labels and safety boundary in the [legacy-project playbook](legacy-project-playbook.md); do not award points from inference or unverified documentation.

## Evidence hierarchy

Evidence strength is claim-dependent. Prefer:

1. direct, current, reproducible evidence from the exact assessed commit or artefact in the environment required by the claim;
2. independently reproduced test, inspection, analysis, demonstration, or policy-enforcement output within the relevant boundary;
3. reviewed configuration, source, immutable records, and observed effective state that directly support the claim;
4. current operational documentation supported by identifiable implementation or practice; and
5. an owner statement with a dated remediation commitment.

File presence alone is weak evidence. A repository can contain an excellent policy that nobody follows or a workflow that never runs.

There is no universal promotion path between verification levels. A simulated
test may be stronger than an anecdotal production observation for an isolated
algorithmic claim, while only effective-environment evidence can prove an
effective-environment claim. Record substitutions, real boundaries, omitted
levels, environment differences, and what the result cannot establish.

## Scoring

Each of the ten areas is worth ten points. Controls receive 0, 1, 2, or `N/A`. Normalise an area with excluded controls to ten points:

```text
area score = earned control points / applicable control points * 10
```

Round only the final score to the nearest whole number. Preserve the underlying calculation in the assessment.

## Hard blockers

Hard blockers represent conditions where numerical averaging is unsafe. For example, excellent documentation cannot compensate for an AI agent holding unrestricted production credentials. An assessment with any unresolved blocker cannot approve controlled automation.

## Readiness levels

| Level | Numerical range | Maximum permitted operating model |
| --- | ---: | --- |
| Not ready | 0–39 | Limit AI to explicitly authorised read-only discovery or human-applied blocker remediation. |
| Assisted only | 40–59 | AI proposes; a human inspects and applies. |
| Supervised | 60–79 | AI may edit an isolated branch or worktree; humans review every change. |
| Controlled automation | 80–100 | AI may complete bounded tasks and open pull requests, subject to zero blockers and explicit authority. |

The score selects an upper bound, not an automatic entitlement. Owners may impose a more restrictive level.

`Not ready` does not prohibit an owner from authorising narrowly bounded, read-only AI discovery or human-applied remediation suggestions under explicit data, execution, and review controls. It prohibits treating the project as ready for normal AI coding, autonomous integration, or release activity.

## Reassessment triggers

Reassess after:

- a material architecture or data-flow change;
- a repository split, merge, new shared interface, or supported-version change;
- a new model, agent, plugin, connector, or execution tool;
- expanded filesystem, network, cloud, communication, or production authority;
- a new sensitive-data class or legal obligation;
- a build, test, deployment, migration, or recovery redesign;
- a material security incident or control failure; or
- the review date recorded in the assessment.

## Claims boundary

AI Ready does not establish security, privacy, legal compliance, software quality, accessibility conformance, model accuracy, or production readiness. It establishes that named controls and evidence have been assessed against a consistent framework.

## Relationship to other practices

AI Ready is designed to complement, not replace or attest conformity with:

- the [National Institute of Standards and Technology Secure Software Development Framework](https://csrc.nist.gov/projects/ssdf) for secure software-development practices;
- the [Open Source Project Security Baseline](https://baseline.openssf.org/) and [OpenSSF Scorecard](https://www.scorecard.dev/) for open-source security controls and machine-checkable repository signals; and
- the adopting project's applicable product, design, accessibility, privacy, reliability, safety, quality, legal, contractual, and operational standards.

Map overlapping controls to one authoritative source and retain the stronger applicable requirement. A passing external badge, score, or automated check remains evidence only for the controls and version it actually assessed.

## Multi-repository systems

Assess the system boundary, not only the repository containing the assessment. Every interconnected repository must have a named owner and an explicit role. Evidence must identify:

- the approved dependency baseline, its scope, currency, evidence, and review triggers;
- the authoritative source for shared schemas, interfaces, generated clients, infrastructure, and documentation;
- dependency direction and supported version combinations;
- how one logical change is traced across issues, branches, commits, and pull requests;
- contract, integration, and end-to-end tests that exercise repository boundaries;
- compatible intermediate states during staged rollout;
- merge, packaging, migration, deployment, and rollback sequence;
- partial-failure detection and recovery ownership; and
- which repositories the AI agent may read, modify, or operate.

A green result from one repository is insufficient when the effective system depends on unverified changes elsewhere.
After establishing an approved baseline, later changes may use a recorded delta
review. Reuse is valid only while the baseline remains current and the system
boundary is unchanged; it does not replace candidate-specific verification.
