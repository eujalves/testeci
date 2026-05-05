---
name: Lumina Health Intelligence
colors:
  surface: '#f8f9fd'
  surface-dim: '#d9dade'
  surface-bright: '#f8f9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3f7'
  surface-container: '#edeef2'
  surface-container-high: '#e7e8ec'
  surface-container-highest: '#e1e2e6'
  on-surface: '#191c1f'
  on-surface-variant: '#474554'
  inverse-surface: '#2e3134'
  inverse-on-surface: '#eff1f5'
  outline: '#787586'
  outline-variant: '#c8c4d7'
  surface-tint: '#5847d2'
  primary: '#5341cd'
  on-primary: '#ffffff'
  primary-container: '#6c5ce7'
  on-primary-container: '#faf6ff'
  inverse-primary: '#c6bfff'
  secondary: '#0060ac'
  on-secondary: '#ffffff'
  secondary-container: '#68abff'
  on-secondary-container: '#003e73'
  tertiary: '#006461'
  on-tertiary: '#ffffff'
  tertiary-container: '#007f7c'
  on-tertiary-container: '#d9fffc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4dfff'
  primary-fixed-dim: '#c6bfff'
  on-primary-fixed: '#160066'
  on-primary-fixed-variant: '#4029ba'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#5af9f3'
  tertiary-fixed-dim: '#2edcd7'
  on-tertiary-fixed: '#00201f'
  on-tertiary-fixed-variant: '#00504e'
  background: '#f8f9fd'
  on-background: '#191c1f'
  surface-variant: '#e1e2e6'
typography:
  h1:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  caption:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: '0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  gutter: 24px
  margin: 32px
---

## Brand & Style
The design system is rooted in a "Human-Centric Intelligence" narrative. It balances the precision of AI-driven health data with the warmth required for chronic condition management. The style is **Minimalist SaaS**, prioritizing clarity, reduced cognitive load, and a sense of calm. 

The aesthetic avoids clinical coldness by utilizing soft depth and generous whitespace. It is designed to feel like a supportive partner—professional enough to trust with medical data, yet empathetic enough to be a daily companion. The gender-neutral approach is achieved through a balanced color temperature and avoiding traditional gendered visual tropes, focusing instead on universal accessibility and modern tech-forward interfaces.

## Colors
The palette uses **Modern Purple (#6C5CE7)** as the primary driver for action and brand identity, symbolizing wisdom and transformation. **Blue (#4A90E2)** serves as the secondary color, providing a calming, stable influence that reinforces trust. 

The background strategy utilizes a high-ratio of **White** for primary surfaces to ensure a high-fidelity, clean look, while **Light Gray (#F5F6FA)** is reserved for grounding the interface through subtle section nesting and page-level backgrounds. Semantic colors for status (Success, Warning, Error) should follow the desaturated "pastel-pro" trend to maintain the empathetic tone without causing alarm.

## Typography
This design system utilizes **Manrope** for its exceptional balance of geometric modernism and functional legibility. As a highly versatile sans-serif, it maintains a professional SaaS aesthetic while the slightly rounded terminals provide the necessary friendliness for a healthtech product.

The type scale is optimized for high readability. Large headers use tighter letter spacing for a modern look, while body text uses a generous line height (1.6) to reduce eye strain for users who may be experiencing cognitive fatigue—a common symptom in the healthtech space.

## Layout & Spacing
The layout follows a **Fluid Grid** model based on an 8px spacing system, providing a rhythmic and predictable flow. For desktop environments, a 12-column grid is used with 24px gutters to allow the UI to breathe. 

Components should use "container-first" spacing, where the white space between cards is as significant as the content within them. Large margins (32px+) are encouraged to separate distinct functional areas (e.g., the AI insights panel vs. the daily tracker), ensuring the user is never overwhelmed by data density.

## Elevation & Depth
Elevation is conveyed through **Ambient Shadows** and **Tonal Layers**. This design system avoids harsh borders in favor of soft, diffused shadows that use a tiny hint of the primary purple in the shadow color (e.g., `#6C5CE7` at 5-8% opacity).

*   **Level 0 (Flat):** Used for the main background layer (#F5F6FA).
*   **Level 1 (Surface):** White cards with a 1px border (#E2E8F0) or an extremely soft shadow (Y: 2px, B: 4px).
*   **Level 2 (Hover/Overlay):** Active cards and dropdowns with a more pronounced, diffused shadow (Y: 10px, B: 20px, Opacity: 10%).
*   **Level 3 (Modal):** High-depth shadows to isolate critical AI insights or input forms.

## Shapes
The shape language is defined by **Rounded (Scale 2)** containers. Standard components like cards and input fields utilize a 12px radius, while larger dashboard containers and primary buttons utilize a 16px radius. 

This specific range (12-16px) is chosen to strike a balance between the "bubbly" consumer-style apps and the "sharp" corporate tools. It feels modern and safe, mimicking the physical design of contemporary hardware. Progress bars and tags should utilize a fully rounded (pill) style to distinguish them from interactive containers.

## Components
Consistent styling across components reinforces the intelligent, SaaS-driven nature of the system:

*   **Buttons:** Primary buttons use a solid gradient or flat fill of Modern Purple with white text and 16px rounded corners. Secondary buttons use an outlined style with Blue (#4A90E2).
*   **Cards:** Pure white backgrounds with 12px-16px corner radii and Level 1 shadows. Cards should have a subtle 1px border in a slightly darker gray than the background to ensure definition.
*   **Input Fields:** Ghost-style with a light gray fill (#F5F6FA) that turns white on focus with a 2px Modern Purple border.
*   **Chips & Tags:** Small, semi-transparent fills of the primary or secondary color (10% opacity) with high-contrast text. Used for health categories and AI-suggested tags.
*   **Iconography:** 24px outlined icons with a consistent 1.5pt stroke weight. Icons should have rounded caps and joins to match the typography and shape language.
*   **AI Insight Modules:** A specialized component with a subtle gradient border (Purple to Blue) to signify "Intelligence-driven" content, separating it from standard user-inputted data.
*   **Status Indicators:** Soft, pulsing dots for "live" data tracking, emphasizing the "Sync" aspect of the product.