import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProductShowcase } from "@/components/product-showcase";
import { ClientShowcase } from "@/components/client-showcase";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "ArtPrint - Корпоративная одежда и сувениры с логотипом | Лучшие цены в Узбекистане",
  description: "ArtPrint - ведущая компания по изготовлению корпоративной одежды с логотипом в Узбекистане. Футболки, толстовки, кепки, шопперы и другие товары с принтом. Быстро, качественно, выгодно.",
  keywords: "корпоративная одежда, печать логотипов, футболки с принтом, толстовки с логотипом, промо продукция Узбекистан",
  openGraph: {
    title: "ArtPrint - Корпоративная одежда и сувениры с логотипом | Лучшие цены в Узбекистане",
    description: "ArtPrint - ведущая компания по изготовлению корпоративной одежды с логотипом в Узбекистане.",
    url: "https://artprint.vercel.app/",
    type: "website",
  },
  alternates: {
    canonical: "https://artprint.vercel.app/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <ClientShowcase />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
