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
| M-2 | 1 | ₹1.00 | One Rupee Only |
| M-3 | 10.50 | ₹10.50 | Ten Rupees and Fifty Paise Only |
| M-4 | 1000 | ₹1,000.00 | One Thousand Rupees Only |
| M-5 | 100000 | ₹1,00,000.00 | One Lakh Rupees Only |
| M-6 | 10000000 | ₹1,00,00,000.00 | One Crore Rupees Only |
| M-7 | -100 | Total stays at ₹0.00 | — (negative rejected) |
| M-8 | abc | Total stays at ₹0.00 | — (non-numeric rejected) |
| M-9 | (empty) | Total stays at ₹0.00 | — |
| M-10 | 0 | Total stays at ₹0.00 | — |

**Decimal summation test (M-11):**
Add two fee rows: 0.10 and 0.20. Expected total: ₹0.30 (not ₹0.2999…).

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

## 6. Page size

For each size, select it and verify:

| # | Size | On-screen preview width | Print layout |
|---|------|------------------------|--------------|
| PS-1 | A4 | ~595 px wide | @page size: A4 portrait |
| PS-2 | A5 | ~420 px wide | @page size: A5 portrait |
| PS-3 | A6 | ~298 px wide | @page size: A6 portrait |

Additional checks:

| # | Check | Expected |
|---|-------|----------|
| PS-4 | Switch A4 → A5 → A6 while form is filled | All entered data is preserved |
| PS-5 | 6+ fee rows with A6 selected | Yellow overflow warning appears above preview |
| PS-6 | Reduce to 3 fee rows with A6 selected | Warning disappears |
| PS-7 | A6: font size visibly smaller than A4 | Yes |
| PS-8 | A4 print preview then A5 then A6 | Each shows correct aspect ratio in print preview |

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
| U-2 | 375 px | Buttons tappable (min 42 px height) | Yes |
| U-3 | 768 px (tablet) | Form readable, preview below | Yes |
| U-4 | 375 px | No horizontal scroll on the form | No overflow |
| U-5 | 375 px | Print preview receipt may scroll horizontally | Acceptable; print dimensions unchanged |

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
| O-1 | Disconnect internet, open file | Fully functional |
| O-2 | Check browser Network tab | Zero external requests |
| O-3 | No CDN fonts or remote scripts | Confirmed by network tab |
