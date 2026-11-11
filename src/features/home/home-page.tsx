import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <main
      id="content"
      className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center"
    >
      <h1 className="from-brand-from to-brand-to bg-linear-to-r bg-clip-text text-5xl font-bold text-transparent">
        {t("title")}
      </h1>
      <p className="text-muted font-mono text-lg">{t("subtitle")}</p>
    </main>
  );
}
