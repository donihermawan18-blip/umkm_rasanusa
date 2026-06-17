import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { Target, Eye, Award, Users, Clock, Leaf } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/tentang")({
  component: Tentang,
  head: () => ({
    meta: [
      { title: "Tentang Kami — Rasa Nusa" },
      { name: "description", content: "Kisah Rasa Nusa, dari dapur keluarga sederhana hingga menjadi rumah cita rasa Indonesia." },
    ],
  }),
});

function Tentang() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-warm">
        <div className="container mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.3em] uppercase text-spice font-semibold mb-4 animate-fade-in">Cerita Kami</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold animate-fade-up">Tentang Rasa Nusa</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-warm animate-fade-up">
            <img src={gallery1} alt="Suasana toko Rasa Nusa" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="animate-fade-up">
            <h2 className="font-display text-4xl font-bold mb-6">Dari Dapur Ibu, Untuk Indonesia</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Rasa Nusa lahir tahun 1998 dari sebuah dapur sederhana milik Ibu Sumarni di Jakarta. Apa yang dimulai sebagai catering kecil-kecilan untuk tetangga, kini telah tumbuh menjadi rumah makan yang dicintai banyak keluarga.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Kami percaya bahwa makanan adalah bahasa cinta. Setiap piring yang kami sajikan dibuat dengan ketulusan, mengikuti resep warisan, dan menggunakan rempah pilihan dari berbagai penjuru Nusantara.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-card p-10 rounded-3xl shadow-card animate-fade-up">
            <div className="w-12 h-12 rounded-xl bg-spice/10 text-spice flex items-center justify-center mb-5">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Visi Kami</h3>
            <p className="text-muted-foreground leading-relaxed">
              Menjadi rumah makan Nusantara yang melestarikan warisan kuliner Indonesia dan memperkenalkannya kepada generasi baru maupun dunia.
            </p>
          </div>
          <div className="bg-card p-10 rounded-3xl shadow-card animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 rounded-xl bg-spice/10 text-spice flex items-center justify-center mb-5">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Misi Kami</h3>
            <ul className="text-muted-foreground leading-relaxed space-y-2 list-disc pl-5">
              <li>Menyajikan hidangan Indonesia yang autentik dan berkualitas.</li>
              <li>Menggunakan bahan lokal segar dari petani Indonesia.</li>
              <li>Memberi pengalaman makan yang hangat seperti di rumah.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Yang Membuat Kami Berbeda" title="Komitmen Kami" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: "Tradisional", desc: "Resep otentik turun-temurun." },
              { icon: Users, title: "Homemade", desc: "Dimasak dengan tangan, penuh cinta." },
              { icon: Award, title: "Bahan Berkualitas", desc: "Rempah & sayuran pilihan harian." },
              { icon: Clock, title: "Konsisten", desc: "Rasa yang sama sejak 1998." },
            ].map((f, i) => (
              <div key={i} className="text-center p-6 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="w-16 h-16 rounded-full bg-gradient-spice text-spice-foreground flex items-center justify-center mx-auto mb-4 shadow-warm">
                  <f.icon className="w-7 h-7" />
                </div>
                <h4 className="font-display text-lg font-bold mb-1">{f.title}</h4>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
