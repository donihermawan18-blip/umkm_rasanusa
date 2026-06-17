import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { menuItems } from "@/data/menu";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu — Rasa Nusa" },
      { name: "description", content: "Daftar lengkap menu khas Indonesia: nasi goreng, rendang, sate, gado-gado, soto, ayam penyet." },
    ],
  }),
});

function MenuPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-warm">
        <div className="container mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.3em] uppercase text-spice font-semibold mb-4 animate-fade-in">Daftar Menu</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold animate-fade-up">Menu Kami</h1>
          <p className="max-w-xl mx-auto text-muted-foreground mt-4 animate-fade-up">
            Pilihan terbaik dari berbagai daerah Nusantara, disajikan hangat untuk Anda.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Hidangan Utama" title="Resep Warisan Nusantara" description="Setiap menu dimasak fresh saat dipesan." />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {menuItems.map((m, i) => (
              <article
                key={m.id}
                className="group bg-card rounded-3xl overflow-hidden shadow-card hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={m.image} alt={m.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur text-xs font-semibold text-spice">
                    {m.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-2">{m.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">{m.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-spice">{m.price}</span>
                    <a
                      href={`https://wa.me/628817449240?text=Saya%20ingin%20pesan%20${encodeURIComponent(m.name)}`}
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-spice text-spice-foreground text-sm font-semibold hover:opacity-90 transition"
                    >
                      <Plus className="w-4 h-4" /> Pesan
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
