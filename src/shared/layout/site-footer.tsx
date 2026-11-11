import { useTranslations } from "next-intl";

const links = [
  { label: "GitHub", href: "https://github.com/juliacancio-dev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/juliacancio-dev/" },
  { label: "Email", href: "mailto:julia.cancio.jesus@gmail.com" },
];

export default function SiteFooter() {
  const t = useTranslations("Shared.Footer");

  return (
    <footer className="border-border border-t">
      <div className="text-muted mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm sm:flex-row">
        <p className="text-center sm:text-left">
          {t("builtWith")}{" "}
          <a
            href="https://github.com/juliacancio-dev/portfolio"
            className="text-primary underline-offset-4 hover:underline"
          >
            {t("sourceCode")}
          </a>
        </p>
        <ul className="flex gap-5">
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
