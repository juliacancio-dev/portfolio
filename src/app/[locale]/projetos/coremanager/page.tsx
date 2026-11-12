import { use } from "react";
import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import CoremanagerCaseStudy from "@/features/case-studies/coremanager-case-study";
import { buildMetadata } from "@/shared/seo/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projetos/coremanager">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({
    locale,
    namespace: "CaseStudies.coremanager",
  });

  return buildMetadata({
    locale,
    href: "/projetos/coremanager",
    title: t("metaTitle"),
    description: t("subtitle"),
  });
}

export default function Page({
  params,
}: PageProps<"/[locale]/projetos/coremanager">) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return <CoremanagerCaseStudy />;
}
