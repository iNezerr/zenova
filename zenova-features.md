# Zenova Oil — Website Feature Spec

**Project:** zenovaoil.com.ng redesign  
**Author:** Product Review  
**Date:** May 2025  
**Status:** Ready for Implementation

---

## Overview

This document outlines all UI/UX changes, new sections, and technical upgrades to be implemented on the Zenova Oil website. Each feature includes context, acceptance criteria, and implementation notes. A working reference implementation is available as `zenova-redesign.html`.

---

## 1. Floating WhatsApp Button

**Priority:** High  
**Type:** New Component

### What
A fixed floating action button (FAB) anchored to the bottom-right of the viewport that opens a pre-filled WhatsApp chat with the Zenova number.

### Why
The primary audience is Nigerian businesses. WhatsApp is the dominant business communication channel and converts significantly better than contact forms in this market.

### Acceptance Criteria
- Button is fixed at `bottom: 2rem; right: 2rem` and always visible on scroll
- Uses the official WhatsApp green (`#25D366`) with drop shadow
- Links to `https://wa.me/2347060502621` with pre-filled message: `"Hello Zenova Oil, I need a diesel quote"`
- On hover, shows a tooltip label: `"Chat with us!"`
- Button scales up slightly on hover (`transform: scale(1.1)`)
- Opens in a new tab (`target="_blank"`)
- Fully visible on mobile (does not overlap footer content)

### Implementation Notes
```
Position: fixed
Bottom: 2rem | Right: 2rem
Z-index: 200
Size: 56px × 56px circle
Icon: WhatsApp SVG logo (white fill)
Shadow: 0 4px 20px rgba(37, 211, 102, 0.4)
```

---

## 2. Testimonials Section

**Priority:** High  
**Type:** New Section

### What
A new `#testimonials` section placed between the "Why Zenova" and "Services" sections, displaying three client quotes in a card grid.

### Why
The current site has zero social proof. Even a small set of client quotes dramatically increases trust with new visitors, especially for a B2B service.

### Acceptance Criteria
- Section renders after `#why-zenova` and before `#product-service`
- Displays a 3-column card grid (collapses to 1 column on mobile)
- Each card contains: star rating, quote text, client avatar (initials), client name, and role/company
- Cards have a subtle hover state (border colour change)
- Section has a heading: "Trusted by Abuja's Leading Businesses"
- Navigation link "Clients" added to the nav bar pointing to `#testimonials`

### Initial Content (placeholder — replace with real clients ASAP)

| Name | Role | Quote |
|---|---|---|
| Adaeze Okonkwo | Operations Manager, Garki Hotel | "Since switching to Zenova, we've had zero generator-related downtime at our facility." |
| Babatunde Musa | CEO, Musa & Associates | "Before Zenova, fuel gaps were a serious risk. Now our generators run 24/7 without a hitch." |
| Emeka Nwachukwu | Facilities Lead, TechHub Abuja | "Fast responses, quality fuel, and they actually show up when they say they will." |

---

## 3. Hero Stats — Reframe

**Priority:** High  
**Type:** Content Change

### What
Replace the current three stat counters (231+ Litres, 99.8% On-Time Rate, 21+ Deliveries) with reframed metrics that don't undermine credibility.

### Why
"231+ Litres" and "21+ Deliveries" are very low numbers for a delivery business and will raise questions rather than build confidence. Stats should project reliability and capability, not expose limited volume.

### Old Stats → New Stats

| Old | New |
|---|---|
| 231+ Litres Delivered | 98%+ On-Time Delivery Rate |
| 99.8% On-Time Rate | 24/7 Customer Support |
| 21+ Successful Deliveries | Abuja FCT Coverage |

### Acceptance Criteria
- Remove the duplicate stats block in the "Why Choose Zenova Oil?" section
- Keep one stats row only — in the hero section, below the CTA buttons
- Stats are visually separated by an amber left-border treatment (not cards)

---

## 4. Trust Signals Section

**Priority:** Medium  
**Type:** New Section

### What
A new `#trust` section placed after the Testimonials section, displaying four trust pillars in a horizontal card grid.

### Why
First-time B2B buyers evaluating a fuel supplier need reassurance about quality, locality, support, and pricing transparency before making contact.

### Acceptance Criteria
- 4-column grid (2 columns on mobile)
- Each card has an icon, short heading, and 1–2 sentence description
- Section heading: "Built on Reliability"

### Content

| Icon | Heading | Description |
|---|---|---|
| 🛡️ | Quality Guaranteed | We source only certified, undiluted diesel. Your equipment is protected. |
| 📍 | Abuja-Based Team | We live and operate here. Fast local response, no long-distance delays. |
| 💬 | Real Support | Speak to a real person, not a chatbot. WhatsApp, call, or email — always. |
| 💰 | No Hidden Fees | Transparent pricing upfront. What you're quoted is exactly what you pay. |

---

## 5. Contact Form — State Management

**Priority:** High  
**Type:** Enhancement

### What
Add proper loading and success states to the contact form submission flow.

### Why
Currently the form gives no feedback after submission. Users have no confirmation their message was received, which erodes trust and may lead to duplicate submissions.

### Acceptance Criteria
- On submit: button text changes to "Sending…" and is disabled
- On success: form fields are hidden and replaced with a success message
- Success message includes a confirmation icon, "Message sent!" heading, and "We'll get back to you within the hour." body text
- On error: display an inline error message without clearing form fields
- Form should not submit if required fields (name, phone, email) are empty

---

## 6. Contact Form — Service Type Dropdown

**Priority:** Medium  
**Type:** Enhancement

### What
Add a "Service Needed" `<select>` dropdown to the contact form above the message field.

### Why
Pre-qualifying enquiry type helps the Zenova team triage and respond faster. It also signals to the visitor that Zenova offers distinct services, not just one generic product.

### Options
```
- (Select a service...)
- One-Time Diesel Delivery
- Recurring Monthly Supply
- Bulk Contract Agreement
- Emergency Fuel Supply
- General Enquiry
```

---

## 7. Navigation — Single Primary CTA

**Priority:** Medium  
**Type:** Change

### What
Remove the "Get A Discount" CTA from the hero sub-text and the "Why Zenova" section. Keep only one CTA button in the navigation bar.

### Why
The current site places the same CTA in three separate locations (nav, hero, and Why section). Repeating it reduces its impact. One well-placed CTA performs better than three scattered ones.

### Acceptance Criteria
- Nav CTA reads: "Get a Quote ↗" and links to WhatsApp (`https://wa.me/2347060502621?text=...`)
- Hero primary button also links to WhatsApp (not a form anchor)
- Hero secondary button links to `#why-zenova` ("Learn More")
- No "Get A Discount" language elsewhere on the page

---

## 8. New Services Added

**Priority:** Medium  
**Type:** Content Change

### What
Expand the "Our Products and Services" section from 4 to 4 updated service cards, explicitly naming Bulk Contracts and Emergency Supply as offerings.

### Updated Service Cards

| Icon | Title | Description |
|---|---|---|
| ⛽ | Premium Diesel Fuel | Multiple grades of high-quality diesel for generators, trucks, and industrial equipment. |
| 🚚 | On-Site Delivery & Refueling | We come to you — no trips to the filling station, no logistics headache. |
| 📋 | Bulk Supply Contracts | Lock in better rates and guaranteed availability with monthly or quarterly agreements. Ideal for estates, schools, and hospitals. |
| 🕐 | 24/7 Emergency Supply | Running dangerously low? Call or WhatsApp any time. We treat emergencies with urgency. |

---

## 9. Branded Email Address

**Priority:** High  
**Type:** Content Change

### What
Replace `zenovaoil@gmail.com` everywhere on the site with `hello@zenovaoil.com.ng`.

### Why
A Gmail address on a business website signals that the business may be informal or unestablished. A branded domain email (`@zenovaoil.com.ng`) is a basic credibility signal for B2B clients.

### Action Required (outside dev scope)
- Set up `hello@zenovaoil.com.ng` email via the domain registrar or Google Workspace
- Update the MX records for `zenovaoil.com.ng`

### Files to Update
- All `mailto:` links
- Footer contact section
- Contact form `action` or recipient config (if server-side)
- Any email address displayed as plain text

---

## 10. Footer Copyright Year — Dynamic

**Priority:** Low  
**Type:** Bug Fix

### What
The footer currently hardcodes `© 2024`. Update it to render the current year dynamically.

### Acceptance Criteria
- Year is rendered via JavaScript: `new Date().getFullYear()`
- No longer needs manual update each year

### Implementation
```html
<span id="footer-year"></span>
<script>
  document.getElementById('footer-year').textContent = new Date().getFullYear();
</script>
```

---

## 11. Visual Design System

**Priority:** High  
**Type:** Design Change

### Colour Palette

| Token | Value | Usage |
|---|---|---|
| `--navy` | `#070D1A` | Page background |
| `--navy-mid` | `#101828` | Alternate section background |
| `--navy-card` | `#141E30` | Card backgrounds |
| `--amber` | `#F5A623` | Primary accent, CTAs, borders |
| `--amber-dark` | `#C4851A` | Hover states |
| `--amber-glow` | `rgba(245,166,35,0.12)` | Icon backgrounds, badges |
| `--white` | `#F7F2EA` | Primary text (warm white) |
| `--muted` | `#8A96A8` | Secondary text, labels |
| `--border` | `rgba(255,255,255,0.08)` | Card and section borders |

### Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display headings | Bebas Neue | 400 | clamp(2.2rem, 5vw, 3.2rem) |
| Hero H1 | Bebas Neue | 400 | clamp(3.2rem, 8vw, 5.5rem) |
| Body | Outfit | 300–600 | 16px |
| Labels / tags | Outfit | 600 | 0.75–0.82rem |

Both fonts are available via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

### Scroll Animations
All major content blocks should use an `IntersectionObserver` fade-up on scroll:
```css
.fade-up { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
.fade-up.visible { opacity: 1; transform: translateY(0); }
```
```javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
```

---

## 12. SEO Meta Tags

**Priority:** Medium  
**Type:** Technical

### What
Update the page `<meta>` description to be natural, keyword-rich, and informative.

### Current
```html
<meta name="description" content="best diesel oil distributor in Nigeria" />
```

### Updated
```html
<meta name="description" content="Zenova Oil delivers high-quality diesel fuel directly to businesses in Abuja, Nigeria — on time, every time. Get a free quote today." />
<meta property="og:title" content="Zenova Oil — Abuja's Trusted Diesel Partner" />
<meta property="og:description" content="Premium diesel delivered to your door. Serving businesses across Abuja and the FCT." />
<meta property="og:image" content="https://www.zenovaoil.com.ng/og-image.jpg" />
<meta property="og:url" content="https://www.zenovaoil.com.ng" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## 13. Logo — SVG Upgrade

**Priority:** Low  
**Type:** Technical

### What
Replace the PNG logo (`zenovaoil_logo.png`) in the nav and footer with an SVG version.

### Why
PNG logos render blurry on retina/high-DPI screens. SVG logos are sharp at every resolution and have a smaller file size.

### Action Required (outside dev scope)
- Export or recreate the Zenova logo as an `.svg` file
- Replace all `<img src="...zenovaoil_logo.png">` instances

---

## 14. Mobile Navigation

**Priority:** High  
**Type:** Enhancement

### What
The desktop nav links should collapse into a hamburger menu on screens narrower than 768px.

### Acceptance Criteria
- Hamburger icon (3 horizontal lines) appears on mobile, replacing the nav links
- Tapping the hamburger toggles the nav links open/closed as a vertical dropdown below the navbar
- Tapping any nav link closes the menu
- The "Get a Quote" CTA button remains visible within the mobile menu

---

## 15. Back-to-Top Button

**Priority:** Low  
**Type:** New Component

### What
A small circular button fixed to the bottom-right (just above the WhatsApp FAB) that scrolls the user back to the top of the page.

### Acceptance Criteria
- Only becomes visible after the user scrolls down 400px
- Appears/disappears with a CSS opacity transition
- Clicking scrolls smoothly to `#home`
- Does not overlap the WhatsApp button

---

## Section Order (Final)

```
1. #home          — Hero
2. #why-zenova    — Why Choose Zenova
3. #testimonials  — Client Testimonials      ← NEW
4. #product-service — Services
5. #trust         — Trust Signals            ← NEW
6. #contact       — Contact / Quote Request
7. Footer
```

---

## Out of Scope (Recommended for Next Phase)

- **Google Maps embed** — show Abuja FCT service area in the contact section
- **Blog / Resources** — SEO-driven content ("How to calculate diesel needs for your generator")
- **Google Business Profile** — set up and link from the site
- **Pricing page** — even a "starting from ₦X/litre" range reduces friction for new leads
- **WhatsApp Business API integration** — auto-reply on form submission via WhatsApp

---

*Reference implementation: `zenova-redesign.html`*
