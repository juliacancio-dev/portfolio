// Cada linha liga tecnologias a projetos públicos onde elas podem ser conferidas.
// Os nomes dos grupos e dos projetos ficam em messages/pt.json e en.json.

export type GroupKey =
  "backend" | "frontend" | "database" | "cloud" | "testing";

export type UsageKey =
  "cashtrail" | "coremanager" | "coremanagerJava" | "portfolio" | "all";

type StackRow = {
  techs: readonly string[];
  usedIn: readonly UsageKey[];
};

type StackGroup = {
  key: GroupKey;
  rows: readonly StackRow[];
};

export const stackGroups: readonly StackGroup[] = [
  {
    key: "backend",
    rows: [
      {
        techs: ["Python", "FastAPI", "SQLAlchemy", "Alembic"],
        usedIn: ["cashtrail"],
      },
      { techs: ["PHP"], usedIn: ["coremanager"] },
      {
        techs: ["Java", "Spring Boot", "Spring Data JPA"],
        usedIn: ["coremanagerJava"],
      },
    ],
  },
  {
    key: "frontend",
    rows: [
      {
        techs: ["TypeScript", "React", "Next.js"],
        usedIn: ["cashtrail", "portfolio"],
      },
      { techs: ["JavaScript"], usedIn: ["coremanager"] },
      {
        techs: ["Tailwind CSS"],
        usedIn: ["cashtrail", "coremanager", "portfolio"],
      },
      { techs: ["shadcn/ui"], usedIn: ["cashtrail"] },
      { techs: ["Thymeleaf"], usedIn: ["coremanagerJava"] },
    ],
  },
  {
    key: "database",
    rows: [
      { techs: ["PostgreSQL"], usedIn: ["cashtrail"] },
      { techs: ["MySQL"], usedIn: ["coremanager", "coremanagerJava"] },
      { techs: ["MariaDB"], usedIn: ["coremanager"] },
    ],
  },
  {
    key: "cloud",
    rows: [
      {
        techs: [
          "Azure Container Apps",
          "Azure Container Registry",
          "Azure Database for PostgreSQL",
        ],
        usedIn: ["cashtrail"],
      },
      { techs: ["Docker"], usedIn: ["cashtrail", "coremanager"] },
      { techs: ["Docker Compose"], usedIn: ["cashtrail"] },
      { techs: ["GitHub Actions"], usedIn: ["cashtrail", "portfolio"] },
      { techs: ["Vercel"], usedIn: ["portfolio"] },
      { techs: ["Git"], usedIn: ["all"] },
    ],
  },
  {
    key: "testing",
    rows: [
      { techs: ["pytest", "Testcontainers"], usedIn: ["cashtrail"] },
      { techs: ["PHPUnit"], usedIn: ["coremanager"] },
      { techs: ["Playwright"], usedIn: ["cashtrail", "coremanager"] },
    ],
  },
];
