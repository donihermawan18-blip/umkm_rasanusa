import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import nasiGoreng from "@/assets/nasi-goreng.jpg";
import rendang from "@/assets/rendang.jpg";
import sate from "@/assets/sate.jpg";
import gado from "@/assets/gado-gado.jpg";

export const Route = createFileRoute("/galeri")({
  component: Galeri,
  head: () => ({
    meta: [
      { title: "Galeri — Rasa Nusa" },
      { name: "description", content: "Galeri foto suasana toko, dapur, dan hidangan khas Rasa Nusa." },
    ],
  }),
});

const images = [
  { src: g1, alt: "Suasana toko Rasa Nusa", span: "md:col-span-2 md:row-span-2" },
  { src: nasiGoreng, alt: "Nasi goreng spesial" },
  { src: rendang, alt: "Rendang daging sapi" },
  { src: g2, alt: "Chef sedang memasak" },
  { src: sate, alt: "Sate ayam Madura" },
  { src: g3, alt: "Aneka sambal khas" },
  { src: gado, alt: "Gado-gado Jakarta" },
  { src: g4, alt: "Tumpeng nasi kuning" },
];

function Galeri() {
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-warm">
        <div className="container mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.3em] uppercase text-spice font-semibold mb-4 animate-fade-in">Momen Kami</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold animate-fade-up">Galeri</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Cerita Visual" title="Suasana & Hidangan" description="Sebuah pandangan ke dapur, meja, dan piring kami." />
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl shadow-card animate-scale-in ${img.span ?? ""}`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
