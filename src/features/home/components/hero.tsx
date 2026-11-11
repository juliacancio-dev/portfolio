import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/shared/i18n/navigation";

export default function Hero() {
  const t = useTranslations("Home.Hero");

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:justify-between md:py-28">
      <div className="flex max-w-xl flex-col items-center gap-5 text-center md:items-start md:text-left">
        <p className="text-primary font-mono text-sm">{t("eyebrow")}</p>
        <h1 className="from-brand-from to-brand-to bg-linear-to-r bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
          {t("title")}
        </h1>
        <p className="text-muted font-mono text-sm">{t("tagline")}</p>
        <p className="text-lg leading-relaxed">{t("description")}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-3 md:justify-start">
          <Link
            href={{ pathname: "/", hash: "projects" }}
            className="bg-primary text-primary-foreground rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
          >
            {t("ctaProjects")}
          </Link>
          <Link
            href={{ pathname: "/", hash: "contact" }}
            className="border-border hover:bg-surface rounded-full border px-6 py-3 text-sm font-semibold transition-colors"
          >
            {t("ctaContact")}
          </Link>
        </div>
      </div>

      <div className="from-brand-from to-brand-to shrink-0 rounded-full bg-linear-to-br p-1">
        <Image
          src="/julia.jpg"
          alt={t("photoAlt")}
          width={224}
          height={224}
          priority
          className="bg-background size-44 rounded-full object-cover md:size-56"
        />
      </div>
    </section>
  );
}
