// Dados que não mudam com o idioma. Os textos ficam em messages/pt.json e en.json.

export type ProjectKey = "cashtrail" | "coremanager" | "coremanagerJava";

export type Project = {
  key: ProjectKey;
  stack: readonly string[];
  repository: string;
  demo?: string;
  // Caminho em public/, por exemplo "/projects/cashtrail.png" (1280x720).
  image?: string;
  inProgress?: boolean;
};

export const projects: readonly Project[] = [
  {
    key: "cashtrail",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Playwright",
      "Docker",
      "GitHub Actions",
      "Azure Container Apps",
    ],
    repository: "https://github.com/juliacancio-dev/cashtrail",
    demo: "https://cashtrail-frontend.ashydune-a5fddf60.brazilsouth.azurecontainerapps.io",
  },
  {
    key: "coremanager",
    stack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
      "Chart.js",
      "PHPUnit",
      "Playwright",
    ],
    repository: "https://github.com/juliacancio-dev/CoreManager",
  },
  {
    key: "coremanagerJava",
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring Data JPA",
      "Thymeleaf",
      "MySQL",
      "Maven",
    ],
    repository: "https://github.com/juliacancio-dev/CoreManager_JAVA",
    inProgress: true,
  },
];
