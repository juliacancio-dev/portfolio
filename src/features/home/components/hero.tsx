import type { CSSProperties } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/shared/i18n/navigation";
import { buttonPrimary, buttonSecondary } from "@/shared/ui/button-styles";

// Ordem de entrada de cada bloco na animação do topo (classe .rise).
function order(index: number) {
  return { "--i": index } as CSSProperties;
}

export default function Hero() {
  const t = useTranslations("Home.Hero");

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-14 md:pt-20">
      <p className="rise label-mono text-muted flex items-center gap-3">
        <span aria-hidden="true" className="bg-primary size-2 rounded-full" />
        {t("eyebrow")}
      </p>

      <h1
        style={order(1)}
        className="rise mt-6 font-serif text-[clamp(4.5rem,15vw,12rem)] leading-[0.82] tracking-tight"
      >
        {t.rich("title", {
          em: (chunks) => <em className="text-primary">{chunks}</em>,
        })}
      </h1>

      <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end">
        <div style={order(2)} className="rise md:col-span-8">
          <p className="text-xl leading-relaxed md:text-2xl md:leading-snug">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={{ pathname: "/", hash: "projects" }}
              className={buttonPrimary}
            >
              {t("ctaProjects")}
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </Link>
            <Link
              href={{ pathname: "/", hash: "contact" }}
              className={buttonSecondary}
            >
              {t("ctaContact")}
            </Link>
            <Link href="/curriculo" className={buttonSecondary}>
              {t("ctaResume")}
            </Link>
          </div>
        </div>

        <div
          style={order(3)}
          className="rise md:col-span-4 md:justify-self-end"
        >
          <Image
            src="/julia.jpg"
            alt={t("photoAlt")}
            width={224}
            height={224}
            priority
            className="border-border size-36 border object-cover md:size-48"
          />
        </div>
      </div>

      <div
        style={order(4)}
        className="rise border-border label-mono text-muted mt-14 flex flex-wrap justify-between gap-x-8 gap-y-2 border-t py-5 md:mt-20"
      >
        <p>{t("tagline")}</p>
        <p>{t("location")}</p>
      </div>
    </section>
  );
}
