import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, MapPin, Phone, Mail, UtensilsCrossed } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-earth text-earth-foreground mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-spice flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-spice-foreground" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">Rasa Nusa</div>
                <div className="text-[10px] tracking-[0.25em] uppercase opacity-70">Cita Rasa Asli</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Menyajikan kekayaan kuliner Nusantara dengan resep turun-temurun dan bahan terbaik.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Jelajahi</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/menu" className="hover:opacity-100 hover:text-accent transition">Menu</Link></li>
              <li><Link to="/tentang" className="hover:text-accent transition">Tentang Kami</Link></li>
              <li><Link to="/galeri" className="hover:text-accent transition">Galeri</Link></li>
              <li><Link to="/testimoni" className="hover:text-accent transition">Testimoni</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Jl. Melati No. 88, Jakarta Selatan</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> +62 881 7449 240</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> rasanusa.id@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-spice flex items-center justify-center transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/628817449240" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/10 hover:bg-spice flex items-center justify-center transition">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs opacity-60 mt-6">Buka setiap hari<br />10:00 – 22:00 WIB</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm opacity-70">
          © {new Date().getFullYear()} Rasa Nusa
        </div>
      </div>
    </footer>
  );
}
