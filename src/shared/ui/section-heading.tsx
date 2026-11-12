type SectionHeadingProps = {
  // Id do h2, usado pelo aria-labelledby da seção.
  id: string;
  // Número da seção na página, por exemplo "01".
  index: string;
  eyebrow: string;
  title: string;
};

export default function SectionHeading({
  id,
  index,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="reveal">
      <p className="label-mono text-muted flex items-center gap-3">
        <span className="text-primary">{index}</span>
        <span aria-hidden="true" className="bg-border h-px w-8" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 font-serif text-5xl leading-none md:text-6xl">
        {title}
      </h2>
    </div>
  );
}
