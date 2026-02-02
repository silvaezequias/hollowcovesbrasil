import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/hollow-coves/header";
import { Footer } from "@/components/hollow-coves/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Eye,
  Heart,
  MessageCircle,
  ArrowRight,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Notícias | Hollow Coves Brasil",
  description:
    "Todas as notícias, novidades e atualizações sobre a dupla australiana Hollow Coves.",
};

const allNews = [
  {
    id: 1,
    title: "Título da Notícia em Destaque",
    description:
      "Resumo curto da notícia ou atualização. Este texto serve apenas como placeholder para simular conteúdo.",
    image: "/images/hero-forest.jpg",
    date: "24 Jan 2026",
    tags: ["Categoria", "Destaque"],
    likes: 1243,
    comments: 89,
    views: 15420,
    featured: true,
  },
  {
    id: 2,
    title: "Atualização Importante da Comunidade",
    description:
      "Descrição genérica utilizada apenas para visualização do layout e testes de interface.",
    image: "/images/beach-sunset.jpg",
    date: "20 Jan 2026",
    tags: ["Atualização", "Comunidade"],
    likes: 2156,
    comments: 134,
    views: 28930,
    featured: true,
  },
  {
    id: 3,
    title: "Novo Conteúdo em Destaque",
    description:
      "Texto ilustrativo simulando uma publicação recente relacionada à banda ou à comunidade.",
    image: "/images/acoustic-guitar.jpg",
    date: "15 Jan 2026",
    tags: ["Conteúdo", "Destaque"],
    likes: 987,
    comments: 67,
    views: 12340,
    featured: false,
  },
  {
    id: 4,
    title: "Marco Importante Celebrado pelos Fãs",
    description:
      "Placeholder de texto representando uma conquista ou momento comemorado pela comunidade.",
    image: "/images/beach-sunset.jpg",
    date: "10 Jan 2026",
    tags: ["Marco", "Comunidade"],
    likes: 3421,
    comments: 245,
    views: 45670,
    featured: false,
  },
  {
    id: 5,
    title: "Rumor ou Discussão em Alta",
    description:
      "Descrição simulada para representar conversas, especulações ou interações entre fãs.",
    image: "/images/hero-forest.jpg",
    date: "5 Jan 2026",
    tags: ["Discussão", "Fãs"],
    likes: 1876,
    comments: 198,
    views: 21450,
    featured: false,
  },
  {
    id: 6,
    title: "Projeto Especial Gera Expectativa",
    description:
      "Texto fictício criado apenas para testar exibição de cards informativos no site.",
    image: "/images/album-wanderlust.jpg",
    date: "1 Jan 2026",
    tags: ["Projeto", "Expectativa"],
    likes: 1543,
    comments: 112,
    views: 18760,
    featured: false,
  },
  {
    id: 7,
    title: "Iniciativa da Comunidade em Destaque",
    description:
      "Resumo genérico simulando ações ou projetos criados por fãs e moderadores.",
    image: "/images/acoustic-guitar.jpg",
    date: "28 Dec 2025",
    tags: ["Comunidade", "Iniciativa"],
    likes: 765,
    comments: 43,
    views: 9870,
    featured: false,
  },
  {
    id: 8,
    title: "Conteúdo Compartilhado pelos Fãs",
    description:
      "Texto de exemplo representando publicações baseadas em engajamento da comunidade.",
    image: "/images/hero-forest.jpg",
    date: "22 Dec 2025",
    tags: ["Fãs", "Engajamento"],
    likes: 2098,
    comments: 156,
    views: 24560,
    featured: false,
  },
  {
    id: 9,
    title: "Momento de Destaque nas Plataformas",
    description:
      "Placeholder criado para simular reconhecimento ou visibilidade em plataformas digitais.",
    image: "/images/beach-sunset.jpg",
    date: "18 Dec 2025",
    tags: ["Plataformas", "Destaque"],
    likes: 1890,
    comments: 87,
    views: 16540,
    featured: false,
  },
  {
    id: 10,
    title: "Evento da Comunidade Anunciado",
    description:
      "Texto ilustrativo representando encontros, eventos ou ações organizadas por fãs.",
    image: "/images/hero-forest.jpg",
    date: "15 Dec 2025",
    tags: ["Evento", "Comunidade"],
    likes: 1234,
    comments: 178,
    views: 11230,
    featured: false,
  },
];

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(".0", "") + "K";
  }
  return num.toString();
}

const categories = [
  "Todas",
  "Turnê",
  "Lançamento",
  "Entrevista",
  "Spotify",
  "Brasil",
  "Comunidade",
];

export default function NoticiasPage() {
  const featuredNews = allNews.filter((n) => n.featured);
  const regularNews = allNews.filter((n) => !n.featured);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
              Blog
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Notícias
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Fique por dentro de todas as novidades, lançamentos e
              acontecimentos sobre o Hollow Coves.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar notícias..."
                className="pl-10 min-h-[48px]"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="min-h-[44px]"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
            Destaques
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredNews.map((news) => (
              <Link key={news.id} href={`/noticias/${news.id}`}>
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {news.tags.map((tag) => (
                          <Badge
                            key={tag}
                            className="bg-primary text-primary-foreground"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {news.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {formatNumber(news.likes)}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {formatNumber(news.comments)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
            Todas as Notícias
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((news) => (
              <Link key={news.id} href={`/noticias/${news.id}`}>
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {news.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/10 text-primary text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {news.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Eye className="h-3.5 w-3.5" />
                          {formatNumber(news.views)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="min-h-[48px] bg-transparent"
            >
              Carregar Mais Notícias
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
