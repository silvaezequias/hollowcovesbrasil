"use client";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronLeft,
  Music,
  AlertTriangle,
  Info,
  ShieldCheck,
  ExternalLink,
  Users,
  Copyright,
  Mail,
} from "lucide-react";

export default function DisclaimerPage() {
  const lastUpdate = "1 de Março de 2026";

  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Título da Página */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <AlertTriangle className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl font-serif font-bold tracking-tight">
              Aviso de Não Vinculação
            </h1>
            <p className="text-muted-foreground">
              Esclarecimentos sobre a natureza independente desta comunidade.{" "}
              <br />
              Última atualização: {lastUpdate}
            </p>
          </div>

          <Card className="p-8 md:p-12 prose prose-invert max-w-none">
            <section className="space-y-10">
              {/* 1. Natureza da Comunidade */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    1. Natureza da Comunidade
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Esta plataforma é uma iniciativa independente criada e gerida
                  por fãs da banda <strong>Hollow Coves</strong>. O nosso
                  objetivo é puramente recreativo, informativo e cultural,
                  visando conectar entusiastas da música folk e da mensagem
                  transmitida pela banda.
                </p>
              </div>

              {/* 2. Isenção de Afiliação Oficial */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    2. Isenção de Afiliação
                  </h2>
                </div>
                <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-muted-foreground leading-relaxed m-0">
                    A <strong>Hollow Coves Brasil</strong> não possui qualquer
                    vínculo oficial, comercial, jurídico ou de parceria com:
                  </p>
                  <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground text-sm font-medium">
                    <li>A banda Hollow Coves ou seus integrantes.</li>
                    <li>
                      Nettwerk Music Group ou qualquer outra gravadora
                      associada.
                    </li>
                    <li>
                      Agentes, empresários ou promotores de eventos da banda.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3. Direitos Autorais e Marcas */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <Copyright className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    3. Propriedade Intelectual
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  O nome "Hollow Coves", logotipos, letras de músicas,
                  fotografias oficiais e artes relacionadas são marcas
                  registradas e propriedade intelectual de seus respectivos
                  detentores. O uso de tais materiais nesta plataforma é feito
                  sob o conceito de <em>Fair Use</em> (Uso Justo), com o
                  propósito de divulgação artística e comentário sem fins
                  lucrativos.
                </p>
              </div>

              {/* 4. Responsabilidade do Conteúdo */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <Info className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    4. Responsabilidade
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  As opiniões expressas nos fóruns, notícias postadas por
                  usuários e comentários são de inteira responsabilidade de seus
                  autores e não refletem necessariamente a visão da banda Hollow
                  Coves ou da administração desta comunidade.
                </p>
              </div>

              {/* 5. Contato para Remoção */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    5. Solicitações Legais
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Caso você seja um representante legal da banda ou detentor de
                  direitos autorais e deseje que algum conteúdo específico seja
                  removido ou creditado de forma diferente, por favor, entre em
                  contato através dos nossos canais oficiais de moderação.
                  Atenderemos prontamente a qualquer solicitação legítima.
                </p>
              </div>
            </section>
          </Card>

          <div className="text-center pt-4 flex flex-col items-center gap-4">
            <p className="text-xs text-muted-foreground max-w-md">
              Agradecemos à banda Hollow Coves por inspirar esta comunidade com
              sua música.
            </p>
            <Button
              variant="ghost"
              className="text-xs gap-2"
              onClick={() =>
                window.open("https://www.hollowcoves.com", "_blank")
              }
            >
              Visitar Site Oficial da Banda <ExternalLink className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
