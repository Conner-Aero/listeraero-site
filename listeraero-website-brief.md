# Lister Aerospace — Website Build Brief

**For:** Claude Code
**Project:** Marketing/portfolio site for Lister Aerospace Technologies LLC
**Primary domain:** `listeraero.com` (redirect `listeraerospace.com` → `listeraero.com`)
**Contact email:** `conner@listeraero.com`

---

## 1. Build target

- **Type:** Static marketing site. Fast, no login, no database.
- **Stack:** Astro preferred (component reuse, first-class Cloudflare Pages support). Plain HTML/CSS/JS is acceptable if simpler. No SPA, no heavy framework.
- **Host:** Cloudflare Pages (deploy via git). Keep the build output Pages-compatible.
- **Contact form handler:** Use Formspree (free tier) for the first version — a plain POST endpoint that emails submissions to `conner@listeraero.com`. Note in a comment that a Cloudflare Worker + Resend/Postmark is the "fully owned" upgrade path later.
- **Quality floor:** Responsive to mobile, visible keyboard focus, `prefers-reduced-motion` respected, good Lighthouse scores.

---

## 2. Positioning & voice

**Who this is for:** Aircraft OEMs, suppliers, and staffing firms looking for a contract aerospace engineer who can take a part from analysis and CAD all the way to tooling and a finished machined component.

**The differentiator (this is the whole story):** Sole engineer of record at a Part 23 certified aircraft OEM, *plus* hands-on CNC machining and tooling. Most engineers stop at the drawing. This one designs the part, substantiates it, designs the tooling, and cuts it.

**One-line positioning:**
> Independent aerospace engineering — structural analysis, FAA certification support, and design-through-manufacturing for aircraft OEMs and suppliers.

**Voice:** Precise, plain, confident. Active voice. No jargon-as-decoration, no startup fluff. Read like a shop drawing, not a brochure.

**Genericization rule (important):** Do **not** name the current employer anywhere. Refer only to "a Part 23 certified aircraft OEM." All past-performance is described by discipline and outcome, never by program or company name.

---

## 3. Design direction

Ground the aesthetic in the subject's own world: **precision engineering drawings and machined metal.** The feeling is drafting-table rigor — dimension lines, section markers, tolerance, clean linework — modernized, not literal.

**Avoid these AI-default looks entirely:** cream background + high-contrast serif + terracotta accent; near-black + single acid-green accent; broadsheet hairline-rule newspaper columns. None of those.

**Palette (starting point — refine as needed):**
- `#F5F4F1` — cool drafting-vellum off-white (base)
- `#16181C` — graphite near-black (ink / text)
- `#3C4A57` — machined steel blue-gray (structure)
- `#6E7B87` — muted titanium (secondary / captions)
- `#C8552B` — one confident anodized-orange accent, used *only* for interactive elements and the primary CTA (used sparingly — it is the single loud thing on the page)

**Type:** Pair a technical, engineered display face (something with drafting/industrial character) with a highly legible body face, plus a monospace/utility face for data, captions, and any spec-style labels. Make the type a memorable part of the page, not neutral delivery.

**Signature element:** A thin technical-linework motif drawn from engineering drawings — dimension lines with arrow terminators, or a section-view marker — used as the page's connective tissue (section dividers, hero framing). This is where the boldness is spent; keep everything else quiet.

**Motion:** Minimal and deliberate. A subtle scroll-reveal on the capability pillars is plenty. No scattered effects.

---

## 4. Site structure

Four pages:

1. **Home** (`/`)
2. **Capabilities** (`/capabilities`)
3. **Portfolio** (`/portfolio`)
4. **Request a Quote** (`/contact`)

Persistent header with logo/wordmark + nav; the "Request a Quote" nav item styled as the accent CTA. Footer with `conner@listeraero.com`, "Lister Aerospace Technologies LLC," and location (Greenfield, WI).

---

## 5. Page copy

### Home

**Hero headline:**
> From analysis to a finished part.

**Hero subhead:**
> Independent aerospace engineering — structural analysis, FAA certification support, and design-through-manufacturing for aircraft OEMs and suppliers.

**Primary CTA:** Request a Quote → `/contact`
**Secondary link:** See selected work → `/portfolio`

**Positioning block (below hero):**
> Most engineering stops at the drawing. I take a part further — running the analysis, building the CAD, substantiating the structure, designing the tooling, and machining the finished component. That range comes from serving as the sole engineer of record at a Part 23 certified aircraft OEM, paired with hands-on CNC machining and tooling. One point of contact from first sketch to first part.

**Capability pillars (four cards, each links to the matching section on `/capabilities`):**

1. **Design & CAD** — SOLIDWORKS Premium part, assembly, and drawing work; weldments, tube coping, and frame building; legacy model and drawing modernization.
2. **Analysis & Substantiation** — Classical hand analysis and FEA; stress reports and structural substantiation packages.
3. **FAA Certification Support** — ADs, TCDS, STCs, field approvals, and DER/DAR coordination.
4. **Tooling & Manufacturing** — Forming- and wiping-die design; CAM (HAAS, BendTech A400); CNC machining and design-for-manufacture.

**Selected-work teaser:** 2–3 portfolio items with thumbnail + one-line caption → link to `/portfolio`.

**Closing CTA band:** "Have a part, a project, or a certification problem? Let's talk." → Request a Quote.

---

### Capabilities

Intro line:
> A single engineer covering the full path from concept to certified, machined hardware.

Four grouped sections (mirror the home pillars, expanded):

**Design & CAD**
- SOLIDWORKS Premium — part, assembly, and production drawings
- Weldments, tube coping, and welded-frame design
- Legacy model and drawing modernization (bringing paper-era or outdated CAD into current, manufacturable models)
- Part and assembly design for aircraft structures

**Analysis & Substantiation**
- Classical / hand structural analysis
- Finite element analysis (structural)
- Stress reports and structural substantiation packages

**FAA Certification Support**
- Airworthiness Directives (ADs) and Type Certificate Data Sheets (TCDS)
- Supplemental Type Certificates (STCs) and field approvals
- DER / DAR coordination

**Tooling & Manufacturing**
- Forming-die and wiping-die design for sheet-metal components
- CAM programming — HAAS (mills) and BendTech A400 (tube)
- CNC machining and tube fabrication
- Design-for-manufacture review

> *(Note to Conner: CFD/flow simulation intentionally left off until your experience there is stronger. AI is kept off the public page — better raised directly with a client as an implementation service later.)*

---

### Portfolio

Intro line:
> A sample of work across analysis, design, tooling, and manufacturing. Details generalized where projects are proprietary.

**Grid of project cards.** Each card:
- Image (Conner to supply — renders, machined-part photos, drawing snippets; screen for anything proprietary first)
- Title
- Discipline tags (e.g. *FEA · Design · Certification*)
- One-line genericized description

**Placeholder cards to build the layout around (Conner supplies final images + confirms wording):**

1. **Landing-gear structural reconfiguration** — *Design · Analysis · Certification.* Redesigned and substantiated a landing-gear structure at a Part 23 certified OEM.
2. **FAA-witnessed drop testing** — *Certification · Test.* Prepared and supported structural drop testing witnessed by the FAA.
3. **Production tooling & CNC tube fabrication** — *Tooling · Manufacturing.* Designed production tooling and fabricated tube structures in-house.
4. **Forming/wiping dies for sheet-metal gussets** — *Tooling · DFM.* Designed wiping dies for repeatable sheet-metal gusset forming.

*(Build a clean, extensible card component — Conner will add more projects over time.)*

---

### Request a Quote / Contact

Intro line:
> Tell me about the part or project. I'll get back to you quickly.

**Form fields:**
- Name (required)
- Company
- Email (required)
- Phone (optional)
- Project type (dropdown): Structural analysis / FEA · FAA certification support · CAD & drawings · Tooling & manufacturing · Other
- Message (required)

**Submit button label:** "Send request"
**Success state:** "Request sent — I'll be in touch." (in the interface's voice, not an apology)
**Error state:** Explain what to fix, plainly. Also show the direct email as a fallback: `conner@listeraero.com`.

Form posts to Formspree → delivers to `conner@listeraero.com`.

---

## 6. Open items (Conner)

- [ ] Supply portfolio images (renders, part photos, drawing snippets) — screen for proprietary content first.
- [ ] Set up `conner@listeraero.com` mailbox (Google Workspace Business Starter ~$7/mo, or Zoho free tier) so the contact form and replies both come from the domain.
- [ ] Confirm final wording on the four portfolio placeholders.
- [ ] Provide/point to a logo or wordmark if one exists (otherwise Claude Code sets a clean type-based wordmark).

---

## 7. Build order for Claude Code

1. Scaffold the Astro (or static) project, Cloudflare Pages-ready.
2. Establish the design system from Section 3 (tokens, type, the linework signature) before building pages.
3. Build shared header/footer, then Home → Capabilities → Portfolio → Contact.
4. Wire the contact form to Formspree.
5. Verify responsive/mobile, focus states, reduced motion.
6. Confirm local dev server renders correctly, then prep for Cloudflare Pages deploy.
