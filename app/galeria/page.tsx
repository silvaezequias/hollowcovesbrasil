import { Header } from "@/components/hollow-coves/header";
import { Footer } from "@/components/hollow-coves/footer";
import { InstagramGallery } from "@/components/hollow-coves/instagram-gallery";
import { Camera, Instagram, Heart } from "lucide-react";

export const metadata = {
  title: "Galeria de Fãs | Hollow Coves Brasil",
  description:
    "Momentos especiais capturados pelos fãs brasileiros do Hollow Coves em shows e encontros.",
};

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 md:pt-24">
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Camera className="w-4 h-4" />
                Momentos Especiais
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Galeria de <span className="text-primary">Fãs</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Reviva os melhores momentos dos fãs brasileiros com o Hollow
                Coves. Cada foto conta uma historia de conexao atraves da
                musica.
              </p>
              <div className="flex items-center justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-primary" />
                  <span className="text-sm">Posts do Instagram</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-sm">Feito com amor</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <InstagramGallery />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Quer aparecer na galeria?
              </h2>
              <p className="text-muted-foreground mb-6">
                Poste sua foto no Instagram com a hashtag{" "}
                <span className="text-primary font-semibold">
                  #HollowCovesBrasil
                </span>{" "}
                e ela pode aparecer aqui!
              </p>
              <a
                href="https://instagram.com/explore/tags/hollowcovesbrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Ver hashtag no Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
