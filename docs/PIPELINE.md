# Kidora Development Pipeline

This document captures the complete intended workflow now, so no stage depends on chat memory later.

## Control model

```text
Founder + ChatGPT
    ↓
Product discovery and approved decisions
    ↓
OpenSpec change folder
    ↓
Gemini CLI or OpenCode investigation
    ↓
Claude implementation
    ↓
GitHub Actions automated checks
    ↓
Playwright repeatable browser tests
    ↓
Antigravity exploratory UX verification
    ↓
Codex independent audit
    ↓
Founder approval
    ↓
Preview deployment
    ↓
Production release
    ↓
Sentry technical monitoring
    ↓
PostHog product-behaviour evidence
    ↓
Next approved change
```

## Stage rules

### 1. Discovery

Owner: Founder + ChatGPT

Outputs:
- Product problem
- Target user
- User journey
- Scope and non-goals
- Acceptance criteria

No code begins here.

### 2. Specification

Owner: ChatGPT + Founder approval

Canonical folder:
`openspec/changes/<change-name>/`

Required files:
- `proposal.md`
- `spec.md`
- `design.md`
- `tasks.md`

### 3. Investigation

Primary worker: Gemini CLI
Fallback worker: OpenCode

Output:
- `repository-report.md`

Default mode is read-only.

### 4. Implementation

Primary worker: Claude

Inputs:
- Approved specification
- Approved design
- Ordered tasks
- Repository investigation report

Outputs:
- Production code
- Tests
- Updated `tasks.md`
- `implementation-report.md`

### 5. Automated verification

Primary system: GitHub Actions

Future checks after application code exists:
- Build
- Formatting
- Lint
- Type checks
- Unit tests
- Integration tests
- Database and migration checks
- Playwright end-to-end tests

Output:
- CI status and artifacts
- `verification-report.md` when investigation is needed

### 6. User-flow verification

Repeatable tool: Playwright
Exploratory tool: Antigravity

Output:
- Browser traces, screenshots, or recordings
- `ux-report.md`

### 7. Independent audit

Primary worker: Codex

Inputs:
- Approved specification
- Diff
- Automated-test evidence
- User-flow evidence
- Implementation report

Output:
- `audit-report.md`
- PASS or FAIL with blockers

### 8. Founder approval

The founder checks:
- Clarity
- Real usefulness
- UX quality
- Product direction
- Release decision

No AI can replace this approval.

### 9. Preview and release

Future systems, selected after architecture approval:
- Preview hosting
- Production hosting
- Database deployment
- Secret management
- Migration validation
- Rollback
- Smoke testing

### 10. Production evidence

Sentry:
- Technical errors
- Failed requests
- Performance problems

PostHog:
- User journeys
- Drop-off points
- Feature usage
- Session evidence where privacy rules permit

### 11. Maintenance automation

GitHub Agentic Workflows may later automate only approved low-risk work such as:
- Issue triage
- Documentation checks
- Failed-test summaries
- Release-note drafts
- Repository-health reports

It must not make product decisions or change production autonomously.

## Scale by risk

### Small documentation change

`ChatGPT → direct reviewed repository update`

### Small low-risk code change

`Specification → Claude → CI → Founder`

### Normal feature

`Specification → Gemini investigation → Claude → CI → Codex → Founder`

### UI-sensitive feature

`Specification → Gemini → Claude → CI → Playwright/Antigravity → Codex → Founder`

### High-risk feature

`Research → explicit specification → investigation → Claude → full automated checks → browser evidence → Codex → Founder → controlled release`

## Context rule

Chat is not the permanent project memory. The repository is.

Every new focused conversation should begin by reading:
- `docs/CURRENT.md`
- `docs/DECISIONS.md`
- `docs/PIPELINE.md`
- The active OpenSpec change folder
