# Visualit - AI-Powered Content Visualization

![Visualit Logo](https://img.shields.io/badge/Visualit-AI%20Powered-purple)
![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.16-cyan)

A modern, beautiful landing page for Visualit - an AI-powered application that transforms your reading experience by visualizing content in real-time.

## ✨ Features

- 🎨 **Modern UI Design** - Sleek, dark-themed interface with gradient accents
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Next.js 16 and Turbopack
- 🎭 **Smooth Animations** - Framer Motion for engaging user interactions
- 🎯 **SEO Optimized** - Proper metadata and semantic HTML
- ♿ **Accessible** - ARIA labels and keyboard navigation support

## 🚀 Tech Stack

- **Framework:** [Next.js 16.0.1](https://nextjs.org/)
- **UI Library:** [React 19.2.0](https://react.dev/)
- **Styling:** [TailwindCSS 4.1.16](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler.io/icons)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Number Animations:** [@number-flow/react](https://number-flow.barvian.me/)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd visualit_web/website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.js         # Root layout
│   │   └── page.js           # Main page
│   ├── components/
│   │   ├── Navigation.js     # Header navigation
│   │   ├── HeroSection.js    # Hero section with CTA
│   │   ├── FeatureSection.js # Features grid
│   │   ├── PricingSection.js # Pricing plans
│   │   ├── AchievementSection.js # Awards & achievements
│   │   ├── AboutSection.js   # Company information
│   │   ├── Footer.js         # Footer with links
│   │   ├── DemoVideo.js      # Demo video modal
│   │   └── ui/               # Reusable UI components
│   ├── data/
│   │   └── pricingData.js    # Pricing configuration
│   └── lib/
│       └── utils.js          # Utility functions
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── README.md
```

## 🎨 Sections

### 1. Navigation
- Fixed header with smooth backdrop blur
- Mobile-responsive menu
- Subscription dialog integration

### 2. Hero Section
- Eye-catching headline with large typography
- CTA buttons (Download & Demo Video)
- Interactive iPhone mockup
- Animated gradient backgrounds

### 3. Features
- 8 feature cards in a grid layout
- Hover effects and animations
- Icon-based visual hierarchy

### 4. Pricing
- Two pricing tiers (Starter & Pro)
- Monthly/Annual toggle
- Animated price transitions
- Feature comparison lists

### 5. Achievements
- Award showcases
- Statistics display
- Animated on scroll

### 6. About
- Mission, Vision, Values
- Company story
- Team information

### 7. Footer
- Newsletter subscription
- Quick links
- Contact information
- Social media links

## 🛠️ Available Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎨 Customization

### Colors
Edit the color scheme in `src/app/globals.css`:
```css
:root {
  --primary: oklch(0.208 0.042 265.755);
  --secondary: oklch(0.968 0.007 247.896);
  /* Add more custom colors */
}
```

### Content
- **Pricing:** Edit `src/data/pricingData.js`
- **Features:** Update `src/components/FeatureSection.js`
- **About:** Modify `src/components/AboutSection.js`

### Styling
All components use TailwindCSS classes. Customize by:
1. Editing component classNames
2. Modifying `tailwind.config.js`
3. Adding custom CSS in `globals.css`

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** 1024px - 1536px
- **Large:** > 1536px

## 🔧 Configuration

### Next.js Config
See `next.config.mjs` for Next.js configuration.

### Tailwind Config
See `tailwind.config.js` for Tailwind customization.

## 🌟 Key Features Implemented

✅ Custom device mockup component  
✅ Interactive demo video modal  
✅ Animated pricing toggle  
✅ Smooth scroll navigation  
✅ Gradient text effects  
✅ Hover animations  
✅ Mobile menu  
✅ Newsletter subscription UI  
✅ Social media integration  
✅ SEO optimization  

## 📝 License

Copyright © 2025 Visualit. All rights reserved.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- Website: [visualit.com](#)
- Email: hello@visualit.com
- Twitter: [@visualit](#)

---

**Built with ❤️ using Next.js and TailwindCSS**

