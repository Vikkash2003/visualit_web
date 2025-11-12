# VisuaLit Website Overhaul - Project Roadmap

**Project Goal:** Overhaul the visualit_web to meet Google Cloud Startup Program eligibility requirements and execute a major UI redesign.

**Project Lead:** Approves work at each major phase
**Developer:** Expert Next.js developer executing the plan

---

## Core Requirements

### 1. GCP Compliance
- [ ] Business Description (What VisuaLit is, problem it solves, target audience)
- [ ] Team Information (Key members and their roles)
- [ ] Product Information (Current stage: Closed Beta, screenshots/demos)
- [ ] Business Model (Freemium SaaS with subscriptions and credits)

### 2. Content Separation (Headless CMS Model)
- [ ] Separate all user-facing text from JSX components
- [ ] Allow easy content updates without touching code

### 3. UI/Brand Refresh
- [ ] Futuristic, minimal aesthetic
- [ ] New brand colors (Black, White/Grey, Spotify Green #1DB954)

---

## Brand & Style Guide

### Color Palette
- **Background:** Black (`#000000` or `dark:bg-gray-900`)
- **Text:** White/Light Grey
- **Accent:** Spotify Green (`#1DB954`)
- **Gradients:** Green-to-black combinations

### Logo
- New minimalist "V" shape logo (white on transparent)

### Design Inspiration
- **Nav/Hero:** Centered navigation links below main title, integrated into hero block
- **Cards:** Futuristic dark-mode with glowing green accent borders
- **Footer:** Thin glowing green gradient line at top

---

## Phase 1: Content Separation (Refactor to Headless CMS Model)

**Status:** ✅ COMPLETED

**Goal:** Move all hardcoded text from components into a single, centralized data file.

### Task 1.1: Create Content File ✅
- [x] Create `website/src/lib/contentData.js`

### Task 1.2: Refactor Existing Components ✅
**Components to Refactor:**
- [x] `website/src/components/Navigation.js`
- [x] `website/src/components/HeroSection.js` (Not refactored - will be redesigned in Phase 3)
- [x] `website/src/components/AboutSection.js`
- [x] `website/src/components/FeatureSection.js`
- [x] `website/src/components/AchievementSection.js`
- [x] `website/src/components/DemoVideo.js`
- [x] `website/src/components/PricingSection.js`
- [x] `website/src/components/demo.js`
- [x] `website/src/components/Footer.js`

**Data Files to Merge & Delete:**
- [x] ~~Move `website/src/components/data/feautures.js` → `contentData.js` (then delete)~~ (Did not exist)
- [x] ~~Move `website/src/components/data/pricing.js` → `contentData.js` (then delete)~~ (Did not exist)
- [x] ~~Move `website/src/components/data/targetAudience.js` → `contentData.js` (then delete)~~ (Did not exist)
- [x] Deleted empty `website/src/data/pricingData.js`

**Content Structure:**
```javascript
export const contentData = {
  navLinks: [...],
  hero: {...},
  about: {...},
  features: {...},
  achievements: {...},
  demo: {...},
  pricing: {...},
  footer: {...}
};
```

**✋ STOP POINT:** Await Project Lead review before Phase 2

---

## Phase 2: Add New Content Sections (GCP Requirements)

**Status:** ✅ COMPLETED

**Goal:** Add new homepage sections required by the GCP team for eligibility.

### Task 2.1: Add New Content to contentData.js ✅
- [x] Add `team` object (4 team members with roles and bios)
- [x] Add `technical` object (architecture, GCP need, current stage)
- [x] Add `investor` object (problem, solution, business model)
- [x] Update `achievements` object (4 validation items added)

### Task 2.2: Create New Components ✅
- [x] Create `website/src/components/sections/TeamSection.js`
- [x] Create `website/src/components/sections/TechnicalSection.js`
- [x] Create `website/src/components/sections/InvestorSection.js`
- [x] AchievementSection.js already uses contentData (backward compatible with both formats)

### Task 2.3: Update Homepage ✅
- [x] Update `website/src/app/page.js` with new section order:
  - Hero → Investor → Technical → Features → Achievements → Pricing → Team → About → Footer

**✋ STOP POINT:** Await Project Lead review before Phase 3

---

## Phase 3: UI & Aesthetic Refactor

**Status:** 🔄 IN PROGRESS (Hero redesign remaining)

**Goal:** Apply the new futuristic/minimal/gradient aesthetic across the entire site.

### Task 3.1: Update Logo ⏸️
- [ ] Logo file not provided yet - placeholder ready in Navigation
- [ ] Will update once logo file is available

### Task 3.2: Global Background ✅
- [x] Moved animated background to global `<body>` tag in `website/src/app/layout.js`
- [x] Removed redundant background styles from all individual sections
- [x] Consistent purple/pink animated orbs across entire site

### Task 3.3: Hero & Navigation Redesign ⏸️
- [ ] Will merge navigation links into HeroSection.js (centered below title)
- [ ] Will add two phone mockups flanking sides
- [ ] Keeping Navigation.js for now (mobile menu needed)

### Task 3.4: Futuristic Card Design (Features) ✅
- [x] Updated to dark, semi-transparent card backgrounds
- [x] Added Spotify Green accent border (`border-[#1DB954]/30`)
- [x] Added glowing effect on hover (`hover:shadow-[0_0_30px_rgba(29,185,84,0.3)]`)
- [x] Maintained gradient backgrounds

### Task 3.5: Fix Pricing Card Responsiveness ✅
- [x] Cards now stack vertically on mobile (`flex-col`)
- [x] Side-by-side on desktop (`md:flex-row`)
- [x] All card content visible at all screen sizes

### Task 3.6: Footer Redesign ✅
- [x] Added glowing Spotify Green gradient line at top of footer
- [x] Used: `h-1 bg-gradient-to-r from-transparent via-[#1DB954] to-transparent`

**✋ STOP POINT:** Await Project Lead visual review before Phase 4

---

## Phase 4: Final Polish & 30-Second Test

**Status:** ⏸️ NOT STARTED

**Goal:** Clean up inconsistencies and ensure the site meets the GCP team's "30-second test."

### Task 4.1: Color Consistency Check
- [ ] Final pass over entire site
- [ ] Ensure all text, buttons, accents use: Black/White/Grey/Spotify Green (#1DB954)
- [ ] Fix any remaining color mismatches

### Task 4.2: 30-Second Clarity Test
- [ ] Review Hero, Investor, and Technical sections
- [ ] Ensure visitors can understand within 30 seconds:
  - What VisuaLit is
  - What problem it solves
  - Who is building it
- [ ] Propose final text or layout tweaks if needed

**✅ COMPLETION:** Full project review and sign-off

---

## Progress Tracking

| Phase | Status | Completion Date | Notes |
|-------|--------|-----------------|-------|
| Phase 1: Content Separation | ✅ Completed | Nov 12, 2025 | contentData.js created, all components refactored |
| Phase 2: GCP Content Sections | ✅ Completed | Nov 12, 2025 | Team, Technical, Investor sections added |
| Phase 3: UI Refactor | ⏸️ Not Started | - | Awaiting Phase 2 approval |
| Phase 4: Final Polish | ⏸️ Not Started | - | Awaiting Phase 3 approval |

---

## Files Changed

### Phase 1 ✅
- [x] Created: `website/src/lib/contentData.js`
- [x] Modified: 8 component files (Navigation, AboutSection, FeatureSection, AchievementSection, DemoVideo, PricingSection, demo, Footer)
- [x] Deleted: 1 data file (pricingData.js)
- Note: HeroSection.js will be redesigned in Phase 3

### Phase 2 ✅
- [x] Modified: `website/src/lib/contentData.js` (added team, technical, investor objects)
- [x] Created: 3 new section components (TeamSection, TechnicalSection, InvestorSection)
- [x] Modified: `website/src/app/page.js` (new section order)
- [x] Updated: achievements data with GCP validation items

### Phase 3
- [ ] Modified: 6+ component files
- [ ] Modified: `website/src/app/layout.js`
- [ ] Replaced: `website/public/AppLogo.png`

### Phase 4
- [ ] Final review and adjustments

---

**Last Updated:** November 12, 2025
**Current Phase:** Phase 1 - Content Separation
