import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/kontak")({
  component: Kontak,
  head: () => ({
    meta: [
      { title: "Kontak — Rasa Nusa" },
      { name: "description", content: "Hubungi Rasa Nusa untuk reservasi, pesanan, atau katering. Alamat, telepon, dan email lengkap." },
    ],
  }),
});

function Kontak() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  const info = [
    { icon: MapPin, label: "Alamat", value: "Jl. Melati No. 88, Jakarta Selatan 12345" },
    { icon: Phone, label: "Telepon", value: "+62 881 7449 240" },
    { icon: Mail, label: "Email", value: "rasanusa.id@gmail.com" },
    { icon: Clock, label: "Jam Buka", value: "Setiap hari, 10:00 – 22:00 WIB" },
  ];

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-warm">
        <div className="container mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.3em] uppercase text-spice font-semibold mb-4 animate-fade-in">Hubungi Kami</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold animate-fade-up">Mari Berbincang</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Kontak" title="Kunjungi atau Pesan" description="Pintu kami selalu terbuka untuk Anda." />

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Info & Map */}
            <div className="space-y-6 animate-fade-up">
              <div className="grid sm:grid-cols-2 gap-4">
                {info.map((item, i) => (
                  <div key={i} className="bg-card p-5 rounded-2xl shadow-card flex gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-spice/10 text-spice flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</div>
                      <div className="text-sm font-medium mt-0.5">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-border">
                <iframe
                  title="Lokasi Rasa Nusa"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=106.8200%2C-6.2700%2C106.8400%2C-6.2500&layer=mapnik&marker=-6.26%2C106.83"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-card p-8 md:p-10 rounded-3xl shadow-card animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="font-display text-2xl font-bold mb-6">Kirim Pesan</h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-1.5">Nama Lengkap</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-spice transition" placeholder="Nama Anda" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-spice transition" placeholder="email@anda.com" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Pesan</label>
                  <textarea required rows={5} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-spice transition resize-none" placeholder="Tulis pesan, reservasi, atau pertanyaan Anda..." />
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-spice text-spice-foreground font-semibold hover:opacity-90 transition shadow-warm">
                  <Send className="w-4 h-4" /> Kirim Pesan
                </button>

                {sent && (
                  <div className="text-sm text-center text-spice font-medium animate-fade-in">
                    ✓ Terima kasih! Pesan Anda telah terkirim.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
