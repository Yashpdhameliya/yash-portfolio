// Single source of truth for everything shown on the site.
// Edit text here; components only render what they find in this file.

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yash-dhameliya.vercel.app",
  title: "Yash Dhameliya — Tech Lead & AI-Native Full-Stack Engineer",
  description:
    "Tech Lead & AI-native Full-Stack Engineer from Surat, India. Nearly 5 years leading and building production web and mobile products with Next.js, Nest.js, MySQL and Flutter — from architecture and servers to AI features, SEO and release.",
  resumePath: "/resume/Yash_Dhameliya_Resume.pdf",
  resumeFileName: "Yash_Dhameliya_Resume.pdf",
};

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
    "I design and ship complete web & mobile products — from architecture to production.",
  pitch:
    "I plan, build and ship web and mobile products with Next.js, Nest.js, MySQL and Flutter. I lead the team, work directly with clients, and stay hands-on in the code — using AI to learn faster and work smarter.",
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
      "A few of the 15+ projects I've been part of — eSIM platforms, school exam software, hotel and eCommerce websites, and a mental-health app.",
  },
  skills: {
    eyebrow: "Skills",
    title: "The full stack,",
    accent: "end to end.",
    intro:
      "Frontend is where I started. Today I also design the database, write the API, run the server, and make sure the site loads fast and ranks well.",
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
    "I'm Yash, a Tech Lead and Full-Stack Engineer from Surat, India. I started in 2021 as a React developer. Today I lead a team at Cloudus Infotech and work on every part of a product — frontend, backend, database, servers and SEO.",
    "When a new requirement comes in, I plan it, choose the right tech, split the work, and talk with the client until everyone is on the same page. Then I build alongside my team and see it through to a stable release. I've worked on 15+ live projects this way, from a global eSIM platform to school, hotel and eCommerce sites.",
    "If I don't know something, I learn it and get it done myself. AI is a big part of how I work — not just to write code, but to explore new ideas, understand problems properly, and think through each step. It helps me deliver more, without cutting corners.",
  ],
  strengths: [
    {
      title: "Planning & tech decisions",
      text: "I turn new requirements into a clear plan, pick the right stack, and design how everything fits together.",
      icon: "layers",
    },
    {
      title: "Full-stack, end to end",
      text: "Frontend, API, database, server and SEO — I can build and ship the complete product.",
      icon: "code",
    },
    {
      title: "Team & client communication",
      text: "I guide developers through reviews and clear sprints, and talk directly with clients so nothing gets lost.",
      icon: "users",
    },
    {
      title: "Quick learner, AI-powered",
      text: "New tech doesn't slow me down. I use AI to explore ideas, understand deeply and work step by step.",
      icon: "sparkles",
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
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: "Cloudus Infotech Pvt. Ltd.",
    location: "Surat, India",
    role: "Tech Lead · Full-Stack",
    period: "May 2024 — Present",
    start: "2024-05",
    end: null,
    note: "Joined as Senior Developer and grew into leading the team",
    bullets: [
      "Lead the development team — plan sprints, review code, and help developers grow.",
      "Turn new client requirements into a clear plan: scope, tech stack, system design and timeline.",
      "Talk directly with clients to understand what they need, share progress, and handle changes.",
      "Build full-stack: Next.js frontends, Nest.js APIs, MySQL databases, and deployment on Ubuntu servers — including secure login (Firebase, 2FA) and payments (Stripe and 10+ gateways).",
      "Set up CI/CD, reusable components and Jira workflows so the team ships faster.",
      "Handle technical SEO and performance — metadata, structured data, and 90+ Lighthouse scores on key sites.",
      "Use AI every day to research, understand new problems and plan step by step — not just to write code.",
    ],
    tech: ["Next.js", "Nest.js", "TypeScript", "MySQL", "Tailwind CSS", "Firebase", "Stripe", "Ubuntu", "CI/CD", "SEO"],
  },
  {
    company: "Rejoicehub LLP",
    location: "Surat, India",
    role: "Jr. React.js Developer",
    period: "Dec 2021 — Apr 2024",
    start: "2021-12",
    end: "2024-04",
    bullets: [
      "Built fast, mobile-first web apps with React.js and Vite.js.",
      "Managed complex app state with Redux and Context API for data-heavy screens.",
      "Connected REST APIs, built reusable components, and took part in sprints, QA and releases.",
    ],
    tech: ["React.js", "Vite.js", "JavaScript (ES6+)", "SCSS", "Redux", "Firebase", "REST APIs"],
  },
];

export type Project = {
  slug: string;
  name: string;
  kind: string;
  url: string;
  domain: string;
  role: string;
  summary: string;
  highlights: string[];
  tech: string[];
  image: string | null;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "waosim",
    name: "WaoSim",
    kind: "Global eSIM purchase platform",
    url: "https://waosim.com",
    domain: "waosim.com",
    role: "Frontend lead",
    summary:
      "A global eSIM marketplace for travellers in 50+ countries, with 10+ payment methods and a fully localized checkout.",
    highlights: [
      "Led the frontend team and integrated Stripe, PayPal, Apple Pay, Google Pay and Alipay.",
      "Built 2FA (TOTP), affiliate tracking, multi-language support, dynamic currency switching and push notifications.",
      "Closed every finding from the VAPT security audit.",
    ],
    tech: ["Next.js", "TypeScript", "SCSS", "Firebase", "Stripe"],
    image: null, // TODO: add screenshot — live site currently shows a "coming soon" page
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
      "Multi-tenant, multi-school platform with role-based dashboards for super admins, school admins, teachers and students — rendered inside a Flutter app via WebView.",
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
    slug: "dukkan",
    name: "Qatar Duty Free — Dukkan",
    kind: "Employee eCommerce platform",
    url: "https://dukkan.qatardutyfree.com",
    domain: "dukkan.qatardutyfree.com",
    role: "Frontend developer",
    summary:
      "Fully CMS-driven eCommerce platform where admins control page layouts without touching code.",
    highlights: [
      "Admin-controlled page layouts built from reusable Storybook components.",
      "Contentstack integration for products, promotions and content.",
    ],
    tech: ["Next.js", "TypeScript", "Storybook", "Contentstack"],
    image: null, // TODO: add screenshot — platform is behind employee SSO login
  },
  {
    slug: "olysim",
    name: "OlySim",
    kind: "India eSIM purchase platform",
    url: "https://olysim.com",
    domain: "olysim.com",
    role: "Frontend lead",
    summary:
      "India-focused eSIM platform covering browsing, checkout and account flows with UPI, card and wallet payments.",
    highlights: [
      "Led the full frontend with a strong focus on SEO and conversion.",
      "CKEditor-based content management for plans and pages.",
    ],
    tech: ["Next.js", "TypeScript", "SCSS", "CKEditor"],
    image: "/images/projects/olysim.webp",
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
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Vite.js", "Tailwind CSS", "SCSS", "Chakra UI", "Bootstrap"],
  },
  {
    title: "Backend & Database",
    items: ["Nest.js", "Node.js", "REST APIs", "MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart", "WebView integration"],
  },
  {
    title: "Server & DevOps",
    items: ["Ubuntu Server", "Nginx", "CI/CD Pipelines", "Vercel", "AWS (S3, EC2)", "GitHub", "GitLab", "Azure DevOps"],
  },
  {
    title: "CMS",
    items: ["Webflow", "Contentstack", "CKEditor"],
  },
  {
    title: "Payments",
    items: ["Stripe", "PayPal", "Apple Pay", "Google Pay", "Amazon Pay", "Alipay", "Razorpay", "UPI"],
  },
  {
    title: "Leadership & Process",
    items: ["Requirement planning", "Client communication", "Sprint planning", "Code reviews", "Mentoring", "Jira", "Asana", "Agile / Scrum"],
  },
  {
    title: "SEO & Performance",
    items: ["Technical SEO", "Core Web Vitals", "Structured data (JSON-LD)", "Lighthouse audits", "Metadata & sitemaps"],
  },
  {
    title: "AI & Learning",
    items: ["AI-assisted development", "Research & new ideas", "Step-by-step problem solving", "Fast self-learning"],
  },
];

export const marqueeTech = [
  "Next.js", "React", "TypeScript", "Nest.js", "Node.js", "MySQL", "Flutter", "Tailwind CSS",
  "Firebase", "Stripe", "Contentstack", "Webflow", "Ubuntu", "Nginx", "CI/CD", "AWS", "SEO", "Jira",
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
