import { use } from "react";
import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ResumePage from "@/features/resume/resume-page";
import { buildMetadata } from "@/shared/seo/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/curriculo">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "Resume" });

  return buildMetadata({
    locale,
    href: "/curriculo",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
}

export default function Page({ params }: PageProps<"/[locale]/curriculo">) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return <ResumePage />;
}
