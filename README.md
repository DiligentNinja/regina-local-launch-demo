# Regina Local Launch — first-wave sites

Production-quality marketing previews for nine real Regina, SK trade businesses. The offer is: **I already built this for you — want it live on your domain for $449 CAD?**

This is a static HTML/CSS project. No build step, no paid APIs, no invented contact data.

## Open locally

From the repo root:

```bash
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173). The homepage lists every preview.

Or open any `index.html` file directly in a browser. Google Fonts need a network connection.

## Paths

| Business | Path | Phone |
|---|---|---|
| King Electric LTD. | [sites/king-electric/](sites/king-electric/) | 306-581-9837 |
| Always Roofing and Contracting | [sites/always-roofing/](sites/always-roofing/) | 306-209-5007 |
| Apperley Electric Ltd. | [sites/apperley-electric/](sites/apperley-electric/) | 306-525-9704 |
| Majestic Air Inc. | [sites/majestic-air/](sites/majestic-air/) | 306-525-3588 |
| Action Roofing Ltd. | [sites/action-roofing/](sites/action-roofing/) | 306-545-4677 |
| Sunrise Roofing | [sites/sunrise-roofing/](sites/sunrise-roofing/) | 306-526-8396 |
| Voltz Electric 2020 | [sites/voltz-electric/](sites/voltz-electric/) | 306-731-7972 |
| Fresh Electric Ltd. | [sites/fresh-electric/](sites/fresh-electric/) | 306-536-4737 |
| Budget Plumbing, Heating & Air Conditioning Ltd. | [sites/budget-plumbing/](sites/budget-plumbing/) | 306-359-6688 |

Directory homepage: [index.html](index.html)

## What is sourced vs placeholder

- Phone, email, addresses, services, hours, and testimonials are taken from public listings or the business’s own site.
- Where hours are unpublished, the page uses **Mon–Sat 8:00–6:00** and labels it as a **placeholder — confirm with the shop**.
- Contact forms are client-side demos. They do not send mail until a form endpoint is wired.
- Trust chips (Licensed · Insured · Regina & area) are used instead of invented reviews. Published testimonials (Action, Voltz) are quoted and attributed to the source page.

## Archived demo

The fictional Prairie Heat & Cool sample is no longer the homepage pitch. It lives at [archive/prairie-heat/](archive/prairie-heat/).
