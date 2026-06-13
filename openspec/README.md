# OpenSpec Workspace

This folder is reserved for specification-driven changes.

## Current status

The GitHub repository and pipeline scaffold now exist.

OpenSpec CLI tooling has **not** yet been initialized in a local development environment. No product specification has been created, and no product work should begin during pipeline setup.

## Future change structure

```text
openspec/changes/<change-name>/
├── proposal.md
├── spec.md
├── design.md
├── tasks.md
├── repository-report.md
├── implementation-report.md
├── verification-report.md
├── ux-report.md
└── audit-report.md
```

Use `templates/change/` to start a change only after product discovery approves it.
