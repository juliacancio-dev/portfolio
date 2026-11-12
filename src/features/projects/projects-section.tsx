import Image from "next/image";
import { useTranslations } from "next-intl";
import { projects } from "./projects";

export default function ProjectsSection() {
  const t = useTranslations("Projects");

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-border scroll-mt-16 border-t"
    >
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-primary font-mono text-sm">{t("eyebrow")}</p>
        <h2 id="projects-title" className="mt-2 text-3xl font-bold">
          {t("title")}
        </h2>

        <ul className="mt-10 flex flex-col gap-10">
          {projects.map((project) => {
            const name = t(`items.${project.key}.name`);
            const titleId = `project-${project.key}-title`;

            return (
              <li key={project.key}>
                <article
                  aria-labelledby={titleId}
                  className="bg-surface border-border grid overflow-hidden rounded-2xl border md:grid-cols-2"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={t(`items.${project.key}.imageAlt`)}
                      width={1280}
                      height={720}
                      className="aspect-video size-full object-cover"
                    />
                  ) : (
                    // Espaço reservado até o print existir. É só decoração:
                    // o nome já aparece no h3, então o leitor de tela pula.
                    <div
                      aria-hidden="true"
                      className="bg-background flex aspect-video items-center justify-center p-6 md:aspect-auto"
                    >
                      <span className="from-brand-from to-brand-to bg-linear-to-r bg-clip-text text-3xl font-bold text-transparent">
                        {name}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col gap-4 p-6 md:p-8">
                    <h3 id={titleId} className="text-2xl font-bold">
                      {name}
                    </h3>
                    <p className="leading-relaxed">
                      {t(`items.${project.key}.description`)}
                    </p>

                    {project.inProgress ? (
                      <p className="border-border text-muted w-fit rounded-full border px-3 py-1 font-mono text-xs">
                        {t(`items.${project.key}.result`)}
                      </p>
                    ) : (
                      <p className="border-primary border-l-2 pl-3 font-semibold">
                        {t(`items.${project.key}.result`)}
                      </p>
                    )}

                    <div>
                      <p className="text-sm font-semibold">
                        {t("labels.participation")}
                      </p>
                      <p className="text-muted mt-1 text-sm leading-relaxed">
                        {t(`items.${project.key}.participation`)}
                      </p>
                    </div>

                    <ul
                      aria-label={t("labels.stack")}
                      className="flex flex-wrap gap-2"
                    >
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="bg-background border-border rounded-full border px-3 py-1 font-mono text-xs"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-col gap-2 pt-2">
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-border hover:bg-background rounded-full border px-5 py-2 text-sm font-semibold transition-colors"
                        >
                          {t("labels.repository")}
                          <span className="sr-only"> {t("labels.newTab")}</span>
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-primary-foreground rounded-full px-5 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
                          >
                            {t("labels.demo")}
                            <span className="sr-only">
                              {" "}
                              {t("labels.newTab")}
                            </span>
                          </a>
                        )}
                      </div>
                      {project.demo && (
                        <p className="text-muted text-xs">
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
