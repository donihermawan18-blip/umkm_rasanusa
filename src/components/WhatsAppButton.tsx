import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/628817449240?text=Halo%20Nusantara%20Food%2C%20saya%20ingin%20memesan"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[oklch(0.7_0.18_150)] text-white flex items-center justify-center shadow-warm hover:scale-110 transition-transform animate-scale-in"
    >
      <MessageCircle className="w-6 h-6" fill="currentColor" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-spice rounded-full animate-ping" />
    </a>
  );
}
