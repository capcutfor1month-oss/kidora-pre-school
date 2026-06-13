# Bootstrap a New Project Repository

Use this prompt when the founder shares a GitHub repository and says:

> Apply my common project pipeline.

## Canonical source

Read:

- `capcutfor1month-oss/kidora-pre-school/universal-pipeline/README.md`
- `capcutfor1month-oss/kidora-pre-school/universal-pipeline/BOOTSTRAP_CONTRACT.md`
- `capcutfor1month-oss/kidora-pre-school/universal-pipeline/MANIFEST.md`

## Assignment

1. Inspect the target repository before writing.
2. Determine whether it is empty, new with starter files, or an existing product.
3. Preserve existing code and project-specific documents.
4. Detect existing files with the same purpose as the common pipeline files.
5. Create or carefully merge only missing prerequisites.
6. For an existing repository, use a dedicated setup branch and propose the setup through a pull request.
7. Record all planned tools in `docs/TOOLING.md`, including tools that cannot yet be activated.
8. Set `docs/CURRENT.md` to the truthful current state.
9. Do not begin product discovery, architecture selection, or implementation unless the founder separately approves it.
10. Run the pipeline validation check and report evidence.

## Required final report

Return:

- Repository classification
- Existing files preserved
- Files created
- Files updated
- Conflicts or duplicates found
- Validation results
- Repository visibility warning, when relevant
- Exact next action
