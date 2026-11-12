import { useTranslations } from "next-intl";
import { Link } from "@/shared/i18n/navigation";
import LanguageSwitcher from "@/shared/ui/language-switcher";
import ThemeToggle from "@/shared/ui/theme-toggle";
import MobileMenu from "./mobile-menu";
import { sections } from "./sections";

export default function SiteHeader() {
  const t = useTranslations("Shared.Header");

  return (
    <header className="border-border bg-background/85 sticky top-0 z-50 border-b backdrop-blur print:hidden">
      <a
        href="#content"
        className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:px-3 focus:py-2"
      >
        {t("skipToContent")}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          aria-label={t("homeLabel")}
          className="hover:text-primary font-serif text-2xl leading-none transition-colors"
        >
          Julia <em>Cancio</em>
        </Link>

        <nav aria-label={t("navLabel")} className="hidden md:block">
          <ul className="label-mono text-muted flex gap-7">
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
            <li>
              <Link
                href="/curriculo"
                className="hover:text-foreground transition-colors"
              >
                {t("resume")}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
