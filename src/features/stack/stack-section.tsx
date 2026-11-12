import { useFormatter, useTranslations } from "next-intl";
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
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-primary font-mono text-sm">{t("eyebrow")}</p>
        <h2 id="stack-title" className="mt-2 text-3xl font-bold">
          {t("title")}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {stackGroups.map((group) => (
            <div
              key={group.key}
              className="bg-surface border-border rounded-2xl border p-6"
            >
              <h3 className="text-xl font-semibold">
                {t(`groups.${group.key}`)}
              </h3>
              <ul className="mt-5 flex flex-col gap-4">
                {group.rows.map((row) => (
                  <li key={row.techs.join()}>
                    <ul className="flex flex-wrap gap-2">
                      {row.techs.map((tech) => (
                        <li
                          key={tech}
                          className="bg-background border-border rounded-full border px-3 py-1 font-mono text-xs"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <p className="text-muted mt-1.5 text-xs">
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
