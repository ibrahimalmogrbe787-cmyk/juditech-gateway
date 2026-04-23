type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
};

export function PageHeader({ title, subtitle, eyebrow, image }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--gradient-hero)] text-primary-foreground">
      {image && (
        <img
          src={image}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
      )}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-85" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, oklch(0.82 0.15 90 / 0.4), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {eyebrow && (
          <div className="mb-3 inline-block rounded-full bg-gold/20 px-4 py-1 text-xs font-semibold text-gold ring-1 ring-gold/30">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      <div className="relative h-1 w-full bg-[var(--gradient-gold)]" />
    </section>
  );
}
