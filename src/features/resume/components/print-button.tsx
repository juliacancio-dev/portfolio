"use client";

import { useTranslations } from "next-intl";

export default function PrintButton() {
  const t = useTranslations("Resume");

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="group bg-foreground text-background hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors print:hidden"
    >
      {t("print")}
    </button>
  );
}
