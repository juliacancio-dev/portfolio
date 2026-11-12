// Dados do currículo que não mudam com o idioma.

export const contacts = [
  {
    label: "julia.cancio.jesus@gmail.com",
    href: "mailto:julia.cancio.jesus@gmail.com",
  },
  {
    label: "linkedin.com/in/juliacancio-dev",
    href: "https://www.linkedin.com/in/juliacancio-dev",
  },
  {
    label: "github.com/juliacancio-dev",
    href: "https://github.com/juliacancio-dev",
  },
  { label: "juliacancio.vercel.app", href: "https://juliacancio.vercel.app" },
] as const;

export const greystarTasks = ["build", "fix", "ship"] as const;

export const greystarStack = [
  "Python",
  "FastAPI",
  "Next.js",
  "shadcn/ui",
  "PostgreSQL",
];

export const projects = [
  {
    key: "cashtrail",
    label: "github.com/juliacancio-dev/cashtrail",
    href: "https://github.com/juliacancio-dev/cashtrail",
  },
  {
    key: "coremanager",
    label: "github.com/juliacancio-dev/CoreManager",
    href: "https://github.com/juliacancio-dev/CoreManager",
  },
  {
    key: "coremanagerJava",
    label: "github.com/juliacancio-dev/CoreManager_JAVA",
    href: "https://github.com/juliacancio-dev/CoreManager_JAVA",
  },
] as const;

export const education = ["fatec", "etec"] as const;

export const skills = [
  {
    key: "backend",
    items: ["Python", "FastAPI", "SQLAlchemy", "PHP", "Java", "Spring Boot"],
  },
  {
    key: "frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  { key: "database", items: ["PostgreSQL", "MySQL"] },
  {
    key: "cloud",
    items: [
      "Azure Container Apps",
      "Azure Container Registry",
      "Docker",
      "GitHub Actions",
      "Git",
    ],
  },
  { key: "testing", items: ["pytest", "PHPUnit", "Playwright"] },
] as const;

export const languages = ["portuguese", "english"] as const;

export const learning = ["paths", "courses"] as const;
