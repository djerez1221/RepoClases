---
name: Huellitas Nurture System
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#3e494a'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#6e797a'
  outline-variant: '#bdc9ca'
  surface-tint: '#006971'
  primary: '#00666e'
  on-primary: '#ffffff'
  primary-container: '#1d8089'
  on-primary-container: '#f5feff'
  inverse-primary: '#7ed4dd'
  secondary: '#944a00'
  on-secondary: '#ffffff'
  secondary-container: '#ff9742'
  on-secondary-container: '#6c3400'
  tertiary: '#525f5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#6a7775'
  on-tertiary-container: '#f3fffc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9af0fa'
  primary-fixed-dim: '#7ed4dd'
  on-primary-fixed: '#002023'
  on-primary-fixed-variant: '#004f55'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#ffb783'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#713700'
  tertiary-fixed: '#d7e5e2'
  tertiary-fixed-dim: '#bcc9c7'
  on-tertiary-fixed: '#121e1c'
  on-tertiary-fixed-variant: '#3d4947'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  container-max: 1200px
---

## Brand & Style
The design system for Huellitas centers on a "Nurturing Modernist" aesthetic. It balances the precision of a medical facility with the warmth of a community pet clinic. The visual language is clean and professional to instill trust in pet owners, while utilizing soft geometry and friendly interactions to reduce anxiety.

The style leans into **Minimalism** with a **Tactile** edge. High use of whitespace ensures clarity in medical information, while subtle depth and soft corners evoke a sense of touch and care. The emotional response should be one of "calm competence"—the feeling that a pet is in the most capable, gentlest hands.

## Colors
The palette is designed to be therapeutic and energetic.
- **Primary (Deep Teal):** Used for authoritative elements, primary buttons, and navigation. It represents stability and medical professionalism.
- **Secondary (Warm Orange):** Used sparingly as an accent for calls-to-action, alerts, or celebratory moments (e.g., "Health Check Complete"). It provides a friendly, sunlit contrast to the teal.
- **Tertiary (Mint Tint):** A background wash color used to soften the UI and distinguish sections without the harshness of pure white.
- **Neutral (Slate Grey):** Used for typography to ensure high readability while appearing softer than pure black.

## Typography
The typography strategy uses **Plus Jakarta Sans** for headlines to provide a modern, slightly rounded, and optimistic character. For long-form content and UI labels, **Be Vietnam Pro** is used for its exceptional legibility and warm, contemporary feel.

- Use **Headline XL** and **LG** for hero sections and main page titles.
- **Body LG** should be the default for blog posts or pet care instructions to ensure accessibility for all age groups.
- **Label MD** is reserved for navigation items and button text, utilizing a slightly heavier weight for clarity.

## Layout & Spacing
The design system employs a **Fluid Grid** model based on an 8px root unit. 

- **Desktop:** 12-column grid with 24px gutters. Content is contained within a 1200px max-width wrapper.
- **Tablet:** 8-column grid with 24px gutters and 32px side margins.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

Horizontal rhythm should favor generous breathing room (**lg** and **xl** units) between major sections to maintain the "calm" brand pillar. Elements like cards in a list should use the **md** spacing unit for their internal padding.

## Elevation & Depth
This design system uses **Tonal Layers** combined with **Ambient Shadows** to create a soft, approachable hierarchy.

- **Level 0 (Floor):** Uses the Tertiary color (#E6F4F1) to ground the interface.
- **Level 1 (Cards/Surface):** Pure white surfaces with a very soft, diffused shadow (10% opacity of the Primary color, 12px blur, 4px Y-offset). This makes elements feel like they are gently floating.
- **Level 2 (Interactive):** When hovered, interactive elements should slightly increase their shadow spread and lift (Y-offset) to signal "touchability."
- **Overlays:** Use a background blur (12px) on the backdrop to keep the user focused on modals or navigation menus.

## Shapes
A **Rounded** shape language is used to communicate friendliness and safety. Sharp corners are avoided to move away from "sterile" medical tropes.

- **Buttons & Inputs:** Use the standard `rounded` (0.5rem) setting.
- **Cards & Modals:** Use `rounded-lg` (1rem) to create a soft container for content.
- **Pet Avatars & Tags:** Use `rounded-xl` or full circular clips to emphasize the "organic" nature of the subjects.

## Components
- **Buttons:** Primary buttons use the Deep Teal background with White text. Secondary buttons use a Deep Teal outline with a transparent background. Accent buttons (for booking) use the Warm Orange.
- **Input Fields:** Soft grey borders that transition to Deep Teal on focus. Error states use a soft coral (not a harsh red) to maintain the nurturing tone.
- **Cards:** White backgrounds with `rounded-lg` corners and ambient teal-tinted shadows. Use a "Pet Profile Card" variant that includes a circular avatar and a small status chip (e.g., "Vaccinated").
- **Chips:** Used for pet categories (Dog, Cat, Exotic) or medical tags. These should have a light Tertiary background and Deep Teal text.
- **Progress Steps:** For appointment booking, use a horizontal stepper with rounded nodes to make the process feel easy and approachable.
- **Lists:** Use "Nurture Lists" with increased vertical padding (16px) and subtle dividers to prevent information density from feeling overwhelming.