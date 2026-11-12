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
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-primary font-mono text-sm">{t("eyebrow")}</p>
        <h2 id="contact-title" className="mt-2 text-3xl font-bold">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">
          {t("description")}
        </p>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {channels.map((channel) => (
            <li key={channel.key}>
              <a
                href={channel.href}
                // Só os links externos abrem em nova aba; o mailto abre o app de e-mail.
                {...(channel.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="bg-surface border-border hover:border-primary flex h-full flex-col gap-1 rounded-2xl border p-6 transition-colors"
              >
                <span className="font-semibold">
                  {t(`channels.${channel.key}`)}
                </span>
                <span className="text-muted font-mono text-sm break-all">
                  {channel.value}
                </span>
                {channel.external && (
                  <span className="sr-only">{t("newTab")}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
