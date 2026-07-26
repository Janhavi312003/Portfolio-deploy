export default function SectionHeading({ eyebrow, title }) {
  return (
    <header className="mb-12 text-center md:mb-16">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-cyan">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
    </header>
  );
}
