// Single source of truth for everything shown on the site.
// Edit text here; components only render what they find in this file.

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yash-dhameliya.vercel.app",
  title: "Yash Dhameliya | Tech Lead & AI-Native Full-Stack Engineer",
  description:
    "Tech Lead & AI-native Full-Stack Engineer from Surat, India. Nearly 5 years leading and building production web and mobile products with Next.js, NestJS, MySQL and Flutter, from architecture and servers to AI features, SEO and release.",
  resumePath: "/resume/Yash_Dhameliya_Resume.pdf",
  resumeFileName: "Yash_Dhameliya_Resume.pdf",
};

/** Wordmark next to the logo mark: plain part + accent-coloured part. */
export const brand = { word: "Yash", accent: "Dev" };

export const person = {
  name: "Yash Dhameliya",
  firstName: "Yash",
  initials: "YD",
  // Title used in metadata, structured data and the social preview image.
  role: "Tech Lead & AI-Native Full-Stack Engineer",
  roleShort: "Tech Lead · AI-Native Full-Stack Engineer",
  // Hero second line: plain part + italic accent part.
  headline: { lead: "Tech Lead &", accent: "AI-Native Full-Stack Engineer." },
  focus: "Web & Mobile",
  location: "Surat, Gujarat, India",
  address: {
    city: "Surat",
    region: "Gujarat",
    postalCode: "394101",
    country: "India",
    countryCode: "IN",
  },
  timeZone: "Asia/Kolkata",
  email: "meyashpdhameliya18@gmail.com",
  phone: {
    display: "+91 81404 07600",
    e164: "+918140407600",
  },
  // Shown in the hero badge and social preview image. Keep it neutral so the site
  // works for job offers, client projects and general inquiries alike.
  availability: "Available for new opportunities",
  currently: {
    title: "Tech Lead",
    company: "Cloudus Infotech",
    focus: "Full-stack · AI · DevOps · SEO",
  },
  tagline:
    "I design and ship complete web and mobile products, from architecture to production.",
  pitch:
    "I plan, build and ship web and mobile products with Next.js, NestJS, MySQL and Flutter. I lead the team, work directly with clients, and stay hands-on in the code. I use AI to learn faster and work smarter.",
  photo: "/images/profile.webp",
  avatar: "/images/avatar.webp",
  languages: ["English", "Hindi", "Gujarati"],
  careerStart: "2021-12-01",
};

export type SocialIconName = "github" | "linkedin" | "mail" | "phone" | "whatsapp";

export type Social = {
  label: string;
  href: string;
  handle: string;
  icon: SocialIconName;
  external: boolean;
};

export const socials: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/Yashpdhameliya",
    handle: "Yashpdhameliya",
    icon: "github",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yash-dhameliya-563668146/",
    handle: "yash-dhameliya",
    icon: "linkedin",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${person.email}`,
    handle: person.email,
    icon: "mail",
    external: false,
  },
  {
    label: "Phone",
    href: `tel:${person.phone.e164}`,
    handle: person.phone.display,
    icon: "phone",
    external: false,
  },
];

/** Direct ways to reach out, shown as cards in the Contact section. */
export const contact = {
  eyebrow: "Contact",
  title: "Let's build something",
  titleAccent: "together.",
  intro:
    "Have an opportunity, a product to build, or a question about my work? Reach out whichever way is easiest for you.",
  methods: [
    {
      label: "Call",
      value: person.phone.display,
      href: `tel:${person.phone.e164}`,
      icon: "phone",
      external: false,
      hint: "India Standard Time (UTC+5:30)",
    },
    {
      label: "WhatsApp",
      value: person.phone.display,
      href: `https://wa.me/${person.phone.e164.replace("+", "")}?text=${encodeURIComponent("Hi Yash, I found your portfolio and would like to connect.")}`,
      icon: "whatsapp",
      external: true,
      hint: "Quickest for a short message",
    },
    {
      label: "Email",
      value: person.email,
      href: `mailto:${person.email}`,
      icon: "mail",
      external: false,
      hint: "Best for details and attachments",
    },
  ] satisfies { label: string; value: string; href: string; icon: SocialIconName; external: boolean; hint: string }[],
};

/** Section headings: plain part + italic accent part, and an optional intro line. */
export const sections = {
  about: { eyebrow: "About", title: "I lead the team", accent: "and still write the code." },
  experience: { eyebrow: "Experience", title: "Nearly five years of", accent: "building and learning." },
  projects: {
    eyebrow: "Selected work",
    title: "Some of the projects",
    accent: "I've worked on.",
    intro:
      "A selection from 15+ projects: eSIM platforms, school exam software, salon management, hotel and eCommerce websites and a mental-health app. Click any project to see what I built.",
  },
  skills: {
    eyebrow: "Skills",
    title: "The full stack,",
    accent: "end to end.",
    intro:
      "Frontend is where I started. Today I also design the database, build the API, run it on AWS, ship the mobile app, and make sure it loads fast and ranks well. Highlighted skills are the ones I use most.",
  },
};

export const stats = [
  { value: 5, prefix: "~", suffix: "", label: "Years of experience", note: "since Dec 2021" },
  { value: 15, suffix: "+", label: "Production projects", note: "web, mobile & CMS" },
  { value: 50, suffix: "+", label: "Countries served", note: "WaoSim eSIM platform" },
  { value: 10, suffix: "+", label: "Payment gateways", note: "Stripe, PayPal, UPI & more" },
];

export const about = {
  paragraphs: [
    "I'm Yash, a Tech Lead and Full-Stack Engineer from Surat, India. I started in 2021 as a React developer. Today I lead a team at Cloudus Infotech and work on every part of a product: frontend, backend, database, servers and SEO.",
    "When a new requirement comes in, I plan it, choose the right tech, split the work, and talk with the client until everyone is on the same page. Then I build alongside my team and see it through to a stable release. I've worked on 15+ live projects this way, from a global eSIM platform to school, hotel and eCommerce sites.",
    "If I don't know something, I learn it and get it done myself. AI is a big part of how I work. Not just to write code, but to explore new ideas, understand problems properly, and think through each step. It helps me deliver more, without cutting corners.",
  ],
  strengths: [
    {
      title: "Planning & tech decisions",
      text: "I turn new requirements into a clear plan, pick the right stack, and design how everything fits together.",
      icon: "layers",
    },
    {
      title: "Full-stack engineering",
      text: "I build the complete product, front to back, with Next.js, React, NestJS, Node.js, MySQL and PostgreSQL.",
      icon: "code",
    },
    {
      title: "Cloud, DevOps & SEO",
      text: "AWS, Linux servers, Nginx and CI/CD to take products live, plus technical SEO to keep them fast and visible.",
      icon: "cloud",
    },
    {
      title: "Team lead & client communication",
      text: "I guide developers through reviews and clear sprints, and talk directly with clients so nothing gets lost.",
      icon: "users",
    },
    {
      title: "AI-native workflow",
      text: "Claude Code, Codex, Copilot and Gemini are part of my daily work. I use them for ideas, deep understanding and step-by-step planning.",
      icon: "sparkles",
    },
    {
      title: "Quick learner & problem solver",
      text: "Strong logical thinking. When something is new, I learn it fast, break the problem down, and solve it myself.",
      icon: "brain",
    },
  ],
};

export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  start: string;
  end: string | null;
  note?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Cloudus Infotech Pvt. Ltd.",
    location: "Surat, India",
    role: "Tech Lead · Full-Stack",
    period: "May 2024 – Present",
    start: "2024-05",
    end: null,
    note: "Joined as Senior Developer and grew into leading the team",
    bullets: [
      "Lead the development team: plan sprints, review code, and help developers grow.",
      "Turn new client requirements into a clear plan: scope, tech stack, system design and timeline.",
      "Talk directly with clients to understand what they need, share progress, and handle changes.",
      "Build full-stack: Next.js and React frontends, NestJS and Node.js APIs, MySQL and PostgreSQL with Prisma or TypeORM, Redis, and real-time features with Socket.IO.",
      "Ship secure login (JWT, Firebase, 2FA) and payments (Stripe and 10+ gateways) across products.",
      "Deploy and run apps on AWS (EC2, S3, Amplify) and Ubuntu servers with Nginx and CI/CD pipelines.",
      "Set up reusable component libraries, monorepos and Jira workflows so the team ships faster.",
      "Handle technical SEO and performance: metadata, structured data, and 90+ Lighthouse scores on key sites.",
      "Use AI tools daily (Claude Code, Codex, Copilot, Gemini) to research, understand new problems and plan step by step, not just to write code.",
    ],
  },
  {
    company: "Rejoicehub LLP",
    location: "Surat, India",
    role: "Jr. React.js Developer",
    period: "Dec 2021 – Apr 2024",
    start: "2021-12",
    end: "2024-04",
    bullets: [
      "Built fast, mobile-first web apps with React and Vite.",
      "Managed complex app state with Redux and Context API for data-heavy screens.",
      "Connected REST APIs, built reusable components, and took part in sprints, QA and releases.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  kind: string;
  /** Leave out for private projects (e.g. employee-only): the card then has no link. */
  url?: string;
  /** Shown in the browser frame; falls back to "Private platform" when there is no url. */
  domain?: string;
  role: string;
  summary: string;
  /** Short bullet list, used on regular project cards. */
  highlights?: string[];
  /** Grouped "What I built" grid, used on featured cards. */
  features?: { title: string; points: string[] }[];
  tech: string[];
  image: string | null;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "waosim",
    name: "WaoSim",
    kind: "Global eSIM store · Japan & worldwide",
    url: "https://main.waosim.com",
    domain: "main.waosim.com",
    role: "Project Team Lead",
    summary:
      "An eSIM store for travellers to 190+ destinations, in English and Japanese with USD and JPY pricing. As project team lead, I set up and led three Next.js apps from the first commit: the customer site, the admin panel and the affiliate portal.",
    features: [
      {
        title: "Team lead",
        points: [
          "Led the frontend team across all three apps",
          "Set up the web, admin and affiliate projects from scratch",
          "Upgraded the website from Next.js 14 to 15",
        ],
      },
      {
        title: "eSIM store",
        points: [
          "Country, regional and global plans with fast search and continent filters",
          "Device compatibility checker, data-usage calculator and install guides",
          "English and Japanese, with USD and JPY pricing",
        ],
      },
      {
        title: "Checkout & payments",
        points: [
          "Stripe cards, Apple Pay, Google Pay, PayPal, PayPay and Amazon Pay",
          "Coupons, saved cards, wallet and split payments",
        ],
      },
      {
        title: "Login & security",
        points: [
          "Google, Apple, Yahoo and LINE sign-in with OTP",
          "Two-factor auth by SMS, email or authenticator app",
          "VAPT fixes, security headers, HTML sanitization and payment rate limiting",
        ],
      },
      {
        title: "My eSIM",
        points: [
          "QR install, sharing and transfer of eSIMs",
          "Top-ups, invoices and live status with Firebase",
          "Web push notifications",
        ],
      },
      {
        title: "Rewards & growth",
        points: [
          "Refer-and-earn, WaoClub cashback and WaoStars",
          "Shared pool wallets for groups",
          "Affiliate tracking from referral links",
        ],
      },
      {
        title: "AI & content",
        points: [
          "AI support agent and context-aware AI chat on country pages",
          "Blog, news and help center with SEO schema and sitemap",
        ],
      },
      {
        title: "Admin & affiliate panels",
        points: [
          "Sales dashboard with date filters and Excel export",
          "GA4 analytics with a map view",
          "Roles, permissions and IP allowlist",
          "Affiliate portal with payouts and deep-link sharing",
        ],
      },
    ],
    tech: ["Next.js 15", "TypeScript", "SCSS", "MUI", "Firebase", "Stripe", "i18next"],
    image: "/images/projects/waosim.webp",
    featured: true,
  },
  {
    slug: "exambro",
    name: "Exambro",
    kind: "School exam & learning management platform",
    url: "https://exambro.app",
    domain: "exambro.app",
    role: "Frontend lead",
    summary:
      "Multi-tenant, multi-school platform with role-based dashboards for super admins, school admins, teachers and students, rendered inside a Flutter app via WebView.",
    highlights: [
      "Print-ready PDF generation for exam papers and results, with MathJax equation rendering.",
      "Real-time Live Test module with timer and auto-submission.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Flutter (WebView)"],
    image: "/images/projects/exambro.webp",
  },
  {
    slug: "sirohotels",
    name: "SIRO Hotels",
    kind: "Luxury hotel website · Dubai",
    url: "https://sirohotels.com",
    domain: "sirohotels.com",
    role: "Frontend developer",
    summary:
      "CMS-driven hotel website with dynamic booking flows and heavy video and imagery that still scores 90+ on Lighthouse.",
    highlights: [
      "Contentstack-powered pages with a Storybook component library.",
      "Optimized large video/image delivery for fast loads on every device.",
    ],
    tech: ["Next.js", "TypeScript", "Storybook", "Contentstack"],
    image: "/images/projects/sirohotels.webp",
  },
  {
    slug: "olysim",
    name: "OlySim",
    kind: "eSIM store · India & global",
    url: "https://olysim.com",
    domain: "olysim.com",
    role: "Lead web & SEO developer",
    summary:
      "An eSIM and travel SIM store for 200+ destinations, run as two editions: olysim.in for India in INR and olysim.com for global travellers in USD. I'm the top contributor on the customer website and own its SEO.",
    features: [
      {
        title: "Store & destinations",
        points: [
          "200+ destination pages with FAQs, related trips and customer reviews",
          "Country and region plans with fast search",
          "Checkout for new eSIMs, top-ups and physical SIMs with shipping",
        ],
      },
      {
        title: "Two editions, one codebase",
        points: [
          "olysim.in in INR and olysim.com in USD",
          "Domain-based currency, GST by buyer country and KYC rules",
          "Region-aware middleware and banners",
        ],
      },
      {
        title: "Payments",
        points: [
          "Stripe cards, Apple Pay, Google Pay and PayPal",
          "Razorpay, PhonePe and UPI for India",
          "Coupons and wallet credit",
        ],
      },
      {
        title: "Accounts & loyalty",
        points: [
          "OTP and Google sign-in, orders and wallet",
          "OlyCoins loyalty tiers with cashback",
          "Referral program",
        ],
      },
      {
        title: "Technical SEO",
        points: [
          "Server rendering, hreflang and canonical redirects across both domains",
          "Sitemaps, IndexNow, robots.txt and llms.txt per domain",
          "Rich JSON-LD: Product, FAQ, HowTo, Reviews and Breadcrumbs",
          "Crawlable blog with real 404s",
        ],
      },
      {
        title: "Admin, CMS & backend",
        points: [
          "AI-assisted blog writing with 16:9 cover images",
          "Per-destination SEO and FAQ editor for both domains",
          "Reviews tab with WhatsApp review links",
          "Laravel commands to import and export SEO content",
          "B2B distributor portal: login, wallet and vouchers",
        ],
      },
    ],
    tech: ["Next.js 15", "TypeScript", "SCSS", "Bootstrap", "next-seo", "Stripe", "Razorpay", "Laravel"],
    image: "/images/projects/olysim.webp",
    featured: true,
  },
  {
    slug: "dukkan",
    name: "Dukkan by Qatar Duty Free",
    kind: "Employee eCommerce platform",
    domain: "Private, employee access only",
    role: "Frontend developer",
    summary:
      "Fully CMS-driven eCommerce platform for Qatar Duty Free employees, where admins control page layouts without touching code.",
    highlights: [
      "Admin-controlled page layouts built from reusable Storybook components.",
      "Contentstack integration for products, promotions and content.",
    ],
    tech: ["Next.js", "TypeScript", "SCSS", "Storybook", "Contentstack"],
    image: "/images/projects/dukkan.webp",
  },
  {
    slug: "mentalhappy",
    name: "MentalHappy",
    kind: "Mental health & wellness platform · USA",
    url: "https://mentalhappy.com",
    domain: "mentalhappy.com",
    role: "Full-stack & Flutter developer",
    summary:
      "Web platform and Flutter mobile app connecting people with therapists, group sessions and self-care resources.",
    highlights: [
      "Webflow CMS so non-technical team members publish blogs and landing pages independently.",
      "Accessibility and performance standards suited to a sensitive audience.",
    ],
    tech: ["Next.js", "Chakra UI", "Node.js", "Flutter", "Webflow CMS"],
    image: "/images/projects/mentalhappy.webp",
  },
  {
    slug: "barbera",
    name: "Barbera",
    kind: "Salon & spa management software",
    url: "https://barbera.io",
    domain: "barbera.io",
    role: "Frontend developer",
    summary:
      "A cloud platform that runs salons, spas and wellness studios, trusted by 600+ businesses in 4 countries. I built the customer-facing frontend in React, connected to the REST API.",
    highlights: [
      "Service browsing and appointment booking flows for salon customers.",
      "Responsive, mobile-first UI that works smoothly on phones.",
      "REST API integration for bookings, services and client data.",
      "The wider product covers POS, memberships, vouchers, WhatsApp messaging and multi-outlet dashboards.",
    ],
    tech: ["React", "REST APIs", "Mobile-first UI"],
    image: "/images/projects/barbera.webp",
  },
  {
    slug: "lingling",
    name: "Ling Ling Dubai",
    kind: "Venue website · Dubai",
    url: "https://www.linglingdubai.com",
    domain: "linglingdubai.com",
    role: "Frontend developer",
    summary:
      "A fully custom website for a Dubai venue. I built the whole UI from scratch, with every page driven by Contentstack CMS so the team can update content without a developer.",
    highlights: [
      "Fully custom UI in Next.js and SCSS, with no ready-made templates.",
      "Dynamic pages and sections managed in Contentstack CMS, the same approach as SIRO Hotels.",
      "SEO friendly from the ground up: server rendering, metadata and clean semantic markup.",
    ],
    tech: ["Next.js", "SCSS", "Contentstack CMS", "SEO"],
    image: "/images/projects/lingling.webp",
  },
];

/** Shown highlighted inside the skill groups: the stack recruiters should notice first. */
export const coreSkills = [
  "Next.js", "React", "TypeScript", "Node.js", "NestJS", "MySQL", "PostgreSQL",
  "AWS", "Flutter", "Claude Code", "Team leadership", "Client communication",
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "Zustand", "React Hook Form + Zod", "Tailwind CSS", "SCSS", "MUI", "Ant Design", "Chakra UI", "Storybook", "i18n (next-intl)"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "NestJS", "Express", "Laravel (PHP)", "REST APIs", "Swagger / OpenAPI", "JWT & Passport auth", "2FA (TOTP)", "Socket.IO (real-time)", "Email (SendGrid)"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Prisma", "TypeORM", "Mongoose", "Firebase"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart", "Firebase (FCM, Auth)", "WebView apps"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "EC2", "S3", "Amplify", "Linux (Ubuntu) servers", "Nginx", "CI/CD (GitLab, Azure DevOps)", "Vercel", "Turborepo monorepos"],
  },
  {
    title: "AI & Automation",
    items: ["Claude Code", "OpenAI Codex", "GitHub Copilot", "Gemini CLI", "Google Antigravity", "Prompt engineering", "AI agent workflows", "OpenAI & Gemini APIs"],
  },
  {
    title: "SEO & Performance",
    items: ["Technical SEO", "Core Web Vitals", "Lighthouse 90+", "SSR / SSG", "Structured data (JSON-LD)", "Image & video optimization"],
  },
  {
    title: "Payments",
    items: ["Stripe", "Stripe Link", "PayPal", "Razorpay", "PhonePe", "UPI", "Apple Pay", "Google Pay", "Amazon Pay", "Alipay", "PayPay"],
  },
  {
    title: "CMS",
    items: ["Contentstack", "Strapi", "Webflow", "Headless CMS", "CKEditor"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "GitLab", "Postman", "Jira", "Asana"],
  },
  {
    title: "Leadership & Delivery",
    items: ["Team leadership", "Mentoring", "Requirement analysis", "Sprint planning & estimation", "Code reviews"],
  },
  {
    title: "Professional strengths",
    items: ["Client communication", "Problem solving", "Logical thinking", "Quick learner", "Research", "Ownership"],
  },
];

export const marqueeTech = [
  "Next.js", "React", "TypeScript", "Node.js", "NestJS", "MySQL", "PostgreSQL", "Redis", "Prisma",
  "AWS", "Flutter", "Tailwind CSS", "Stripe", "Claude Code", "SEO", "CI/CD",
];

export const education = {
  degree: "Bachelor of Engineering (B.E.)",
  university: "Gujarat Technological University",
  college: "A.D. Patel Institute of Technology",
  year: "2020",
  grade: "CGPA 7.9",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
