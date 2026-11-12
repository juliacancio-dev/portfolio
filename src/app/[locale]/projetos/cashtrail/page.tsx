import { use } from "react";
import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import CashtrailCaseStudy from "@/features/case-studies/cashtrail-case-study";
import { buildMetadata } from "@/shared/seo/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projetos/cashtrail">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({
    locale,
    namespace: "CaseStudies.cashtrail",
  });

  return buildMetadata({
    locale,
    href: "/projetos/cashtrail",
    title: t("metaTitle"),
    description: t("subtitle"),
  });
}

export default function Page({
  params,
}: PageProps<"/[locale]/projetos/cashtrail">) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return <CashtrailCaseStudy />;
}
