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
      text: "AI-Powered Reading App"
    },
    title: {
      line1: "Read.",
      line2: "Visualize.",
      line3: "Understand."
    },
    subtitle: "Transform your reading experience with AI-powered visualizations. Bridging the gap between text and imagination.",
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
      users: "100+ users",
      rating: {
        stars: 5,
        score: "4.9/5"
      }
    }
  },

  // About Section
  about: {
    title: "Reading Reimagined",
    subtitle: "We're transforming the way people read and understand content by bringing text to life through intelligent AI-powered visualizations. No more struggling to imagine complex concepts.",
    values: [
      {
        icon: "Target",
        title: "Our Mission",
        description: "To fundamentally improve reading accessibility and engagement for a new generation of readers"
      },
      {
        icon: "Users",
        title: "Our Team",
        description: "A passionate group of innovators, designers, and engineers dedicated to creating the future of reading."
      },
      {
        icon: "Zap",
        title: "Our Vision",
        description: "A future where reading is an engaging, accessible, and multi-sensory experience for everyone, including those who find traditional books a barrier"
      },
      {
        icon: "Award",
        title: "Our Values",
        description: "Innovation, accessibility, and user engagement are at the core of everything we build, from our AI pipeline to our final user interface"
      }
    ],
    story: {
      title: "Our Story",
      paragraphs: [
        "Our journey started in a university classroom, where we came together as friends to complete a module for our degree. The project was, at first, an academic requirement.",
        "But as we delved into the research, we were struck by a clear problem: for many, reading is a barrier, not a gateway. Traditional books often lack the engagement needed for young minds and the accessibility required by neurodiverse individuals. Our \"project\" suddenly found its \"purpose.\"",
          "What began as an assignment became a mission. We saw the power of combining AI-driven visuals and immersive audio to create a truly multi-sensory reading experience. When the semester ended, our team made a unanimous decision: this was too important to leave behind. We are now committed to taking VisuaLit from a concept to a platform that reimagines reading for everyone."
      ]
    }
  },

  // Features Section
  features: {
    badge: {
      icon: "Sparkles",
      text: "VisuaLit Features"
    },
    title: "A New Way to Experience Stories",
    subtitle: "Our AI-driven features transform static ebooks into immersive, multi-sensory experiences designed for a new generation of readers.",
    items: [
      {
        icon: "Image",
        title: "AI Character & Scene Visualization",
        description: "See your story come to life. Our AI generates stunning images of characters and key scenes as you read.",
        gradient: "from-purple-500 to-pink-500"
      },
      {
        icon: "SpeakerWave",
        title: "Immersive Multi-Voice Audiobooks",
        description: "Our AI assigns unique, character-specific voices, turning your ebook into a full-cast audio drama.",
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        icon: "BookOpen",
        title: "Enhanced UI & Integrated Dictionary",
        description: "Stay in the flow with a clean, modern interface that features an integrated dictionary for contextual learning.",
        gradient: "from-green-500 to-emerald-500"
      },
      {
        icon: "DevicePhoneMobile",
        title: "Cross-Platform (iOS & Android)",
        description: "Built with Flutter, VisuaLit provides a seamless, native reading experience on both iOS and Android devices.",
        gradient: "from-yellow-500 to-orange-500"
      },
      {
        icon: "Heart",
        title: "Designed for Accessibility",
        description: "Our core mission is to help struggling readers and neurodivergent individuals with integrated visual and auditory aids.",
        gradient: "from-pink-500 to-rose-500"
      },
      {
        icon: "Fire",
        title: "Reading Streaks & Gamification",
        description: "Stay motivated and build a consistent reading habit with gamified elements like our reading streak tracker.",
        gradient: "from-red-500 to-orange-500"
      },
      {
        icon: "Brain",
        title: "Advanced NLP Pipeline",
        description: "Our 'agentic NLP pipeline' (using spaCy & BookNLP) accurately identifies characters and scenes to power the AI.",
        gradient: "from-indigo-500 to-purple-500"
      },
      {
        icon: "Sparkles",
        title: "Creative 'Brainrot' Audio Format",
        description: "A unique, creative audiobook format designed specifically to engage and capture the attention of younger generations.",
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
        image: '/images/CuttingEdge.jpeg',
        title: 'Cutting Edge Innovation Award',
        description: 'In the Project Showcase category at IIT\'s Cutting Edge event, VisuaLit secured Third Place. This award recognized the quality, completeness, and innovative spirit of our early-stage project.'
      },
      {
        id: 2,
        image: '/images/CodeSprint.jpeg',
        title: 'CodeSprint Excellence Award',
        description: 'VisuaLit was awarded 1st Runners Up. This achievement at the IEEE Student Branch of IIT\'s competition was a powerful validation of our technology and its performance against a highly competitive field.'
      },
      {
        id: 3,
        image: '/images/CodeFest.jpeg',
        title: 'SLIIT CodeFest Recognition',
        description: 'We were honored to receive recognition at SLIIT CODEFEST, highlighting both the technical innovation and community impact of our project.'
      }
    ],
    stats: [
      { value: "5+", label: "Awards Won" },
      { value: "50+", label: "Satisfied Judges" },
      { value: "95%", label: "Satisfaction Rate" }
    ]
  },

// Pricing Section
    pricing: {
        title: "Simple, Transparent Pricing",
        subtitle: "Choose the plan that best fits your reading journey.",
        billingToggle: {
            monthly: "Monthly",
            annually: "Annually (Save 16%)"
        },
        plans: [
            {
                id: "free",
                title: "Free",
                description: "Access the core reading experience and discover a new way to read.",
                monthlyPrice: 0,
                annuallyPrice: 0,
                buttonText: "Start for Free",
                billingNote: {
                    monthly: "Always free",
                    annually: "Always free"
                },
                features: [
                    "Standard Ebook Reader",
                    "Integrated Dictionary",
                    "Community & Reading Streak Access",
                    "Browse Book Marketplace",
                    "Limited AI Visualizations",
                    "Standard Text-to-Speech Audio"
                ],
                link: "#"
            },
            {
                id: "premium",
                title: "Premium",
                description: "Unlock the full multi-sensory experience with unlimited AI generation.",
                monthlyPrice: 6.99,
                annuallyPrice: 69.90,
                badge: "Best Value",
                buttonText: "Go Premium",
                billingNote: {
                    monthly: "Billed monthly",
                    annually: "Billed in one annual payment"
                },
                features: [
                    "Everything in Free, plus:",
                    "Unlimited AI Character & Scene Visualizations",
                    "Immersive, Multi-Speaker Audiobooks",
                    "Access to 'Brainrot' (short-form) audio content",
                    "Customizable Visualization Styles",
                    "Priority Feature Requests",
                    "Offline Download for AI Content",
                    "Priority Support",
                    "Access to all premium features"
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
        { text: "About", href: "#about" },
        { text: "Privacy Policy", href: "/privacy-policy" }
      ]
    },
    contact: {
      title: "Contact Us",
      address: [
        "435 Galle Rd",
        "Colombo 03, Sri Lanka"
      ],
      phone: "(+94) 77 527 7495",
      email: "raqeeb.r@visualit.live"
    },
    social: {
      title: "Follow Us",
      platforms: [
        { name: "Facebook", icon: "Facebook", tooltip: "Follow us on Facebook", url: "#" },
        { name: "Twitter", icon: "Twitter", tooltip: "Follow us on Twitter", url: "#" },
        { name: "Instagram", icon: "Instagram", tooltip: "Follow us on Instagram", url: "https://www.instagram.com/visua.lit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
        { name: "LinkedIn", icon: "Linkedin", tooltip: "Connect with us on LinkedIn", url: "https://www.linkedin.com/company/visualit-app/posts/?feedView=all" }
      ]
    },
    copyright: "© 2025 VisuaLit. All rights reserved."
  }
};
