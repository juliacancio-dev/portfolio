import { useTranslations } from "next-intl";
import { Link } from "@/shared/i18n/navigation";

const links = [
  { label: "GitHub", href: "https://github.com/juliacancio-dev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/juliacancio-dev/" },
  { label: "Email", href: "mailto:julia.cancio.jesus@gmail.com" },
];

export default function SiteFooter() {
  const t = useTranslations("Shared.Footer");

  return (
    <footer className="border-border border-t print:hidden">
      <div className="text-muted mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 py-10 text-sm sm:flex-row sm:items-end">
        <div>
          <p className="text-foreground font-serif text-2xl leading-none">
            Julia <em>Cancio</em>
          </p>
          <p className="mt-3">
            {t("builtWith")}{" "}
            <a
              href="https://github.com/juliacancio-dev/portfolio"
              className="link-underline text-foreground"
            >
              {t("sourceCode")}
            </a>
          </p>
        </div>
        <ul className="label-mono flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link
              href="/curriculo"
              className="hover:text-foreground transition-colors"
            >
              {t("resume")}
            </Link>
          </li>
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
