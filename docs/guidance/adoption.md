# Adoption guide

## Principle

Adopt concerns, not a directory structure. Begin with the project's existing repositories, documentation, work-management tools, quality controls, and release records. Do not move or duplicate effective material merely to match AI Ready.

If the current system cannot be trusted or reproduced, begin with the [legacy-project playbook](legacy-project-playbook.md) and [discovery baseline](../boilerplate/DISCOVERY_AND_BASELINE.md). Do not fill templates from assumptions.

## Assessment mode and change authority

A request to assess, audit, score, compare, or report does not authorise project
changes. Complete read-only discovery, distinguish findings from proposals, and
obtain the authority required by the project's controls before remediation.
Creating a document or improving a score is not an outcome unless the control
is current, effective, owned, and supported by evidence.

## Stage 1: Map what exists

Complete the [adoption map](../boilerplate/ADOPTION_MAP.md). For each concern:

1. identify the current authoritative source and owner;
2. assess whether it is adequate, partial, missing, or not applicable;
3. decide to reuse, improve, merge, create, or explicitly exclude; and
4. record the resulting authoritative source and review trigger.

Also record the reading order, precedence rule, and lifecycle state for sources
that can direct AI-assisted work. Do not assume that the newest or most detailed
record is authoritative.

Classify the actual system and delivery units before selecting controls. Record
whether each assessed item is an application, service, library, package,
infrastructure, data/notebook, documentation/content, course, collection, or
other project type; whether it is built, published, deployed, or operated; and
whether units are independent, coordinated, embedded, conditional, or part of a
larger multi-repository system. Adapt the terms rather than forcing a category.

## Stage 2: Establish AI authority

Name the accountable owner, approved AI tools, intended use, prohibited actions, data classification, review authority, permission boundary, and escalation path. Use the [agent-instruction boilerplate](../boilerplate/AGENT_INSTRUCTIONS.md) only to fill gaps in the instruction mechanism supported by the project's AI tools.

Do not enable write-capable agents before authority and stop conditions exist.

Map accountable responsibilities and reserved human decisions using [roles and decision rights](roles-and-decision-rights.md). An AI agent may perform authorised activities but cannot approve its own work, accept risk, or grant itself authority.

## Stage 3: Confirm product and design intent

Separate approved intent, observed current behaviour, owner-confirmed compatibility, defects, inferences, and unknowns. Record the problem, users, outcomes, requirements, journeys, states, content, accessibility, constraints, and acceptance evidence needed for the planned work.

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

Separate simulated, component, installed or packaged, integrated,
representative-environment, physical-device, specialist, and effective
production evidence where applicable. Define what each level can and cannot
prove. Preserve exact commands, execution scope, environment, exit results,
failures, skips, reruns, and limitations.

Continuous Integration (CI) should run the appropriate project-defined gate, but no language or CI platform is mandated.

## Stage 6: Bound authority and untrusted output

Separate read-only analysis, source edits, external communication, deployment, migration, publishing, deletion, and cost-bearing operations. Give AI agents the least authority required for the approved use and require fresh human approval for material external effects.

Treat generated code, commands, configuration, structured data, database queries, markup, URLs, dependency suggestions, and infrastructure changes as untrusted. Apply controls appropriate to the project's technology and risk.

## Stage 7: Make release readiness evidence-based

Adapt the release-process, checklist, readiness, and evidence boilerplate to the project's existing release mechanism. A readiness decision must name exact candidate artefacts and distinguish passing evidence from planned, failed, blocked, stale, skipped, or not-applicable checks.

For stateful systems, verify backups, preflight checks, migrations, rollback, restore, and post-change checks. Written recovery steps without a tested restore are partial evidence.

## Stage 8: Increase automation gradually

Start with read-only analysis, then human-applied suggestions, isolated edits, reviewed changes, and only then bounded automation. Expand authority only after evidence shows the preceding level is reliable.

For interconnected repositories or components, begin with system-wide read access and narrowly scoped write access. Expand only after change-set traceability, compatibility tests, release sequencing, partial-failure handling, and coordinated rollback have been demonstrated.
