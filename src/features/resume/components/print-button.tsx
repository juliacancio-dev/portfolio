"use client";

import { useTranslations } from "next-intl";

export default function PrintButton() {
  const t = useTranslations("Resume");

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="bg-primary text-primary-foreground rounded-full px-5 py-2 text-sm font-semibold transition-opacity hover:opacity-90 print:hidden"
    >
      {t("print")}
    </button>
  );
}
