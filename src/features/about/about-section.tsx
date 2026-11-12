import { useTranslations } from "next-intl";
import SectionHeading from "@/shared/ui/section-heading";

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
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <SectionHeading
              id="about-title"
              index="01"
              eyebrow={t("eyebrow")}
              title={t("title")}
            />
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="reveal flex flex-col gap-6">
            <p className="font-serif text-2xl leading-snug md:text-3xl">
              {t("intro")}
            </p>
            <p className="text-muted text-lg leading-relaxed">
              {t("interests")}
            </p>
          </div>

          <h3 className="label-mono text-muted mt-16">{t("educationTitle")}</h3>
          <ol className="mt-4">
            {education.map((key) => (
              <li
                key={key}
                className="reveal border-border grid gap-x-6 gap-y-1 border-t py-5 sm:grid-cols-4"
              >
                <p className="label-mono text-muted pt-1.5 sm:col-span-1">
                  {t(`education.${key}.period`)}
                </p>
                <div className="sm:col-span-3">
                  <p className="font-serif text-2xl">
                    {t(`education.${key}.school`)}
                  </p>
                  <p className="text-muted mt-1">
                    {t(`education.${key}.course`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <ul className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-3">
            {highlights.map((key, index) => (
              <li key={key} className="reveal border-foreground border-t pt-4">
                <p aria-hidden="true" className="label-mono text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-tight">
                  {t(`highlights.${key}.title`)}
                </h3>
                <p className="text-muted mt-2 leading-relaxed">
                  {t(`highlights.${key}.text`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
