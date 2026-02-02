import { Header } from "@/components/hollow-coves/header";
import { Hero } from "@/components/hollow-coves/hero";
import { NewsCarousel } from "@/components/hollow-coves/news-carousel";
import { About } from "@/components/hollow-coves/about";
import { Discography } from "@/components/hollow-coves/discography";
import { Lyrics } from "@/components/hollow-coves/lyrics";
import { Community } from "@/components/hollow-coves/community";
import { Newsletter } from "@/components/hollow-coves/newsletter";
import { Footer } from "@/components/hollow-coves/footer";

export default function HollowCovesBrasilPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* <NewsCarousel /> FINALIZAR SISTEMA DE NOTÍCIAS */}
      <About />
      <Discography />
      <Lyrics />
      <Community />
      <Newsletter />
      <Footer />
    </main>
  );
}
