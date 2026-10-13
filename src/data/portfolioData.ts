export interface Project {
  id: string;
  title: string;
  niche: string;
  category: 'paid-ads' | 'seo' | 'content' | 'analytics' | 'all';
  objective: string;
  strategy: string;
  results: {
    label: string;
    value: string;
    trend: string;
  }[];
  challenge: string;
  executionSteps: string[];
  toolsUsed: string[];
  imageUrl: string;
  badge: string;
  isSample: boolean;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  businessValue: string;
  deliverables: string[];
  icon: string;
  popular?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  tools: {
    name: string;
    role: string;
    tags: string[];
    highlight?: boolean;
  }[];
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  niche: string;
  feedback: string;
  metric: string;
  avatarText: string;
  isPlaceholder: boolean;
}

export const PERSONAL_INFO = {
  name: "Hasib Mia",
  title: "Digital Marketing Specialist",
  tagline: "Helping ambitious brands scale customer acquisition with data-driven advertising, search optimization, and conversion-focused funnels.",
  brandName: "Hasib Digital Agency",
  location: "Bangladesh",
  email: "hasibmia56k@gmail.com",
  phone: "01760507447",
  whatsappNumber: "8801760507447", // international format for wa.me
  portfolioUrl: "https://hasibmia.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/hasibmia",
    facebook: "https://www.facebook.com/hasibmia.official",
    whatsapp: "https://wa.me/8801760507447?text=Hi%20Hasib,%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20project%20for%20my%20business.",
  },
  availability: "Available for new client projects & strategic consulting",
  experienceSummary: "Dedicated to measurable business growth, lower customer acquisition costs (CAC), and maximized return on advertising spend (ROAS).",
};

export const SERVICES: Service[] = [
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    shortDesc: "Build an active, loyal brand community across key social channels with structured audience engagement and consistent visual storytelling.",
    businessValue: "Transforms passive followers into engaged brand advocates and qualified inbound buyers.",
    deliverables: [
      "Channel audit & competitor benchmarking",
      "Monthly content calendar & distribution schedule",
      "Community management & audience interaction",
      "Audience demographic and growth reporting"
    ],
    icon: "Share2",
  },
  {
    id: "meta-ads",
    title: "Facebook & Instagram Ads",
    popular: true,
    shortDesc: "High-performing Meta paid campaigns engineered with precision targeting, rigorous A/B creative testing, and full-funnel retargeting.",
    businessValue: "Drives immediate sales, qualified inquiries, and predictable customer acquisition at target CPA.",
    deliverables: [
      "Audience persona & custom audience setup",
      "Ad creative strategy & direct-response copy",
      "Pixel & Conversions API (CAPI) tracking verification",
      "Continuous bid optimization & budget scaling"
    ],
    icon: "Target",
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    shortDesc: "Comprehensive on-page, technical, and content SEO to rank your business for high-intent keywords that prospects search every day.",
    businessValue: "Creates a compounding stream of organic visitors without paying for every single click.",
    deliverables: [
      "In-depth keyword intent research & gap analysis",
      "On-page meta tags, header hierarchy & content tuning",
      "Technical health audit (speed, crawlability, indexing)",
      "Local SEO & Google Business Profile optimization"
    ],
    icon: "Search",
  },
  {
    id: "google-ads",
    title: "Google Ads (Search & PMax)",
    popular: true,
    shortDesc: "High-intent search, Performance Max, and YouTube ad campaigns capturing buyers at the exact moment they are looking for your solution.",
    businessValue: "Connects your offers directly with active purchase intent for high-margin conversions.",
    deliverables: [
      "High-intent keyword grouping & negative match lists",
      "Responsive search ad copywriting & asset extensions",
      "Conversion tracking & smart bidding configuration",
      "Quality score optimization to decrease cost per click"
    ],
    icon: "TrendingUp",
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    shortDesc: "Strategic articles, guides, case studies, and lead magnets designed to educate prospects and address pre-purchase objections.",
    businessValue: "Positions your brand as the trusted authority in your niche and speeds up buyer sales cycles.",
    deliverables: [
      "Audience pain-point & topical authority mapping",
      "Search-optimized blog articles & buyer guides",
      "High-value lead magnet resources & checklists",
      "Multi-channel content repurposing plan"
    ],
    icon: "FileText",
  },
  {
    id: "social-content-strategy",
    title: "Social Media Content Strategy",
    shortDesc: "Tailored brand narratives, video scripts, carousel concepts, and aesthetic direction aligned with business objectives.",
    businessValue: "Ensures every post has a purpose, captures attention within 3 seconds, and drives users toward your offer.",
    deliverables: [
      "Visual tone & messaging framework",
      "Hook-focused copy frameworks for reels & carousels",
      "Call-to-action (CTA) testing protocol",
      "Weekly performance review & trend capitalizing"
    ],
    icon: "Sparkles",
  },
  {
    id: "email-marketing",
    title: "Email Marketing & Automation",
    shortDesc: "Automated welcome series, abandoned cart recovery, product promotions, and client nurturing sequences that drive repeat revenue.",
    businessValue: "Capitalizes on your highest-ROI owned channel without relying on shifting social algorithms.",
    deliverables: [
      "List segmentation & lead capture workflows",
      "Automated drip sequences (Welcome, Nurture, Win-back)",
      "Mobile-optimized email templates with high deliverability",
      "Subject line A/B testing & open/click analytics"
    ],
    icon: "Mail",
  },
  {
    id: "marketing-analytics",
    title: "Marketing Analytics & Reporting",
    shortDesc: "Actionable multi-touch tracking, GA4 event implementation, and clean visual dashboards that show exact marketing ROI.",
    businessValue: "Replaces guesswork with empirical data so you invest your marketing budget where it actually generates profit.",
    deliverables: [
      "GA4 custom event setup & conversion funnel tracking",
      "Google Looker Studio / dashboard visualization",
      "Cost Per Acquisition (CPA) & ROAS transparent reporting",
      "Bi-weekly strategic review with clear optimization priorities"
    ],
    icon: "BarChart3",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Paid Advertising & Media Buying",
    description: "Multi-platform campaign setup, creative iteration, and performance scaling.",
    tools: [
      {
        name: "Meta Ads Manager",
        role: "Facebook & Instagram campaign architecture, lookalikes, custom conversions & retargeting",
        tags: ["CBO/ABO", "Custom Audiences", "Pixel / CAPI", "A/B Testing"],
        highlight: true,
      },
      {
        name: "Google Ads",
        role: "Search, Display, Performance Max & YouTube campaign management and smart bidding",
        tags: ["Keyword Match Types", "PMax Campaigns", "Smart Bidding", "Asset Groups"],
        highlight: true,
      },
    ],
  },
  {
    category: "Analytics & Data Intelligence",
    description: "Accurate tracking infrastructure and conversion telemetry.",
    tools: [
      {
        name: "Google Analytics 4",
        role: "Funnel exploration, event triggers, user retention paths & UTM parameter modeling",
        tags: ["Custom Events", "Conversion Tracking", "User Journeys", "E-commerce Reporting"],
        highlight: true,
      },
      {
        name: "Google Search Console",
        role: "Organic performance analysis, indexing verification, keyword click-throughs & Core Web Vitals",
        tags: ["Query Analysis", "Index Coverage", "Sitemaps", "CTR Optimization"],
      },
      {
        name: "Microsoft Excel & Sheets",
        role: "Cohort modeling, ad spend forecasting, pivot tables & performance benchmarking",
        tags: ["Pivot Tables", "VLOOKUP/XLOOKUP", "ROI Modeling", "Data Cleansing"],
      },
    ],
  },
  {
    category: "Web, Design & AI Acceleration",
    description: "Creative production, landing page optimization, and workflow automation.",
    tools: [
      {
        name: "WordPress",
        role: "Landing page layout, SEO plugin setup (RankMath/Yoast), and speed optimization",
        tags: ["Landing Pages", "On-Page SEO", "Form Integration", "Speed Optimization"],
      },
      {
        name: "Canva Pro",
        role: "Ad creative mockups, social carousels, display banners, and presentation decks",
        tags: ["Ad Creatives", "Infographics", "Social Graphics", "Brand Assets"],
      },
      {
        name: "AI-Powered Marketing Tools",
        role: "Accelerated copy ideation, customer persona research, and ad variant generation",
        tags: ["ChatGPT Plus", "Claude", "Perplexity", "Prompt Engineering"],
        highlight: true,
      },
    ],
  },
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Business Analysis",
    subtitle: "Understanding your model and customer economics",
    description: "We start by auditing your current marketing footprint, defining ideal customer personas (ICPs), evaluating competitor positions, and establishing clear target KPIs (CPA, ROAS, lead targets).",
    deliverables: [
      "Comprehensive digital audit",
      "Target customer profile clarification",
      "Baseline KPI & goal consensus"
    ],
    timeline: "Week 1",
  },
  {
    step: 2,
    title: "Research & Strategy",
    subtitle: "Building the custom marketing roadmap",
    description: "We uncover high-intent search queries, analyze competitor ad creatives, determine channel distribution, and build an intentional full-funnel roadmap from cold attention to loyal purchase.",
    deliverables: [
      "Competitive intelligence report",
      "Full-funnel channel strategy",
      "Offer & messaging framework"
    ],
    timeline: "Week 1 - 2",
  },
  {
    step: 3,
    title: "Campaign Planning & Execution",
    subtitle: "Launching tested assets and tracking telemetry",
    description: "We configure verified tracking pixels, build tailored landing page experiences, author high-converting ad copy, assemble creative angles, and deploy structured campaigns.",
    deliverables: [
      "Pixel / GA4 conversion verification",
      "Campaign buildout & audience setups",
      "Direct-response copy & creative assets"
    ],
    timeline: "Week 2 - 3",
  },
  {
    step: 4,
    title: "Performance Tracking & Optimization",
    subtitle: "Continuous scientific iteration",
    description: "Daily monitoring allows us to cut underperforming ad sets quickly, reallocate budget toward winning creatives, test new hooks, and eliminate wasted click spend.",
    deliverables: [
      "Ad spend pruning & budget reallocation",
      "Creative fatigue refresh cycles",
      "Landing page conversion improvements"
    ],
    timeline: "Ongoing",
  },
  {
    step: 5,
    title: "Reporting & Continuous Improvement",
    subtitle: "Transparent insights and growth scaling",
    description: "You receive clean, transparent reports explaining what happened, why it happened, and the exact strategic moves planned for the upcoming sprint.",
    deliverables: [
      "Bi-weekly / Monthly executive reports",
      "ROI & CAC trend analysis",
      "Next sprint scaling roadmap"
    ],
    timeline: "Bi-weekly / Monthly",
  },
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "sample-case-1",
    title: "E-Commerce Apparel Brand Scaling",
    niche: "Direct-to-Consumer Fashion",
    category: "paid-ads",
    objective: "Scale online direct sales while lowering cost per purchase from $24 to under $14.",
    strategy: "Implemented Meta CBO testing framework combining high-retention UGC video ads with dynamic catalog retargeting and seasonal bundle offers.",
    challenge: "The brand struggled with iOS privacy tracking drop-offs, rising CPMs, and creative fatigue within 10 days of launching new ads.",
    executionSteps: [
      "Configured Meta Conversions API (CAPI) for lossless server-side event tracking.",
      "Launched structured testing campaigns with 6 distinct hook variations and customer review overlays.",
      "Built lookalike audiences from high lifetime-value customer lists (top 10% spenders).",
      "Set up automated retargeting sequences highlighting customer guarantees and free shipping tiers."
    ],
    results: [
      { label: "Return on Ad Spend (ROAS)", value: "4.2x", trend: "+140%" },
      { label: "Cost Per Acquisition (CPA)", value: "$12.40", trend: "-48%" },
      { label: "Monthly Revenue Increase", value: "+185%", trend: "Within 90 Days" },
    ],
    toolsUsed: ["Meta Ads Manager", "Google Analytics 4", "Canva", "Shopify"],
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    badge: "Sample Case Study (Demonstrative Methodology)",
    isSample: true,
  },
  {
    id: "sample-case-2",
    title: "B2B SaaS Lead Generation Campaign",
    niche: "Software & Technology",
    category: "paid-ads",
    objective: "Generate qualified demo requests from verified decision-makers (CTOs, Operations Directors) at under $85 CPA.",
    strategy: "Paired high-intent Google Search Ads with educational LinkedIn & Meta retargeting promoting an interactive product calculator.",
    challenge: "High cost-per-click on broad industry terms with poor form completion rates on lengthy registration pages.",
    executionSteps: [
      "Audited search term reports to add 180+ negative keywords, eliminating 35% wasted ad spend.",
      "Re-engineered landing page copy with clear social proof and reduced form fields from 8 to 4.",
      "Deployed Google Ads Performance Max campaign targeting competitor brand alternative terms.",
      "Created bi-weekly reporting dashboards linking ad clicks directly to scheduled demo calls."
    ],
    results: [
      { label: "Qualified Demo Volume", value: "84/mo", trend: "+210%" },
      { label: "Cost Per Demo (CPA)", value: "$62.50", trend: "-27%" },
      { label: "Lead-to-Opportunity Rate", value: "34%", trend: "+12%" },
    ],
    toolsUsed: ["Google Ads", "Google Analytics 4", "Google Search Console", "HubSpot"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    badge: "Sample Case Study (Demonstrative Methodology)",
    isSample: true,
  },
  {
    id: "sample-case-3",
    title: "Local Healthcare Clinic SEO & Patient Inquiries",
    niche: "Healthcare & Local Services",
    category: "seo",
    objective: "Dominate local search rankings for specialized treatment terms and drive direct appointment phone calls.",
    strategy: "Local SEO architecture, Google Business Profile optimization, local citation cleanup, and high-intent localized service pages.",
    challenge: "Low organic visibility beyond immediate neighborhood; competitors were outranking on Google Maps 3-Pack.",
    executionSteps: [
      "Optimized Google Business Profile categories, photo uploads, and implemented an ethical review acquisition system.",
      "Built location-specific landing pages targeting high-intent local query clusters.",
      "Fixed technical crawl errors, compressed imagery for sub-1.5s mobile load times.",
      "Implemented click-to-call and appointment form tracking in Google Analytics 4."
    ],
    results: [
      { label: "Local Map 3-Pack Ranking", value: "Top 3", trend: "For 14 Keywords" },
      { label: "Organic Monthly Calls", value: "+175%", trend: "In 4 Months" },
      { label: "Website Conversion Rate", value: "7.8%", trend: "+3.2%" },
    ],
    toolsUsed: ["Google Search Console", "Google Analytics 4", "WordPress", "Local SEO Audit"],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    badge: "Sample Case Study (Demonstrative Methodology)",
    isSample: true,
  },
  {
    id: "sample-case-4",
    title: "Specialty Brand Content & Social Growth",
    niche: "Lifestyle & Specialty Food",
    category: "content",
    objective: "Build organic brand awareness, boost social engagement, and capture newsletter subscribers without heavy ad spending.",
    strategy: "Educational carousel strategy, behind-the-scenes video storytelling, and an automated lead magnet nurturing campaign.",
    challenge: "Brand had visually pleasing products but low follower retention and minimal traffic converting into actual email leads.",
    executionSteps: [
      "Developed an 8-week content pillar framework focusing on problem-solution carousels and recipe guides.",
      "Authored a free downloadable recipe & storage guide as an email acquisition magnet.",
      "Optimized social bios with clear value proposition and trackable UTM link tree.",
      "Built an automated 4-part email welcome sequence nurturing new subscribers into first-time buyers."
    ],
    results: [
      { label: "Organic Reach Growth", value: "+320%", trend: "Over 60 Days" },
      { label: "Email Leads Generated", value: "1,450+", trend: "Zero Paid Ad Cost" },
      { label: "Social Engagement Rate", value: "6.4%", trend: "Industry avg: 1.8%" },
    ],
    toolsUsed: ["Canva", "Meta Business Suite", "Email Marketing", "Excel"],
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    badge: "Sample Case Study (Demonstrative Methodology)",
    isSample: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Rahim Ahmed",
    role: "Founder & Managing Director",
    company: "Apex Apparel Direct",
    niche: "E-Commerce",
    feedback: "Hasib brought structure and discipline to our Meta ad campaigns. Instead of burning budget on gut feeling, we saw clear ROAS metrics and weekly performance adjustments that actually moved the needle.",
    metric: "4.2x ROAS on Meta Ads",
    avatarText: "RA",
    isPlaceholder: true,
  },
  {
    id: "test-2",
    clientName: "Farzana Chowdhury",
    role: "Head of Growth",
    company: "FinFlow Solutions",
    niche: "B2B SaaS",
    feedback: "Working with Hasib was a breath of fresh air. His communication was prompt, transparent, and he was completely honest about what would work and what needed testing. Our demo cost dropped noticeably.",
    metric: "-27% Cost Per Demo",
    avatarText: "FC",
    isPlaceholder: true,
  },
  {
    id: "test-3",
    clientName: "Dr. K. Zaman",
    role: "Clinical Director",
    company: "CarePoint Health Center",
    niche: "Healthcare",
    feedback: "His local SEO and Google profile optimization put our clinic into the top 3 spots in our area. We have noticed a steady increase in direct appointment bookings from Google Maps.",
    metric: "+175% Inbound Inquiries",
    avatarText: "KZ",
    isPlaceholder: true,
  },
];

export const FAQS = [
  {
    question: "How do we get started working together?",
    answer: "It starts with a simple conversation. Submit the inquiry form or reach out via WhatsApp. We will discuss your current business status, target revenue or lead goals, and determine if my digital marketing services are the right fit for your objectives.",
  },
  {
    question: "Do you guarantee specific ROAS or revenue numbers?",
    answer: "I guarantee rigorous, data-driven execution, daily campaign optimization, and complete transparency. Because ad performance depends on product-market fit, offer competitiveness, pricing, and website checkout experience, guaranteeing exact revenue figures upfront is ethically misleading. What I do guarantee is eliminating wasted budget and finding your highest-performing acquisition channels.",
  },
  {
    question: "What ad budget do I need to start?",
    answer: "Ad spend is paid directly to advertising platforms (Meta or Google). For testing and data statistical significance, I generally recommend a minimum monthly ad budget of $500 – $1,500 (or equivalent local currency) depending on your niche and competitive landscape.",
  },
  {
    question: "How soon can I expect to see tangible results?",
    answer: "For Paid Ads (Meta & Google Ads), initial test data and traffic flow begin within 48 to 72 hours of campaign launch, with optimization maturity typically reached within 2 to 4 weeks. For SEO, organic gains compound steadily over 3 to 6 months.",
  },
  {
    question: "How often will I receive campaign updates and reports?",
    answer: "You receive regular bi-weekly performance updates and comprehensive monthly executive reports detailing ad spend, impressions, clicks, conversions, CPA, and return on investment, alongside next-step strategic recommendations.",
  },
];
