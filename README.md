# tejanshu.com

Single-page site for Tejaanshu Khardekar, AI Product Readiness Consulting.

## Files
- `index.html` — the whole site (self-contained; fonts load from Google Fonts)
- `CNAME` — custom domain (www.tejanshu.com). Do not delete.
- `.nojekyll` — tells GitHub Pages to serve files as-is, no Jekyll build
- `images/favicon.ico` — browser tab icon
- `LICENSE`

## Deploy
Upload these files to the root of the `tejavooh.github.io` repo, replacing the old `index.html`.
Keep `CNAME` and `.nojekyll`. Live at https://www.tejanshu.com within a minute or two.

## Before you go live: wire the two call buttons
The page has two call-to-action buttons pointing at placeholder links. Replace them once your
scheduler is set up. Search `index.html` for these two strings and swap in your real URLs:

- `PASTE_DISCOVERY_CALL_URL`  → your FREE 20-min discovery call booking link
- `PASTE_PAID_CALL_URL`       → your PAID 30-min strategy call booking link (appears twice)

### Recommended scheduler: Cal.com (free, PayPal + Stripe, auto-Zoom)
1. Sign up at cal.com with tejaanshukhardekar@gmail.com.
2. Connect your calendar (Google), connect Zoom, connect PayPal and/or Stripe.
3. Create two event types:
   - "Discovery call" — 20 min, free, Zoom location.
   - "Strategy call" — 30 min, price set, require payment to book, Zoom location.
4. Copy each event's public URL (e.g. https://cal.com/tejanshu/strategy-call).
5. Paste those URLs over the two placeholders above and re-upload index.html.

Payment, slot, timezone, reminder and the Zoom link are all handled by Cal.com.
Nothing to code on the site.

Until the links are set, the buttons point nowhere useful — set them before sharing the site.
