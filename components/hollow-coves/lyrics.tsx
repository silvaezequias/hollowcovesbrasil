"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  MicVocal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { is } from "date-fns/locale";

const lyrics = [
  // Wanderlust (2017)
  {
    song: "Coastline",
    album: "Wanderlust",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/coastline/traducao.html",
  },
  {
    song: "We Will Run",
    album: "Wanderlust",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/we-will-run/traducao.html",
  },
  {
    song: "The Woods",
    album: "Wanderlust",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/the-woods/traducao.html",
  },
  {
    song: "Interlude",
    album: "Wanderlust",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/interlude/traducao.html",
  },
  {
    song: "Home",
    album: "Wanderlust",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/home/traducao.html",
  },
  {
    song: "These Memories",
    album: "Wanderlust",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/these-memories/traducao.html",
  },

  // Moments (2019)
  {
    song: "Anew",
    album: "Moments",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/anew/traducao.html",
  },
  {
    song: "Moments",
    album: "Moments",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/moments/traducao.html",
  },
  {
    song: "When We Were Young",
    album: "Moments",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/when-we-were-young/traducao.html",
  },
  {
    song: "Borderlines",
    album: "Moments",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/borderlines/traducao.html",
  },
  {
    song: "The Open Road",
    album: "Moments",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/the-open-road/traducao.html",
  },
  {
    song: "Adrift",
    album: "Moments",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/adrift/traducao.html",
  },
  {
    song: "Patience",
    album: "Moments",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/patience/traducao.html",
  },
  {
    song: "Ran Away",
    album: "Moments",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/ran-away/traducao.html",
  },
  {
    song: "Beauty in the Light",
    album: "Moments",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/beauty-in-the-light/traducao.html",
  },
  {
    song: "Notions",
    album: "Moments",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/notions/traducao.html",
  },
  {
    song: "Pictures",
    album: "Moments",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/pictures/traducao.html",
  },

  // Nothing to Lose (2024)
  {
    song: "Nothing to Lose",
    album: "Nothing to Lose",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/nothing-to-lose/traducao.html",
  },
  {
    song: "Letting Go",
    album: "Nothing to Lose",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/letting-go/traducao.html",
  },
  {
    song: "Milk & Honey",
    album: "Nothing to Lose",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/milk-and-honey/traducao.html",
  },
  {
    song: "Photographs",
    album: "Nothing to Lose",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/photographs/traducao.html",
  },
  {
    song: "Harder to Fake It",
    album: "Nothing to Lose",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/harder-to-fake-it/traducao.html",
  },
  {
    song: "Let's Go",
    album: "Nothing to Lose",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/lets-go/traducao.html",
  },
  {
    song: "Purple",
    album: "Nothing to Lose",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/purple/traducao.html",
  },
  {
    song: "On the Way",
    album: "Nothing to Lose",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/on-the-way/traducao.html",
  },
  {
    song: "Be Alright",
    album: "Nothing to Lose",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/be-alright/traducao.html",
  },
  {
    song: "Fact or Fiction",
    album: "Nothing to Lose",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/fact-or-fiction/traducao.html",
  },
  {
    song: "See You Soon",
    album: "Nothing to Lose",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/see-you-soon/traducao.html",
  },

  // EPs
  {
    song: "Blessings",
    album: "EP",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/blessings/traducao.html",
  },
  {
    song: "Evermore",
    album: "EP",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/evermore/traducao.html",
  },
  {
    song: "Unfamiliar",
    album: "EP",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/unfamiliar/traducao.html",
  },
  {
    song: "Chasing the Sun",
    album: "EP",
    fullLyricsRedirect:
      "https://www.letras.mus.br/hollow-coves/chasing-the-sun/traducao.html",
  },
];

const groupByAlbum = (songs: typeof lyrics) => {
  return songs.reduce((acc: Record<string, typeof lyrics>, song) => {
    if (!acc[song.album]) acc[song.album] = [];
    acc[song.album].push(song);
    return acc;
  }, {});
};

export function Lyrics() {
  const grouped = groupByAlbum(lyrics);
  const [expandedAlbums, setExpandedAlbums] = useState<Record<string, boolean>>(
    {},
  );

  const toggleAlbum = (album: string) => {
    setExpandedAlbums((prev) => ({ ...prev, [album]: !prev[album] }));
  };

  return (
    <section id="letras" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Letras Traduzidas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Poesia em Forma de Música
          </h2>
          <p className="text-muted-foreground text-lg">
            Confira as traduções das letras mais amadas do Hollow Coves e
            conecte-se ainda mais com cada verso
          </p>
        </div>
        <div className="columns-1 xl:columns-2 gap-2 p-5 w-full bg-background rounded-lg">
          {Object.entries(grouped).map(([album, songs]) => {
            const isExpanded = expandedAlbums[album] || false;
            const visibleSongs = isExpanded ? songs : songs.slice(0, 4);

            return (
              <div
                key={album}
                className="border-b break-inside-avoid max-h-fit last:border-0 xl:border-0 p-5"
              >
                <h3 className="text-xl font-bold mb-4 text-primary text-center">
                  {album}
                </h3>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-auto">
                  {visibleSongs.map((item) => (
                    <Link
                      key={item.song}
                      href={item.fullLyricsRedirect}
                      target="_blank"
                    >
                      <Card className="bg-card break-inside-avoid border-border hover:border-primary/30 transition-colors">
                        <CardContent className="flex justify-between">
                          <span className="flex items-center gap-4">
                            <MicVocal className="h-4 w-4 text-muted-foreground/50" />
                            {item.song}
                          </span>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>

                {songs.length > 4 && (
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-muted-foreground hover:text-foreground min-h-12"
                    onClick={() => toggleAlbum(album)}
                  >
                    {!isExpanded ? (
                      <>
                        Ver todas as {songs.length} faixas
                        <ChevronDown className="h-4 w-4 ml-2" />
                      </>
                    ) : (
                      <>
                        Esconder
                        <ChevronUp className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
