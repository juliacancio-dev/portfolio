import { useTranslations } from "next-intl";

const greystarTasks = ["build", "fix", "ship"] as const;
const greystarStack = [
  "Python",
  "FastAPI",
  "Next.js",
  "shadcn/ui",
  "PostgreSQL",
];
const coremanagerStack = ["PHP", "MySQL", "JavaScript"];

type TimelineItemProps = {
  role: string;
  company: string;
  period: string;
  tasks: string[];
  stack: string[];
  stackLabel: string;
};

function TimelineItem({
  role,
  company,
  period,
  tasks,
  stack,
  stackLabel,
}: TimelineItemProps) {
  return (
    <li className="relative pl-6">
      <span
        aria-hidden="true"
        className="bg-primary absolute top-1.5 -left-1.5 size-3 rounded-full"
      />
      <h3 className="text-xl font-semibold">{role}</h3>
      <p className="mt-1">{company}</p>
      <p className="text-muted mt-1 font-mono text-sm">{period}</p>
      <ul className="mt-4 flex list-disc flex-col gap-1 pl-5 leading-relaxed">
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
      <ul aria-label={stackLabel} className="mt-4 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li
            key={tech}
            className="bg-surface border-border rounded-full border px-3 py-1 font-mono text-xs"
          >
            {tech}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function ExperienceSection() {
  const t = useTranslations("Experience");

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-border scroll-mt-16 border-t"
    >
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-primary font-mono text-sm">{t("eyebrow")}</p>
        <h2 id="experience-title" className="mt-2 text-3xl font-bold">
          {t("title")}
        </h2>

        <ol className="border-border mt-10 flex flex-col gap-12 border-l">
          <TimelineItem
            role={t("greystar.role")}
            company={t("greystar.company")}
            period={t("greystar.period")}
            tasks={greystarTasks.map((task) => t(`greystar.tasks.${task}`))}
            stack={greystarStack}
            stackLabel={t("stackLabel")}
          />
          <TimelineItem
            role={t("coremanager.role")}
            company={t("coremanager.company")}
            period={t("coremanager.period")}
            tasks={[t("coremanager.tasks.maintain")]}
            stack={coremanagerStack}
            stackLabel={t("stackLabel")}
          />
        </ol>
      </div>
    </section>
  );
}
