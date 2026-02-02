"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { title } from "process";

const albums = [
  {
    title: "Nothing to Lose",
    year: "2024",
    tracks: 11,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/album/3MLs9OSTBURXZ87o8ItJSp?si=_MvIBWxYT0W2zPTZss5Nkw",
    cover: "/images/album-nothing-to-lose.jpg",
  },
  {
    title: "Moments",
    year: "2019",
    tracks: 11,
    spotifyUrl: "https://open.spotify.com/intl-pt/album/1AdV0dbxTNI6ihLCJYyE96",
    cover: "/images/album-moments.jpg",
  },
  {
    title: "Wanderlust",
    year: "2017",
    tracks: 6,
    spotifyUrl: "https://open.spotify.com/intl-pt/album/37yGR6auNK3W1XbcDYfSjw",
    cover: "/images/album-wanderlust.jpg",
  },
];

const popularSongs = [
  { title: "Coastline", plays: "~500M" },
  { title: "The Woods", plays: "~100M" },
  { title: "Home", plays: "~100M" },
  { title: "Blessings", plays: "~56M" },
  { title: "These Memories", plays: "~48M" },
  { title: "Evermore", plays: "~38M" },
];

export function Discography() {
  return (
    <section id="discografia" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Discografia
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Álbuns & Músicas
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Explore a discografia completa do Hollow Coves e descubra suas
            músicas favoritas
          </p>
          <Button
            variant="outline"
            asChild
            className="min-h-[48px] bg-transparent"
          >
            <Link href="/discografia">
              Ver Discografia Completa
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {albums.map((album) => (
            <Card
              key={album.title}
              className="group overflow-hidden border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={album.cover || "/placeholder.svg"}
                  alt={`Capa do álbum ${album.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
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
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ouvir
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {album.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {album.year} • {album.tracks} faixas
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
            Músicas Mais Populares
          </h3>
          <div className="space-y-3 h0">
            {popularSongs.map((song, index) => (
              <div
                key={song.title}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <span className="text-2xl font-serif font-bold text-primary/60 w-8">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{song.title}</h4>
                </div>
                <span className="text-sm text-muted-foreground">
                  {song.plays} plays
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
