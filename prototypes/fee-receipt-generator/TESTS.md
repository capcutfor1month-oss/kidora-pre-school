# Fee Receipt Generator — Manual Test Checklist

Open `school-fees-receipt-generator.html` directly in a Chromium-based browser (Chrome or Edge).
No server or npm is required.

---

## 1. Security — XSS prevention

For each test, type the payload into the named field and verify the receipt preview shows it as plain text. Nothing should execute, alert, or break the form layout.

| # | Field | Payload | Expected result |
|---|-------|---------|-----------------|
| S-1 | Fee Description | `<img src=x onerror=alert(1)>` | Displayed as literal text in receipt table |
| S-2 | School Name | `<script>alert(1)</script>` | Displayed as literal text |
| S-3 | School Address | `"><b>bold</b>` | Displayed as literal text |
| S-4 | Parent Name | `' OR '1'='1` | Displayed as literal text |
| S-5 | Notes | `</div><h1>injected</h1>` | Displayed as literal text, layout intact |
| S-6 | Signature Name | `"><svg onload=alert(1)>` | Displayed as literal text |

---

## 2. Money handling

Fill in a single fee row with the given value, then confirm the total and amount-in-words.

| # | Input | Expected total | Expected words |
|---|-------|----------------|----------------|
| M-1 | 0.50 | ₹0.50 | Fifty Paise Only |
| M-2 | 0.01 | ₹0.01 | One Paisa Only |
| M-3 | 1 | ₹1.00 | One Rupee Only |
| M-4 | 10.50 | ₹10.50 | Ten Rupees and Fifty Paise Only |
| M-5 | 1000 | ₹1,000.00 | One Thousand Rupees Only |
| M-6 | 100000 | ₹1,00,000.00 | One Lakh Rupees Only |
| M-7 | 10000000 | ₹1,00,00,000.00 | One Crore Rupees Only |
| M-8 | -100 | Total stays at ₹0.00 | — (negative rejected) |
| M-9 | abc | Total stays at ₹0.00 | — (non-numeric rejected) |
| M-10 | (empty) | Total stays at ₹0.00 | — |
| M-11 | 0 | Total stays at ₹0.00 | — |

**Decimal summation test (M-12):**
Add two fee rows: 0.10 and 0.20. Expected total: ₹0.30 (not ₹0.2999…).

---

## 11. Strict money-parsing regression

For each input, type the value into the Amount field. Verify the inline error message and that the total does NOT update with the invalid value.

| # | Input | Expected field error shown | Total changes? |
|---|-------|---------------------------|----------------|
| SM-1 | `1abc` | "Enter a valid amount…" | No |
| SM-2 | `1.2.3` | "Enter a valid amount…" | No |
| SM-3 | `1e3` | "Enter a valid amount…" | No |
| SM-4 | `10.999` | "Enter a valid amount…" | No |
| SM-5 | `1,000` | "Enter a valid amount…" | No |
| SM-6 | `100000000` (₹10 crore, over max) | "Enter a valid amount…" | No |
| SM-7 | `0.01` | No error | Yes — total shows ₹0.01 |
| SM-8 | `9999999.99` (exactly ₹99,99,999.99 — at the limit) | No error | Yes |
| SM-9 | `99999999.999` (3 decimal places) | "Enter a valid amount…" | No |
| SM-10 | ` 500 ` (leading/trailing spaces) | No error (trimmed) | Yes — ₹500.00 |

---

## 12. Calendar date validation

| # | Date entered | Expected result |
|---|--------------|-----------------|
| CD-1 | 2023-02-29 | "Please enter a valid calendar date." (2023 is not a leap year) |
| CD-2 | 2024-02-29 | Accepted — 2024 is a leap year |
| CD-3 | 2023-04-31 | "Please enter a valid calendar date." (April has 30 days) |
| CD-4 | 2023-01-32 | "Please enter a valid calendar date." |
| CD-5 | 2023-13-01 | "Please enter a valid calendar date." (month 13 invalid) |
| CD-6 | 2026-06-25 | Accepted, preview shows 25/06/2026 |

---

## 13. Upload decode verification

| # | File | Expected result |
|---|------|-----------------|
| UV-1 | Rename a `.txt` file to `.png`; upload as logo | Error: "The file could not be loaded as an image." |
| UV-2 | Create a zero-byte file; upload as logo | Error: "The selected file is empty." |
| UV-3 | Valid PNG logo (any size ≤ 5 MB) | Logo appears in thumb and receipt |
| UV-4 | Rename a `.txt` file to `.png`; upload as signature | Error: "The file could not be loaded as an image." |
| UV-5 | Zero-byte file as signature | Error: "The selected file is empty." |
| UV-6 | Valid PNG signature with transparent background | Signature appears in receipt preview |

---

## 14. Print layout verification (PDF evidence required)

For each layout: fill all required fields, click Print / Save as PDF, save the file, open it and verify.

**PL-1 — A4 portrait, 10–15 fee rows (itemized)**

Content: school name + address, 12 fee rows (various descriptions and amounts), payment method, notes.

| Check | Expected |
|-------|----------|
| PDF page size | A4 (210 × 297 mm) |
| Orientation | Portrait |
| Page count | 1 |
| Receipt visible | Yes |
| Form / nav / UI chrome | Not visible |
| All fee rows visible | Yes — no clipping or truncation |
| Signature visible | Yes |
| Overflow warning before print | No (A4 holds long receipts) |

**PL-2 — A5 portrait, 3–5 fee rows**

Content: school name, 4 fee rows, no notes.

| Check | Expected |
|-------|----------|
| PDF page size | A5 (148 × 210 mm) |
| Orientation | Portrait |
| Page count | 1 |
| Receipt visible | Yes — no clipping |
| Signature visible | Yes |
| Overflow warning before print | No |

**PL-3 — A5 landscape, admission structure (4 rows)**

Content: school name + address, 4 rows (Registration Fee, Amenity Charges, Activity Charges, Tuition Fee), no notes.

| Check | Expected |
|-------|----------|
| PDF page size | A5 (148 × 210 mm reported; 210 mm wide in landscape) |
| Orientation | Landscape |
| Page count | 1 |
| Receipt visible | Yes — no clipping |
| Signature visible on page 1 | Yes |
| Overflow warning before print | No |

**PL-4 — A5 landscape overflow (long receipt)**

Content: same as PL-3 but with 10+ fee rows.

| Check | Expected |
|-------|----------|
| Overflow warning shown | Yes — recommends A4 portrait |
| User can still print | Yes (warning does not block) |

Additional checks for all PDFs:
- No form, header, nav, or UI chrome visible
- Receipt border, table, and total row visible
- Overflow warning fires before printing when content is too tall

---

## 3. Date handling

| # | Action | Expected result |
|---|--------|-----------------|
| D-1 | Select 2026-06-24 in date field | Preview shows 24/06/2026 |
| D-2 | Select 2026-01-01 in date field | Preview shows 01/01/2026 |
| D-3 | Change system timezone (if possible) and reload with same date | Same DD/MM/YYYY output |
| D-4 | Leave date empty and attempt print | Validation error: "Receipt date is required." |

---

## 4. Validation — before printing

Attempt to print with the field in the given state. Verify an error message appears and print is blocked.

| # | Missing / invalid field | Expected error message |
|---|------------------------|------------------------|
| V-1 | School Name empty | "School name is required." |
| V-2 | Receipt Number empty | "Receipt number is required." |
| V-3 | Receipt Date empty | "Receipt date is required." |
| V-4 | Parent Name empty | "Parent / payer name is required." |
| V-5 | Student Name empty | "Student name is required." |
| V-6 | Class set to "Select class" | "Class is required." |
| V-7 | Fee description empty | "Description is required." on that row |
| V-8 | Fee amount 0 or empty | "Amount must be greater than zero." on that row |
| V-9 | Receipt Number with tab or NUL character | "Receipt number must contain only printable characters." |
| V-10 | All fields valid | Print dialog opens |

---

## 5. Print / PDF — receipt only

Fill all required fields. Click "Print Receipt / Save as PDF". In the Print preview:

| # | Check | Expected |
|---|-------|----------|
| P-1 | Editor form visible in print | Not visible |
| P-2 | Header / nav bar visible in print | Not visible |
| P-3 | Print note / size note visible in print | Not visible |
| P-4 | Receipt border, table, and signature row visible | Visible |
| P-5 | Background colour on receipt title and table header | Visible (color-adjust applied) |
| P-6 | Fee rows for an ordinary 5-item receipt | No clipping, all rows readable |
| P-7 | Save as PDF and open the saved file | Contains only the receipt, no UI chrome |

---

## 6. Page size and layout

For each size, select it and verify:

| # | Size | On-screen preview width | Print layout | Use case |
|---|------|------------------------|--------------|----------|
| PS-1 | A4 portrait | ~595 px wide | @page size: A4 portrait | Long/itemized receipts |
| PS-2 | A5 portrait | ~420 px wide | @page size: A5 portrait | Compact receipts |
| PS-3 | A5 landscape | ~595 px wide | @page size: A5 landscape | Short admission-style receipts |

Additional checks:

| # | Check | Expected |
|---|-------|----------|
| PS-4 | Switch A4 → A5 → A5 landscape while form is filled | All entered data preserved |
| PS-5 | A5 landscape, 4 fee rows (Registration, Amenity, Activity, Tuition) | No overflow warning |
| PS-6 | A5 landscape, add rows until warning fires | Warning text recommends A4 portrait |
| PS-7 | A5 landscape: font sizes visibly smaller than A4 | Yes — compact density |
| PS-8 | A4 portrait with 10+ fee rows | No overflow warning (A4 holds long receipts) |
| PS-9 | A5 portrait with 5 fee rows and short address | No overflow warning (false-positive fix) |

---

## 7. Logo upload

| # | Action | Expected |
|---|--------|----------|
| L-1 | Upload a valid PNG under 5 MB | Thumbnail appears; receipt logo updates immediately |
| L-2 | Upload a file larger than 5 MB | Error: "Logo file must be 5 MB or less." |
| L-3 | Upload a .txt file | Error: "Please upload a PNG, JPG, GIF, or WebP image." |
| L-4 | Upload a valid JPG | Works as L-1 |
| L-5 | Logo appears in print / saved PDF | Yes |

---

## 8. Mobile and tablet usability

Open the file in browser DevTools device emulation or on a real device.

| # | Viewport | Check | Expected |
|---|----------|-------|----------|
| U-1 | 375 px (mobile) | All form inputs visible and reachable | Yes, single column layout |
| U-2 | 375 px | Touch targets ≥ 44 px (add/remove, tabs, uploads, size buttons, print) | Yes |
| U-3 | 768 px (tablet) | Form readable, preview below | Yes |
| U-4 | 320 px | No horizontal scroll on form or page | No overflow |
| U-5 | 375 px | Receipt preview scrolls horizontally within preview frame | Acceptable; print dimensions unchanged |
| U-6 | 390 px | No horizontal scroll | No overflow |
| U-7 | 430 px | No horizontal scroll | No overflow |
| U-8 | 375 px portrait → landscape | Layout reflows, data intact | Yes |
| U-9 | 375 px | Sticky action bar visible (Form / Preview / Print) | Yes — fixed bottom |
| U-10 | 375 px | Tap Preview tab → receipt panel appears | Yes |
| U-11 | 375 px | Tap Form tab → form panel appears | Yes |
| U-12 | 375 px | Tap Print from Preview tab → validation runs | Yes — invalid fields switch back to Form |
| U-13 | 375 px | Add/remove fee rows on mobile | Works; no layout break |
| U-14 | 375 px | Signature tabs (Type / Upload / Draw) tappable | Yes — 44 px height |
| U-15 | 375 px | Logo upload — tap Upload Logo button | File picker opens; no layout break |
| U-16 | Desktop (> 640 px) | Action bar hidden; two-column layout | Yes |

---

## 9. Accessibility

| # | Check | Expected |
|---|-------|----------|
| A-1 | Tab through all form fields | Logical focus order, visible focus outline |
| A-2 | Tab to page-size buttons and use arrow keys | Selectable via keyboard |
| A-3 | Tab to "Add Fee Item" and press Enter | New fee row added |
| A-4 | Screen reader announces validation summary | `role="alert"` triggers announcement |
| A-5 | All inputs have visible labels | Yes |
| A-6 | Logo thumbnail has alt text | "Uploaded school logo" when image present |

---

## 10. Offline operation

| # | Check | Expected |
|---|-------|----------|
| O-1 | Disconnect internet, open file directly (file://) | Fully functional — no network needed |
| O-2 | Check browser Network tab | Zero external requests |
| O-3 | No CDN fonts or remote scripts | Confirmed by network tab |

---

## 16. Visual theme

Open `school-fees-receipt-generator.html` served over HTTP.

| # | Check | Expected |
|---|-------|----------|
| VT-1 | Header background | White |
| VT-2 | Header bottom edge | 4 px rainbow stripe: red → orange → yellow → green → blue → purple |
| VT-3 | Brand mark (K square) | Navy `#1a237e` background, white K |
| VT-4 | Brand title | Navy text on white |
| VT-5 | Page background | Warm cream `#f8f8f2` with subtle dot grid |
| VT-6 | Section heading — School Information | Green pill badge (`#2e7d32`) |
| VT-7 | Section heading — Receipt Details | Blue pill badge (`#1565c0`) |
| VT-8 | Section heading — Student & Parent | Orange pill badge (`#e65100`) |
| VT-9 | Section heading — Fee Details | Purple pill badge (`#6a1b9a`) |
| VT-10 | Section heading — Payment Details | Teal pill badge |
| VT-11 | Section heading — Authorized Signature | Red pill badge |
| VT-12 | Fee rows — left accent stripe | Cycles green → orange → blue → purple |
| VT-13 | Add Fee Item button | Green pill, green text |
| VT-14 | Print / Save as PDF button | Navy pill, white text, rounded |
| VT-15 | Upload area | Light blue (`#e3f2fd`) with dashed indigo border |
| VT-16 | Total amount | Navy text, light blue row background |
| VT-17 | PWA install banner | Navy bg, gold bottom edge, gold Install pill button |
| VT-18 | Mobile action bar (≤ 640 px) | Navy bg, gold top edge, gold Print pill, transparent tab buttons |
| VT-19 | Card borders | Soft indigo `#c5cae9` |
| VT-20 | Signature tabs | Pill group: active tab navy, white text |
| VT-21 | Receipt title strip — on-screen | Light indigo `#e8eaf6` background, navy text |
| VT-22 | Fee table column headers — on-screen | Light indigo `#e8eaf6` background, navy text |
| VT-23 | Receipt outer border | Medium indigo `#3949ab`, 1.5 px |
| VT-24 | School name in receipt | Navy text |
| VT-25 | Print A4 portrait PDF | White background (no dot grid), receipt only, light indigo tints, no dark fills |
| VT-26 | Print greyscale readability | All text readable; light tinted areas print as very light grey |
| VT-27 | All focus outlines visible | Yes — unchanged |
| VT-28 | All touch targets ≥ 44 px | Yes — unchanged |
| VT-29 | App icon (192 + 512 PNG) | Navy `#1a237e` background, gold `#f9a825` K |

---

## 15. PWA installability and service worker

Serve the file over HTTP (e.g. `python3 -m http.server 8080`) and open in Chrome or Edge.

| # | Check | Expected |
|---|-------|----------|
| PWA-1 | Lighthouse → PWA audit | Installable; all required criteria pass |
| PWA-2 | Chrome address-bar install icon appears after first load | Yes (requires HTTPS or localhost) |
| PWA-3 | Install banner appears in app | Yes — shown when `beforeinstallprompt` fires |
| PWA-4 | Dismiss install banner | Banner hides; not shown again in session |
| PWA-5 | Install app → open from home screen / desktop | Launches in standalone window, no browser chrome |
| PWA-6 | DevTools → Application → Manifest | name, short_name, theme_color, icons 192 + 512 all present |
| PWA-7 | DevTools → Application → Service Workers | sw.js registered and active |
| PWA-8 | DevTools → Application → Cache Storage → kidora-fee-receipt-v1 | Contains HTML, manifest, icons only — no user data |
| PWA-9 | Go offline (DevTools Network → Offline) then reload | App loads from cache |
| PWA-10 | Refresh page while offline | All form fields empty — data not persisted |
| PWA-11 | Fill in receipt data, refresh | All fields empty — memory cleared on refresh |
| PWA-12 | Inspect service worker Cache Storage | No data URIs, no parent/child/payment/logo/signature data |
| PWA-13 | Open file:// URL directly | SW not registered; app works normally without SW |
| PWA-14 | Serve deployed shape with app as `/index.html` at site root | Manifest, SW, installability, and offline reload work; no request to `/school-fees-receipt-generator.html` |
| PWA-15 | Load once online, do NOT reload → go offline → reload | App loads from cache after a single online visit (first-unlock cache via CACHE_NAVIGATION message) |
