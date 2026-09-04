# Research and further reading

## Purpose

This guide records independent research and established engineering references
that are consistent with important premises behind AiReady. It explains what
each source contributes, where its evidence stops, and how to cite it without
implying endorsement or proof that AiReady itself is effective.

This is an annotated reading list, not a compliance requirement, literature
review, certification, or substitute for project-specific evidence. Adopting
projects do not need to use or reproduce it.

| Record | Value |
| --- | --- |
| Last source review | 2026-09-04 |
| Maintainer | AiReady maintainers |
| Scope | AI-assisted software development, context use, repository-level work, verification, security, maintainability, reliability, and delivery outcomes |
| Excluded claim | These sources do not evaluate, certify, endorse, or prove AiReady |

## How the evidence relates to AiReady

AiReady evaluates the engineering system around an AI agent rather than
assuming that model capability, prompt length, generated volume, or one passing
test establishes readiness. The sources below support or challenge narrower
premises within that position:

1. long context capacity is not the same as reliable context use;
2. repository-level coding with large language models (LLMs) needs relevant
   cross-file context, dependency analysis, and planning;
3. meaningful coding evaluation uses real repositories and executable
   outcomes rather than isolated generation volume;
4. AI-assisted code can introduce context-dependent security and quality risk;
5. sustainable software requires maintainability, review, layered testing,
   reliability, recovery, and outcome-based measurement; and
6. AI systems that materially affect behaviour need application-specific
   evaluation, monitoring, and controlled inputs.

These statements are deliberately narrower than saying that AI always improves
or harms software. Model, tool, task, language, participant, repository,
environment, evidence, and study-design differences can change results.

## Peer-reviewed research

### Long-context use

**Source:** Nelson F. Liu et al., [*Lost in the Middle: How Language Models Use
Long Contexts*](https://aclanthology.org/2024.tacl-1.9/), *Transactions of the
Association for Computational Linguistics*, volume 12, 2024,
[Digital Object Identifier (DOI)
10.1162/tacl_a_00638](https://doi.org/10.1162/tacl_a_00638).

- **Finding used:** model performance in the reported multi-document question
  answering and key-value retrieval experiments changed materially with the
  position of relevant information. Longer input capacity did not produce
  robust use of every part of the context.
- **AiReady relevance:** supports ordered, task-relevant, minimum sufficient
  authoritative context and fresh-context probes. It cautions against treating
  a large context window or indiscriminate context loading as readiness.
- **Limitation:** the experiments were not repository-level software changes
  and used the models and context technologies available to that study.

### Repository-level retrieval

**Source:** Fengji Zhang et al., [*RepoCoder: Repository-Level Code Completion
Through Iterative Retrieval and
Generation*](https://aclanthology.org/2023.emnlp-main.151/), *Proceedings of the
2023 Conference on Empirical Methods in Natural Language Processing*, 2023,
[DOI 10.18653/v1/2023.emnlp-main.151](https://doi.org/10.18653/v1/2023.emnlp-main.151).

- **Finding used:** in its RepoBench settings, iterative repository-level
  retrieval and generation improved the in-file completion baseline by more
  than ten percent and outperformed the reported single-pass retrieval
  approach.
- **AiReady relevance:** supports task-specific discovery of useful information
  across files and the need to test whether repository context is mechanically
  accessible to an agent.
- **Limitation:** code completion is narrower than requirements discovery,
  architectural judgment, implementation, integration, validation, operations,
  or release readiness. The measured improvement must not be presented as an
  expected AiReady improvement.

### Repository-level planning and impact analysis

**Source:** Ramakrishna Bairi et al., [*CodePlan: Repository-Level Coding Using
LLMs and Planning*](https://doi.org/10.1145/3643757), *Proceedings of the ACM on
Software Engineering*, volume 1, Foundations of Software Engineering, 2024,
published by the Association for Computing Machinery (ACM).

- **Finding used:** the approach combines task-specific instructions,
  dependency analysis, change-impact analysis, and an incremental plan for
  interdependent repository edits. It outperformed the reported no-planning
  baselines in the evaluated package-migration and temporal-edit tasks.
- **AiReady relevance:** supports repository-ecosystem mapping, change-impact
  analysis, bounded plans, dependency-aware sequencing, and verification of
  coordinated edits.
- **Limitation:** the study covered two task families across a small repository
  set. It does not establish general performance across languages, products,
  multi-repository delivery, or release operations.

### Evaluation on real software issues

**Source:** Carlos E. Jimenez et al., [*SWE-bench: Can Language Models Resolve
Real-World GitHub
Issues?*](https://openreview.net/forum?id=VTF8yNQM66), *International Conference
on Learning Representations (ICLR)*, 2024. An immutable conference copy is
available from the [ICLR proceedings](https://proceedings.iclr.cc/paper_files/paper/2024/file/edac78c3e300629acfe6cbe9ca88fb84-Paper-Conference.pdf).

- **Finding used:** SWE-bench evaluates issue resolution against complete
  repositories and executable tests, exposing difficulties that isolated code
  generation benchmarks do not represent.
- **AiReady relevance:** supports representative repository-level probes,
  exact environments, executable verification, and outcome-based assessment.
- **Limitation:** the original benchmark contains 2,294 tasks from twelve
  Python repositories. Benchmark scores change as agents, models, scaffolds,
  datasets, and evaluation controls change; do not copy a leaderboard result
  into AiReady as a durable capability claim.

### Security and human interaction

Two peer-reviewed user studies reached different bounded conclusions. They are
most useful together because they argue for project-specific evidence rather
than a universal claim about AI-assisted code security.

**Source:** Neil Perry et al., [*Do Users Write More Insecure Code with AI
Assistants?*](https://doi.org/10.1145/3576915.3623157), *Proceedings of the 2023
ACM Special Interest Group on Security, Audit and Control (SIGSAC) Conference
on Computer and Communications Security*, 2023. An
[author preprint](https://arxiv.org/abs/2211.03622) and
[replication materials](https://github.com/NeilAPerry/Do-Users-Write-More-Insecure-Code-with-AI-Assistants)
are publicly available.

- **Finding used:** participants with access to the studied assistant produced
  less-secure results in the reported tasks and were more likely to believe
  their answers were secure. Participants who engaged more critically with the
  assistant tended to produce fewer vulnerabilities.
- **AiReady relevance:** supports treating generated code as untrusted,
  independent security verification, explicit human accountability, and
  evidence that tests the actual use case rather than user confidence.
- **Limitation:** the findings depend on the selected participants, tasks,
  languages, model, interface, and study period.

**Source:** Gustavo Sandoval et al., [*Lost at C: A User Study on the Security
Implications of Large Language Model Code
Assistants*](https://www.usenix.org/conference/usenixsecurity23/presentation/sandoval),
*32nd USENIX Security Symposium*, 2023.

- **Finding used:** in a randomised study of 58 student programmers completing
  a low-level C task, the reported security effect was small and AI-assisted
  users produced critical bugs at a rate no greater than ten percent above the
  control.
- **AiReady relevance:** supports applicability-first, risk-based controls and
  explicit evidence boundaries. It is evidence against claiming that AI
  assistance necessarily creates a material security regression in every
  setting.
- **Limitation:** the participant population, language, task, assistant, and
  measured vulnerability classes were narrow.

## Established engineering books

These sources are practitioner books rather than peer-reviewed studies. They
provide established methods and experience that complement the research above.

### Software Engineering at Google

Titus Winters, Tom Manshreck, and Hyrum Wright, curators, [*Software Engineering
at Google*](https://abseil.io/resources/swe-book), O'Reilly Media, 2020.

- **AiReady relevance:** software sustainability over time and scale,
  documentation, code review, testing strategy, dependency management, and
  engineering trade-offs.
- **Access:** Google provides the digital edition free of charge under a
  Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 licence and
  links to the commercial edition.
- **Limitation:** it reports practices from a particular organisation and era;
  it is not an AI-coding-readiness framework or universal prescription.

### Building Secure and Reliable Systems

Heather Adkins et al., [*Building Secure and Reliable
Systems*](https://sre.google/books/), O'Reilly Media, 2020.

- **AiReady relevance:** secure-by-design architecture, reliability,
  least-privilege access, resilience, incident response, recovery, and
  continuing assurance across the system lifecycle.
- **Access:** Google provides links to read the book online and purchase it.
- **Limitation:** the examples reflect large-scale operational systems and must
  be adapted proportionately rather than copied as mandatory controls.

### Accelerate

Nicole Forsgren, Jez Humble, and Gene Kim, [*Accelerate: The Science of Lean
Software and DevOps*](https://itrevolution.com/product/accelerate/), IT
Revolution, 2018.

- **AiReady relevance:** outcome-based software-delivery measurement, fast
  feedback, delivery throughput, stability, recovery, and investment in
  enabling capabilities rather than activity metrics.
- **Access:** the publisher links to print, electronic, and audio editions and
  provides supporting material.
- **Limitation:** it is not about AI coding, and its organisational research
  must not be converted into a causal claim that AiReady produces a specific
  delivery improvement.

### AI Engineering

Chip Huyen, [*AI Engineering: Building Applications with Foundation
Models*](https://www.oreilly.com/library/view/ai-engineering/9781098166298/),
O'Reilly Media, 2024.

- **AiReady relevance:** application-specific evaluation, context efficiency,
  prompt organisation and versioning, retrieval-augmented generation, agent
  failure modes, guardrails, monitoring, and user feedback.
- **Applicability:** most relevant when AI materially affects a product,
  service, operational process, or development control. AI assistance with
  ordinary coding does not by itself require an AI-system evaluation record.
- **Limitation:** it is practitioner guidance in a fast-changing field, not a
  peer-reviewed validation of AiReady.

### The Mythical Token-Month

Francesco Gadaleta, [*The Mythical Token-Month: Essays on Building Software
with Machines That Write Software*](https://mythicaltokenmonth.com/), 2026.

- **AiReady relevance:** distinguishes generative throughput from engineering
  progress and examines context reconstruction, integration cost, conceptual
  integrity, prompt ownership, evaluation, dependencies, operations, trust, and
  human judgment.
- **Access:** the author's official site provides a free excerpt and purchase
  options.
- **Limitation:** the author describes the closing propositions as current
  beliefs rather than proven theorems. The book does not evaluate, mention, or
  endorse AiReady.

## Citation and quotation policy

When AiReady refers to third-party work:

- link to the official publisher, proceedings, DOI, standards body, author, or
  maintained project source where possible;
- distinguish peer-reviewed research, preprints, practitioner books,
  standards, vendor guidance, and commentary;
- paraphrase findings accurately and preserve study scope, sample, date,
  limitations, and material counter-evidence;
- use a short quotation only when it materially improves understanding;
- reproduce quotations exactly, use quotation marks, name the author and work,
  and retain any required notice;
- do not imply affiliation, sponsorship, certification, validation, or
  endorsement;
- do not place third-party text under the AiReady licence when AiReady does not
  hold the rights; and
- request permission before reproducing substantial text, figures, tables, or
  controlled material.

Copyright in the short quotation in the root README remains with Francesco
Gadaleta; it is expressly excluded from AiReady's Apache License 2.0. All other
source descriptions in this guide are AiReady summaries and should be checked
against the linked source before material reliance.

## Maintenance

Review this guide when:

- a linked source moves, is corrected, retracted, superseded, or materially
  revised;
- a study's benchmark, dataset, model, or result is cited in an AiReady claim;
- material peer-reviewed evidence supports, narrows, or contradicts an AiReady
  premise;
- a quotation, figure, table, licence, or attribution is added or changed; or
- an AiReady control is justified by a source not already recorded here.

Preserve contrary and null findings. Do not select only favourable studies,
promote benchmark improvements as production outcomes, or turn this reading
list into a claim that AiReady has itself been independently validated. Direct
evidence from an adopting project's exact system remains necessary.
