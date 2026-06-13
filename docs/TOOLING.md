# Tooling Registry

This registry records every planned tool now. A tool may be documented before it can be activated.

## Status meanings

- **Active:** Usable now
- **Ready to configure:** Can be installed without product architecture
- **Blocked by architecture:** Requires an approved application stack
- **Blocked by working app:** Requires actual screens or runtime behaviour
- **Blocked by real users:** Requires production usage
- **Optional:** Add only when a real need appears

| Tool or system | Role | Current status | Activation condition | Primary owner |
|---|---|---|---|---|
| GitHub repository | Durable source of truth | Active | Already active | Founder + ChatGPT |
| Canonical Markdown documents | Product and project memory | Active | Already active | ChatGPT + Founder |
| OpenSpec | Change specification and scope | Ready to configure | Local repository cloned | ChatGPT + Founder |
| Gemini CLI | Repository investigation and verification | Ready to configure | Local repository cloned | Gemini CLI |
| OpenCode | Low-cost alternative investigation worker | Ready to configure | Local repository cloned and model selected | OpenCode |
| Claude Code | Primary production-code implementation | Ready to configure | Local repository cloned | Claude |
| Codex | Independent implementation audit | Ready to configure | A change and diff exist | Codex |
| GitHub Actions | Automated repository checks | Active for pipeline documents | Application checks added after stack selection | CI |
| Playwright | Repeatable browser testing | Blocked by architecture | Web application stack and runnable app exist | CI / QA |
| Antigravity | Exploratory browser and UX verification | Blocked by working app | Preview or local app exists | Antigravity |
| Design OS | Optional UX and product-design workflow | Optional | A complex user journey needs design support | Founder + ChatGPT |
| Agent OS | Permanent standards workflow | Partially represented | Existing rules prove insufficient | Founder + ChatGPT |
| Task Master | Large task dependency management | Optional | OpenSpec tasks become too large to manage | Orchestrator |
| BMAD Method | Full-team methodology reference | Optional | Project complexity genuinely justifies it | Founder + ChatGPT |
| PR-Agent or another AI PR reviewer | Additional automated review | Optional | Codex review becomes insufficient or unavailable | QA |
| Preview hosting | Safe live test environment | Blocked by architecture | Hosting stack selected and app exists | Release engineering |
| Production hosting | Public application runtime | Blocked by architecture | Release candidate approved | Release engineering |
| Sentry | Technical production monitoring | Blocked by working app | Runtime and framework selected | Engineering |
| PostHog | Product analytics and behaviour evidence | Blocked by real users | Privacy-safe events are defined | Product |
| GitHub Agentic Workflows | Low-risk recurring repository automation | Optional | Manual pipeline is understood and stable | Repository operations |

## Important distinction

**Captured now** does not always mean **installed now**.

Some tools cannot be truthfully configured before the application stack exists. For example:

- Playwright needs a runnable web application and package manager.
- Sentry needs a real framework and runtime.
- PostHog needs approved user events and privacy rules.
- Preview and production deployment require an approved hosting architecture.

Their intended role and activation conditions are recorded here now, so they cannot be forgotten.

## Local setup target

The initial local setup may include:

1. Clone the repository.
2. Configure OpenSpec.
3. Configure Gemini CLI.
4. Configure Claude Code.
5. Optionally configure OpenCode.
6. Verify each agent reads the canonical repository rules.
7. Run the existing pipeline-document check.
8. Stop before product discovery or application implementation.

## Tool-selection rule

Do not use every agent for every task.

- Product decision: Founder + ChatGPT
- Specification: ChatGPT + Founder
- Investigation: Gemini CLI or OpenCode
- Production coding: Claude
- Repeatable technical checks: GitHub Actions
- Browser automation: Playwright
- Exploratory UX checks: Antigravity
- Independent audit: Codex
- Final approval: Founder

## Token-efficiency rule

Reserve Claude for high-value implementation. Use deterministic scripts, GitHub Actions, Gemini CLI, or OpenCode for repository exploration, repetitive checks, and log summarization.
