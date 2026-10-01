# Methodology

## Purpose

AiReady assesses whether a repository provides enough context, deterministic controls, authority boundaries, and evidence for controlled artificial intelligence (AI)-assisted coding. It evaluates the development system around an AI agent, not the intelligence or reliability of a particular model.

AiReady informs improvement and accountable decisions. It does not grant or
withhold permission to continue developing a project, and it sets no mandatory
minimum score. No framework item is a project requirement solely because
AiReady includes it; it becomes a gate only when the Product Owner, equivalent
accountable product/service owner, or another governing authority adopts it as
one.

The assessment measures implementation and evidence for applicable AiReady
practices. It does not assess whether the Product Owner chose the right product,
create product requirements, or approve the product.

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

## Mechanical comprehensibility and agent efficiency

Assess whether an unfamiliar AI agent can mechanically navigate the codebase,
bound a representative change, and reach actionable verification. Do not infer
this capability from document presence, an AI-generated repository summary, or
the confidence expressed by an agent.

The approved AI agent performs two to five representative probes from fresh
contexts using the starting material normally available to a newly assigned
contributor. The accountable owner chooses change classes that represent the
intended AI operating scope. A human reviewer verifies material sources,
results, limitations, and the resulting authority decision. High-risk or
controlled-automation decisions should use an independent repeat with a
separate session, agent, or model when practicable.

Each probe should establish whether the agent can:

- locate authoritative instructions, context, implementation, and generated
  boundaries without undisclosed coaching;
- identify canonical concepts and distinguish intentional variants from
  accidental duplication;
- trace affected components, contracts, repositories, data, operations, and
  recovery concerns;
- recognise ambiguity, missing authority, and stop conditions;
- select and safely run the narrowest applicable deterministic check; and
- interpret the result well enough to distinguish a product failure from an
  environment, configuration, data, or dependency failure.

Record the initial context, discovery path, sources consulted, interventions,
commands, results, elapsed feedback time, dead ends, assumptions, and
limitations in the discovery baseline. A later rerun uses a fresh context so
retained agent knowledge does not conceal continuing repository friction.

The result is `EFFECTIVE`, `FRICTION`, `BLOCKED`, or `NOT ASSESSED`. A blocked
result that prevents safe navigation, impact analysis, or verification is a
hard blocker. An unassessed change class cannot support `Supervised` or
`Controlled automation` authority for that class. Friction requires owned
remediation or a bounded risk decision.

Do not turn tokens consumed, files consulted, elapsed time, repository size, or
dependency depth into universal pass thresholds. They are diagnostic signals.
The governing questions are whether the context and effort were necessary,
whether the result was correct and reproducible, and whether an accountable
reviewer can safely act on it.

## Advisory model selection for assessment

The initial assessment of an unfamiliar or legacy system is reasoning- and
context-intensive. As a guideline, prefer the strongest suitable AI model
available within the project's approved access, data, security, cost, and time
boundaries. “Strongest suitable” does not automatically mean newest, largest,
or most expensive. Consider repository-scale code analysis, reasoning quality,
context capacity, tool use, supported languages, multi-repository work, and the
ability to return inspectable evidence.

When current official vendor guidance is accessible, compare the selected
model, tool, and configuration with the vendor's published recommendations for
coding, codebase analysis, or agentic software work. Record the official source,
access date, recommendation, comparison, selection rationale, and known
limitations. Do not treat marketing claims as proof of performance; use the
fresh-context probes and human review to evaluate the actual result.

This comparison is advisory and does not affect the AiReady score or create a
hard blocker. If official guidance is unavailable, inaccessible, ambiguous,
requires access the assessor does not have, or does not cover the intended use,
record `SKIPPED` and the reason. Continue the assessment without guessing or
substituting unofficial advice. The Product Owner or other authorised owner may
choose any permitted model and accept the resulting limitations.

## Scoring

Each of the ten areas is worth ten points. Controls receive 0, 1, 2, or `N/A`. Normalise an area with excluded controls to ten points:

```text
area score = earned control points / applicable control points * 10
```

Round only the final score to the nearest whole number. Preserve the underlying calculation in the assessment.

The resulting 0–100 score reports how well applicable AiReady controls are
implemented and evidenced within the assessed boundary. A low score may reflect
documentation or control gaps the Product Owner has knowingly accepted. It is
not a product requirement, product-value judgement, approval, or veto.

### Comparison and readiness trends

Compare assessments only when the system boundary, intended AI use, control
definitions, scoring method, and evidence standard are sufficiently consistent.
Record control-level changes, new and resolved hard blockers, changed evidence,
and the reason for each material improvement or regression. If those conditions
are not comparable, explain the break and establish a new baseline instead of
presenting a misleading trend.

An aggregate score is a navigational summary. It does not show which risk
changed, compensate for a blocker, prove causal improvement, or become a merge
or release gate without a separately approved, evidence-based control and named
decision owner. Automated measurements and static-analysis results may support
a control assessment only within their demonstrated scope.

The score supports the framework's evidence-based AI coding recommendation.
The Product Owner, or equivalent accountable product/service owner, may accept
that score, accept poorly documented code, exclude a proposed product
requirement, decline or defer any remediation, or authorise a different product
decision through documented risk acceptance. The decision does not change the
score or evidence.

## Hard blockers

Hard blockers represent conditions where numerical averaging is unsafe. For
example, excellent documentation cannot compensate for an AI agent holding
unrestricted production credentials. An assessment with any unresolved blocker
cannot provide an unqualified AiReady recommendation for controlled automation.

An accountable owner may nevertheless accept any blocker or other risk within
their decision authority and authorise continued development or a stated AI
operating model. Record the owner, scope, rationale, known consequences,
alternatives, evidence, contingency, and review trigger. The blocker remains
`FAIL`; risk acceptance does not convert it to `PASS` or `NOT APPLICABLE`. The
Product Owner may skip the associated remediation and continue development.
The AI agent must not infer this decision.

## Readiness levels

| Level | Numerical range | Maximum evidence-supported operating model |
| --- | ---: | --- |
| Not ready | 0–39 | Limit AI to explicitly authorised read-only discovery or human-applied blocker remediation. |
| Assisted only | 40–59 | AI proposes; a human inspects and applies. |
| Supervised | 60–79 | AI may edit an isolated branch or worktree; humans review every change. |
| Controlled automation | 80–100 | AiReady may recommend bounded tasks and pull requests when there are zero unresolved blockers and explicit authority. |

The score establishes the highest operating model AiReady can recommend from
the recorded evidence. It is not an automatic entitlement or prohibition.
Owners may choose a more restrictive model or explicitly accept documented risk
and authorise a broader one.

`Not ready` describes the evidence, not whether development may continue. An
owner may continue human development, authorise narrowly bounded AI use, accept
the current limitations, or decline every proposed improvement. AiReady must
retain the score, failures, blockers, accepted risks, and decision without
presenting the owner-selected operating model as evidence-supported readiness.

## Owner decision and risk acceptance

For each finding, the accountable owner may choose `REMEDIATE`,
`ACCEPT AND SKIP`, `DEFER`, `DECLINE`, `TRANSFER`, or `NOT APPLICABLE`. Record
the decision and rationale. `NOT APPLICABLE` describes scope and needs
supporting evidence; `ACCEPT AND SKIP` records a risk decision, leaves the
control's evidence result unchanged, and removes remediation from the owner's
selected work.

AiReady does not override project governance. Risk acceptance must be made by
someone with decision authority over the affected outcome. It does not erase or
waive a legal, regulatory, contractual, licensing, security, accessibility, or
other obligation; it records the decision to proceed with the known exposure.

## Reassessment triggers

Reassess after:

- a material architecture or data-flow change;
- a repository split, merge, new shared interface, or supported-version change;
- a new model, agent, plugin, connector, or execution tool;
- expanded filesystem, network, cloud, communication, or production authority;
- a material provider, service, price, commitment, capacity, budget, resource-lifecycle, or sustainability change;
- a selected external framework, profile, or source-version change;
- a new sensitive-data class or legal obligation;
- a build, test, deployment, migration, or recovery redesign;
- a material security incident or control failure; or
- the review date recorded in the assessment.

## Claims boundary

AiReady does not establish security, privacy, legal compliance, software quality, accessibility conformance, model accuracy, or production readiness. It establishes that named controls and evidence have been assessed against a consistent framework.

## Relationship to other practices

AiReady is designed to complement, not replace or attest conformity with:

- the [National Institute of Standards and Technology Secure Software Development Framework](https://csrc.nist.gov/projects/ssdf) for secure software-development practices;
- the [Supply-chain Levels for Software Artifacts (SLSA) specification](https://slsa.dev/spec/) for versioned Source and Build assurance tracks, attestations, and consumer verification;
- the [NIST Cybersecurity Framework 2.0](https://doi.org/10.6028/NIST.CSWP.29) for organisation-wide cybersecurity outcomes, profiles, and improvement;
- the [Open Source Security Foundation (OpenSSF) Open Source Project Security (OSPS) Baseline](https://baseline.openssf.org/) and [OpenSSF Scorecard](https://www.scorecard.dev/) for open-source security controls and machine-checkable repository signals;
- the [Amazon Web Services Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html), [Microsoft Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/what-is-well-architected-framework), and [Google Cloud Well-Architected Framework](https://docs.cloud.google.com/architecture/framework) for provider-specific or provider-informed architecture review;
- [The Open Group Architecture Framework](https://www.opengroup.org/togaf) for enterprise-architecture method and governance when the organisation has selected it;
- [Markdown Architectural Decision Records (MADR)](https://adr.github.io/madr/) for lightweight, versioned decision context, drivers, options, outcomes, consequences, confirmation, and lifecycle;
- the [National Aeronautics and Space Administration (NASA) Systems Engineering Handbook](https://www.nasa.gov/reference/system-engineering-handbook-appendix/) for requirements, verification, validation, and bidirectional traceability practices where that degree of systems-engineering formality is useful;
- the [International Software Testing Qualifications Board (ISTQB) Certified Tester Foundation Level syllabus](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf) for conventional test process, traceability, coverage, completion, and reporting concepts;
- the [FinOps Framework](https://www.finops.org/framework/) for collaborative technology-value and cost-management practices; and
- the adopting project's applicable product, design, accessibility, privacy, reliability, safety, quality, legal, contractual, and operational standards.

Map overlapping controls to one authoritative source and retain the stronger applicable requirement. A passing external badge, score, or automated check remains evidence only for the controls and version it actually assessed.

Record each selected source, version, retrieval date, scope, adaptations, and
known omissions. Respect licence and attribution requirements; link to
controlled or provider-native material rather than copying it without rights.
A framework mapping or provider assessment is an input to accountable review,
not proof of conformity, certification, complete architecture quality, or
release readiness.

The [research and further-reading guide](research-and-further-reading.md)
records peer-reviewed studies and established engineering references that are
consistent with selected AiReady premises. Their findings, counter-evidence,
and limitations provide context; they do not evaluate AiReady or replace
evidence from the adopting project's exact system.

For SLSA, keep Source and Build track results separate and identify the exact
track, level, version, scope, producer, platform, consumer policy, and evidence.
For the Open Source Project Security Baseline, identify the exact version,
selected maturity level, project boundary, conditional controls, and unmet or
unassessed requirements. Do not translate either result into the AiReady score
or infer it from a badge, signature, software bill of materials, provenance
file, repository setting, or another framework's crosswalk.

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
