import type { ReactNode } from "react";

// Peças usadas por todos os estudos de caso.

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mt-14">
      <h2 id={id} className="text-2xl font-bold">
        {title}
      </h2>
      <div className="mt-4 flex flex-col gap-4 leading-relaxed">{children}</div>
    </section>
  );
}

export function DiagramNode({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-background border-border rounded-xl border p-4">
      <p className="font-semibold">{title}</p>
      <p className="text-muted mt-1 text-sm">{text}</p>
    </div>
  );
}

export function DiagramArrow({ label }: { label: string }) {
  return (
    <p className="text-muted text-center font-mono text-xs">
      <span aria-hidden="true">↓ </span>
      {label}
    </p>
  );
}
