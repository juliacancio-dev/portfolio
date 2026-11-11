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
      className="rounded-full border px-4 py-1 text-sm hover:opacity-80"
    >
      {t("label")}
    </Link>
  );
}
