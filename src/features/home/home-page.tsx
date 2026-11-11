import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/shared/ui/language-switcher";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <LanguageSwitcher />
      <h1 className="text-4xl font-semibold">{t("title")}</h1>
      <p className="text-lg opacity-80">{t("subtitle")}</p>
    </main>
  );
}
