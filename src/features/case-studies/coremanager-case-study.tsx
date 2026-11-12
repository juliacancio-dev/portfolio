import { Fragment } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/shared/i18n/navigation";
import {
  DiagramArrow,
  DiagramNode,
  Section,
} from "./components/case-study-parts";

const repository = "https://github.com/juliacancio-dev/CoreManager";
const docs = `${repository}/tree/main/docs`;

const stack = [
  "PHP 8.2",
  "MySQL",
  "MariaDB",
  "JavaScript",
  "Tailwind CSS",
  "Chart.js",
  "PHPUnit",
  "Playwright",
  "Docker",
  "Apache",
];

const features = [
  "catalog",
  "movements",
  "reports",
  "dashboard",
  "users",
] as const;

// Caminho de uma requisição: cada nó e a seta que sai dele.
const flow = [
  { node: "browser", arrow: "request" },
  { node: "entry", arrow: "route" },
  { node: "guards", arrow: "allowed" },
  { node: "controller", arrow: "call" },
  { node: "logic", arrow: "sql" },
] as const;

const decisions = ["slices", "useCases", "response", "escaping"] as const;
const challenges = [
  "productHistory",
  "sessions",
  "loginLimit",
  "csrfXss",
] as const;
const results = ["production", "refactor", "tests", "security"] as const;
const learnings = ["testsFirst", "ids", "audit"] as const;

export default function CoremanagerCaseStudy() {
  const common = useTranslations("CaseStudies.common");
  const t = useTranslations("CaseStudies.coremanager");

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
          </div>
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
            {flow.map((step) => (
              <Fragment key={step.node}>
                <DiagramNode
                  title={t(`architecture.nodes.${step.node}.title`)}
                  text={t(`architecture.nodes.${step.node}.text`)}
                />
                <DiagramArrow label={t(`architecture.arrows.${step.arrow}`)} />
              </Fragment>
            ))}
            <DiagramNode
              title={t("architecture.nodes.database.title")}
              text={t("architecture.nodes.database.text")}
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
                <p className="mt-2 text-sm">
                  {t(`decisions.items.${key}.text`)}
                </p>
              </li>
            ))}
          </ul>
          <p>
            <a
              href={docs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              {t("docs")}
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
