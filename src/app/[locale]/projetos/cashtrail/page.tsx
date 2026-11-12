import { use } from "react";
import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import CashtrailCaseStudy from "@/features/case-studies/cashtrail-case-study";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projetos/cashtrail">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "CaseStudies.cashtrail",
  });

  return { title: t("metaTitle"), description: t("subtitle") };
}

export default function Page({
  params,
}: PageProps<"/[locale]/projetos/cashtrail">) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return <CashtrailCaseStudy />;
}
