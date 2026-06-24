# Kidora Fee Receipt Generator — Handoff

## Purpose

Standalone internal tool for Kidora staff to generate and print fee receipts for parents.
This is a temporary operational tool, not the final Kidora fees platform.

## Location

```
prototypes/fee-receipt-generator/school-fees-receipt-generator.html
```

## How to use

1. Open `school-fees-receipt-generator.html` in Chrome or Edge (no server, no npm needed).
2. Fill in school details, receipt number, date, parent and student information, and fee rows.
3. Select A4, A5, or A6 paper size using the selector above the preview.
4. Click **Print Receipt / Save as PDF**.
5. In the browser Print dialog, choose **Save as PDF** as the destination.
6. Manually select the matching paper size (A4 / A5 / A6) in the Print dialog.
7. Save and hand the PDF to the parent.

## Files

| File | Purpose |
|------|---------|
| `school-fees-receipt-generator.html` | Complete standalone tool — HTML, CSS, JS in one file |
| `HANDOFF.md` | This file |
| `TESTS.md` | Manual verification checklist |

## What the tool does

- Enter school name, address, and logo
- Enter receipt number and date
- Enter parent name, student name, class, roll number
- Add or remove fee rows with description and amount
- Select payment method
- Add optional notes
- Select A4, A5, or A6 paper size — affects preview and print layout
- See total in INR and amount in words (Indian numbering: lakh, crore, paise)
- Preview updates live as you type
- Validate all required fields before printing
- Print or save as PDF using the browser's Print dialog

## What was fixed (commit: fix: stabilize Kidora internal fee receipt tool)

1. **Receipt-only printing** — `@media print` hides the form, nav, and all UI except the receipt.
   `@page` rule set dynamically per selected paper size.
2. **Page-size selection** — A4 / A5 / A6 radio selector. Each size has distinct CSS typography,
   spacing, logo size, and `@page` rule. Switching sizes preserves entered data.
3. **XSS prevention** — All user-supplied values rendered via `textContent` only. No `innerHTML`
   for any field the user can edit.
4. **Money handling** — Amounts stored as integer paise internally; `parsePaise()` converts input
   strings; `formatInr()` formats using `toLocaleString("en-IN")`. Negative, NaN, and non-numeric
   values are rejected.
5. **Amount in words** — `paiseToWords()` supports Indian numbering (thousand, lakh, crore) and
   paise. Correct singular/plural (Rupee / Rupees).
6. **Date handling** — `formatDate()` splits `YYYY-MM-DD` string directly; no `new Date()` and
   no timezone conversion.
7. **Validation** — School name, receipt number, date, parent name, student name, class, all fee
   descriptions, all fee amounts > 0, total > 0. Inline error messages per field plus summary.
   First invalid field receives focus.
8. **Removed fake elements** — Login, Sign up, Templates nav links, fake Preview tab, fake
   signature Upload and Draw modes, Download File Name field, "Instant PDF Download" and
   "Parent Ready" badges, features section, fee-types section, FAQ section.
9. **Clean sample data** — No real personal names in source code. Receipt number, parent, and
   student fields start empty. School name defaults to generic "Kidora Preschool".
10. **Mobile/tablet** — Single-column layout below 960 px. Touch-friendly button heights.
11. **Accessibility** — All inputs have linked labels, `aria-required`, visible focus outlines,
    `role="alert"` on error messages, `scope="col"` on table headers, logical heading hierarchy.
12. **Offline** — No external dependencies. Works by opening the file locally.

## Honest browser limitations

- The browser's Print dialog is always shown — there is no one-click PDF without a dependency.
- The browser adds its own headers and footers to printed output. Uncheck "Headers and footers"
  in Print settings to suppress them. This tool cannot control that setting from JavaScript.
- `@page { size: A5; }` tells the browser to format content for A5, but the user must still
  manually select A5 in the Print dialog's paper-size dropdown for the correct printed size.
  This works reliably in Chrome and Edge. Safari does not honour `@page { size }`.

## Known limitations

- No persistent storage — data is lost on page reload.
- No multi-receipt history.
- A6 is practical for short receipts (up to ~5 fee rows); a warning appears for longer content.
- Page-size selection is kept only for the current browser session (sessionStorage).

## Testing

See `TESTS.md` for the full manual verification checklist covering security, money, dates,
validation, print, page sizes, logo upload, mobile, accessibility, and offline operation.

## Suggested next steps (not this task)

- Add a one-click PDF export using `html2pdf.js` or `jsPDF + html2canvas` if offline
  single-click saving becomes a priority.
- Confirm whether this prototype meets the school's immediate receipt workflow before
  building the full Kidora fees platform.
