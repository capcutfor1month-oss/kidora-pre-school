# KIDORA Receipt Generator Handoff

## Project
Standalone preschool fee receipt generator for KIDORA.

## Root
Open this folder as the project root:

`/Volumes/T7 Shield/Users/Aditya/Downloads/KIDORA/project/Recipt genrator`

## Files
- `school-fees-receipt-generator.html` - standalone HTML/CSS/JS app.
- `CLAUDE.md` - this handoff.

## Current Behavior
- Edit school name, address, receipt number/date, parent/student, class, roll number, payment method, notes, and signature name.
- Add/remove fee rows.
- Upload a logo; the preview updates immediately.
- Preview is designed to resemble the BillsGenerator-style school fee receipt layout, but with KIDORA branding/content.
- `Generate Receipt` and `Download PDF` use browser print/save as PDF from the preview. This preserves the visual preview better than a separate hand-coded PDF generator.

## Important Notes
- The folder name intentionally follows the requested spelling: `Recipt genrator`.
- This is static HTML. It does not require Next.js, npm, Supabase, or a dev server.
- To test: open `school-fees-receipt-generator.html` in a browser.
- To save as PDF: click `Download PDF`, then choose `Save as PDF`.

## Known Constraints
- Exact one-click PDF download without print dialog requires adding a PDF rendering dependency or a server-side browser renderer.
- Browser print is currently the most reliable way to make the PDF match the visible preview.

## Suggested Next Work
- Add a real one-click PDF export using a library such as `html2pdf.js`, `jsPDF + html2canvas`, or server-side Playwright.
- Add persistent templates for common preschool fee rows.
- Wire Login/Signup/Templates to real pages if this becomes a full product.
