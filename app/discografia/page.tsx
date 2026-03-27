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
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Album } from "@/data/albums";
import { convertSecondsToDuration, formatPlaysCompact } from "@/lib/utils";
import { hollowCoves } from "@/data/hollow-coves";
import { Track } from "@/data/tracks";
import { AiOutlineSpotify } from "react-icons/ai";
import { MdOutlineLyrics } from "react-icons/md";

function AlbumSection({
  album,
  isExpanded,
  onToggle,
}: {
  album: Album;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const topTracks = Object.values(hollowCoves.tracks)
    .sort((a, b) => b.plays - a.plays)
    .slice(0, 3);

  const trackList = isExpanded ? album.tracks : album.tracks.slice(0, 5);

  return (
    <section className="py-12 lg:py-16 px-5 border-b border-border last:border-b-0">
      <div className="container overflow-x-hidden">
        <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl group">
              <Image
                src={album.cover || "/placeholder.svg"}
                alt={`Capa do álbum ${album.title}`}
                fill
                className="object-cover max-w-full"
                priority
              />
              <div className="absolute w-full inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                <Button
                  size="lg"
                  className="opacity-0 group-hover:opacity-100 transition-opacity min-h-12"
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
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-2">
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
                    {convertSecondsToDuration(album.totalDuration)}
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
                <Button asChild className="min-h-12">
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
                  className="min-h-12 bg-transparent"
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
                className="text-muted-foreground hover:text-foreground min-h-11"
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

            <div className="space-y-2 flex flex-col gap-4">
              {trackList.map((track, index) => (
                <>
                  <TrackItem
                    index={index}
                    track={track}
                    isTopTrack={!!topTracks.find((t) => t.id === track.id)}
                  />
                  {trackList.length - 1 > index && (
                    <hr className="border-muted/40 lg:hidden" />
                  )}
                </>
              ))}
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

function TrackItem({
  index,
  isTopTrack,
  track,
}: {
  track: Track;
  index: number;
  isTopTrack: boolean;
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 items-center">
      <Link
        href={track.lyricsUrl}
        target="_blank"
        className="flex items-center order-2 col-span-1 lg:order-1"
      >
        <Button
          variant="outline"
          title={`Acesse a tradução da músice ${track.title}`}
          className="p-6 border-primary/10 border cursor-pointer w-full"
        >
          <MdOutlineLyrics className="size-6" />
          <span>Tradução</span>
        </Button>
      </Link>
      <Card
        key={index}
        className={`border-border w-full py-3 hover:border-primary/50 transition-colors bg-card order-1 col-span-2 lg:order-2 `}
      >
        <CardContent className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <span className="text-lg font-serif font-semibold text-primary/60 w-8 text-center">
              {index + 1}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 min-w-0 flex-wrap">
                {isTopTrack && (
                  <Flame className="fill-primary text-primary size-4" />
                )}
                <h4 className="font-medium text-foreground truncate">
                  {track.title}
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {track.plays && (
                <span className="hidden sm:block">
                  {formatPlaysCompact(track.plays)}
                </span>
              )}
              <span className="font-mono text-xs">
                {convertSecondsToDuration(track.duration)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Link
        href={track.spotifyUrl}
        target="_blank"
        className="flex items-center order-3 col-span-1"
      >
        <Button
          variant="outline"
          title={`Acesse a músice ${track.title} no spotify`}
          className="p-6 border-primary/10 border w-full cursor-pointer"
        >
          <AiOutlineSpotify className="size-6" />
          <span>Spotify</span>
        </Button>
      </Link>
    </div>
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

  const tracks = Object.values(hollowCoves.tracks);
  const albums = Object.values(hollowCoves.albums);

  const totalTracks = tracks.length;
  const totalPlays = tracks.reduce((a, b) => a + b.plays, 0);
  const totalStreams = formatPlaysCompact(totalPlays) + "+";

  return (
    <main className="min-h-screen max-w-full bg-background">
      <header className="bg-foreground text-card py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:max-w-250">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-card/70 hover:text-primary transition-colors mb-8 min-h-11"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Início
          </Link>

          <div className="max-w-3xl">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
              Discografia Completa
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl  font-bold text-card mb-6 text-balance">
              Todos os Álbuns do Hollow Coves
            </h1>
            <p className="text-card/70 text-lg leading-relaxed mb-8">
              Explore a discografia completa da dupla australiana. De EPs
              intimistas a álbuns completos, cada lançamento conta uma história
              de natureza, aventura e conexão humana.
            </p>

            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-3xl lg:text-4xl font-serif font-bold text-primary">
                  {albums.length}
                </p>
                <p className="text-card/60 text-sm">Álbuns</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-serif font-bold text-primary">
                  {totalTracks}
                </p>
                <p className="text-card/60 text-sm">Faixas</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-serif font-bold text-primary">
                  {totalStreams}
                </p>
                <p className="text-card/60 text-sm">Streams Totais</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-center">
        <div className="lg:max-w-300">
          {albums.map((album) => (
            <AlbumSection
              key={album.id}
              album={album}
              isExpanded={expandedAlbums[album.id] || false}
              onToggle={() => toggleAlbum(album.id)}
            />
          ))}
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Quer ver as letras traduzidas?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Confira nossa seção de letras com traduções em português das músicas
            mais amadas.
          </p>
          <Button asChild size="lg" className="min-h-13">
            <Link href="/#letras">Ver Letras Traduzidas</Link>
          </Button>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary transition-colors min-h-11 flex items-center"
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
