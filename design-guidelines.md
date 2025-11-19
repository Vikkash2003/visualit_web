# VisuaLit Design System

## 1. Design Concepts (The "Vibe")
We are aiming for a mix of the following modern UI trends. Use these concepts to drive layout decisions:
- **Bento UI:** Content should be organized in modular, bento-box style grids. Focus on varied cell sizes (1x1, 2x1, 2x2).
- **Dark Mode SaaS:** The aesthetic is professional, high-tech, and strictly dark.
- **Aurora UI:** Use subtle, moving gradients of light (Green/Purple) to highlight key areas behind the glass cards.
- **Glassmorphism:** UI elements should feel like layers of frosted glass floating above the background.

## 2. The "Hard" Rules (The Constraints)
While you have creative freedom with the layout, you **MUST** adhere to these specific values to match our brand:

### Colors (Tailwind)
- **Background:** `bg-[#050505]` (Strictly this deep black).
- **Glass Card:** `bg-white/[0.03]` with `backdrop-blur-md`.
- **Border:** `border border-white/[0.08]`.
- **Primary Glow:** `emerald-500` (used for buttons and aurora effects).

### Typography
- **Headings:** `font-sans tracking-tight font-medium text-white`.
- **Body:** `text-zinc-400` (Use Zinc, not Gray, for a cooler tone).

### Shapes
- **Radii:** `rounded-[32px]` (Super rounded corners for that modern "app" feel).
- **Spacing:** Use generous padding inside cards (`p-8` or `p-10`).

## 3. Component Logic
- **Buttons:** Primary buttons should glow (`shadow-[0_0_20px_rgba(16,185,129,0.3)]`).
- **Grid:** The Features section must be a CSS Grid.