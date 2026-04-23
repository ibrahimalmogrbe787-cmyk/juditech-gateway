type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export function PageHeader({ title, subtitle, eyebrow }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--gradient-hero)] text-primary-foreground">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.82 0.15 90 / 0.4), transparent 40%)",
      }} />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {eyebrow && (
          <div className="mb-3 inline-block rounded-full bg-gold/20 px-4 py-1 text-xs font-semibold text-gold">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
