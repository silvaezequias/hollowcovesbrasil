"use client";

import { Layout } from "@/components/layout";
import { Card } from "@/components/ui/card";
import {
  Cookie,
  Info,
  Settings,
  ShieldCheck,
  MousePointer2,
  RefreshCw,
  ExternalLink,
  Lock,
} from "lucide-react";

export default function App() {
  const lastUpdate = "1 de Março de 2026";

  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Título da Página */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl font-serif font-bold tracking-tight">
              Política de Cookies
            </h1>
            <p className="text-muted-foreground">
              Entenda como utilizamos tecnologias de rastreamento para melhorar
              sua experiência. <br />
              Última atualização: {lastUpdate}
            </p>
          </div>

          <Card className="p-8 md:p-12 prose prose-invert max-w-none">
            <section className="space-y-10">
              {/* 1. O que são cookies */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2">
                  <Info className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    1. O que são Cookies?
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies são pequenos arquivos de texto enviados pelo site ao
                  seu navegador e armazenados no seu dispositivo (computador,
                  smartphone ou tablet). Eles servem para que o site "lembre" de
                  suas ações e preferências ao longo do tempo, como login,
                  idioma e outras definições de exibição.
                </p>
              </div>

              {/* 2. Como utilizamos */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <Settings className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    2. Como Utilizamos os Cookies
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos cookies para diversas finalidades essenciais e
                  funcionais:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                    <h4 className="font-bold text-sm mb-2 text-primary flex items-center gap-2">
                      <Lock className="w-4 h-4" /> Essenciais
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Necessários para o login via Google e para garantir que
                      você possa navegar com segurança em áreas restritas.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                    <h4 className="font-bold text-sm mb-2 text-primary flex items-center gap-2">
                      <MousePointer2 className="w-4 h-4" /> Funcionais
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Lembram suas preferências, como o tema visual e escolhas
                      em enquetes ou caravanas.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Cookies de Terceiros */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    3. Cookies de Terceiros
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Alguns serviços que utilizamos podem configurar cookies
                  próprios. O principal serviço é o{" "}
                  <strong>Google Authentication</strong>, que gerencia sua
                  sessão de forma segura. Também podemos utilizar o{" "}
                  <strong>Google Analytics</strong> para entender de forma
                  anônima como os fãs interagem com a plataforma.
                </p>
              </div>

              {/* 4. Gestão de Cookies */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    4. Como Gerenciar Cookies
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Você pode controlar e/ou excluir cookies conforme desejar
                  através das configurações do seu navegador. Você pode apagar
                  todos os cookies já instalados e configurar a maioria dos
                  navegadores para impedir sua instalação.
                </p>
                <p className="text-sm text-yellow-500/80 italic">
                  Atenção: Se você desativar cookies essenciais, o login na
                  comunidade e certas funcionalidades personalizadas podem não
                  funcionar corretamente.
                </p>
              </div>

              {/* 5. Atualizações */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <RefreshCw className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    5. Alterações na Política
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos atualizar esta Política de Cookies ocasionalmente para
                  refletir mudanças em nossas práticas ou por razões
                  operacionais e legais. Notificaremos os usuários sobre
                  mudanças significativas através de avisos na plataforma.
                </p>
              </div>
            </section>
          </Card>

          <div className="text-center pt-4">
            <p className="text-xs text-muted-foreground">
              Para mais informações sobre como tratamos seus dados pessoais,
              consulte nossa
              <button
                className="text-primary hover:underline ml-1"
                onClick={() =>
                  (window.location.href = "/legal/politica-de-privacidade")
                }
              >
                Política de Privacidade
              </button>
              .
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
