import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import PrintButton from "./components/print-button";
import {
  contacts,
  education,
  greystarStack,
  greystarTasks,
  languages,
  learning,
  projects,
  skills,
} from "./resume";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mt-8 print:mt-5">
      <h2
        id={id}
        className="border-border label-mono text-primary border-b pb-1"
      >
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  const t = useTranslations("Resume");

  return (
    <main id="content" className="flex-1">
      <div className="mx-auto max-w-3xl px-6 py-12 text-sm leading-relaxed print:max-w-none print:p-0">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-5xl leading-none">{t("name")}</h1>
            <p className="text-muted mt-2 text-base">{t("headline")}</p>
          </div>
          <PrintButton />
          <ul
            aria-label={t("contactLabel")}
            className="flex w-full flex-wrap gap-x-5 gap-y-1"
          >
            <li>{t("location")}</li>
            {contacts.map((contact) => (
              <li key={contact.href}>
                <a
                  href={contact.href}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {contact.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <Section id="resume-summary" title={t("summary.title")}>
          <p>{t("summary.text")}</p>
        </Section>

        <Section id="resume-experience" title={t("experience.title")}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-semibold">
              {t("experience.greystar.role")} ·{" "}
              {t("experience.greystar.company")}
            </h3>
            <p className="text-muted font-mono text-xs">
              {t("experience.greystar.period")}
            </p>
          </div>
          <ul className="mt-2 list-disc pl-5">
            {greystarTasks.map((task) => (
              <li key={task}>{t(`experience.greystar.tasks.${task}`)}</li>
            ))}
          </ul>
          <p className="text-muted mt-2">
            {t("experience.greystar.stackLabel")}: {greystarStack.join(", ")}
          </p>
        </Section>

        <Section id="resume-projects" title={t("projects.title")}>
          <ul className="flex flex-col gap-3">
            {projects.map((project) => (
              <li key={project.key} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-semibold">
                    {t(`projects.items.${project.key}.name`)}
                  </h3>
                  <a
                    href={project.href}
                    className="text-primary font-mono text-xs underline-offset-4 hover:underline"
                  >
                    {project.label}
                  </a>
                </div>
                <p className="mt-1">
                  {t(`projects.items.${project.key}.text`)}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="resume-education" title={t("education.title")}>
          <ul className="flex flex-col gap-3">
            {education.map((key) => (
              <li key={key} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-semibold">
                    {t(`education.items.${key}.school`)}
                  </h3>
                  <p className="text-muted font-mono text-xs">
                    {t(`education.items.${key}.period`)}
                  </p>
                </div>
                <p>{t(`education.items.${key}.course`)}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="resume-skills" title={t("skills.title")}>
          <dl className="grid gap-x-4 gap-y-1 sm:grid-cols-[10rem_1fr] print:grid-cols-[10rem_1fr]">
            {skills.map((group) => (
              <div key={group.key} className="contents">
                <dt className="font-semibold">
                  {t(`skills.groups.${group.key}`)}
                </dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="resume-languages" title={t("languages.title")}>
          <ul>
            {languages.map((key) => (
              <li key={key}>{t(`languages.items.${key}`)}</li>
            ))}
          </ul>
        </Section>

        <Section id="resume-learning" title={t("learning.title")}>
          <ul className="flex flex-col gap-3">
            {learning.map((key) => (
              <li key={key} className="break-inside-avoid">
                <h3 className="font-semibold">
                  {t(`learning.items.${key}.title`)}
                </h3>
                <p>{t(`learning.items.${key}.text`)}</p>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </main>
  );
}
