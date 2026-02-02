"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  Clock,
  Calendar,
  Disc3,
  ExternalLink,
  Music2,
  ChevronDown,
  ChevronUp,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Track {
  number: number;
  title: string;
  duration: string;
  plays?: string;
  featured?: boolean;
  lyrics?: string;
}

interface Album {
  id: string;
  title: string;
  year: string;
  releaseDate: string;
  cover: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  description: string;
  tracks: Track[];
  totalDuration: string;
  highlights: string[];
}

const albums: Album[] = [
  {
    id: "nothing-to-lose",
    title: "Nothing to Lose",
    year: "2024",
    releaseDate: "1 de Março, 2024",
    cover: "/images/album-nothing-to-lose.jpg",
    spotifyUrl: "https://open.spotify.com/album/3MLs9OSTBURXZ87o8ItJSp",
    appleMusicUrl:
      "https://music.apple.com/br/album/nothing-to-lose/1720184172",
    description:
      "O segundo álbum de estúdio completo do Hollow Coves explora temas como jornada, simplicidade e conexão humana, refletindo sobre a vida contemporânea com melodias folk e arranjos mais amplos do que nos trabalhos anteriores.",
    totalDuration: "37:00",
    highlights: [
      "Leva mais para o indie folk amadurecido",
      "Tema de aceitação e gratidão",
      "Singles populares como 'Photographs' e 'On The Way'",
    ],
    tracks: [
      { number: 1, title: "Nothing to Lose", duration: "3:57" },
      { number: 2, title: "Letting Go", duration: "3:30" },
      { number: 3, title: "Milk & Honey", duration: "3:57" },
      { number: 4, title: "Photographs", duration: "2:55" },
      { number: 5, title: "Harder to Fake It", duration: "3:22" },
      { number: 6, title: "Let’s Go", duration: "3:10" },
      { number: 7, title: "Purple", duration: "4:26" },
      { number: 8, title: "On the Way", duration: "3:12" },
      { number: 9, title: "Be Alright", duration: "2:54" },
      { number: 10, title: "Fact or Fiction", duration: "4:09" },
      { number: 11, title: "See You Soon", duration: "3:16" },
    ],
  },
  {
    id: "moments",
    title: "Moments",
    year: "2019",
    releaseDate: "18 de Outubro, 2019",
    cover: "/images/album-moments.jpg",
    spotifyUrl: "https://open.spotify.com/album/1AdV0dbxTNI6ihLCJYyE96",
    appleMusicUrl: "https://music.apple.com/us/album/moments/1609043786",
    description:
      "Álbum de estreia da dupla oficial, ‘Moments’ marca o começo da trajetória global do Hollow Coves com canções folk introspectivas sobre memórias, viagens e crescimento pessoal.",
    totalDuration: "51:30",
    highlights: [
      "Álbum de estreia completo",
      "Inclui o single ‘When We Were Young’",
      "Sonoridade acústica e emocional",
    ],
    tracks: [
      { number: 1, title: "Anew", duration: "5:13" },
      { number: 2, title: "Moments", duration: "4:29" },
      { number: 3, title: "When We Were Young", duration: "4:18" },
      { number: 4, title: "Borderlines", duration: "4:24" },
      { number: 5, title: "The Open Road", duration: "3:20" },
      { number: 6, title: "Adrift", duration: "5:23" },
      { number: 7, title: "Patience", duration: "4:51" },
      { number: 8, title: "Ran Away", duration: "4:15" },
      { number: 9, title: "Beauty in the Light", duration: "4:15" },
      { number: 10, title: "Notions", duration: "6:00" },
      { number: 11, title: "Pictures", duration: "5:01" },
    ],
  },
  {
    id: "wanderlust",
    title: "Wanderlust",
    year: "2017",
    releaseDate: "3 de Fevereiro, 2017",
    cover: "/images/album-wanderlust.jpg",
    spotifyUrl: "https://open.spotify.com/album/37yGR6auNK3W1XbcDYfSjw",
    appleMusicUrl: "https://music.apple.com/us/album/wanderlust-ep/1609039040",
    description:
      "EP de estreia que apresentou a sonoridade folk acústica da dupla ao mundo, com seis músicas repletas de harmonias e vibrações naturais.",
    totalDuration: "20:30",
    highlights: [
      "EP de estreia",
      "Primeiro sucesso de fãs",
      "Som acústico puro",
    ],
    tracks: [
      { number: 1, title: "Coastline", duration: "3:53" },
      { number: 2, title: "We Will Run", duration: "4:15" },
      { number: 3, title: "The Woods", duration: "4:01" },
      { number: 4, title: "Interlude", duration: "1:00" },
      { number: 5, title: "Home", duration: "3:22" },
      { number: 6, title: "These Memories", duration: "5:13" },
    ],
  },
];

function formatPlays(plays: string): string {
  return plays;
}

function AlbumSection({
  album,
  isExpanded,
  onToggle,
}: {
  album: Album;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <section className="py-12 md:py-16 border-b border-border last:border-b-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl group">
              <Image
                src={album.cover || "/placeholder.svg"}
                alt={`Capa do álbum ${album.title}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                <Button
                  size="lg"
                  className="opacity-0 group-hover:opacity-100 transition-opacity min-h-[48px]"
                  asChild
                >
                  <a
                    href={album.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="h-5 w-5 mr-2 fill-current" />
                    Reproduzir
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {album.title}
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {album.releaseDate}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Disc3 className="h-4 w-4" />
                    {album.tracks.length} faixas
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {album.totalDuration}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {album.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {album.highlights.map((highlight) => (
                  <Badge
                    key={highlight}
                    variant="secondary"
                    className="text-xs"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild className="min-h-[48px]">
                  <a
                    href={album.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Headphones className="h-4 w-4 mr-2" />
                    Spotify
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="min-h-[48px] bg-transparent"
                >
                  <a
                    href={album.appleMusicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Apple Music
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                <Music2 className="h-5 w-5 text-primary" />
                Lista de Faixas
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className="text-muted-foreground hover:text-foreground min-h-[44px]"
              >
                {isExpanded ? (
                  <>
                    Recolher <ChevronUp className="h-4 w-4 ml-1" />
                  </>
                ) : (
                  <>
                    Expandir <ChevronDown className="h-4 w-4 ml-1" />
                  </>
                )}
              </Button>
            </div>

            <div className="space-y-2">
              {(isExpanded ? album.tracks : album.tracks.slice(0, 5)).map(
                (track) => (
                  <Card
                    key={track.number}
                    className={`border-border py-3 md:py-5 hover:border-primary/50 transition-colors ${
                      track.featured
                        ? "bg-primary/5 border-primary/20"
                        : "bg-card"
                    }`}
                  >
                    <CardContent className="flex items-center gap-4">
                      <span className="text-lg font-serif font-semibold text-primary/60 w-8 text-center">
                        {track.number}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-foreground truncate">
                            {track.title}
                          </h4>
                          {track.featured && (
                            <Badge
                              variant="default"
                              className="text-[10px] px-1.5 py-0"
                            >
                              Popular
                            </Badge>
                          )}
                          {track.lyrics && (
                            <Link href="/#letras">
                              <Badge
                                variant="outline"
                                className="text-[10px] px-1.5 py-0 cursor-pointer hover:bg-primary/10"
                              >
                                Letra
                              </Badge>
                            </Link>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        {track.plays && (
                          <span className="hidden sm:block">
                            {formatPlays(track.plays)} plays
                          </span>
                        )}
                        <span className="font-mono text-xs">
                          {track.duration}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ),
              )}
            </div>

            {!isExpanded && album.tracks.length > 5 && (
              <Button
                variant="ghost"
                className="w-full mt-4 text-muted-foreground hover:text-foreground min-h-12"
                onClick={onToggle}
              >
                Ver todas as {album.tracks.length} faixas
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DiscografiaPage() {
  const [expandedAlbums, setExpandedAlbums] = useState<Record<string, boolean>>(
    {},
  );

  const toggleAlbum = (albumId: string) => {
    setExpandedAlbums((prev) => ({
      ...prev,
      [albumId]: !prev[albumId],
    }));
  };

  const totalTracks = albums.reduce(
    (sum, album) => sum + album.tracks.length,
    0,
  );
  const totalStreams = "1B+";

  return (
    <main className="min-h-screen bg-background">
      <header className="bg-foreground text-card py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-card/70 hover:text-primary transition-colors mb-8 min-h-[44px]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Início
          </Link>

          <div className="max-w-3xl">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
              Discografia Completa
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 text-balance">
              Todos os Álbuns do Hollow Coves
            </h1>
            <p className="text-card/70 text-lg leading-relaxed mb-8">
              Explore a discografia completa da dupla australiana. De EPs
              intimistas a álbuns completos, cada lançamento conta uma história
              de natureza, aventura e conexão humana.
            </p>

            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  {albums.length}
                </p>
                <p className="text-card/60 text-sm">Álbuns</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  {totalTracks}
                </p>
                <p className="text-card/60 text-sm">Faixas</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  {totalStreams}
                </p>
                <p className="text-card/60 text-sm">Streams Totais</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {albums.map((album) => (
        <AlbumSection
          key={album.id}
          album={album}
          isExpanded={expandedAlbums[album.id] || false}
          onToggle={() => toggleAlbum(album.id)}
        />
      ))}

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            Quer ver as letras traduzidas?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Confira nossa seção de letras com traduções em português das músicas
            mais amadas.
          </p>
          <Button asChild size="lg" className="min-h-[52px]">
            <Link href="/#letras">Ver Letras Traduzidas</Link>
          </Button>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Início
          </Link>
          <p className="text-muted-foreground text-sm">
            Hollow Coves Brasil - Comunidade de Fãs
          </p>
        </div>
      </footer>
    </main>
  );
}
