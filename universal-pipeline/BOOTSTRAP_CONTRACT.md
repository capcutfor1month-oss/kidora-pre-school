# Universal Pipeline Bootstrap Contract

Use this contract whenever the founder shares a GitHub repository and asks to apply the common project pipeline.

## Before changing the repository

Inspect:

- Repository visibility and default branch
- Existing files and folders
- Existing README and agent instructions
- Existing documentation and CI workflows
- Existing tests and application code

## Empty repository

The common scaffold may be added as the initial setup.

## Existing repository

- Use a dedicated setup branch.
- Preserve existing code and project-specific instructions.
- Merge compatible rules instead of overwriting files blindly.
- Report conflicts and duplicates.
- Do not reorganize product code without approval.

## Principles every project records

1. The founder owns product decisions.
2. ChatGPT is the strategy and orchestration hub.
3. GitHub is the durable source of truth.
4. One canonical document exists per purpose.
5. Git history replaces duplicate files named final, latest, or numbered versions.
6. Implementation requires an approved specification.
7. Claude is the default production-code implementer unless the founder changes it.
8. Gemini CLI or OpenCode handles investigation and economical verification.
9. Automated checks provide repeatable evidence.
10. Codex performs an independent audit.
11. The founder gives final product and user-experience approval.
12. Deployment alone does not equal public-release readiness.

## Bootstrap boundaries

During pipeline setup, do not:

- Begin product brainstorming
- Select architecture or technology stack
- Generate application code
- Configure live service credentials
- Connect real customer information
- Deploy an application
- Create speculative features

## Completion report

Report:

- Repository inspected
- Existing files preserved
- Files created or updated
- Conflicts found
- Checks run and results
- Tools ready to configure
- Tools that require architecture or a working application
- Exact next action

## Context recovery

A fresh project conversation must recover state by reading:

- `docs/INDEX.md`
- `docs/CURRENT.md`
- `docs/DECISIONS.md`
- `docs/PIPELINE.md`
- `docs/TOOLING.md`
- The active change folder, when one exists

The chat transcript must never be the only copy of an approved decision.
