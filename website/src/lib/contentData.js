/**
 * Central Content Data File
 * 
 * This file contains all user-facing text content for the VisuaLit website.
 * Separating content from components allows for easy updates without touching code.
 * 
 * Structure:
 * - navLinks: Navigation menu items
 * - hero: Hero section content
 * - about: About section content
 * - features: Features section content
 * - achievements: Achievements/awards section content
 * - pricing: Pricing plans and features
 * - demo: Demo dialog content
 * - footer: Footer links and contact information
 */

export const contentData = {
  // Navigation Links
  navLinks: [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Features', href: '#feature' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'Story', href: '#our-story' },
    { title: 'Achievements', href: '#achievement' }
  ],

  // Hero Section
  hero: {
    badge: {
      icon: "Sparkles",
      text: "AI-Powered Reading Assistant"
    },
    title: {
      line1: "Read.",
      line2: "Visualize.",
      line3: "Understand."
    },
    subtitle: "Transform your reading experience with AI-powered visualizations. No more struggling to imagine complex concepts.",
    featurePills: [
      { icon: "Eye", text: "Real-time Visualization" },
      { icon: "BookOpen", text: "Smart Reading" }
    ],
    ctaButtons: {
      primary: {
        text: "Download Now",
        icon: "Download"
      },
      secondary: {
        text: "Watch Demo",
        icon: "Play"
      }
    },
    socialProof: {
      users: "50,000+ users",
      rating: {
        stars: 5,
        score: "4.9/5"
      }
    }
  },

  // About Section
  about: {
    title: "About VisuaLit",
    subtitle: "We're transforming the way people read and understand content by bringing text to life through intelligent AI-powered visualizations. No more struggling to imagine complex concepts.",
    values: [
      {
        icon: "Target",
        title: "Our Mission",
        description: "To revolutionize how people consume and understand content through cutting-edge AI visualization technology."
      },
      {
        icon: "Users",
        title: "Our Team",
        description: "A passionate group of innovators, designers, and engineers dedicated to creating the future of reading."
      },
      {
        icon: "Zap",
        title: "Our Vision",
        description: "Making complex information accessible and engaging for everyone through intelligent visual experiences."
      },
      {
        icon: "Award",
        title: "Our Values",
        description: "Innovation, accessibility, and user experience are at the core of everything we build and deliver."
      }
    ],
    story: {
      title: "Our Story",
      paragraphs: [
        "Founded in 2024, VisuaLit emerged from a simple observation: people learn and retain information better when they can see it. Our team of AI researchers, designers, and developers came together with a shared vision to bridge the gap between text and understanding.",
        "Today, we're proud to serve thousands of users worldwide, helping students, professionals, and curious minds unlock the full potential of their reading experience. With cutting-edge AI technology and an unwavering commitment to user experience, we're just getting started."
      ]
    }
  },

  // Features Section
  features: {
    badge: {
      icon: "Sparkles",
      text: "Powerful Features"
    },
    title: "Everything You Need to Transform Reading",
    subtitle: "Powerful AI-driven features designed to make your reading experience more visual, engaging, and memorable than ever before.",
    items: [
      {
        icon: "Brain",
        title: "AI-Powered Visualization",
        description: "Advanced AI algorithms transform text into stunning visual representations in real-time as you read.",
        gradient: "from-purple-500 to-pink-500"
      },
      {
        icon: "Bolt",
        title: "Lightning Fast",
        description: "Experience instant visualizations with our optimized processing engine. No lag, just pure reading flow.",
        gradient: "from-yellow-500 to-orange-500"
      },
      {
        icon: "Eye",
        title: "Smart Recognition",
        description: "Automatically detects and visualizes complex concepts, making difficult topics easy to understand.",
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        icon: "Book",
        title: "Multiple Formats",
        description: "Support for books, articles, PDFs, and web content. Read anywhere, visualize everywhere.",
        gradient: "from-green-500 to-emerald-500"
      },
      {
        icon: "Sparkles",
        title: "Personalized Learning",
        description: "AI adapts to your reading style and preferences, creating visualizations that work best for you.",
        gradient: "from-pink-500 to-rose-500"
      },
      {
        icon: "Rocket",
        title: "Blazing Performance",
        description: "Built with cutting-edge technology for smooth, lag-free experience even with complex content.",
        gradient: "from-indigo-500 to-purple-500"
      },
      {
        icon: "Shield",
        title: "Privacy First",
        description: "Your reading data stays private. All processing happens securely with enterprise-grade encryption.",
        gradient: "from-red-500 to-orange-500"
      },
      {
        icon: "Heart",
        title: "Made with Care",
        description: "Designed by educators and loved by learners. Every feature crafted to enhance your reading journey.",
        gradient: "from-purple-500 to-pink-500"
      }
    ]
  },

  // Achievements Section
  achievements: {
    title: "Validation & Achievements",
    items: [
      "1st Runners Up - CodeSprint X",
      "First Place - Cisco Technopreneur Challenge 2025",
      "Investor's Choice Award - SLIIT CODEFEST",
      "Finalist - NBQSA 2025"
    ],
    // Legacy awards data (kept for backward compatibility with existing component)
    awards: [
      {
        id: 1,
        image: '/images/Cisco Technopreneur.jpg',
        title: 'Cisco Technopreneur Award',
        description: 'Recognized for outstanding innovation in artificial intelligence and user experience design, setting new standards in the tech industry.'
      },
      {
        id: 2,
        image: '/images/CodeSprint.jpg',
        title: 'CodeSprint Excellence Award',
        description: 'Awarded for exceptional growth, innovative solutions, and significant impact on the technology ecosystem and digital transformation.'
      },
      {
        id: 3,
        image: '/images/CuttingEdge.jpg',
        title: 'Cutting Edge Innovation Award',
        description: 'Honored for pioneering breakthroughs in machine learning applications and creating accessible AI solutions that empower users worldwide.'
      }
    ],
    stats: [
      { value: "15+", label: "Awards Won" },
      { value: "50K+", label: "Happy Users" },
      { value: "98%", label: "Satisfaction Rate" }
    ]
  },

  // Pricing Section
  pricing: {
    title: "Simple Pricing",
    subtitle: "Choose the perfect plan for your needs. Streamline your creative process with AI.",
    billingToggle: {
      monthly: "Monthly",
      annually: "Annually"
    },
    plans: [
      {
        id: "standard",
        title: "Starter",
        description: "Ideal for developers and indie hackers building with Ruixen UI for personal or small commercial projects.",
        monthlyPrice: 29,
        annuallyPrice: 306,
        buttonText: "Get Starter Access",
        billingNote: {
          monthly: "Billed monthly",
          annually: "Billed in one annual payment"
        },
        features: [
          "Access to 50+ UI components",
          "Tailwind-compatible styling",
          "Basic theming support",
          "Starter templates (blog, dashboard)",
          "1 project license",
          "Community support",
          "Early access to updates"
        ],
        link: "#"
      },
      {
        id: "mastermind",
        title: "Pro",
        description: "Designed for teams and startups who need advanced UI components, theme customization, and premium support.",
        monthlyPrice: 79,
        annuallyPrice: 834,
        badge: "Best Value",
        buttonText: "Upgrade to Pro",
        billingNote: {
          monthly: "Billed monthly",
          annually: "Billed in one annual payment"
        },
        features: [
          "Access to 100+ production-grade components",
          "Advanced theming & dark mode",
          "Code snippets & layout presets",
          "Figma design system access",
          "Commercial use for up to 10 projects",
          "Priority GitHub issue support",
          "Team collaboration tools"
        ],
        link: "#"
      }
    ]
  },

  // Demo Dialog
  demo: {
    title: "VisuaLit Demo",
    description: "See how VisuaLit transforms your reading experience",
    placeholderMessage: "Demo video coming soon",
    placeholderSubtext: "Experience real-time content visualization",
    defaultProfile: {
      fullName: "Manoj",
      email: "manoj@example.com"
    }
  },

  // Team Section
  team: {
    title: "Meet the Team",
    subtitle: "The people building the future of reading",
    members: [
      {
        name: "Raqeeb Rameez",
        role: "Project Lead & Technical Oversight",
        bio: "Leading the overall vision, strategy, and technical direction of VisuaLit."
      },
      {
        name: "Ahamed Usman",
        role: "DevOps & Business Development",
        bio: "Managing cloud infrastructure and driving business growth."
      },
      {
        name: "Amher Hassan",
        role: "Marketing, Frontend & Design",
        bio: "Crafting beautiful user experiences and growing our community."
      },
      {
        name: "Gowry Vikkash",
        role: "Frontend, Flutter & IT",
        bio: "Building cross-platform experiences and managing IT infrastructure."
      }
    ]
  },

  // Technical Section (GCP Requirement)
  technical: {
    title: "For Technologists",
    architecture: "VisuaLit is built on a modern microservice architecture. Our Flutter app communicates with a scalable backend (FastAPI, Python) and specialized AI models.",
    gcpNeed: "We are leveraging Google Cloud Run for our base API and NLP compute, and GPU-enabled containers for real-time image and audio generation. This requires a robust cloud infrastructure, which is why we are applying to the GCP Startup Program.",
    stage: "The VisuaLit app is currently in a production-ready Closed Beta on the Google Play Store. You can view our Privacy Policy [here](/privacy-policy)."
  },

  // Investor Section (GCP Requirement)
  investor: {
    title: "For Investors & Partners",
    problem: "Digital reading is static, leading to reader fatigue and low engagement. Accessibility is often an afterthought.",
    solution: "VisuaLit transforms static ebooks into dynamic, multi-sensory experiences with AI-generated visuals and multi-speaker audio, making reading more immersive and accessible for everyone.",
    model: "Our business model is a freemium SaaS application. Users get a free tier, with monetization via monthly subscriptions and a 'credit system' for on-demand generative AI features."
  },

  // Footer
  footer: {
    newsletter: {
      title: "Stay Connected",
      description: "Join our newsletter for the latest updates and exclusive offers.",
      placeholder: "Enter your email",
      buttonLabel: "Subscribe"
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Home", href: "#home" },
        { text: "Features", href: "#feature" },
        { text: "Pricing", href: "#pricing" },
        { text: "Achievement", href: "#achievement" },
        { text: "About", href: "#about" }
      ]
    },
    contact: {
      title: "Contact Us",
      address: [
        "123 Innovation Street",
        "Tech City, TC 12345"
      ],
      phone: "(123) 456-7890",
      email: "hello@visualit.com"
    },
    social: {
      title: "Follow Us",
      platforms: [
        { name: "Facebook", icon: "Facebook", tooltip: "Follow us on Facebook" },
        { name: "Twitter", icon: "Twitter", tooltip: "Follow us on Twitter" },
        { name: "Instagram", icon: "Instagram", tooltip: "Follow us on Instagram" },
        { name: "LinkedIn", icon: "Linkedin", tooltip: "Connect with us on LinkedIn" }
      ]
    },
    copyright: "© 2025 VisuaLit. All rights reserved."
  }
};
