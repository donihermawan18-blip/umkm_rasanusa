import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/data/menu";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/testimoni")({
  component: Testimoni,
  head: () => ({
    meta: [
      { title: "Testimoni — Rasa Nusa" },
      { name: "description", content: "Apa kata pelanggan setia kami tentang Rasa Nusa." },
    ],
  }),
});

function Testimoni() {
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-warm">
        <div className="container mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.3em] uppercase text-spice font-semibold mb-4 animate-fade-in">Kata Mereka</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold animate-fade-up">Testimoni Pelanggan</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Cerita Pelanggan" title="Suara dari Meja Makan" description="Ribuan piring tersaji, ribuan senyum kembali." />
          <div className="grid md:grid-cols-2 gap-7">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative bg-card p-8 rounded-3xl shadow-card hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-spice/15" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-spice text-spice-foreground flex items-center justify-center font-display font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
