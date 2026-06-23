# Kidora Skills Plan

## Status

The following external skill libraries are approved for Kidora:

- `phuryn/pm-skills`
- `mattpocock/skills`
- `coreyhaines31/marketingskills`

They are approved capability sources, not automatically loaded context. Kidora uses the smallest relevant skill set for each phase.

## Current project phase

Kidora is in focused discovery for Phase 1: QR registration and admission enquiries.

No application architecture or implementation is approved yet.

## Active now — Phase 1 discovery

### Product-management skills

From `phuryn/pm-skills`:

- New-product discovery
- Identify assumptions for a new product
- Prioritize assumptions by risk and impact
- Opportunity-solution-tree thinking
- Customer and stakeholder interview planning
- Product vision
- Value proposition
- Outcome roadmap
- PRD preparation
- User stories and job stories
- Test-scenario design
- Pre-mortem
- Strategy red-team

Purpose for Kidora:

- Confirm the real parent registration journey
- Confirm the school's current admission workflow
- Identify risky assumptions before coding
- Decide the minimum child and guardian data required
- Define consent and privacy requirements
- Define admin statuses and follow-up steps
- Establish measurable Phase 1 acceptance criteria

### Clarification and domain-language skills

From `mattpocock/skills`:

- `grill-with-docs`
- `grill-me`
- `domain-modeling`
- `to-prd`
- `to-issues`
- `handoff`

Purpose for Kidora:

- Ask detailed questions before implementation
- Build consistent language for application, enquiry, visit, admission, student, guardian, consent, and status
- Convert approved discovery into a concise OpenSpec change
- Break work into small vertical slices
- Preserve context in GitHub rather than chat-only handoffs

## Activate during implementation

From `mattpocock/skills`:

- `tdd`
- `diagnosing-bugs`
- `codebase-design`
- `domain-modeling`
- `git-guardrails-claude-code`
- `setup-pre-commit`
- `improve-codebase-architecture` only when evidence shows architecture debt

These activate after the Phase 1 specification and technical design are approved.

Required Kidora engineering discipline:

- Build one complete vertical slice at a time
- Write tests around consent, tenant or school isolation, child-data access, status transitions, and duplicate submissions
- Reproduce and minimize bugs before fixing
- Never let a skill silently introduce architecture or expand product scope

## Activate before public launch

### Marketing and growth skills

From `coreyhaines31/marketingskills`:

- `product-marketing`
- `customer-research`
- `copywriting`
- `copy-editing`
- `cro`
- `signup`
- `analytics`
- `ab-testing`
- `site-architecture`
- `seo-audit`
- `schema`
- `content-strategy`
- `emails`
- `sms`
- `social`
- `image`
- `video`
- `launch`
- `referrals`
- `pricing`
- `offers`
- `marketing-psychology`
- `public-relations`
- `sales-enablement`
- `revops`
- `churn-prevention`

Kidora must establish truthful product-marketing context before downstream marketing work begins.

Initial likely uses:

- Parent-friendly registration copy
- Admission landing-page clarity
- Registration-form conversion
- Local school website structure and SEO
- WhatsApp, email, or SMS follow-up language
- Admission campaign and launch planning
- Enquiry-to-visit and visit-to-admission analytics

Marketing skills may not invent educational outcomes, safety claims, testimonials, accreditation, pricing, or parent evidence.

## Deferred until relevant

The remaining approved skills across all three libraries remain available for later phases, including:

- Pricing and business-model exploration
- Advanced data analytics
- Retention and churn
- Community and partnerships
- Paid advertising
- Sales and revenue operations
- App-store optimization
- Programmatic SEO
- Advanced architecture improvement

They are activated only when Kidora reaches the corresponding stage.

## Child-data and school-safety boundaries

No skill may:

- Make admission decisions automatically
- Make medical, behavioural, disciplinary, or child-development decisions
- Collect child data merely because a framework suggests it
- Expose application or student information publicly
- Use real child information in examples, testing, marketing, or AI prompts without approved protection
- Generate unsupported claims about the school
- Override parental consent or role-based access requirements

## Instruction precedence

1. Founder-approved Kidora decision
2. Kidora canonical documents
3. Approved active OpenSpec change
4. Kidora agent rules
5. Universal pipeline and universal skills policy
6. External skill instructions
7. General model knowledge

## Installation status

- Skill sources: Approved
- Project-level skill installation: Not yet performed
- Skills currently used conceptually: Phase 1 discovery and clarification set
- Engineering skills: Waiting for approved implementation
- Marketing skills: Waiting for validated product context and launch work

Installing or updating skill files must not overwrite Kidora's canonical documents, agent rules, or active change files.
