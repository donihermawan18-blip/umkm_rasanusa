import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Leaf, Heart } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { menuItems, testimonials } from "@/data/menu";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Rasa Nusa Cita Rasa Asli Nusantara" },
      { name: "description", content: "Hidangan khas Indonesia dengan rasa autentik dan bahan berkualitas. Pesan sekarang!" },
    ],
  }),
});

function Home() {
  const featured = menuItems.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Hidangan khas Nusantara" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs tracking-widest uppercase">Resep Warisan Sejak 1998</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-fade-up">
            Cita Rasa <span className="text-accent italic">Asli</span><br />Nusantara
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/85 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Hidangan khas Indonesia dengan rasa autentik, dimasak dari bahan terbaik dan rempah pilihan langsung dari penghasilnya.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/menu" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-spice text-spice-foreground font-semibold hover:opacity-90 transition shadow-warm">
              Lihat Menu <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/kontak" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 transition">
              Pesan Sekarang
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase animate-fade-in">
          Scroll
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Bahan Segar", desc: "Sayur dan rempah dipilih setiap pagi dari pasar tradisional." },
              { icon: Heart, title: "Resep Keluarga", desc: "Diwariskan tiga generasi, tetap setia pada cita rasa asli." },
              { icon: Sparkles, title: "Homemade", desc: "Dimasak dengan tangan, tanpa pengawet, tanpa MSG berlebih." },
            ].map((f, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl shadow-card hover-lift text-center animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 rounded-2xl bg-spice/10 text-spice flex items-center justify-center mx-auto mb-5">
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MENU */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Menu Favorit"
            title="Hidangan Pilihan Pelanggan"
            description="Tiga menu yang paling sering dipesan dari dapur kami minggu ini."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((m, i) => (
              <div key={m.id} className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={m.image} alt={m.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl font-bold">{m.name}</h3>
                    <span className="text-spice font-semibold">{m.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu" className="inline-flex items-center gap-2 text-spice font-semibold hover:gap-3 transition-all">
              Lihat Semua Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SNIPPET */}
      <section className="py-24 bg-earth text-earth-foreground">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="text-accent font-display text-6xl mb-4">“</div>
          <p className="font-display text-2xl md:text-3xl leading-snug italic mb-6">
            {testimonials[0].text}
          </p>
          <div className="font-semibold">{testimonials[0].name}</div>
          <div className="text-sm opacity-70">{testimonials[0].role}</div>
        </div>
      </section>
    </>
  );
}
