import { useTranslations } from "next-intl";
import { Link } from "@/shared/i18n/navigation";
import {
  DiagramArrow,
  DiagramNode,
  Section,
} from "./components/case-study-parts";

const repository = "https://github.com/juliacancio-dev/cashtrail";
const adrs = `${repository}/tree/main/docs/decisoes`;
const demo =
  "https://cashtrail-frontend.ashydune-a5fddf60.brazilsouth.azurecontainerapps.io";

const stack = [
  "Python",
  "FastAPI",
  "SQLAlchemy",
  "PostgreSQL",
  "Next.js",
  "TypeScript",
  "Playwright",
  "Docker",
  "GitHub Actions",
  "Azure Container Apps",
];

const features = [
  "records",
  "planning",
  "credit",
  "reports",
  "investments",
] as const;
const azureNodes = ["frontend", "backend", "database"] as const;
const decisions = ["slices", "scheduler", "tokens", "transfers"] as const;
const challenges = [
  "staticWebApps",
  "utcDates",
  "dreComparison",
  "balanceChart",
] as const;
const results = ["production", "milestones", "cicd", "quality"] as const;
const learnings = ["timezones", "charts", "cloudLimits"] as const;

export default function CashtrailCaseStudy() {
  const common = useTranslations("CaseStudies.common");
  const t = useTranslations("CaseStudies.cashtrail");

  return (
    <main id="content" className="flex-1">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href={{ pathname: "/", hash: "projects" }}
          className="label-mono text-muted hover:text-foreground transition-colors"
        >
          <span aria-hidden="true">← </span>
          {common("back")}
        </Link>

        <header className="mt-8">
          <p className="label-mono text-primary">{common("eyebrow")}</p>
          <h1 className="mt-4 font-serif text-6xl leading-none tracking-tight md:text-8xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-xl leading-relaxed">{t("subtitle")}</p>

          <div className="mt-6">
            <p className="text-sm font-semibold">{common("roleTitle")}</p>
            <p className="text-muted mt-1 text-sm leading-relaxed">
              {t("role")}
            </p>
          </div>

          <ul
            aria-label={common("stackLabel")}
            className="mt-6 flex flex-wrap gap-1.5"
          >
            {stack.map((tech) => (
              <li
                key={tech}
                className="border-border text-muted border px-2 py-1 font-mono text-xs"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={repository}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-foreground/25 hover:border-foreground inline-flex items-center gap-2 border px-5 py-3 text-sm font-medium transition-colors"
            >
              {common("repository")}
              <span className="sr-only"> {common("newTab")}</span>
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-foreground text-background hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors"
            >
              {common("demo")}
              <span className="sr-only"> {common("newTab")}</span>
            </a>
          </div>
          <p className="text-muted mt-2 text-xs">{t("demoHours")}</p>
        </header>

        <Section id="case-problem" title={common("problem")}>
          <p>{t("problem")}</p>
        </Section>

        <Section id="case-solution" title={common("solution")}>
          <p>{t("solution.text")}</p>
          <ul className="list-disc pl-5">
            {features.map((key) => (
              <li key={key}>{t(`solution.features.${key}`)}</li>
            ))}
          </ul>
        </Section>

        <Section id="case-architecture" title={common("architecture")}>
          <p>{t("architecture.text")}</p>

          <figure
            aria-label={t("architecture.diagramLabel")}
            className="bg-surface border-border flex flex-col gap-3 border p-5"
          >
            <DiagramNode
              title={t("architecture.nodes.browser.title")}
              text={t("architecture.nodes.browser.text")}
            />
            <DiagramArrow label={t("architecture.arrowApi")} />
            <div className="border-primary border border-dashed p-4">
              <p className="text-primary font-mono text-xs">
                {t("architecture.azure")}
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {azureNodes.map((key) => (
                  <DiagramNode
                    key={key}
                    title={t(`architecture.nodes.${key}.title`)}
                    text={t(`architecture.nodes.${key}.text`)}
                  />
                ))}
              </div>
            </div>
            <DiagramArrow label={t("architecture.arrowExternal")} />
            <DiagramNode
              title={t("architecture.nodes.external.title")}
              text={t("architecture.nodes.external.text")}
            />
            <DiagramNode
              title={t("architecture.nodes.deploy.title")}
              text={t("architecture.nodes.deploy.text")}
            />
          </figure>

          <p>{t("architecture.slices")}</p>
        </Section>

        <Section id="case-decisions" title={common("decisions")}>
          <ul className="flex flex-col gap-4">
            {decisions.map((key) => (
              <li key={key} className="bg-surface border-border border p-5">
                <h3 className="font-semibold">
                  {t(`decisions.items.${key}.title`)}
                </h3>
                <dl className="mt-3 flex flex-col gap-2 text-sm">
                  <div>
                    <dt className="text-primary font-mono text-xs">
                      {common("why")}
                    </dt>
                    <dd>{t(`decisions.items.${key}.why`)}</dd>
                  </div>
                  <div>
                    <dt className="text-primary font-mono text-xs">
                      {common("cost")}
                    </dt>
                    <dd className="text-muted">
                      {t(`decisions.items.${key}.cost`)}
                    </dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
          <p>
            <a
              href={adrs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              {t("decisions.allAdrs")}
              <span className="sr-only"> {common("newTab")}</span>
            </a>
          </p>
        </Section>

        <Section id="case-challenges" title={common("challenges")}>
          <ol className="border-border flex flex-col gap-8 border-l">
            {challenges.map((key) => (
              <li key={key} className="relative pl-6">
                <span
                  aria-hidden="true"
                  className="bg-primary absolute top-2 -left-1 size-2 rounded-full"
                />
                <h3 className="font-semibold">
                  {t(`challenges.items.${key}.title`)}
                </h3>
                <dl className="mt-2 flex flex-col gap-2 text-sm">
                  <div>
                    <dt className="text-primary font-mono text-xs">
                      {common("challengeProblem")}
                    </dt>
                    <dd>{t(`challenges.items.${key}.problem`)}</dd>
                  </div>
                  <div>
                    <dt className="text-primary font-mono text-xs">
                      {common("challengeSolution")}
                    </dt>
                    <dd>{t(`challenges.items.${key}.solution`)}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="case-results" title={common("results")}>
          <ul className="list-disc pl-5">
            {results.map((key) => (
              <li key={key}>{t(`results.items.${key}`)}</li>
            ))}
          </ul>
        </Section>

        <Section id="case-learnings" title={common("learnings")}>
          <ul className="list-disc pl-5">
            {learnings.map((key) => (
              <li key={key}>{t(`learnings.items.${key}`)}</li>
            ))}
          </ul>
        </Section>
      </article>
    </main>
  );
}
