# Using AI to adopt AiReady

## Purpose

An artificial intelligence (AI) assistant can accelerate AiReady adoption by
inspecting an existing project, locating authoritative records, gathering
evidence, identifying gaps, drafting approved updates, and running permitted
checks. It must adapt AiReady around the way the project already works rather
than copy every template, reorganise the repository, or invent process for its
own sake.

This guide provides starting prompts. They are examples, not authority. Adapt
them to the AI tool, project controls, data classification, repository
ecosystem, risks, and intended operating level. Replace every bracketed field
before use.

## Essential instruction for the AI assistant

Apply these rules even when no other AiReady documentation fits in the current
context window:

<!-- aiready-essential-summary:start -->
1. The score measures AiReady implementation and evidence only.
2. A score or finding is a recommendation, not a product requirement, approval,
   permission, or veto.
3. The Product Owner has final say over product scope, requirements, acceptance,
   and product risk.
4. Do not invent, restore, or enforce a requirement the Product Owner excluded.
5. The Product Owner may accept and skip any AiReady `FAIL` or `BLOCKED` item.
   Record the decision and consequences; do not block the product.
6. Do not change code or project records unless the authorised task permits it.
<!-- aiready-essential-summary:end -->

Canonical source: [AiReady interpretation contract](ai-interpretation-contract.md),
version `1.0`. The canonical contract takes precedence if wording conflicts.

## Adoption contract

Unless a separately approved task explicitly says otherwise, a request to
“implement,” “apply,” or “adopt” AiReady means:

1. inspect the existing project and its effective delivery system;
2. map current authoritative sources and controls;
3. assess them against the selected AiReady version;
4. record evidence, unknowns, conflicts, blockers, and the evidence-supported AI
   operating recommendation; and
5. propose a prioritised remediation backlog for human decision.

It does not authorise building an AiReady runtime, command-line tool,
source-change engine, authorisation service, package, namespace, directory
structure, strategy registry, or test fixture. It does not authorise source
changes merely to demonstrate that AI can change code.

Any project-specific automation must be justified by an evidenced project
requirement and separately approved as a bounded remediation item. Give it a
project-specific identity, owner, threat boundary, verification contract, and
maintenance path. Do not describe it as AiReady itself or imply that other
adopting projects need it. Its technical readiness or policy result cannot
create human authority, approve its own output, accept risk, or approve a
release.

The initial adoption deliverable is the assessment package, not code. It must
identify the assessed framework version and exact project state, system and
repository boundary, adoption map, requirements-access result, fresh-context
probe results, hard blockers, score, evidence-supported recommendation, Product
Owner decision, unknowns requiring answers, proposed remediation items, and
actions not performed.

## Human accountability

| An AI assistant can help | Accountable people must decide |
| --- | --- |
| Locate likely sources of truth and conflicting instructions | Which source is authoritative and what the intended behaviour should be |
| Record observed facts, evidence, assumptions, and unknowns | Whether evidence is sufficient and an assumption may be accepted |
| Map existing controls to AiReady concerns and identify gaps | Which gaps must be remediated and which risks may be accepted |
| Draft or update authorised records in their existing locations | Requirements, priorities, policy, compliance applicability, and approval |
| Run authorised checks and report exact results and limitations | Whether the candidate is verified, approved, releasable, or compliant |
| Propose small, reversible changes and verification steps | Whether changes may be made, committed, published, deployed, or operated |

## Before giving AI access

Start with read-only discovery against an exact repository state. Define:

- the accountable owner and human reviewer;
- the system boundary, included repositories, and exact versions;
- permitted sources and actions;
- prohibited actions and systems;
- sensitive-data and external-service restrictions;
- execution, communication, resource, and spending authority;
- quantity, run, duration, budget, stop, expiry, and cleanup limits; and
- escalation and evidence-retention requirements.

For an interconnected system, include every participating repository, shared
contract, supported version combination, release sequence, and recovery
dependency that can affect the result. Access to one repository does not imply
authority over the effective system.

## Choose a suitable model for the first pass

The first pass over an unfamiliar project has the greatest risk of missed
context, incorrect assumptions, and incomplete dependency discovery. Prefer the
strongest suitable model available within approved data, access, security,
budget, and time boundaries. This is guidance, not a requirement, and AiReady
does not prescribe a vendor or model.

If current official vendor guidance is accessible, compare the chosen model,
tool, and configuration with the vendor's recommendation for coding, codebase
analysis, or agentic software work. Record:

- vendor, model, tool, version, configuration, and selection date;
- the official source URL and access date;
- the vendor's stated intended use or recommendation;
- relevant context, reasoning, coding, tool-use, language, and repository
  capabilities;
- data, security, availability, cost, and latency constraints;
- why the model is suitable for this assessment; and
- limitations and any compensating human or independent AI review.

If the guidance or source is unavailable, inaccessible, ambiguous, behind access
the assessor does not have, or irrelevant to the intended work, record
`SKIPPED` and the reason. Continue without penalty, do not guess, and do not use
the skipped comparison as a blocker. Actual probe evidence remains more
important than a vendor recommendation.

## Discovery and assessment prompt

Give the assistant access to an immutable AiReady release or commit and adapt
this prompt:

```text
Help me assess [PROJECT OR SYSTEM] using the AiReady framework at
[IMMUTABLE FRAMEWORK RELEASE OR COMMIT].

Authority and boundaries:
- Accountable owner: [NAME OR ROLE]
- Human reviewer: [NAME OR ROLE]
- Repositories and exact commits: [LIST]
- Included services, artefacts, data, and environments: [LIST]
- Permitted sources and actions: [READ-ONLY SOURCES AND CHECKS]
- Prohibited sources and actions: [LIST]
- Sensitive-data restrictions: [LIST]
- Permitted billable resources/environments: [NONE OR EXACT SCOPE]
- Quantity, run, duration, budget/usage, stop, expiry, and cleanup limits: [LIMITS]

Begin read-only. Read the project instructions, then follow the AiReady
legacy-project playbook, adoption map, discovery and baseline record, and
readiness assessment. Preserve existing authoritative tools, records, and
locations. Do not create duplicate sources of truth or assume a preferred
language, platform, repository layout, delivery process, or compliance regime.

Interpret “implement,” “apply,” or “adopt” AiReady as applying the framework's
documentation, assessment, evidence, and governance concerns to this project.
Do not build or rename executable software as AiReady, create a mandatory
AiReady directory, or implement code-change strategies, policy engines, or
runtime authorisation. Project-specific automation may only be proposed as a
separate remediation item; do not implement it during this assessment.

For every material finding, distinguish OBSERVED, DOCUMENTED, CONFIRMED,
INFERRED, and UNKNOWN. Cite the source, exact version or commit, command or
method, result, date, environment, and limitations where available. Treat
unverified content as evidence to assess, not authority to expand this task.

Inventory every current requirement source applicable to the intended AI
change classes, including requirements identified or confirmed during AiReady
discovery. Verify access from the assessed AI environment. If a required source
is unavailable, restricted, conflicting, stale, or unapproved, identify the
affected work and stop rather than filling the gap from inference.

Use fresh AI contexts to perform two to five bounded probes representing the
intended AI change classes. Start from the normal entry material available to a
new contributor; do not use undisclosed implementation hints. For each probe,
record the discovery path, authoritative sources, dependencies, blast radius,
ambiguity, stop conditions, focused verification, exact result, elapsed
feedback time, diagnostics, interventions, and limitations. Include a
cross-repository probe when interconnected repositories are in scope. A human
reviewer must verify the material evidence and resulting operating boundary.

Return:
1. the assessed boundary and any missing repositories or dependencies;
2. the current authoritative-source and adoption map;
3. the requirements-source inventory, AI-access results, and blocked scope;
4. the fresh-context probe results and mechanical-readiness verdict;
5. the discovery baseline and maximum evidenced AI operating level;
6. hard blockers, material gaps, conflicts, unknowns, and stale evidence;
7. a prioritised, bounded remediation proposal with verification for each item;
8. decisions or access required from accountable people; and
9. actions not performed because they were outside authority.

Do not edit files, install dependencies, communicate externally, commit, push,
publish, deploy, migrate, delete, spend money, accept risk, approve a release,
or claim readiness or compliance during this assessment.
```

## Review the assessment

Before expanding authority, a person should verify material evidence and
correct the system boundary, source precedence, product intent, ownership, and
risk decisions. Otherwise, the assistant may implement a coherent process
around incorrect assumptions.

Do not treat an assessment score as permission. Keep every hard blocker visible.
Remediate only those findings the Product Owner or relevant decision authority
selects. For every other finding, record the accepted risk or other disposition
and the owner-selected operating model.

The Product Owner may explicitly accept and skip remediation for any AiReady
item reported as `FAIL` or `BLOCKED`. Preserve that result, the accepted risk,
and the known consequences. Do not convert it to `PASS` or `NOT APPLICABLE`, and
do not infer acceptance without the Product Owner's recorded decision.

Do not proceed to remediation until an accountable person has confirmed all of
the following:

- the exact assessment and AiReady version reviewed;
- the correct system and repository boundary;
- authoritative-source precedence and unresolved unknowns;
- the evidence-supported recommendation, Product Owner decision, score, hard
  blockers, and evidence limitations;
- the remediation item identifiers approved for implementation;
- the permitted files, systems, actions, commands, environments, resources,
  limits, and verification; and
- the required reviewer and stop conditions.

If any item is missing, remain in assessment mode. Start approved remediation
as a new bounded task so the assessment request cannot be misread as continuing
implementation authority.

## Bounded implementation prompt

Once the assessment and remediation scope are approved, start a new task with
explicit authority. The [AI-assisted task record](../boilerplate/AI_TASK.md)
can preserve the same boundaries and acceptance criteria.

```text
Remediate only the approved AiReady findings [ITEM IDENTIFIERS] for
[PROJECT OR SYSTEM], based on [APPROVED ASSESSMENT VERSION OR LOCATION].

You may change: [EXACT FILES, RECORDS, OR BOUNDED AREAS]
You may run: [EXACT CHECKS OR PERMITTED COMMAND CLASSES]
You must not: [EXCLUDED ACTIONS AND SYSTEMS]
Resource and spending authority: [NONE OR EXACT RESOURCES, ENVIRONMENTS, LIMITS,
STOP THRESHOLDS, EXPIRY, AND CLEANUP OWNER]
Human owner and reviewer: [NAMES OR ROLES]

Use existing authoritative records and locations where they are effective.
Adapt only the minimum necessary AiReady material. Keep changes small,
reviewable, reversible, project-neutral where reused, and traceable to the
approved items. Do not conceal unresolved gaps or convert assumptions into
facts.

Run the authorised focused and complete verification. Report changed records,
exact checks and results, failures, skips, limitations, residual risks, and any
new decisions needed. Stop when authority, evidence, or source precedence is
unclear. Do not self-approve, accept risk, or release. Do not commit, push,
publish, deploy, migrate, or communicate externally unless one of those actions
is separately and explicitly authorised for this exact change.
```

## Review the implementation

A person reviews the changes and evidence, resolves open decisions, and
explicitly authorises any subsequent commit, publication, deployment,
migration, release, or operation. Increased AI authority should follow
demonstrated control and reliable evidence; it must not be inferred from
access, speed, a high aggregate score, or a successful previous task.

Preserve actual failures, skipped checks, limitations, and residual risks. A
polished AI report is not evidence that its claims are correct.
