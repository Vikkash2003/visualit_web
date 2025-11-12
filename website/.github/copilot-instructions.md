## Purpose
Short, actionable guidance for AI agents editing Visualit web frontend (Next.js app). Focus on small, verifiable edits and follow existing patterns.

### Quick facts
- Framework: Next.js (app router) — code under `src/app` (see `src/app/layout.js`, `src/app/page.js`).
- React 19, Next 16. Project uses Tailwind CSS (v4) and heavy utility-class styling.
- Scripts: `npm run dev` (next dev), `npm run build`, `npm start`, `npm run lint` (eslint).
- Absolute import alias `@/` is used throughout (see imports in `src/app/page.js`).

### Where to start (important files)
- Root layout: `src/app/layout.js` — global HTML and hydration hints (`suppressHydrationWarning`).
- Home composition: `src/app/page.js` — shows how pages compose `src/components/*`.
- Shared helper: `src/lib/utils.js` — `cn()` wrapper around `clsx` + `twMerge` (use this to merge Tailwind classes).
- UI primitives: `src/components/ui/*` — Dialogs, inputs, buttons, tooltip patterns (Radix-based).
- Key components: `src/components/Navigation.js`, `src/components/HeroSection.js`, `src/components/DemoVideo.js` — representative patterns for client components and animations.
- Tailwind config: `tailwind.config.js` — color tokens, animations, and content paths.
- Static/example data: `src/data/*` (e.g., `pricingData.js`).

### Project-specific conventions and patterns
- Client vs Server components: files that need browser APIs include `'use client'` at top (see `Navigation.js`, `DemoVideo.js`, `HeroSection.js`). Prefer leaving components as server components unless they require hooks or browser APIs.
- Hydration: the layout uses `suppressHydrationWarning`; when introducing interactive client components, follow the existing pattern and keep SSR-friendly markup where possible.
- CSS/Tailwind:
  - Compose classes with the `cn()` helper from `src/lib/utils.js` to avoid duplication and to properly merge dynamic classes.
  - Use tokens and animations declared in `tailwind.config.js` (e.g., `animate-gradient`, `fontFamily.display`).
- UI primitives: dialogs and accessibility patterns follow Radix + local wrappers (`src/components/ui/dialog.js`). Use `DialogTrigger asChild` when passing custom triggers (see `DemoVideo.js`).
- Import style: use absolute imports with `@/` (e.g., `import Button from '@/components/ui/button'`). Keep imports consistent.

### Build / dev / lint workflows (how to verify edits)
- Start dev server: `npm run dev` — verifies UI changes quickly.
- Build for a production check: `npm run build` then `npm start`.
- Lint: `npm run lint` (runs `eslint`). Fix lint errors that the project linter reports.

### Integration points & dependencies to watch for
- UI libs used heavily: `@radix-ui/*`, `lucide-react`, `framer-motion`, `react-device-mockups` — changes to components may require checking these packages' usage.
- `twMerge` + `clsx` used for Tailwind merging (via `cn` helper) — avoid manual string concatenation when classes are conditional.

### Small, concrete examples for common tasks
- Make a component interactive: add `'use client'` at file top, import `useState` from React, and follow the pattern in `Navigation.js`.
- Add an accessible dialog: copy `src/components/DemoVideo.js` usage of `Dialog`, `DialogTrigger`, and `DialogContent` from `src/components/ui/dialog.js`.
- Merge Tailwind classes safely: `import { cn } from '@/lib/utils'` then `className={cn('px-4', isActive && 'bg-white')}`.

### Safety and scope guidance for automated edits
- Prefer small, single-purpose PRs that modify one component or one file and include a short note describing manual verification steps (e.g., "ran dev, opened Home, verified dialog opens").
- Avoid large refactors touching global styles or the Tailwind config without an explicit human reviewer.

---
If anything above is ambiguous or you'd like samples for a specific change (component behavior, adding an API route, or a new UI primitive), tell me which area and I'll expand this file with matching examples and checks.
