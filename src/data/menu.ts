import nasiGoreng from "@/assets/nasi-goreng.jpg";
import rendang from "@/assets/rendang.jpg";
import sate from "@/assets/sate.jpg";
import gadoGado from "@/assets/gado-gado.jpg";
import soto from "@/assets/soto.jpg";
import ayamPenyet from "@/assets/ayam-penyet.jpg";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "nasi-goreng",
    name: "Nasi Goreng Spesial",
    description: "Nasi goreng wangi khas Nusantara dengan telur mata sapi, ayam suwir, dan kerupuk.",
    price: "Rp 28.000",
    image: nasiGoreng,
    category: "Nasi",
  },
  {
    id: "rendang",
    name: "Rendang Daging Sapi",
    description: "Rendang Padang asli dimasak 6 jam dengan rempah pilihan dan santan kental.",
    price: "Rp 45.000",
    image: rendang,
    category: "Daging",
  },
  {
    id: "sate-ayam",
    name: "Sate Ayam Madura",
    description: "Sepuluh tusuk sate ayam empuk dengan bumbu kacang halus, lontong, dan acar.",
    price: "Rp 32.000",
    image: sate,
    category: "Sate",
  },
  {
    id: "gado-gado",
    name: "Gado-Gado Jakarta",
    description: "Sayuran segar, tahu, tempe, telur rebus, dan saus kacang khas Betawi.",
    price: "Rp 25.000",
    image: gadoGado,
    category: "Sayur",
  },
  {
    id: "soto-ayam",
    name: "Soto Ayam Lamongan",
    description: "Kuah kuning gurih, daging ayam suwir, koya, dan jeruk nipis segar.",
    price: "Rp 27.000",
    image: soto,
    category: "Sup",
  },
  {
    id: "ayam-penyet",
    name: "Ayam Penyet Sambal",
    description: "Ayam goreng krispi dipenyet dengan sambal terasi pedas dan lalapan segar.",
    price: "Rp 30.000",
    image: ayamPenyet,
    category: "Ayam",
  },
];

export const testimonials = [
  {
    name: "Andini Pratiwi",
    role: "Food Blogger",
    text: "Rendangnya juara! Bumbunya meresap sampai serat daging. Rasa rumahan yang bikin kangen kampung.",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "Pelanggan Setia",
    text: "Sudah 2 tahun langganan. Konsisten enak, porsi pas, dan harga sangat terjangkau untuk kualitas segini.",
    rating: 5,
  },
  {
    name: "Clara Wijaya",
    role: "Karyawan Swasta",
    text: "Nasi goreng spesialnya wangi banget, kerasa smoky-nya. Tempatnya juga cozy buat makan siang.",
    rating: 5,
  },
  {
    name: "Dimas Ariyanto",
    role: "Mahasiswa",
    text: "Sate ayam Madura-nya autentik. Bumbu kacangnya bukan sembarangan, langsung jadi favorit!",
    rating: 5,
  },
];
