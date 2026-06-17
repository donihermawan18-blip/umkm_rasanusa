export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-14 animate-fade-up`}>
      {eyebrow && (
        <div className="inline-block text-xs tracking-[0.3em] uppercase text-spice font-semibold mb-4">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
