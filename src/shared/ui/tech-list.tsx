type TechListProps = {
  items: readonly string[];
  // Nome da lista para leitores de tela, por exemplo "Tecnologias".
  label: string;
  className?: string;
};

export default function TechList({ items, label, className }: TechListProps) {
  return (
    <ul
      aria-label={label}
      className={`flex flex-wrap gap-1.5 ${className ?? ""}`}
    >
      {items.map((item) => (
        <li
          key={item}
          className="border-border text-muted border px-2 py-1 font-mono text-xs"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
