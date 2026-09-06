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
        description: "Meet the experienced professionals who steer our company's strategic direction and growth.",
        icon: Users,
        href: "/about/leadership"
      },
      {
        title: "Our Approach",
        subtitle: "HOW WE WORK",
        description: "Discover our unique methodology for delivering consistent and reliable support.",
        icon: Target,
        href: "/about/our-approach"
      },
      {
        title: "Story page",
        subtitle: "OUR JOURNEY",
        description: "Read about our founding, our milestones, and the values that define us today.",
        icon: BookOpen,
        href: "/about/story"
      },
      {
        title: "Why Choose Us",
        subtitle: "THE TALENT FRONTIER DIFFERENCE",
        description: "Learn why industry leaders trust us with their most critical operations.",
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
        subtitle: "RELIABLE SUPPORT FOR EVERYDAY BUSINESS",
        description: "Practical administration and sustained support tailored to keep your everyday operations...",
        icon: Building2,
        href: "/services/business-support"
      },
      {
        title: "People & Operations Support",
        subtitle: "PRACTICAL SUPPORT FOR YOUR PEOPLE",
        description: "Dedicated operational assistance for HR coordination, onboarding, talent pipelines, and...",
        icon: Users,
        href: "/services/people-operations"
      },
      {
        title: "Finance & Accounting Support",
        subtitle: "STRUCTURED SUPPORT FOR FINANCE",
        description: "Structured support for finance processes, general bookkeeping, invoicing pipelines, and thorough...",
        icon: Briefcase,
        href: "/services/finance-accounting"
      },
      {
        title: "Technology, IT & AI Support",
        subtitle: "TECHNOLOGY DESIGNED FOR GROWTH",
        description: "Technology support designed around your business. Reliable tech support for modern digital systems, AI...",
        icon: Monitor,
        href: "/services/technology-it-ai"
      },
      {
        title: "Brand, Marketing & Creative",
        subtitle: "STRENGTHENS YOUR MARKET BRAND",
        description: "Creative and marketing support that strengthens your identity. Consistent visual communication,...",
        icon: Megaphone,
        href: "/services/brand-marketing-creative"
      },
      {
        title: "Process & Automation Support",
        subtitle: "SMARTER, EFFICIENT WORKFLOWS",
        description: "Smarter processes and more efficient ways of working. Practical workflow optimization,...",
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
        subtitle: "SPECIALIZED INDUSTRY SUPPORT",
        description: "Tailored solutions for financial institutions and accounting firms.",
        icon: LineChart,
        href: "/industries/finance-accounting"
      },
      {
        title: "Professional Services",
        subtitle: "SCALABLE OPERATIONS",
        description: "Enhance your firm's capabilities with dedicated operational teams.",
        icon: Shield,
        href: "/industries/professional-services"
      },
      {
        title: "Technology and Digital",
        subtitle: "AGILE RESOURCE AUGMENTATION",
        description: "Support for tech companies looking to scale their digital operations.",
        icon: Code,
        href: "/industries/technology-digital"
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
        subtitle: "REAL WORLD RESULTS",
        description: "Read detailed case studies on how we've helped businesses achieve their operational goals.",
        icon: Target,
        href: "/testimonials/success-stories"
      },
      {
        title: "Client Testimonials",
        subtitle: "WHAT OUR CLIENTS SAY",
        description: "Hear directly from our partners about their experience working with Talent Frontier.",
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
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" }
];
