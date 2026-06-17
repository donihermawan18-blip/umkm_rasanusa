import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/tentang", label: "Tentang Kami" },
  { to: "/menu", label: "Menu" },
  { to: "/galeri", label: "Galeri" },
  { to: "/testimoni", label: "Testimoni" },
  { to: "/kontak", label: "Kontak" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-18 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-spice flex items-center justify-center shadow-warm">
            <UtensilsCrossed className="w-5 h-5 text-spice-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg text-foreground">Rasa</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-spice -mt-1">Nusa</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-spice" }}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-spice transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/kontak"
            className="ml-3 px-5 py-2.5 rounded-full bg-spice text-spice-foreground text-sm font-semibold hover:opacity-90 transition shadow-warm"
          >
            Pesan Sekarang
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="flex flex-col p-6 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-spice bg-secondary" }}
                className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-secondary transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
