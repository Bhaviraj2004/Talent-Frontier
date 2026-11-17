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
      { label: "Our Approach", href: "/about/our-approach" }
    ],
    items: [
      {
        title: "Our Approach",
        subtitle: "HOW WE DELIVER",
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
    title: "Our Services",
    href: "/our-services",
    categoryTitle: "Business Support & Professional Services Portfolio",
    exploreLinks: [
      { label: "About Talent Frontier", href: "/about" },
    ],
    items: [
      // Row 1: Accountants, Bookkeepers, Tax & Compliance | HR & People Professionals
      {
        title: "Accountants, Bookkeepers, Tax & Compliance",
        subtitle: "FINANCE & COMPLIANCE",
        description: "Structured support for accounting, bookkeeping, tax preparation and regulatory compliance.",
        icon: Briefcase,
        href: "/our-services/accounting-tax-compliance",
        shortTitle: "Accounting, Tax & Compliance"
      },
      {
        title: "HR & People Professionals",
        subtitle: "PRACTICAL SUPPORT",
        description: "Dedicated operational assistance for HR and talent pipelines.",
        icon: Users,
        href: "/our-services/hr-people-professionals",
        shortTitle: "HR & People Professionals"
      },
      // Row 2: Virtual Assistants & Fractional Executives | IT, Software, AI & Automation
      {
        title: "Virtual Assistants & Fractional Executives",
        subtitle: "ADMIN & LEADERSHIP",
        description: "Dedicated administrative support and high-impact fractional executive leadership.",
        icon: Building2,
        href: "/our-services/virtual-assistants-fractional-executives",
        shortTitle: "Virtual Assistants & Executives"
      },
      {
        title: "IT, Software, AI & Automation",
        subtitle: "TECH & AUTOMATION",
        description: "Specialist software development, systems integration and automated workflows.",
        icon: Monitor,
        href: "/our-services/technology-automation-professionals",
        shortTitle: "IT, Software, AI & Automation"
      },
      // Row 3: Marketing & Creative Professionals
      {
        title: "Marketing & Creative Professionals",
        subtitle: "STRENGTHENS BRAND",
        description: "Creative support that strengthens your brand identity.",
        icon: Megaphone,
        href: "/our-services/marketing-creative-professionals",
        shortTitle: "Marketing & Creative Professionals"
      }
    ],
    bottomBar: {
      text: "Looking for tailored dedicated teams? We build support models around your exact operational workflows.",
      linkText: "Speak to a Specialist",
      linkHref: "/contact",
      buttonText: "Explore All Solutions",
      buttonHref: "/our-services"
    }
  },
  // {
  //   title: "Industries",
  //   href: "/industries",
  //   categoryTitle: "Industries We Serve",
  //   exploreLinks: [
  //     { label: "Our Services", href: "/our-services" }
  //   ],
  //   items: [
  //     {
  //       title: "Finance and Accounting",
  //       subtitle: "SPECIALIZED SUPPORT",
  //       description: "Tailored solutions for financial and accounting firms.",
  //       icon: LineChart,
  //       href: "/industries/finance-accounting"
  //     },
  //     {
  //       title: "Professional Services",
  //       subtitle: "SCALABLE OPERATIONS",
  //       description: "Enhance capabilities with dedicated operational teams.",
  //       icon: Shield,
  //       href: "/industries/professional-services"
  //     },
  //     {
  //       title: "Technology and Digital",
  //       subtitle: "RESOURCE AUGMENTATION",
  //       description: "Support for tech companies scaling their operations.",
  //       icon: Code,
  //       href: "/industries/technology-and-digital"
  //     },
  //     {
  //       title: "Property and Real Estate",
  //       subtitle: "PROPERTY MANAGEMENT",
  //       description: "Streamline operations for real estate agencies.",
  //       icon: Building2,
  //       href: "/industries/property-and-real-estate"
  //     },
  //     {
  //       title: "E-Commerce and Retail",
  //       subtitle: "DIGITAL RETAIL",
  //       description: "Optimize retail operations and digital commerce workflows.",
  //       icon: Target,
  //       href: "/industries/ecommerce-and-retail"
  //     },
  //     {
  //       title: "SMEs & Growing Businesses",
  //       subtitle: "FLEXIBLE SUPPORT",
  //       description: "Practical support to manage workload and scale efficiently.",
  //       icon: Users,
  //       href: "/industries/smes-and-growing-businesses"
  //     }
  //   ],
  //   bottomBar: {
  //     text: "Don't see your industry listed?",
  //     linkText: "Contact Us",
  //     linkHref: "/contact",
  //     buttonText: "All Industries",
  //     buttonHref: "/industries"
  //   }
  // },
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
