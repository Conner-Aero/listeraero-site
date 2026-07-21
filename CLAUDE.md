# CLAUDE.md — Lister Aerospace website

## What this project is
A static marketing/portfolio site for **Lister Aerospace Technologies LLC**.
The full specification and all page copy live in **`listeraero-website-brief.md`** in this folder. Read that file first; it is the source of truth for structure, copy, and design direction. This file is the standing operating rules.

## Tech
- Astro, static output, deployable to **Cloudflare Pages**. Plain HTML/CSS/JS is acceptable if simpler — no SPA, no heavy framework.
- Contact form → **Formspree** (free), delivering to `conner@listeraero.com`.
- Primary domain `listeraero.com` (`listeraerospace.com` redirects to it).

## Hard rules
- **Never name the current employer.** Refer only to "a Part 23 certified aircraft OEM." All past-performance is described by discipline and outcome, never by program or company name. This is a legal/IP requirement, not a style preference.
- Keep **CFD/flow simulation off** the site entirely.
- Keep **AI capabilities off** the public pages.
- Use placeholder images where the brief marks assets as "to supply." Do not invent portfolio content beyond the four placeholders in the brief.

## Design guardrails
Follow the design direction in the brief exactly. Ground the aesthetic in engineering-drawing precision (dimension lines, section markers, machined metal). **Avoid the AI-default looks**: cream + serif + terracotta; near-black + acid-green; broadsheet hairline columns. Spend boldness on the one signature element (the technical-linework motif) and keep everything else quiet.

## The build/verify loop — do this automatically
This is the most important rule. After **any** change to the site's appearance or layout:
1. Run the local dev server.
2. Use **Playwright MCP** to open the page in a browser and take screenshots at **mobile (~390px), tablet (~768px), and desktop (~1280px)** widths.
3. Read the browser **console** for errors or warnings.
4. Check: does it match the brief's design direction? Is anything broken, misaligned, overflowing, or unreadable? Are focus states visible and does it respect reduced motion?
5. **Fix issues before reporting the work as done.** Do not tell me a page is finished until you have screenshotted it and confirmed it looks right at all three widths.

Only surface work to me once it passes this self-check. Show me the screenshots when you report progress.

## Working style
- Work through the build order in the brief (Section 7): scaffold → design system → shared header/footer → Home → Capabilities → Portfolio → Contact → wire form → verify.
- Prefer small, verifiable steps over large unreviewed changes.
- If something in the brief is ambiguous, make a reasonable choice, state it, and keep moving — don't stall waiting on me for small decisions.
