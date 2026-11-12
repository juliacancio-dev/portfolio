import { useTranslations } from "next-intl";

// Os endereços são iguais nos dois idiomas, então ficam aqui e não nos JSON.
const channels = [
  {
    key: "email",
    href: "mailto:julia.cancio.jesus@gmail.com",
    value: "julia.cancio.jesus@gmail.com",
    external: false,
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/juliacancio-dev",
    value: "linkedin.com/in/juliacancio-dev",
    external: true,
  },
  {
    key: "github",
    href: "https://github.com/juliacancio-dev",
    value: "github.com/juliacancio-dev",
    external: true,
  },
] as const;

export default function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-border scroll-mt-16 border-t"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="reveal">
          <p className="label-mono text-muted flex items-center gap-3">
            <span className="text-primary">05</span>
            <span aria-hidden="true" className="bg-border h-px w-8" />
            {t("eyebrow")}
          </p>
          <h2
            id="contact-title"
            className="mt-6 font-serif text-[clamp(3.5rem,11vw,9rem)] leading-[0.9] tracking-tight"
          >
            {t("title")}
          </h2>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 md:mt-16 md:grid-cols-12">
          <p className="reveal text-muted text-lg leading-relaxed md:col-span-4">
            {t("description")}
          </p>

          <ul className="border-border border-b md:col-span-8">
            {channels.map((channel) => (
              <li key={channel.key} className="reveal border-border border-t">
                <a
                  href={channel.href}
                  // Só os links externos abrem em nova aba; o mailto abre o app de e-mail.
                  {...(channel.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="group hover:text-primary flex flex-col gap-x-6 gap-y-1 py-6 transition-colors sm:flex-row sm:items-baseline"
                >
                  <span className="label-mono text-muted w-24 shrink-0">
                    {t(`channels.${channel.key}`)}
                  </span>
                  <span className="flex-1 font-serif text-2xl break-all md:text-4xl">
                    {channel.value}
                  </span>
                  <span
                    aria-hidden="true"
                    className="hidden text-2xl transition-transform group-hover:translate-x-1 sm:block"
                  >
                    {channel.external ? "↗" : "→"}
                  </span>
                  {channel.external && (
                    <span className="sr-only">{t("newTab")}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
