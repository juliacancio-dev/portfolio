import { useFormatter, useTranslations } from "next-intl";
import SectionHeading from "@/shared/ui/section-heading";
import { stackGroups } from "./stack";

export default function StackSection() {
  const t = useTranslations("Stack");
  const format = useFormatter();

  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="border-border scroll-mt-16 border-t"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <SectionHeading
              id="stack-title"
              index="03"
              eyebrow={t("eyebrow")}
              title={t("title")}
            />
          </div>
        </div>

        <div className="md:col-span-8">
          {stackGroups.map((group) => (
            <div
              key={group.key}
              className="reveal border-border grid gap-x-6 gap-y-4 border-t py-8 first:border-t-0 first:pt-0 sm:grid-cols-4"
            >
              <h3 className="font-serif text-2xl leading-tight sm:col-span-1">
                {t(`groups.${group.key}`)}
              </h3>
              <ul className="flex flex-col gap-4 sm:col-span-3">
                {group.rows.map((row) => (
                  <li key={row.techs.join()} className="flex flex-col gap-1">
                    <ul className="flex flex-wrap gap-x-2 text-lg font-medium">
                      {row.techs.map((tech) => (
                        <li
                          key={tech}
                          className="after:text-border after:ml-2 after:content-['/'] last:after:content-none"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <p className="text-muted font-mono text-xs">
                      {t("usedIn", {
                        // Junta a lista no formato do idioma:
                        // "CashTrail e este portfólio" / "CashTrail and this portfolio".
                        projects: format.list(
                          row.usedIn.map((usage) => t(`usage.${usage}`)),
                        ),
                      })}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
