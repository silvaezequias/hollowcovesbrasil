"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { hollowCoves } from "@/data/hollow-coves";
import { MdOutlineLyrics } from "react-icons/md";

export function Lyrics() {
  const [expandedAlbums, setExpandedAlbums] = useState<Record<string, boolean>>(
    {},
  );

  const toggleAlbum = (album: string) => {
    setExpandedAlbums((prev) => ({ ...prev, [album]: !prev[album] }));
  };

  const eps = hollowCoves.eps;
  const isEpsExpanded = expandedAlbums["eps"] || false;
  const visibleEpsSongs = isEpsExpanded ? eps.tracks : eps.tracks.slice(0, 4);

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
        <div className="columns-1 xl:columns-2 gap-2 md:p-5 w-full bg-background rounded-lg">
          {Object.entries(hollowCoves.albums).map(([albumName, album]) => {
            const isExpanded = expandedAlbums[albumName] || false;
            const visibleSongs = isExpanded
              ? album.tracks
              : album.tracks.slice(0, 4);

            return (
              <div
                key={albumName}
                className="border-b break-inside-avoid max-h-fit last:border-0 xl:border-0 p-5"
              >
                <h3 className="text-xl font-bold mb-4 text-primary text-center">
                  {albumName}
                </h3>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-auto">
                  {visibleSongs.map((item) => (
                    <Link
                      key={item.title}
                      href={item.lyricsUrl}
                      target="_blank"
                    >
                      <Card className="bg-card break-inside-avoid border-border hover:border-primary/30 transition-colors">
                        <CardContent className="flex justify-between">
                          <span className="flex items-center gap-4">
                            <MdOutlineLyrics className="h-4 w-4 text-muted-foreground" />
                            {item.title}
                          </span>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>

                {album.tracks.length > 4 && (
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-muted-foreground hover:text-foreground min-h-12"
                    onClick={() => toggleAlbum(albumName)}
                  >
                    {!isExpanded ? (
                      <>
                        Ver todas as {album.tracks.length} faixas
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
          <div
            key={"eps"}
            className="border-b break-inside-avoid max-h-fit last:border-0 xl:border-0 p-5"
          >
            <h3 className="text-xl font-bold mb-4 text-primary text-center">
              EP's
            </h3>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-auto">
              {visibleEpsSongs.map((item) => (
                <Link key={item.title} href={item.lyricsUrl} target="_blank">
                  <Card className="bg-card break-inside-avoid border-border hover:border-primary/30 transition-colors">
                    <CardContent className="flex justify-between">
                      <span className="flex items-center gap-4">
                        <MdOutlineLyrics className="h-4 w-4 text-muted-foreground" />
                        {item.title}
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {hollowCoves.eps.tracks.length > 4 && (
              <Button
                variant="ghost"
                className="w-full mt-4 text-muted-foreground hover:text-foreground min-h-12"
                onClick={() => toggleAlbum("eps")}
              >
                {!isEpsExpanded ? (
                  <>
                    Ver todas as {hollowCoves.eps.tracks.length} faixas
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
        </div>
      </div>
    </section>
  );
}
