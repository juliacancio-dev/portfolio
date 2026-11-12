import { useTranslations } from "next-intl";
import SectionHeading from "@/shared/ui/section-heading";
import TechList from "@/shared/ui/tech-list";

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
    <li className="reveal border-border grid gap-x-6 gap-y-3 border-t py-10 first:border-t-0 first:pt-0 sm:grid-cols-4">
      <p className="label-mono text-muted pt-2 sm:col-span-1">{period}</p>
      <div className="sm:col-span-3">
        <h3 className="font-serif text-3xl leading-tight md:text-4xl">
          {role}
        </h3>
        <p className="text-primary mt-2 font-medium">{company}</p>
        <ul className="mt-5 flex flex-col gap-2 leading-relaxed">
          {tasks.map((task) => (
            <li key={task} className="flex gap-3">
              <span aria-hidden="true" className="text-muted">
                —
              </span>
              {task}
            </li>
          ))}
        </ul>
        <TechList items={stack} label={stackLabel} className="mt-5" />
      </div>
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
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <SectionHeading
              id="experience-title"
              index="04"
              eyebrow={t("eyebrow")}
              title={t("title")}
            />
          </div>
        </div>

        <ol className="md:col-span-8">
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
