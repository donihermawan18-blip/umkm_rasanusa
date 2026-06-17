import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Link } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold text-spice">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-foreground">Halaman tidak ditemukan</h2>
        <p className="mt-2 text-muted-foreground">Sepertinya menu ini sedang habis.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-spice px-6 py-3 text-sm font-semibold text-spice-foreground hover:opacity-90 transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rasa Nusa Cita Rasa Asli Nusantara" },
      { name: "description", content: "Toko makanan khas Indonesia dengan resep autentik turun-temurun. Nasi goreng, rendang, sate, dan menu Nusantara lainnya." },
      { property: "og:title", content: "Rasa Nusa Cita Rasa Asli Nusantara" },
      { property: "og:description", content: "Toko makanan khas Indonesia dengan resep autentik turun-temurun. Nasi goreng, rendang, sate, dan menu Nusantara lainnya." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Rasa Nusa Cita Rasa Asli Nusantara" },
      { name: "twitter:description", content: "Toko makanan khas Indonesia dengan resep autentik turun-temurun. Nasi goreng, rendang, sate, dan menu Nusantara lainnya." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/549a51f8-d1ed-4bd9-a79e-dde54f288602/id-preview-e1879735--f37849c6-b172-4b46-a0d2-566b72bad5b7.lovable.app-1777825980384.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/549a51f8-d1ed-4bd9-a79e-dde54f288602/id-preview-e1879735--f37849c6-b172-4b46-a0d2-566b72bad5b7.lovable.app-1777825980384.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
