import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Instagram, Youtube } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-forest.jpg"
          alt="Floresta atmosférica"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-foreground/60 via-foreground/40 to-background" />
      </div>

      <div className="relative z-10 container pt-50 pb-12 px-20 lg:max-h-svh rounded-full aspect-square  text-center backdrop-blur-[3px]">
        <div className="max-w-3xl mx-auto">
          <p className="text-card/80 uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Comunidade Oficial de Fãs
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-card mb-6 leading-tight text-balance">
            Hollow Coves
            <span className="block text-accent">Brasil</span>
          </h1>
          <p className="text-card/90 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed text-pretty">
            A maior comunidade brasileira de fãs da dupla australiana que
            encanta o mundo com suas melodias folk e letras sobre natureza,
            viagens e autodescoberta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 text-base min-h-12" asChild>
              <a
                href="https://open.spotify.com/artist/7IAFAOtc9kTYNTizhLSWM6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="h-5 w-5" />
                Ouvir Agora
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base min-h-12 bg-card/10 border-primary text-primary hover:bg-primary/20 hover:text-primary"
              asChild
            >
              <a
                href="https://www.instagram.com/hollowcoves"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base min-h-12 bg-card/10  text-primary hover:bg-primary/20 hover:text-primary border-primary"
              asChild
            >
              <a
                href="https://www.youtube.com/@HollowCoves"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" />
                YouTube
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
