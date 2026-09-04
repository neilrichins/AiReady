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

Do not treat an assessment score as permission. Resolve every hard blocker and
approve the specific remediation boundary and permitted operating level.

## Bounded implementation prompt

Once the assessment and remediation scope are approved, start a new task with
explicit authority. The [AI-assisted task record](../boilerplate/AI_TASK.md)
can preserve the same boundaries and acceptance criteria.

```text
Implement only the approved AiReady remediation items [ITEM IDENTIFIERS] for
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
