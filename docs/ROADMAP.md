# Kidora Initial Product Roadmap

## Status

**Initial proposed roadmap — not yet locked.**

This document records the founder's current product direction. It guides discovery and sequencing, but it does not authorize architecture selection or implementation. Each phase still requires an approved specification.

## Product vision

Kidora should grow into a simple digital operating system for the preschool, covering the full journey from a parent's first enquiry through admission, fees, attendance, communication, daily care, and child progress.

```text
Parent discovers Kidora
→ Scans a QR code or opens the website
→ Registers the child
→ School reviews and follows up
→ Visit or admission is scheduled
→ Child is admitted
→ Student records, fees, attendance, and communication are managed
→ Parents receive useful updates
→ Teachers record care and progress
→ The owner sees clear operational reports
```

## Intended product areas

### Parent experience

- QR-based admission registration
- Application confirmation and status
- Visit scheduling
- Document and consent submission
- Fee payments and receipts
- Attendance and announcements
- Daily child updates
- Approved photos and classroom activities
- Simple communication with the school

### School administration

- Admission enquiries and applications
- Follow-up stages and visit scheduling
- Student and guardian records
- Classes and sections
- Documents, medical notes, allergies, and consent
- Fee plans, collections, dues, and receipts
- Attendance
- Announcements and communication
- Staff access and permissions
- Operational reports

### Teacher experience

- Class list and attendance
- Daily meals, sleep, activity, and care notes
- Teacher observations
- Child progress and learning milestones
- Approved photo updates
- Health or behaviour concerns

Teachers should not receive access to financial or sensitive administrative information unless their role requires it.

### Owner reporting

- New enquiries
- Pending follow-ups
- Scheduled visits
- Admission conversion
- Class occupancy
- Fees collected and pending
- Attendance patterns
- Missing documents
- Parent engagement

## Delivery sequence

### Phase 1 — QR Registration and Admission Enquiries

The first useful vertical slice:

```text
Parent scans QR
→ Completes registration form
→ Receives confirmation/reference number
→ Admin sees application
→ Admin reviews details
→ Admin updates status
→ Admin contacts parent through WhatsApp
```

Proposed scope:

- Mobile-first public registration form
- Child and guardian details
- Required consent
- Submission confirmation
- Admin application list
- Application detail page
- Statuses such as New, Contacted, Visit Scheduled, Accepted, and Rejected
- WhatsApp contact action
- Basic search and filtering

This phase should prove the real admission workflow before broader school-management features are built.

### Phase 2 — Admission Conversion and Student Records

- Convert an accepted application into a student profile
- Parent and guardian contacts
- Emergency contacts
- Medical and allergy information
- Documents and consent records
- Class and section assignment
- Admission history

### Phase 3 — Fees and Receipts

- Admission and monthly fees
- Other approved fee categories
- Discounts and partial payments
- Payment history
- Due reminders
- Receipts
- Monthly collection and pending-dues reports

The Swadhyay project may be used as a technical reference, but preschool billing rules must be designed independently.

### Phase 4 — Attendance and Parent Communication

- Daily attendance
- Check-in and check-out
- Authorized pickup information
- Announcements
- Holiday and event notices
- Fee reminders
- Admission follow-ups
- Parent-facing attendance and receipt visibility

### Phase 5 — Teacher Daily Care and Parent Updates

- Meals and nap status
- Classroom activities
- Daily observations
- Approved photos
- Health or behaviour notes
- Parent acknowledgements where needed

### Phase 6 — Child Development and Progress

- Language development
- Social development
- Motor skills
- Creativity and participation
- Teacher observations
- Learning milestones
- Term progress reports

This module should support teachers and parents without reducing children to rankings or automated scores.

### Phase 7 — Owner Intelligence and Optional AI Assistance

After reliable operational data exists, AI may help with:

- Daily summaries
- Pending admission follow-ups
- Incomplete applications
- Draft WhatsApp messages
- Draft announcements
- Fee and attendance issue summaries
- Teacher-observation summaries

AI must not make admission, medical, disciplinary, or child-development decisions automatically.

## Product principles

- Mobile-first for parents and teachers
- Simple daily workflows over feature overload
- Child information collected only when necessary
- Clear parental consent
- Role-based access
- No public exposure of registrations or student records
- Human approval for sensitive decisions
- WhatsApp may remain the primary communication channel initially
- Reuse proven technical patterns from Swadhyay without copying unsuitable domain rules
- Build one complete, testable vertical slice at a time

## Not yet decided

- Final user research findings
- Exact form fields
- Final roles and permissions
- Technology architecture
- Hosting and database choices
- Payment provider
- Parent authentication model
- Pricing or business model
- Whether Kidora remains school-specific or becomes a multi-school product

## Immediate next product step

Run focused discovery for Phase 1 and approve:

1. The exact parent registration journey
2. The minimum child and guardian information required
3. Consent and privacy wording
4. Admin application statuses
5. The real school follow-up workflow
6. Phase 1 acceptance criteria

Only after those decisions are approved should a Phase 1 OpenSpec change be created.
