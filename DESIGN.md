---
name: Akhilesh Kalme — Portfolio
description: Full-stack developer portfolio with modern 3D-enhanced design
colors:
  primary: "#1A2238"
  accent: "#D4A843"
  accent-hover: "#E0B84F"
  accent-light: "#EBE1C0"
  bg: "#FFFFFF"
  surface: "#F4F5F7"
  card: "#FCFDFD"
  card-border: "#DEE1E4"
  border: "#DEE1E4"
  text: "#1C1D1F"
  text-secondary: "#63666A"
  text-muted: "#919498"
  selection: "#F5E6C0"
typography:
  display:
    fontFamily: "'Sora', sans-serif"
    fontSize: "clamp(2rem, 6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Sora', sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Sora', sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Manrope', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'Sora', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.15em"
    textTransform: "uppercase"
rounded:
  sm: "8px"
  md: "12px"
  pill: "50px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "100px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    typography: "label"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    border: "1.5px solid {colors.border}"
    typography: "label"
  button-secondary-hover:
    borderColor: "{colors.primary}"
    textColor: "{colors.primary}"
  skill-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "28px"
    border: "1px solid {colors.border}"
  work-card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.card-border}"
  work-tag:
    backgroundColor: "#E8EAF0"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
    typography: "label"
    fontSize: "0.7rem"
---

# Design System: Akhilesh Kalme — Portfolio

## 1. Overview

**Creative North Star: "The Dynamic Developer Canvas"**

A portfolio that communicates technical mastery through its own execution. The design is modern and creative without being frivolous — every 3D effect, every motion, every layout choice exists to prove the developer's capability. The deep navy primary and warm gold accent signal confidence and premium taste, while generous whitespace and clean typography keep the focus on the work.

This system explicitly rejects generic templated portfolios and gimmicky tech demos. The visual language says "this developer understands both craft and taste."

**Key Characteristics:**
- Bold typography with tight letter-spacing for confident headlines
- Warm gold accent against deep navy for a premium, distinctive pair
- Subtle 3D depth (tilt, glow, scroll parallax) that feels native, not bolted on
- Clean, card-based layout with consistent rounded corners (12px)
- Purposeful motion — every transition serves clarity or hierarchy

## 2. Colors

The palette pairs a deep, authoritative navy with a warm gold accent. The contrast is premium and technical without being cold.

### Primary
- **Deep Navy** (#1A2238 / oklch(0.22 0.055 255)): The authoritative brand color. Used for headings, the site logo, interactive hover states, and primary emphasis.

### Accent / Secondary
- **Warm Gold** (#D4A843 / oklch(0.70 0.12 85)): The signature accent. Used for CTA buttons, stats highlights, decorative gradients, and hover triggers.
- **Gold Hover** (#E0B84F / oklch(0.76 0.13 85)): Button hover state.
- **Gold Light** (#EBE1C0 / oklch(0.92 0.04 85)): Subtle tint for highlights and selection color.

### Neutral
- **White** (#FFFFFF): Page and card backgrounds.
- **Surface** (#F4F5F7 / oklch(0.97 0.003 250)): Subtle alternate background for skill cards, hover states.
- **Border** (#DEE1E4 / oklch(0.88 0.005 250)): Card borders, dividers, input strokes.
- **Text** (#1C1D1F / oklch(0.12 0.008 255)): Primary body and heading text.
- **Text Secondary** (#63666A / oklch(0.40 0.006 250)): Body copy, descriptions.
- **Text Muted** (#919498 / oklch(0.58 0.006 250)): Footer, metadata, placeholder text.

### Named Rules

**The Accent Sparing Rule.** Warm gold is used on ≤15% of any given screen. Its rarity makes it pop. Never flood a surface with the accent.

**The Navy Authority Rule.** Deep navy is the anchor. It grounds headlines, nav, and key interactive elements. Never replace it with a lighter blue.

## 3. Typography

**Display Font:** Sora (sans-serif, weights 400–700)
**Body Font:** Manrope (sans-serif, weights 400–600)

**Character:** A confident geometric sans paired with a warm, humanist sans. Sora handles display roles with its distinctive, slightly squared letterforms; Manrope provides effortless readability at body sizes. The combination feels contemporary and technical without being cold.

### Hierarchy

- **Display** (Sora 700, clamp(2rem, 6vw, 3.5rem), 1.1 line-height, -0.04em letter-spacing): Hero headlines only. Bold, compact, authoritative.
- **Headline** (Sora 700, clamp(1.5rem, 4vw, 2rem), 1.2 line-height, -0.03em letter-spacing): Section titles. Command attention at the top of each section.
- **Title** (Sora 700, 1.15rem, 1.3 line-height, -0.02em letter-spacing): Card titles, nav logo. Dense and readable.
- **Body** (Manrope 400, 1rem, 1.7 line-height): Paragraph copy. Max line length 65–75ch.
- **Label** (Sora 600, 0.75rem, 1.4 line-height, 0.15em letter-spacing, uppercase): Section kickers, button text, tags, metadata. Small but authoritative.

### Named Rules

**The Display-Only Rule.** The display size (3.5rem) is reserved exclusively for the hero headline. No other heading uses this scale. Its singularity is the point.

## 4. Elevation

A hybrid system: tonal layering for surfaces, shadow for interactive feedback. Cards and sheets are flat at rest (card background vs. surface background creates separation). Shadows appear on hover as a response to state, not as a default.

### Shadow Vocabulary

- **Ambient Low** (`box-shadow: 0 1px 3px oklch(0 0 0 / 0.06)`): Default card boundary shadow. Barely perceptible; its role is edge definition, not depth.
- **Elevated Medium** (`box-shadow: 0 4px 16px oklch(0 0 0 / 0.08)`): Hover state for work cards and interactive elements. Soft and directional.
- **Floating High** (`box-shadow: 0 8px 32px oklch(0 0 0 / 0.10)`): Modal dialogs, popovers, and the about section photo. Diffuse and generous.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state (hover, elevation, focus).

## 5. Components

### Buttons
- **Shape:** Gently curved corners (12px radius).
- **Primary (CTA):** Warm Gold background (`--accent`), Deep Navy text, Sora label (0.9rem, 600 weight), 12px 24px padding. Hover shifts to Gold Hover (`--accent-hover`). Transition: all 0.2s var(--ease).
- **Secondary (Outline):** Transparent background, 1.5px solid Border stroke, body text color. Hover swaps border to Deep Navy and text to Deep Navy.
- **Social / Icon Buttons:** Ghost style with text color, scaled down padding.

### Cards

**Skill Cards:**
- **Corner Style:** 12px radius (--radius)
- **Background:** Surface (`--surface`)
- **Border:** 1px solid Border
- **Padding:** 28px
- **Shadow Strategy:** Flat at rest → Elevated Medium on hover
- **Icon:** 28px, centered top, flanked by heading

**Work Cards:**
- **Corner Style:** 12px radius (--radius)
- **Background:** Card white (`--card`)
- **Border:** 1px solid Card Border
- **Shadow Strategy:** Flat at rest → Floating High on hover
- **Image:** 16:10 aspect ratio, zoom on hover (scale 1.03)
- **Overlay:** 75% black overlay on hover with action links
- **Body Padding:** 20px 24px with tag + title + description + tech stack

**Expertise Carousel Cards:**
- **Corner Style:** 16px radius (--radius + 4px)
- **Layout:** Absolute-positioned 3D carousel with rotateX + translateY + scale transforms
- **Transition:** 0.6s cubic-bezier(0.16, 1, 0.3, 1) for transform, 0.5s for opacity
- **Active Card:** Full opacity, identity scale, centered in stage
- **Side Cards:** 0.08 opacity, scaled down, offset vertically

### Navigation
- **Style:** Fixed top bar, transparent background with backdrop blur on scroll (--nav-blur). Full-width container with flex layout.
- **Logo:** Sora 700, 1.15rem, -0.8px letter-spacing, Deep Navy
- **Links:** Sora 500, 0.85rem, Deep Navy. Hover underlines via border-bottom.
- **Mobile:** Hamburger icon (three-line span animation), slide-in right panel with 0.35s ease transition, backdrop overlay.

### Tags / Chips
- **Style:** Pill shape (50px radius), Deep Navy text, light blue-gray background (`oklch(0.92 0.02 255)`), 3px 10px padding, Sora 600 0.7rem uppercase.
- **State:** Used as tech-stack indicators and work category tags. Read-only, no interaction states.

### Inputs (Contact Form)
- **Style:** Border-bottom only (1px solid Border), no background fill, 10px 16px padding, Sora 600 0.8rem label.
- **Focus:** Border shifts to Deep Navy.
- **Full-width fields** with a submit button that follows Button Primary style.

## 6. Do's and Don'ts

### Do:
- **Do** use the Warm Gold accent sparingly — it should feel like a reward, not wallpaper.
- **Do** let Deep Navy dominate headlines, nav, and key interactive text.
- **Do** use 3D effects (tilt, parallax, glow) to reinforce hierarchy, not distract from content.
- **Do** keep card surfaces flat at rest — let the content breathe.
- **Do** use the full 3.5rem display size only in the hero section.
- **Do** maintain generous whitespace between sections (100px padding).
- **Do** use Sora for all headings and Manrope for body copy consistently.

### Don't:
- **Don't** use generic templated portfolio patterns or Bootstrap-like layouts.
- **Don't** create gimmicky 3D that feels like a tech demo rather than a professional presentation.
- **Don't** use skeleton loaders, "under construction" pages, or half-baked states.
- **Don't** use dark mode with purple gradients, neon accents, or glassmorphism.
- **Don't** autoplay audio or use intrusive popups.
- **Don't** use the accent color for large background areas — it loses its pop.
- **Don't** use body fonts for headings or heading fonts for long-form body text.
- **Don't** use border-left greater than 1px as a colored decorative stripe.
- **Don't** use uppercase for body copy; reserve it for labels and short metadata.
