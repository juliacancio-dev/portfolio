import { use } from "react";
import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import HomePage from "@/features/home/home-page";

export default function Page({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return <HomePage />;
}
