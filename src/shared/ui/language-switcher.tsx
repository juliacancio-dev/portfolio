"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/shared/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Shared.LanguageSwitcher");
  const otherLocale = locale === "pt" ? "en" : "pt";

  return (
    <Link
      href={pathname}
      locale={otherLocale}
      aria-label={t("ariaLabel")}
      className="label-mono border-border text-muted hover:border-foreground hover:text-foreground border px-3 py-2 transition-colors"
    >
      {t("label")}
    </Link>
  );
}
