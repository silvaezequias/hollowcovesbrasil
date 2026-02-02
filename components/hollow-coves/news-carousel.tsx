"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Heart,
  MessageCircle,
  ArrowRight,
  Calendar,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  posterUrl: string;
  date: string;
  tags: string[];
  likes: number;
  comments: number;
  views: number;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Hollow Coves Anuncia Nova Turnê Mundial 2026",
    description:
      "A dupla australiana confirmou datas para uma turnê mundial que pode incluir o Brasil. Os fãs brasileiros estão animados com a possibilidade de ver Matt e Ryan ao vivo pela primeira vez no país.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    posterUrl: "/images/hero-forest.jpg",
    date: "24 Jan 2026",
    tags: ["Turnê", "Ao Vivo"],
    likes: 1243,
    comments: 89,
    views: 15420,
  },
  {
    id: 2,
    title: "Novo Single 'Ocean Dreams' Bate Recorde de Streams",
    description:
      "O mais recente lançamento do Hollow Coves alcançou 10 milhões de streams em apenas uma semana, tornando-se o single mais rápido a atingir essa marca na carreira da dupla.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    posterUrl: "/images/beach-sunset.jpg",
    date: "20 Jan 2026",
    tags: ["Lançamento", "Spotify"],
    likes: 2156,
    comments: 134,
    views: 28930,
  },
  {
    id: 3,
    title: "Entrevista Exclusiva: Os Bastidores do Novo Álbum",
    description:
      "Em conversa exclusiva, Matt Carins revelou detalhes sobre o processo criativo do próximo álbum, que promete trazer uma sonoridade ainda mais intimista e conectada com a natureza.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    posterUrl: "/images/acoustic-guitar.jpg",
    date: "15 Jan 2026",
    tags: ["Entrevista", "Exclusivo"],
    likes: 987,
    comments: 67,
    views: 12340,
  },
  {
    id: 4,
    title: "Coastline Atinge 500 Milhões de Plays no Spotify",
    description:
      "O clássico 'Coastline' continua conquistando novos ouvintes e acaba de ultrapassar a marca histórica de meio bilhão de reproduções na plataforma de streaming.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    posterUrl: "/images/beach-sunset.jpg",
    date: "10 Jan 2026",
    tags: ["Marco", "Coastline"],
    likes: 3421,
    comments: 245,
    views: 45670,
  },
  {
    id: 5,
    title: "Colaboração Surpresa com Artista Brasileiro",
    description:
      "Rumores indicam que o Hollow Coves está trabalhando em uma colaboração especial com um artista brasileiro. Fãs especulam sobre quem pode ser o parceiro nessa faixa inédita.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    posterUrl: "/images/hero-forest.jpg",
    date: "5 Jan 2026",
    tags: ["Colaboração", "Brasil"],
    likes: 1876,
    comments: 198,
    views: 21450,
  },
  {
    id: 6,
    title: "Documentário 'Wanderlust' Ganha Data de Estreia",
    description:
      "O documentário que acompanha a jornada musical do Hollow Coves será lançado em março. O filme traz imagens inéditas das gravações e turnês ao redor do mundo.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    posterUrl: "/images/album-wanderlust.jpg",
    date: "1 Jan 2026",
    tags: ["Documentário", "Estreia"],
    likes: 1543,
    comments: 112,
    views: 18760,
  },
  {
    id: 7,
    title: "Playlist Oficial 'Hollow Coves Brasil' no Spotify",
    description:
      "A comunidade brasileira agora tem sua própria playlist oficial no Spotify, curada pelos administradores do fã-clube com as músicas favoritas dos fãs brasileiros.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    posterUrl: "/images/acoustic-guitar.jpg",
    date: "28 Dec 2025",
    tags: ["Playlist", "Comunidade"],
    likes: 765,
    comments: 43,
    views: 9870,
  },
  {
    id: 8,
    title: "Matt Carins Fala Sobre Inspirações Brasileiras",
    description:
      "Em live recente, Matt revelou que a música brasileira, especialmente a bossa nova, tem sido uma grande inspiração para as novas composições da dupla.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    posterUrl: "/images/hero-forest.jpg",
    date: "22 Dec 2025",
    tags: ["Entrevista", "Brasil"],
    likes: 2098,
    comments: 156,
    views: 24560,
  },
];

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(".0", "") + "K";
  }
  return num.toString();
}

function VideoPlayer({
  videoUrl,
  posterUrl,
  isActive,
}: {
  videoUrl: string;
  posterUrl: string;
  isActive: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(50);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive]);

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.muted = false;
        videoRef.current.volume = volume / 100;
        setIsMuted(false);
      } else {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="relative w-full h-full bg-foreground/10 rounded-xl overflow-hidden">
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover"
      />

      <div
        className="absolute bottom-4 left-4 flex items-center gap-2"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        <Button
          variant="secondary"
          size="icon"
          onClick={toggleMute}
          className="h-10 w-10 bg-foreground/80 hover:bg-foreground text-background rounded-full"
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </Button>

        <div
          className={cn(
            "flex items-center transition-all duration-300 overflow-hidden",
            showVolumeSlider ? "w-24 opacity-100" : "w-0 opacity-0",
          )}
        >
          <div className="bg-foreground/80 rounded-full px-3 py-2">
            <Slider
              value={[isMuted ? 0 : volume]}
              onValueChange={handleVolumeChange}
              max={100}
              step={1}
              className="w-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentNews = newsData[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? newsData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === newsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-2">
              Fique por dentro
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Notícias Recentes
            </h2>
          </div>
          <Button
            variant="outline"
            asChild
            className="min-h-[48px] self-start md:self-auto bg-transparent"
          >
            <Link href="/noticias">
              Ver Todas as Notícias
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-[45%] aspect-[9/16] lg:aspect-auto lg:min-h-[500px] xl:min-h-[600px] relative">
              <VideoPlayer
                videoUrl={currentNews.videoUrl}
                posterUrl={currentNews.posterUrl}
                isActive={true}
              />
            </div>

            <div className="lg:w-[55%] p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {currentNews.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight text-balance">
                {currentNews.title}
              </h3>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 text-pretty">
                {currentNews.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{currentNews.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  <span>{formatNumber(currentNews.views)} views</span>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors min-h-[44px]">
                  <Heart className="h-5 w-5" />
                  <span className="font-medium">
                    {formatNumber(currentNews.likes)}
                  </span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors min-h-[44px]">
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-medium">
                    {formatNumber(currentNews.comments)}
                  </span>
                </button>
              </div>

              <Button asChild className="self-start min-h-[48px]">
                <Link href={`/noticias/${currentNews.id}`}>
                  Ler Notícia Completa
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2 max-w-64 md:max-w-full overflow-hidden">
            {newsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300 min-w-11 flex items-center justify-center",
                )}
                aria-label={`Ir para notícia ${index + 1}`}
              >
                <span
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-muted-foreground",
                  )}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="h-12 w-12 rounded-full bg-transparent"
              aria-label="Notícia anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="h-12 w-12 rounded-full bg-transparent"
              aria-label="Próxima notícia"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-4 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">
            {currentIndex + 1}
          </span>
          <span> / {newsData.length}</span>
        </div>
      </div>
    </section>
  );
}
