// Single source of truth for everything shown on the site.
// Edit text here; components only render what they find in this file.

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yash-dhameliya.vercel.app",
  title: "Yash Dhameliya — Team Lead & Full-Stack Developer",
  description:
    "Team Lead & Full-Stack Developer from Surat, India. Nearly 5 years building production web and mobile products with Next.js, Nest.js, MySQL and Flutter — from architecture to release.",
  resumePath: "/resume/Yash_Dhameliya_Resume.pdf",
  resumeFileName: "Yash_Dhameliya_Resume.pdf",
};

export const person = {
  name: "Yash Dhameliya",
  firstName: "Yash",
  initials: "YD",
  role: "Team Lead & Full-Stack Developer",
  roleShort: "Team Lead · Full-Stack Developer",
  focus: "Web & Mobile",
  location: "Surat, Gujarat, India",
  timeZone: "Asia/Kolkata",
  email: "meyashpdhameliya18@gmail.com",
  availability: "Open to full-time opportunities",
  currently: {
    title: "Team Lead & Project Architect",
    company: "Cloudus Infotech",
  },
  tagline:
    "I design and ship complete web & mobile products — from architecture to production.",
  pitch:
    "Nearly 5 years of turning ideas into production systems with Next.js, Nest.js, MySQL and Flutter. I lead the team, make the technical decisions, and stay hands-on in the code.",
  photo: "/images/profile.webp",
  avatar: "/images/avatar.webp",
  languages: ["English", "Hindi", "Gujarati"],
  careerStart: "2021-12-01",
};

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Yashpdhameliya",
    handle: "Yashpdhameliya",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yash-dhameliya-563668146/",
    handle: "yash-dhameliya",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${person.email}`,
    handle: person.email,
    icon: "mail",
  },
] as const;

export const stats = [
  { value: 5, prefix: "~", suffix: "", label: "Years of experience", note: "since Dec 2021" },
  { value: 15, suffix: "+", label: "Production projects", note: "web, mobile & CMS" },
  { value: 50, suffix: "+", label: "Countries served", note: "WaoSim eSIM platform" },
  { value: 10, suffix: "+", label: "Payment gateways", note: "Stripe, PayPal, UPI & more" },
];

export const about = {
  paragraphs: [
    "I'm a Team Lead and Full-Stack Developer based in Surat, India. I started as a React developer and grew into owning the entire technical setup of a product — Next.js frontends, Nest.js APIs, MySQL databases, and deployment on Ubuntu servers.",
    "At Cloudus Infotech I lead the development team, decide the architecture, review code, and take client projects from planning through QA and production release. Along the way I've shipped 15+ production products, including a global eSIM platform used in 50+ countries.",
    "I care about clean, maintainable code, fast interfaces, and teams that ship predictably. I also use AI-assisted workflows for research, coding and QA so the team builds faster without cutting corners.",
  ],
  strengths: [
    {
      title: "Architecture & tech decisions",
      text: "Pick the stack, design the system, and set the standards a project is built on.",
      icon: "layers",
    },
    {
      title: "Full-stack delivery",
      text: "Frontend, API, database and server — I ship the whole product, not one layer.",
      icon: "code",
    },
    {
      title: "Team leadership & mentoring",
      text: "Code reviews, pairing and clear sprint workflows that help developers grow.",
      icon: "users",
    },
    {
      title: "AI-assisted workflows",
      text: "AI tools woven into research, coding, review and QA to move faster with quality.",
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
    role: "Team Lead & Project Architect",
    period: "May 2024 — Present",
    start: "2024-05",
    end: null,
    note: "Joined as Senior Developer, promoted to Team Lead & Project Architect",
    bullets: [
      "Architect the technical stack and system design for client projects and lead them from planning through production release.",
      "Work full-stack across Next.js frontends, Nest.js REST APIs, MySQL schema design, and deployment on Ubuntu servers.",
      "Mentor developers through code reviews, best practices, performance optimization and clean-code standards.",
      "Set up CI/CD pipelines, reusable component libraries and Jira-based sprint workflows that improved team velocity.",
      "Integrated secure authentication (Firebase, 2FA) and payment processing (Stripe and 10+ gateways) across products.",
    ],
    tech: ["Next.js", "Nest.js", "TypeScript", "MySQL", "Tailwind CSS", "Firebase", "Stripe", "Ubuntu", "CI/CD"],
  },
  {
    company: "Rejoicehub LLP",
    location: "Surat, India",
    role: "Jr. React.js Developer",
    period: "Dec 2021 — Apr 2024",
    start: "2021-12",
    end: "2024-04",
    bullets: [
      "Built user-centric, mobile-first frontend applications with React.js and Vite.js, focused on performance.",
      "Implemented complex state management with Redux and Context API for dynamic, data-heavy applications.",
      "Integrated REST APIs, contributed to component-based UI architecture, and took part in Agile sprints, QA and deployments.",
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
    title: "Process & Leadership",
    items: ["Jira", "Asana", "Agile / Scrum", "Sprint planning", "Code reviews", "Mentoring"],
  },
  {
    title: "AI Workflows",
    items: ["AI-assisted development", "Research", "Code review", "QA automation"],
  },
];

export const marqueeTech = [
  "Next.js", "React", "TypeScript", "Nest.js", "Node.js", "MySQL", "Flutter", "Tailwind CSS",
  "Firebase", "Stripe", "Contentstack", "Webflow", "Ubuntu", "Nginx", "CI/CD", "AWS", "Jira",
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
