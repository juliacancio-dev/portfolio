import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/shared/i18n/navigation";
import { buttonPrimary, buttonSecondary } from "@/shared/ui/button-styles";
import SectionHeading from "@/shared/ui/section-heading";
import TechList from "@/shared/ui/tech-list";
import { projects } from "./projects";

export default function ProjectsSection() {
  const t = useTranslations("Projects");

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-border scroll-mt-16 border-t"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          id="projects-title"
          index="02"
          eyebrow={t("eyebrow")}
          title={t("title")}
        />

        <ul className="mt-14">
          {projects.map((project, index) => {
            const name = t(`items.${project.key}.name`);
            const titleId = `project-${project.key}-title`;

            return (
              <li key={project.key}>
                <article
                  aria-labelledby={titleId}
                  className="reveal group/project border-border grid gap-x-8 gap-y-6 border-t py-12 md:grid-cols-12 md:py-16"
                >
                  <div className="md:col-span-5">
                    <p aria-hidden="true" className="label-mono text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3
                      id={titleId}
                      className="group-hover/project:text-primary mt-3 font-serif text-5xl leading-none transition-colors md:text-6xl"
                    >
                      {name}
                    </h3>

                    {project.inProgress ? (
                      <p className="label-mono text-muted mt-5 flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className="border-muted size-2 rounded-full border"
                        />
                        {t(`items.${project.key}.result`)}
                      </p>
                    ) : (
                      <p className="text-primary mt-5 flex gap-2 font-medium">
                        <span aria-hidden="true">↳</span>
                        {t(`items.${project.key}.result`)}
                      </p>
                    )}

                    {project.image && (
                      <Image
                        src={project.image}
                        alt={t(`items.${project.key}.imageAlt`)}
                        width={1280}
                        height={720}
                        className="border-border mt-8 aspect-video w-full border object-cover"
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-6 md:col-span-7">
                    <p className="text-lg leading-relaxed">
                      {t(`items.${project.key}.description`)}
                    </p>

                    <div>
                      <p className="label-mono text-muted">
                        {t("labels.participation")}
                      </p>
                      <p className="text-muted mt-2 leading-relaxed">
                        {t(`items.${project.key}.participation`)}
                      </p>
                    </div>

                    <TechList items={project.stack} label={t("labels.stack")} />

                    <div className="flex flex-col gap-3 pt-2">
                      <div className="flex flex-wrap gap-3">
                        {project.caseStudy && (
                          <Link
                            href={project.caseStudy}
                            className={buttonPrimary}
                          >
                            {t("labels.caseStudy")}
                            <span
                              aria-hidden="true"
                              className="transition-transform group-hover:translate-x-1"
                            >
                              →
                            </span>
                          </Link>
                        )}
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonSecondary}
                        >
                          {t("labels.repository")}
                          <span aria-hidden="true">↗</span>
                          <span className="sr-only"> {t("labels.newTab")}</span>
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonSecondary}
                          >
                            {t("labels.demo")}
                            <span aria-hidden="true">↗</span>
                            <span className="sr-only">
                              {" "}
                              {t("labels.newTab")}
                            </span>
                          </a>
                        )}
                      </div>
                      {project.demo && (
                        <p className="text-muted font-mono text-xs">
                          {t("labels.demoHours")}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
