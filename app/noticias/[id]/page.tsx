import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/hollow-coves/header";
import { Footer } from "@/components/hollow-coves/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Eye,
  Heart,
  MessageCircle,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
} from "lucide-react";

const allNews = [
  {
    id: 1,
    title: "Título de notícia fictícia para visualização",
    description:
      "Este é um texto de exemplo utilizado apenas para preencher espaço e ajudar na visualização do layout da página durante a fase de desenvolvimento.",
    content: `
Este conteúdo é apenas ilustrativo e não representa uma notícia real. Ele foi inserido para simular a leitura de um artigo e testar espaçamentos, tipografia e hierarquia visual.

Os textos finais ainda serão definidos. Por enquanto, este bloco serve como referência visual para entender como parágrafos longos se comportam dentro do layout.

Todo o conteúdo desta página está em fase de construção e pode sofrer alterações a qualquer momento, incluindo títulos, textos e informações exibidas.
    `,
    image: "/images/hero-forest.jpg",
    date: "00 Jan 0000",
    tags: ["Placeholder", "Layout"],
    likes: 123,
    comments: 45,
    views: 6789,
    author: "Conteúdo em desenvolvimento",
  },
  {
    id: 2,
    title: "Exemplo de chamada para notícia futura",
    description:
      "Texto provisório criado exclusivamente para demonstrar como uma descrição curta será exibida no card de notícias.",
    content: `
Este é um texto temporário, utilizado como placeholder para simular uma matéria completa dentro da página de notícias.

Aqui é possível testar o espaçamento entre parágrafos, o tamanho da fonte e a legibilidade do conteúdo em diferentes tamanhos de tela.

A versão final deste conteúdo será substituída por uma notícia real assim que o desenvolvimento da página for concluído.
    `,
    image: "/images/beach-sunset.jpg",
    date: "00 Jan 0000",
    tags: ["Mockup", "Conteúdo"],
    likes: 456,
    comments: 32,
    views: 9876,
    author: "Equipe de desenvolvimento",
  },
  {
    id: 3,
    title: "Notícia de exemplo — conteúdo não definitivo",
    description:
      "Este texto não é real e serve apenas para preencher o espaço destinado a notícias futuras no site.",
    content: `
O objetivo deste texto é apenas auxiliar na visualização do design da página e no comportamento dos componentes visuais.

Nenhuma das informações apresentadas aqui deve ser considerada oficial. Trata-se apenas de um conteúdo genérico para testes.

Durante a fase final do projeto, este texto será removido e substituído por informações reais e revisadas.
    `,
    image: "/images/acoustic-guitar.jpg",
    date: "00 Jan 0000",
    tags: ["Teste", "UI"],
    likes: 321,
    comments: 21,
    views: 5432,
    author: "Placeholder",
  },
  {
    id: 4,
    title: "Título ilustrativo para card de notícia",
    description:
      "Descrição fictícia criada apenas para simular a exibição de uma notícia dentro do layout.",
    content: `
Este é mais um exemplo de conteúdo genérico utilizado durante o desenvolvimento da aplicação.

O foco aqui é avaliar como textos médios e longos se comportam dentro do componente de leitura de notícias.

Todo este material será substituído futuramente por conteúdo oficial.
    `,
    image: "/images/beach-sunset.jpg",
    date: "00 Jan 0000",
    tags: ["Design", "Prototipagem"],
    likes: 654,
    comments: 87,
    views: 11234,
    author: "Sistema",
  },
  {
    id: 5,
    title: "Conteúdo temporário para visualização",
    description:
      "Texto provisório que não representa uma notícia real e está sendo usado apenas como preenchimento.",
    content: `
Este texto existe apenas para fins de layout e testes visuais durante a criação da página.

Ele ajuda a entender como o conteúdo será distribuído, alinhado e apresentado ao usuário final.

Quando o site estiver pronto para produção, este conteúdo será removido.
    `,
    image: "/images/hero-forest.jpg",
    date: "00 Jan 0000",
    tags: ["Placeholder", "WIP"],
    likes: 789,
    comments: 54,
    views: 8765,
    author: "Em desenvolvimento",
  },
  {
    id: 6,
    title: "Notícia fictícia para teste de layout",
    description:
      "Este é um texto genérico criado apenas para preencher espaço durante o desenvolvimento do projeto.",
    content: `
Nada do que está escrito aqui é definitivo. Este conteúdo serve apenas como simulação.

O objetivo principal é testar componentes, responsividade e hierarquia visual.

O texto final será adicionado em uma etapa posterior do desenvolvimento.
    `,
    image: "/images/album-wanderlust.jpg",
    date: "00 Jan 0000",
    tags: ["Mock", "Estrutura"],
    likes: 432,
    comments: 29,
    views: 6543,
    author: "Layout preview",
  },
  {
    id: 7,
    title: "Exemplo de notícia em construção",
    description:
      "Texto de apoio criado somente para visualização e testes de interface.",
    content: `
Este conteúdo é um placeholder e não deve ser interpretado como informação real.

Ele foi inserido para ajudar a visualizar o comportamento do layout em diferentes cenários de texto.

Em breve, este espaço será ocupado por uma notícia oficial.
    `,
    image: "/images/acoustic-guitar.jpg",
    date: "00 Jan 0000",
    tags: ["UI Test", "Conteúdo"],
    likes: 210,
    comments: 18,
    views: 4321,
    author: "Preview",
  },
  {
    id: 8,
    title: "Título provisório para futura publicação",
    description:
      "Descrição genérica usada apenas para demonstrar o layout de uma notícia completa.",
    content: `
Este texto é apenas um exemplo de preenchimento e não possui valor informativo.

Ele ajuda a validar o design, a leitura e o fluxo visual da página de notícias.

Todo este conteúdo será revisado e substituído antes do lançamento oficial do site.
    `,
    image: "/images/hero-forest.jpg",
    date: "00 Jan 0000",
    tags: ["Placeholder", "Draft"],
    likes: 598,
    comments: 41,
    views: 7654,
    author: "Conteúdo fictício",
  },
];

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(".0", "") + "K";
  }
  return num.toString();
}

export async function generateStaticParams() {
  return allNews.map((news) => ({
    id: news.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = allNews.find((n) => n.id === Number.parseInt(id));

  return {
    title: news
      ? `${news.title} | Hollow Coves Brasil`
      : "Notícia | Hollow Coves Brasil",
    description: news?.description || "Notícias sobre o Hollow Coves",
  };
}

export default async function NoticiaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = allNews.find((n) => n.id === Number.parseInt(id));

  if (!news) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-serif text-3xl font-bold mb-4">
            Notícia não encontrada
          </h1>
          <Button asChild>
            <Link href="/noticias">Voltar para Notícias</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedNews = allNews.filter((n) => n.id !== news.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      
      <div className="relative h-[50vh] md:h-[60vh]">
        <Image
          src={news.image || "/placeholder.svg"}
          alt={news.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      
      <article className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="max-w-3xl mx-auto">
          
          <Button
            variant="outline"
            asChild
            className="mb-6 bg-background/80 backdrop-blur-sm min-h-[48px]"
          >
            <Link href="/noticias">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Notícias
            </Link>
          </Button>

          
          <Card className="overflow-hidden">
            <CardContent className="p-6 md:p-10">
              
              <div className="flex flex-wrap gap-2 mb-4">
                {news.tags.map((tag) => (
                  <Badge key={tag} className="bg-primary/10 text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>

              
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
                {news.title}
              </h1>

              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{news.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  <span>{formatNumber(news.views)} visualizações</span>
                </div>
                <span>Por {news.author}</span>
              </div>

              <Separator className="mb-8" />

              
              <div className="prose prose-lg max-w-none text-foreground">
                {news.content.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-6 text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <Separator className="my-8" />

              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    className="gap-2 min-h-12 bg-transparent"
                  >
                    <Heart className="h-5 w-5" />
                    <span>{formatNumber(news.likes)}</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 min-h-12 bg-transparent"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>{formatNumber(news.comments)}</span>
                  </Button>
                </div>

                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground mr-2">
                    Compartilhar:
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 bg-transparent"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 bg-transparent"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 bg-transparent"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>

      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Notícias Relacionadas
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedNews.map((item) => (
              <Link key={item.id} href={`/noticias/${item.id}`}>
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.tags.map((tag) => (
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
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{item.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
