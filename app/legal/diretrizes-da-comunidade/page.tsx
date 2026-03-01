"use client";

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronLeft,
  Music,
  Users,
  Heart,
  ShieldAlert,
  MessageSquare,
  Info,
  Flame,
  Ban,
  CheckCircle2,
  Handshake,
} from "lucide-react";

export default function CommunityGuidelines() {
  const lastUpdate = "1 de Março de 2026";

  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Título da Página */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl font-serif font-bold tracking-tight">
              Diretrizes da Comunidade
            </h1>
            <p className="text-muted-foreground">
              Como construímos um lugar incrível para todos os fãs. <br />
              Última atualização: {lastUpdate}
            </p>
          </div>

          <Card className="p-8 md:p-12 prose prose-invert max-w-none">
            <section className="space-y-10">
              {/* Introdução */}
              <div className="text-center pb-6 border-b border-border">
                <p className="text-lg text-muted-foreground italic">
                  "Nossa missão é celebrar a música e a mensagem do Hollow Coves
                  em um ambiente de paz, respeito e conexão."
                </p>
              </div>

              {/* 1. Respeito e Gentileza */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    1. Respeito e Gentileza
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Seja gentil com todos os membros. Discordâncias são naturais,
                  mas ataques pessoais, bullying, assédio ou discursos de ódio
                  baseados em raça, religião, orientação sexual, gênero ou
                  identidade não serão tolerados.
                </p>
              </div>

              {/* 2. Conteúdo Relevante */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    2. Mantenha o Foco
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Este espaço é dedicado ao Hollow Coves e temas relacionados
                  (folk music, natureza, viagens, conexões humanas). Evite
                  postagens off-topic excessivas ou discussões políticas e
                  religiosas que não tenham relação com a comunidade.
                </p>
              </div>

              {/* 3. Veracidade e Notícias */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <Info className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    3. Veracidade das Informações
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ao postar notícias:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Sempre verifique a fonte antes de publicar.</li>
                  <li>Não espalhe rumores como se fossem fatos confirmados.</li>
                  <li>Evite "clickbait" ou títulos sensacionalistas.</li>
                </ul>
              </div>

              {/* 4. Sem Spam ou Promoção */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <Flame className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    4. Spam e Autopromoção
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Não utilize a plataforma para vender produtos, serviços ou
                  fazer propaganda de outros sites sem autorização. Links para
                  conteúdos próprios (como covers ou artes) são permitidos,
                  desde que feitos com moderação.
                </p>
              </div>

              {/* 5. Proteção e Segurança */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <ShieldAlert className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    5. Segurança de Dados
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Não compartilhe dados pessoais de outros membros (Doxxing).
                  Respeite a privacidade de todos, inclusive dos integrantes da
                  banda.
                </p>
              </div>

              {/* 6. Moderação */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <Ban className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    6. Consequências
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A equipe de moderação age para manter a ordem. Violações das
                  diretrizes podem resultar em:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded border border-border bg-muted/20 text-center text-sm">
                    Aviso formal
                  </div>
                  <div className="p-3 rounded border border-border bg-muted/20 text-center text-sm">
                    Remoção de conteúdo
                  </div>
                  <div className="p-3 rounded border border-border bg-muted/20 text-center text-sm">
                    Banimento da conta
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-12 p-6 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex gap-4">
                <Handshake className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">
                    Nos ajude a manter a comunidade!
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Viu algo que viola nossas regras? Utilize o botão de
                    denúncia ou entre em contato com um moderador. Juntos
                    fazemos um lugar melhor.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button
              className="gap-2"
              onClick={() => (window.location.href = "/")}
            >
              <CheckCircle2 className="w-4 h-4" />
              Eu li e concordo com as diretrizes
            </Button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
