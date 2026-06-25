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
3. Select A4 portrait, A5 portrait, or A5 landscape using the selector above the preview.
4. Click **Print Receipt / Save as PDF**.
5. In the browser Print dialog, choose **Save as PDF** as the destination.
6. Manually select the matching paper size (A4 / A5) and orientation in the Print dialog.
7. Save and hand the PDF to the parent.

## Files

| File | Purpose |
|------|---------|
| `school-fees-receipt-generator.html` | Complete standalone tool — HTML, CSS, JS in one file |
| `manifest.json` | Web app manifest for PWA installation |
| `sw.js` | Service worker — caches app shell only; never touches user data |
| `icons/icon-192.png` | PWA icon 192 × 192 px |
| `icons/icon-512.png` | PWA icon 512 × 512 px (maskable) |
| `icons/icon.svg` | Scalable icon source |
| `HANDOFF.md` | This file |
| `TESTS.md` | Manual verification checklist |

## Supported layouts

| Layout | Paper | Use case |
|--------|-------|----------|
| A4 portrait | 210 × 297 mm | Long or itemized receipts (books, uniforms, stationery, kits) |
| A5 portrait | 148 × 210 mm | General compact receipts |
| A5 landscape | 210 × 148 mm | Short admission-style receipts (≈ 4–8 fee rows) |


## What the tool does

- Enter school name, address, and logo
- Enter receipt number and date
- Enter parent name, student name, class, roll number
- Add or remove fee rows with description and amount (max ₹99,99,999.99 per receipt)
- Select payment method
- Add optional notes
- Select A4 portrait, A5 portrait, or A5 landscape paper size
- See total in INR and amount in words (Indian numbering: lakh, crore, paise; "One Paisa" singular)
- Live overflow warning (measured from `receipt.scrollHeight`) when content exceeds the printable area; A5 landscape warns and recommends A4 portrait
- Preview updates live as you type
- Validate all required fields (including impossible calendar dates) before printing
- Print or save as PDF using the browser's Print dialog

## What was fixed (Codex audit — commit: fix: address Codex audit findings)

1. **Strict money parsing** — `parsePaise` uses a regex that accepts only plain decimal notation
   (`^\d+(\.\d{1,2})?$`). Rejects commas in input, exponent notation (`1e3`), partial strings
   (`1abc`), more than 2 decimal places (`10.999`), and any value above ₹99,99,999.99.
   Amount input changed from `type="number"` to `type="text"` + `inputmode="decimal"` so the
   browser does not silently normalise scientific notation before our validator sees it.
2. **Amount-in-words** — Fixed singular "One Paisa" (was "One Paise"). Added guard that returns
   "Amount exceeds maximum" for values above ₹99,99,999.99.
3. **Date validation** — `isValidCalendarDate()` rejects impossible dates such as 2023-02-29 and
   2023-04-31. Validation shows "Please enter a valid calendar date." for these inputs.
4. **Upload image decode** — Logo and signature uploads now verify the file bytes actually decode
   as an image (`Image.onload / onerror`) after the MIME-type and size checks pass.
   Rejects zero-byte files and corrupt or spoofed images.
5. **Overflow warning** — Replaced heuristic row/character counts with a real measurement:
   `receipt.scrollHeight` is compared to a `PRINTABLE_H_PX` map of calculated printable heights
   for each size/orientation. Warning fires only when actual content height exceeds the page.
6. **ARIA tab references** — Added `id="sig-tab-type"`, `id="sig-tab-upload"`, `id="sig-tab-draw"`
   to the three signature-mode tab buttons. Added `aria-controls` linking each button to its panel.
   The `aria-labelledby` references on the tab panels now resolve correctly.

## What was fixed (commit: fix: stabilize Kidora internal fee receipt tool)

1. **Receipt-only printing** — `@media print` hides the form, nav, and all UI except the receipt.
   `@page` rule set dynamically per selected paper size.
2. **Page-size selection** — A4 / A5 radio selector with landscape toggle for A5. Each size has distinct CSS typography,
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
- The overflow warning compares `receipt.scrollHeight` to a calculated screen-pixel threshold
  for each paper size. It is an estimate: screen DPI and print DPI differ, so a receipt that
  barely fits on screen may still require a second page in print. Always check the Print dialog
  preview before saving, especially for A5 landscape.
- A5 landscape prints a shorter page (130 mm tall after 9 mm margins on each side). It is
  suitable only for short admission-style receipts (≈ 4–8 fee rows). The overflow warning fires
  and recommends A4 portrait when content exceeds the printable area.

## Known limitations

- No persistent storage — data is lost on page reload.
- No multi-receipt history.
- Maximum receipt total is ₹99,99,999.99. Amounts above this are rejected at input.
- Page-size and orientation selection are kept only for the current browser session (sessionStorage).

## Testing

See `TESTS.md` for the full manual verification checklist covering security, money, dates,
validation, print, page sizes, logo upload, mobile, accessibility, and offline operation.

## PWA / Offline use

PWA features (install prompt, service worker, offline launch) activate only when the file is
served over **HTTP or HTTPS** — they are silently skipped when opened as a `file://` URL.

**Quick local server:**
```
cd prototypes/fee-receipt-generator
python3 -m http.server 8080
# Open http://localhost:8080/school-fees-receipt-generator.html
```

Chrome and Edge will show an install icon in the address bar after the first successful load.
The in-app install banner appears when the browser fires `beforeinstallprompt`.

**Cache policy** — the service worker (`sw.js`) caches only:
- `school-fees-receipt-generator.html`
- `manifest.json`
- `icons/icon-192.png`, `icons/icon-512.png`, `icons/icon.svg`

It never caches, persists, or transmits any user-entered data. Logos and signatures are
uploaded as `data:` URIs (not HTTP requests) so the SW cannot intercept them. All receipt
data lives in page memory only and is cleared automatically on refresh.

## Mobile use

On phones (≤ 640 px) a sticky bottom action bar replaces the in-page print button:
- **✏ Form** tab — shows the entry form
- **👁 Preview** tab — shows the live receipt preview
- **Print / PDF** — validates and opens the browser print dialog

The receipt preview scrolls horizontally within its frame when wider than the screen.
Print output is unaffected — the `@media print` rules show the receipt regardless of which
tab is active.

## Suggested next steps (not this task)

- Add a one-click PDF export using `html2pdf.js` or `jsPDF + html2canvas` if offline
  single-click saving becomes a priority.
- Confirm whether this prototype meets the school's immediate receipt workflow before
  building the full Kidora fees platform.
