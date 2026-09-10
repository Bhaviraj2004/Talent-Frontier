import {
  Building2,
  Users,
  Briefcase,
  Monitor,
  Megaphone,
  Zap,
  BookOpen,
  Target,
  Award,
  HeartHandshake,
  LineChart,
  Code,
  Shield,
  MessageSquare
} from 'lucide-react';

export const navData = [
  {
    title: "About",
    href: "/about",
    categoryTitle: "About Talent Frontier",
    exploreLinks: [
      { label: "Our Story", href: "/about/story" },
      { label: "Meet the Team", href: "/about/leadership" }
    ],
    items: [
      {
        title: "Leadership",
        subtitle: "GUIDING OUR VISION",
        description: "Meet the experienced professionals guiding our strategy and growth.",
        icon: Users,
        href: "/about/leadership"
      },
      {
        title: "Our Approach",
        subtitle: "HOW WE WORK",
        description: "Discover our methodology for delivering reliable support.",
        icon: Target,
        href: "/about/our-approach"
      },
      {
        title: "Our Story",
        subtitle: "OUR JOURNEY",
        description: "Read about our founding and the core values that define us.",
        icon: BookOpen,
        href: "/about/story"
      },
      {
        title: "Why Choose Us",
        subtitle: "THE TALENT FRONTIER DIFFERENCE",
        description: "Learn why leaders trust us with their critical operations.",
        icon: Award,
        href: "/about/why-choose-us"
      }
    ],
    bottomBar: {
      text: "Want to learn more about our company culture?",
      linkText: "Read Our Story",
      linkHref: "/about/story",
      buttonText: "About Us",
      buttonHref: "/about"
    }
  },
  {
    title: "Services",
    href: "/services",
    categoryTitle: "Business Support & Professional Services Portfolio",
    exploreLinks: [
      { label: "About Talent Frontier", href: "/about" },
      { label: "Industries We Serve", href: "/industries" }
    ],
    items: [
      {
        title: "Business Support Services",
        subtitle: "RELIABLE SUPPORT",
        description: "Practical administration tailored to keep operations smooth.",
        icon: Building2,
        href: "/services/business-support"
      },
      {
        title: "People & Operations Support",
        subtitle: "PRACTICAL SUPPORT",
        description: "Dedicated operational assistance for HR and talent pipelines.",
        icon: Users,
        href: "/services/people-operations"
      },
      {
        title: "Finance & Accounting Support",
        subtitle: "STRUCTURED SUPPORT",
        description: "Structured support for finance processes and bookkeeping.",
        icon: Briefcase,
        href: "/services/finance-accounting"
      },
      {
        title: "Technology, IT & AI Support",
        subtitle: "TECH FOR GROWTH",
        description: "Reliable tech support for modern digital systems and AI.",
        icon: Monitor,
        href: "/services/technology"
      },
      {
        title: "Brand, Marketing & Creative",
        subtitle: "STRENGTHENS BRAND",
        description: "Creative support that strengthens your brand identity.",
        icon: Megaphone,
        href: "/services/brand-marketing"
      },
      {
        title: "Process & Automation Support",
        subtitle: "SMARTER WORKFLOWS",
        description: "Smarter processes and practical workflow optimization.",
        icon: Zap,
        href: "/services/process-automation"
      }
    ],
    bottomBar: {
      text: "Looking for tailored dedicated teams? We build support models around your exact operational workflows.",
      linkText: "Speak to a Specialist",
      linkHref: "/contact",
      buttonText: "Explore All Services",
      buttonHref: "/services"
    }
  },
  {
    title: "Industries",
    href: "/industries",
    categoryTitle: "Industries We Serve",
    exploreLinks: [
      { label: "Our Services", href: "/services" }
    ],
    items: [
      {
        title: "Finance and Accounting",
        subtitle: "SPECIALIZED SUPPORT",
        description: "Tailored solutions for financial and accounting firms.",
        icon: LineChart,
        href: "/industries/finance-accounting"
      },
      {
        title: "Professional Services",
        subtitle: "SCALABLE OPERATIONS",
        description: "Enhance capabilities with dedicated operational teams.",
        icon: Shield,
        href: "/industries/professional-services"
      },
      {
        title: "Technology and Digital",
        subtitle: "RESOURCE AUGMENTATION",
        description: "Support for tech companies scaling their operations.",
        icon: Code,
        href: "/industries/technology-and-digital"
      },
      {
        title: "Property and Real Estate",
        subtitle: "PROPERTY MANAGEMENT",
        description: "Streamline operations for real estate agencies.",
        icon: Building2,
        href: "/industries/property-and-real-estate"
      },
      {
        title: "E-Commerce and Retail",
        subtitle: "DIGITAL RETAIL",
        description: "Optimize retail operations and digital commerce workflows.",
        icon: Target,
        href: "/industries/ecommerce-and-retail"
      },
      {
        title: "SMEs & Growing Businesses",
        subtitle: "FLEXIBLE SUPPORT",
        description: "Practical support to manage workload and scale efficiently.",
        icon: Users,
        href: "/industries/smes-and-growing-businesses"
      }
    ],
    bottomBar: {
      text: "Don't see your industry listed?",
      linkText: "Contact Us",
      linkHref: "/contact",
      buttonText: "All Industries",
      buttonHref: "/industries"
    }
  },
  {
    title: "Testimonials",
    href: "/testimonials",
    categoryTitle: "Client Success Stories & Feedback",
    exploreLinks: [
      { label: "Why Choose Us", href: "/about/why-choose-us" }
    ],
    items: [
      {
        title: "Client Success Stories",
        subtitle: "REAL RESULTS",
        description: "Read case studies on achieving operational goals.",
        icon: Target,
        href: "/testimonials/client-success-stories"
      },
      {
        title: "Client Testimonials",
        subtitle: "CLIENT FEEDBACK",
        description: "Hear directly from our partners about their experience.",
        icon: MessageSquare,
        href: "/testimonials/client-testimonials"
      }
    ],
    bottomBar: {
      text: "Ready to start your own success story?",
      linkText: "Get Started",
      linkHref: "/contact",
      buttonText: "View All",
      buttonHref: "/testimonials"
    }
  }
];

export const simpleLinks = [
  { title: "Home", href: "/" },
  { title: "Insight", href: "/insight" },
  { title: "Contact", href: "/contact" }
];
