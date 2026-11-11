import { useTranslations } from "next-intl";

// Chaves usadas com t(); a ordem do array é a ordem na tela.
const education = ["fatec", "etec"] as const;
const highlights = ["production", "internship", "azure"] as const;

export default function AboutSection() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-border scroll-mt-16 border-t"
    >
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-primary font-mono text-sm">{t("eyebrow")}</p>
        <h2 id="about-title" className="mt-2 text-3xl font-bold">
          {t("title")}
        </h2>

        <div className="mt-10 grid gap-12 md:grid-cols-5">
          <div className="flex flex-col gap-5 text-lg leading-relaxed md:col-span-3">
            <p>{t("intro")}</p>
            <p>{t("interests")}</p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold">{t("educationTitle")}</h3>
            <ol className="border-border mt-6 flex flex-col gap-8 border-l">
              {education.map((key) => (
                <li key={key} className="relative pl-6">
                  <span
                    aria-hidden="true"
                    className="bg-primary absolute top-1.5 -left-1.5 size-3 rounded-full"
                  />
                  <p className="font-semibold">
                    {t(`education.${key}.school`)}
                  </p>
                  <p className="text-muted mt-1">
                    {t(`education.${key}.course`)}
                  </p>
                  <p className="text-muted mt-1 font-mono text-sm">
                    {t(`education.${key}.period`)}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-3">
          {highlights.map((key) => (
            <li
              key={key}
              className="bg-surface border-border rounded-2xl border p-6"
            >
              <h3 className="font-semibold">{t(`highlights.${key}.title`)}</h3>
              <p className="text-muted mt-2 leading-relaxed">
                {t(`highlights.${key}.text`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
