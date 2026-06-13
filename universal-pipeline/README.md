# Universal Agentic Project Pipeline

This folder is the canonical reusable pipeline for all future projects owned by the founder.

It is intentionally project-independent. It defines how a new or existing GitHub repository must be prepared before product development begins.

## Future trigger

When the founder shares a GitHub repository and says:

> Apply my common project pipeline.

The orchestration hub must:

1. Read this folder from `capcutfor1month-oss/kidora-pre-school`.
2. Inspect the target repository before writing.
3. Preserve existing code and documentation.
4. Install or adapt only the missing pipeline prerequisites.
5. Create a dedicated setup branch when the target repository is not empty.
6. Never begin product design, architecture selection, or application implementation unless separately approved.
7. Report exactly what was added, updated, preserved, or blocked.

## Source repository

Canonical source:

`capcutfor1month-oss/kidora-pre-school/universal-pipeline/`

Until a dedicated template repository is created, this folder is the source of truth for the common pipeline.

## Purpose

The pipeline exists to prevent:

- Chat context from becoming the only project memory
- AI discussions turning directly into uncontrolled code
- Duplicate Markdown documents
- Silent product decisions
- One AI building and approving its own work
- Expensive coding models being used for routine investigation
- A deployed application being mistaken for a public-ready product

See `BOOTSTRAP_CONTRACT.md` and `MANIFEST.md` before applying this pipeline to another repository.
