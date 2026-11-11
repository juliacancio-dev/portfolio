import { useTranslations } from "next-intl";
import { Link } from "@/shared/i18n/navigation";
import LanguageSwitcher from "@/shared/ui/language-switcher";
import ThemeToggle from "@/shared/ui/theme-toggle";

const sections = ["about", "projects", "stack", "contact"] as const;

export default function SiteHeader() {
  const t = useTranslations("Shared.Header");

  return (
    <header className="border-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
      <a
        href="#content"
        className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded-md focus:px-3 focus:py-2"
      >
        {t("skipToContent")}
      </a>
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          aria-label={t("homeLabel")}
          className="flex items-center gap-2 font-semibold"
        >
          <span className="from-brand-from to-brand-to flex size-8 items-center justify-center rounded-lg bg-linear-to-br font-mono text-sm text-white">
            JC
          </span>
          <span className="hidden sm:inline">Julia Cancio</span>
        </Link>

        <nav aria-label={t("navLabel")} className="hidden md:block">
          <ul className="text-muted flex gap-6 text-sm">
            {sections.map((section) => (
              <li key={section}>
                <Link
                  href={{ pathname: "/", hash: section }}
                  className="hover:text-foreground transition-colors"
                >
                  {t(section)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
