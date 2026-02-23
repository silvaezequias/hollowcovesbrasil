import { Button } from "@/components/ui/button";
import { Play, Instagram, Youtube, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-dvh w-full flex items-center justify-center overflow-hidden bg-background py-20 lg:py-0"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Main Content / Text Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1">
            {/* Tag/Badge Superior */}
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-6 py-2">
              <span className="text-primary uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">
                Comunidade Oficial de Fãs
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground">
              Hollow Coves
              <span className="block mt-2 text-primary">Brasil</span>
            </h1>

            {/* Descrição */}
            <p className="text-foreground/80 text-lg sm:text-xl max-w-xl leading-relaxed font-light text-pretty">
              A maior comunidade brasileira de fãs da dupla australiana que
              encanta o mundo com suas melodias folk e letras sobre natureza,
              viagens e autodescoberta.
            </p>

            {/* Botões / Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 text-base h-14 px-8 rounded-full shadow-lg hover:scale-105 transition-transform"
                asChild
              >
                <a
                  href="https://open.spotify.com/artist/7IAFAOtc9kTYNTizhLSWM6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="h-5 w-5 fill-current" />
                  Ouvir Agora
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 text-base h-14 px-8 rounded-full border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300"
                asChild
              >
                <a
                  href="https://www.instagram.com/hollowcovesbrasil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  Nosso Instagram
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 text-base h-14 px-8 rounded-full border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300"
                asChild
              >
                <a
                  href="https://chat.whatsapp.com/C57qaICOABA3VDta4iIGfv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-6 w-6" />
                  Grupo no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end w-full mx-auto">
            <div className="relative lg:aspect-4/5 aspect-square rounded-lg overflow-hidden">
              <img
                src="/images/hollow-coves-wearing-br.jpg"
                alt="Hollow Coves"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
