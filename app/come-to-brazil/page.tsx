"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/hollow-coves/header";
import { Footer } from "@/components/hollow-coves/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Users,
  Music,
  Heart,
  ArrowLeft,
  Play,
  Quote,
} from "lucide-react";

const tourDates = [
  {
    city: "Curitiba",
    venue: "Tork n’Roll",
    date: "19 de Janeiro, 2026",
    status: "confirmado",
  },
  {
    city: "Belo Horizonte",
    venue: "Grande Theatro Unimed",
    date: "21 de Janeiro, 2026",
    status: "confirmado",
  },
  {
    city: "Rio de Janeiro",
    venue: "Sacadura 154",
    date: "23 de Janeiro, 2026",
    status: "confirmado",
  },
  {
    city: "São Paulo",
    venue: "Terra SP",
    date: "24 de Janeiro, 2026",
    status: "confirmado",
  },
];

const stats = [
  { label: "Cidades", value: "4" },
  { label: "Shows", value: "4" },
  { label: "Fãs presentes", value: "~10.000" },
  { label: "Datas inesquecíveis", value: "4" },
];

export default function ComeToBrazilPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hc-brazil-flag.png"
            alt="Hollow Coves no Brasil"
            fill
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 bg-linear-to-r from-green-900/20 via-transparent to-yellow-900/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-green-600/80 text-foreground border-green-500/50 hover:bg-green-600/90">
            Turnê Brasil 2026
          </Badge>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
            <span className="text-green-400">Come</span> to{" "}
            <span className="text-yellow-400">Brazil</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Depois de anos de espera, o sonho se tornou realidade. A história da
            primeira turnê do Hollow Coves em terras brasileiras.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-24">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 py-4 min-w-35">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                4{" "}
              </div>
              <div className="text-sm text-muted-foreground">
                Cidades & Shows
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 py-4 min-w-35">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                ~10.000
              </div>
              <div className="text-sm text-muted-foreground">Fãs presentes</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 py-4 min-w-35">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                +40.000{" "}
              </div>
              <div className="text-sm text-muted-foreground">
                Imagens capturadas
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-primary/70 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-1 h-20 bg-linear-to-b from-green-500 to-yellow-500 rounded-full" />
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  O Sonho Realizado
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Por anos, fãs brasileiros comentaram "Come to Brazil" em cada
                  post, cada vídeo, cada story do Hollow Coves. E finalmente, em
                  janeiro de 2026, Matt e Ryan cruzaram o oceano para conhecer
                  uma das comunidades de fãs mais apaixonadas do mundo.
                </p>
              </div>
            </div>

            <p className="text-foreground/80 leading-relaxed mb-6">
              A turnê trouxe a dupla australiana para quatro cidades
              brasileiras, em uma série de shows intimistas que ficaram marcados
              na memória de todos que estiveram presentes. Cada apresentação foi
              única, carregada de emoção e da energia incomparável do público
              brasileiro.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              O que era para ser apenas uma sequência de shows se transformou em
              uma celebração da música, da conexão entre artistas e fãs, e da
              força de uma comunidade que nunca desistiu de sonhar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
              <Image
                src="/images/brazil-tour-sp.jpg"
                alt="Show em São Paulo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-green-600/90 text-foreground border-green-500/50">
                  <MapPin className="h-3 w-3 mr-1" />
                  São Paulo
                </Badge>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    24 de Janeiro, 2026
                  </div>
                  <div className="font-semibold text-foreground">
                    Terra SP - São Paulo
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">
                O Primeiro Acorde em Solo Paulista
              </h3>

              <p className="text-foreground/80 leading-relaxed mb-4">
                São Paulo foi o palco do encerramento da primeira turnê do
                Hollow Coves no Brasil. No Terra SP, um público completamente
                envolvido acompanhou cada acorde da última noite da banda em
                solo brasileiro.
              </p>

              <p className="text-foreground/80 leading-relaxed mb-6">
                Quando as primeiras notas de <b>The Woods</b> ecoaram pelo
                espaço, a conexão entre banda e plateia era evidente. Ao longo
                do show, Matt e Ryan demonstraram visível emoção, pausando entre
                músicas para agradecer e absorver a energia do público, que
                cantava em uníssono do início ao fim.
              </p>

              <Card className="bg-card/50 border-green-500/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Quote className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                    <div>
                      <p className="text-foreground/90 italic mb-2">
                        "Nunca imaginamos que existia tanto amor por nós do
                        outro lado do mundo. Vocês fizeram esse show ser o mais
                        especial de nossas vidas."
                      </p>
                      <p className="text-sm text-muted-foreground">
                        — Matt Carins, após o show de SP
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-yellow-600/80 text-foreground border-yellow-500/50">
                <Play className="h-3 w-3 mr-1" />
                Vídeo por Fã
              </Badge>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Cobertura do Show - Belo Horizonte
              </h3>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50">
              <iframe
                src="https://www.youtube.com/embed/yX4ABMlpVMI"
                title="Meu primeiro show da vida!!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            <p className="text-center text-muted-foreground mt-4 text-sm">
              O momento em que milhares de vozes cantaram juntas ao Hollow Coves
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-600/20 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    23 de Janeiro, 2026
                  </div>
                  <div className="font-semibold text-foreground">
                    Sacadura 154 - Rio de Janeiro
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">
                A Magia do Rio sob as Estrelas
              </h3>

              <p className="text-foreground/80 leading-relaxed mb-4">
                O Rio de Janeiro, com sua atmosfera única e energia vibrante,
                proporcionou uma das noites mais mágicas da sequência de shows.
                O clima carioca e centenas de vozes criaram uma atmosfera
                impossível de descrever.
              </p>

              <p className="text-foreground/80 leading-relaxed mb-6">
                Durante "The Woods", lanternas de celulares se acenderam
                espontaneamente, transformando a plateia em um mar de estrelas.
                Ryan, ao violão, pausou para contemplar a cena. Isso é real?,
                perguntou ele, genuinamente surpreso.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge
                  variant="outline"
                  className="border-yellow-500/50 text-yellow-400"
                >
                  <Users className="h-3 w-3 mr-1" />
                  Casa cheia
                </Badge>
                <Badge
                  variant="outline"
                  className="border-yellow-500/50 text-yellow-400"
                >
                  <Music className="h-3 w-3 mr-1" />
                  Todas as vozes unidas
                </Badge>
                <Badge
                  variant="outline"
                  className="border-yellow-500/50 text-yellow-400"
                >
                  <Heart className="h-3 w-3 mr-1" />
                  Muito amor envolvido
                </Badge>
              </div>
            </div>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/brazil-tour-rj.jpg"
                alt="Show no Rio de Janeiro"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-yellow-600/90 text-foreground border-yellow-500/50">
                  <MapPin className="h-3 w-3 mr-1" />
                  Rio de Janeiro
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-600/80 text-foreground border-green-500/50">
              Bastidores
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Além do Palco
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Os shows foram apenas parte da experiência. Foram também momentos
              de conexão, presentes, lágrimas de alegria e lembranças que
              ficarão para sempre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src="/images/brazil-tour-backstage.jpg"
                alt="Bastidores dos shows no Brasil"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="font-serif text-xl font-bold text-foreground mb-2">
                  Nos Bastidores
                </h4>
                <p className="text-foreground/80 text-sm">
                  Matt e Ryan receberam cartas, desenhos e presentes de fãs
                  brasileiros. Cada gesto de carinho fez parte da experiência
                  vivida durante a passagem pelo país.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src="/images/brazil-tour-fans.jpg"
                alt="Encontro com fãs no Brasil"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="font-serif text-xl font-bold text-foreground mb-2">
                  Encontros com Fãs
                </h4>
                <p className="text-foreground/80 text-sm">
                  Conversas, fotos e trocas sinceras que mostraram o quanto a
                  conexão entre a dupla e o público brasileiro vai além do
                  palco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-green-600/80 text-foreground border-green-500/50">
                <Play className="h-3 w-3 mr-1" />
                Documentário
              </Badge>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Tour pelo "Brazil" - Por trás das Câmeras
              </h3>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50">
              <iframe
                src="https://www.youtube.com/embed/SICWJl2rwQE"
                title="Rafael Wiit & Hollow Coves - Brazil Tour Diary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            <p className="text-center text-muted-foreground mt-4 text-sm">
              Um registro em vídeo dos bastidores da passagem do Hollow Coves
              pelo Brasil
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              As Datas da Turnê
            </h2>
            <p className="text-muted-foreground">
              Todos os shows esgotaram em tempo recorde
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {tourDates.map((show, index) => (
              <Card
                key={show.city}
                className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors overflow-hidden"
              >
                <div
                  className={`h-1 ${index % 2 === 0 ? "bg-green-500" : "bg-yellow-500"}`}
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      className="text-xs border-muted-foreground/30"
                    >
                      {show.status}
                    </Badge>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-foreground mb-1">
                    {show.city}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {show.venue}
                  </p>
                  <p className="text-sm text-primary">{show.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-green-500 to-yellow-500 flex items-center justify-center mx-auto mb-8">
              <Heart className="h-8 w-8 text-foreground" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Até a Próxima, Brasil
            </h2>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              A passagem pelo Brasil em 2026 foi apenas o começo. Matt e Ryan
              deixaram claro o quanto essa experiência foi especial, e sabemos
              que o amor do Brasil por eles só cresce a cada dia. Continuaremos
              aqui, esperando, cantando, e provando que vale a pena atravessar o
              mundo para encontrar uma comunidade tão especial.
            </p>

            <Card className="bg-linear-to-r from-green-900/30 via-card/50 to-yellow-900/30 border-0">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
                <p className="text-xl text-foreground italic mb-4">
                  "
                  <i>
                    {" "}
                    Vocês nos mostraram o que significa realmente se conectar
                    com a música e com as pessoas.
                  </i>{" "}
                  We'll be right back."
                </p>
                <p className="text-muted-foreground">
                  — Ryan Henderson & Matt Carins
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-green-600 hover:bg-green-700 text-foreground"
              >
                <a
                  href="https://open.spotify.com/artist/7IAFAOtc9kTYNTizhLSWM6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Music className="h-5 w-5" />
                  Ouvir Hollow Coves
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 bg-transparent"
              >
                <Link href="/">
                  <ArrowLeft className="h-5 w-5" />
                  Voltar ao Início
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
