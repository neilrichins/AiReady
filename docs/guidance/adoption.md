# Adoption guide

## Principle

Adopt concerns, not a directory structure. Begin with the project's existing repositories, documentation, work-management tools, quality controls, and release records. Do not move or duplicate effective material merely to match AiReady.

Adoption means producing an evidence-based map, assessment, operating-level
decision, and owned remediation backlog. It does not mean building an AiReady
runtime, executable change pipeline, authorisation service, package, namespace,
or mandatory directory. A request to implement AiReady does not by itself
authorise executable project tooling.

If the current system cannot be trusted or reproduced, begin with the [legacy-project playbook](legacy-project-playbook.md) and [discovery baseline](../boilerplate/DISCOVERY_AND_BASELINE.md). Do not fill templates from assumptions.

An AI assistant may help apply this guide within explicit authority. Use the
[AI adoption guide and reusable prompts](using-ai-to-adopt-aiready.md) to keep
read-only assessment separate from approved remediation.

## Assessment mode and change authority

A request to assess, audit, score, compare, or report does not authorise project
changes. Complete read-only discovery, distinguish findings from proposals, and
obtain the authority required by the project's controls before remediation.
Creating a document or improving a score is not an outcome unless the control
is current, effective, owned, and supported by evidence.

AiReady sets no minimum score and does not decide whether development may
continue. The Product Owner, or equivalent accountable product/service owner,
may accept the current score, accept documented product risks, decline or defer
any proposed improvement, and choose an operating model that is more or less
restrictive than the evidence-supported recommendation. Preserve the actual
score, failed controls, blockers, consequences, and owner decision. Do not
relabel accepted risk as a passing control.

An AiReady checklist item or recommendation becomes a project requirement only
when the accountable owner or another governing authority adopts it as a gate.

The Product Owner has final authority over product intent, priorities, scope,
acceptance, and product-risk decisions. Consult specialist owners and record
constraints outside that product authority rather than presenting an AiReady
recommendation as mandatory.

The Product Owner may accept poorly documented code, leave an AiReady practice
unimplemented, or exclude a proposed requirement from authoritative product
scope. Reflect the decision honestly in the documentation, implementation
score, findings, and risk record. The assessor and AI agent advise; they do not
substitute their judgement for the Product Owner's.

For each finding, record `REMEDIATE`, `ACCEPT AND SKIP`, `DEFER`, `DECLINE`,
`TRANSFER`, or `NOT APPLICABLE`, with the decision owner and rationale. A
Product Owner may accept and skip any AiReady `FAIL` or `BLOCKED` item. Keep the
result and consequences visible, and do not infer acceptance. An owner may
accept risk only within their actual decision authority; acceptance records
exposure but does not erase an obligation owned or imposed elsewhere.

End the assessment with a human review checkpoint. Remediation begins only in
a new bounded task that names the approved finding or backlog item, exact
change authority, verification, reviewer, and stop conditions.

Project-specific automation remains project software. Give it a distinct
identity and owner, justify it from an evidenced need, and assess its security,
maintenance, testing, failure behaviour, and lifecycle proportionately. Do not
represent it as AiReady itself, as a universal adoption requirement, or as a
source of human authority.

## Stage 1: Map what exists

Complete the [adoption map](../boilerplate/ADOPTION_MAP.md). For each concern:

1. identify the current authoritative source and owner;
2. assess whether it is adequate, partial, missing, or not applicable;
3. decide to reuse, improve, merge, create, or explicitly exclude; and
4. record the resulting authoritative source and review trigger.

Also record the reading order, precedence rule, and lifecycle state for sources
that can direct AI-assisted work. Do not assume that the newest or most detailed
record is authoritative.

Select optional external architecture, cybersecurity, technology-cost, or
sustainability lenses only when the project's context makes them useful. Record
the exact framework/source version and scope. Do not copy controlled content or
treat a mapping as certification, conformity, or release approval.

Classify the actual system and delivery units before selecting controls. Record
whether each assessed item is an application, service, library, package,
infrastructure, data/notebook, documentation/content, course, collection, or
other project type; whether it is built, published, deployed, or operated; and
whether units are independent, coordinated, embedded, conditional, or part of a
larger multi-repository system. Adapt the terms rather than forcing a category.

## Stage 2: Establish AI authority

Name the accountable owner, approved AI tools, intended use, prohibited actions,
data classification, review authority, permission boundary, and escalation
path. Where work can create charges or resources, define permitted resource
types and environments, quantity/run/duration and budget or usage ceilings,
alerts, stop conditions, expiry, and cleanup ownership. Use the
[agent-instruction boilerplate](../boilerplate/AGENT_INSTRUCTIONS.md) only to
fill gaps in the instruction mechanism supported by the project's AI tools.

Do not enable write-capable agents before authority and stop conditions exist.

Map accountable responsibilities and reserved human decisions using [roles and decision rights](roles-and-decision-rights.md). An AI agent may perform authorised activities but cannot approve its own work, accept risk, or grant itself authority.

## Stage 3: Confirm product and design intent

Separate approved intent, observed current behaviour, owner-confirmed compatibility, defects, inferences, and unknowns. Record the problem, users, outcomes, requirements, journeys, states, content, accessibility, constraints, and acceptance evidence needed for the planned work. Preserve requirement sources, versions, parent or derived relationships, and supersession. Define verification against the specification separately from validation of the intended need.

Confirm that the approved AI tool can access every current authoritative
requirement applicable to its intended change classes, including requirements
identified or confirmed during discovery and requirements stored outside the
repository. Test access from the actual assessed AI environment. A
human-accessible link is not sufficient evidence. Do not expose restricted
content merely to pass the check; provide an approved authoritative
representation or exclude and block the affected AI work.

Do not infer a requirement solely because the existing implementation behaves that way. Do not treat a design, prototype, plan, or generated description as implemented behaviour.

## Stage 4: Separate delivery states

Ensure the project can distinguish:

- approved requirement;
- planned or in-progress feature;
- implemented feature;
- verified feature with current evidence;
- release candidate included in an exact artefact set;
- approved release;
- successful, partial, failed, cancelled, or rolled-back release.

These may live in an existing issue tracker, product system, documentation set, or release platform. The [feature register](../boilerplate/FEATURE_REGISTER.md) is boilerplate, not a required file.

## Stage 5: Make verification reproducible

Record the project's complete quality commands and all additional manual or effective-environment checks. The verification plan must state what is checked, how, where, by whom, against which exact artefacts, and where evidence is retained.

Identify the exact requirement, design, interface, risk, or other test-basis
versions. Define entry and exit criteria and preserve a completion summary of
planned, executed, passed, failed, blocked, skipped, or quarantined scope,
variance, and residual risk without duplicating authoritative test-system data.

Separate simulated, component, installed or packaged, integrated,
representative-environment, physical-device, specialist, and effective
production evidence where applicable. Define what each level can and cannot
prove. Preserve exact commands, execution scope, environment, exit results,
failures, skips, reruns, and limitations.

Continuous Integration (CI) should run the appropriate project-defined gate, but no language or CI platform is mandated.

Treat reliability and recovery, performance and capacity, technology cost and
delivered value, and sustainability and resource lifecycle as distinct
applicability and evidence decisions. Run proportionate failure or recovery
exercises when required by the risk model; a written plan is not a successful
exercise.

## Stage 6: Bound authority and untrusted output

Separate read-only analysis, source edits, external communication, deployment,
migration, publishing, purchasing, provisioning, scaling, deletion, and other
cost-bearing operations. Give AI agents the least authority required for the
approved use and require fresh human approval for material external effects.
Permission to execute does not imply spending or resource-lifecycle authority.

Treat generated code, commands, configuration, structured data, database queries, markup, URLs, dependency suggestions, and infrastructure changes as untrusted. Apply controls appropriate to the project's technology and risk.

## Stage 7: Make release readiness evidence-based

Adapt the release-process, checklist, readiness, and evidence boilerplate to the project's existing release mechanism. A readiness decision must name exact candidate artefacts and distinguish passing evidence from planned, failed, blocked, stale, skipped, or not-applicable checks.

Where provenance, attestations, signatures, verifiable manifests, or framework
claims apply, bind them to the candidate digest and verify them from the
consumer side against the approved identity, trust root, schema, and policy.
Generated or signed metadata is not a passing result by existence alone.

For stateful systems, verify backups, preflight checks, migrations, rollback, restore, and post-change checks. Written recovery steps without a tested restore are partial evidence.

Where architecture or cost is material, link readiness to current review
findings, owned improvement actions, explicit cross-quality trade-offs,
approved budget and usage limits, observed cost/value evidence, and temporary
resource cleanup. These records inform the release decision; they do not make it.

## Stage 8: Increase automation gradually

Start with read-only analysis, then human-applied suggestions, isolated edits, reviewed changes, and only then bounded automation. Expand authority only after evidence shows the preceding level is reliable.

For interconnected repositories or components, begin with system-wide read access and narrowly scoped write access. Expand only after change-set traceability, compatibility tests, release sequencing, partial-failure handling, and coordinated rollback have been demonstrated.
