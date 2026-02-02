import Image from "next/image";
import { MapPin, Music, Heart, Instagram } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: MapPin,
    title: "Brisbane, Austrália",
    description: "De onde vem o som que conquista corações pelo mundo",
  },
  {
    icon: Music,
    title: "Indie Folk Acústico",
    description: "Melodias suaves que evocam natureza e liberdade",
  },
  {
    icon: Heart,
    title: "Milhões de Ouvintes",
    description: "Uma comunidade global unida pela música",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] lg:aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/beach-sunset.jpg"
              alt="Pôr do sol na praia"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>

          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
              Sobre a Banda
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Matt Carins & Ryan Henderson
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hollow Coves é uma dupla indie folk formada em Brisbane,
                Austrália, composta por{" "}
                <Link
                  href={"https://www.instagram.com/mattcarins/"}
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  <Instagram className="h-4 w-4 inline mr-1" />
                  Matt Carins
                </Link>{" "}
                e{" "}
                <Link
                  href={"https://www.instagram.com/ryanhendersonmusic/"}
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  <Instagram className="h-4 w-4 inline mr-1" />
                  Ryan Henderson
                </Link>
                . Desde 2014, eles vêm encantando ouvintes ao redor do mundo com
                harmonias vocais sensíveis e letras introspectivas.
              </p>
              <p>
                Suas músicas são uma celebração da natureza, das viagens e da
                busca por significado. Com hits como{" "}
                <strong className="text-foreground">
                  <Link
                    href="https://open.spotify.com/intl-pt/track/4sDbdBjuYQVdNNB4PiHUPo?si=9cf32099df3d4a5e"
                    target="_blank"
                    className="hover:underline"
                  >
                    <Music className="h-4 w-4 inline mr-1" />
                    Coastline
                  </Link>
                </strong>
                ,{" "}
                <strong className="text-foreground">
                  <Link
                    href="https://open.spotify.com/intl-pt/track/5377z0OljWvRR7CdSQrJxP?si=3bc69465cae14421"
                    target="_blank"
                    className="hover:underline"
                  >
                    <Music className="h-4 w-4 inline mr-1" />
                    The Woods
                  </Link>
                </strong>{" "}
                e{" "}
                <strong className="text-foreground">
                  <Link
                    href="https://open.spotify.com/intl-pt/track/1ZsUx0zG78g51kxphSGz9d?si=04d7ca16f88c4d6f"
                    target="_blank"
                    className="hover:underline"
                  >
                    <Music className="h-4 w-4 inline mr-1" />
                    Moments
                  </Link>
                </strong>
                , conquistaram milhões de ouvintes ao redor do mundo.
              </p>
              <p>
                No Brasil, a comunidade de fãs cresce a cada dia, unida pela
                paixão por uma música que toca a alma e nos reconecta com a
                natureza e com nós mesmos.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {highlights.map((item) => (
                <div key={item.title} className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
