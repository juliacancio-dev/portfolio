import { use } from "react";
import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ResumePage from "@/features/resume/resume-page";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/curriculo">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Resume",
  });

  return { title: t("metaTitle") };
}

export default function Page({ params }: PageProps<"/[locale]/curriculo">) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return <ResumePage />;
}
