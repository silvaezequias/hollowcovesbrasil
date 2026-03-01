"use client";

import {
  ShieldCheck,
  Scale,
  AlertCircle,
  Users,
  Lock,
  MessageSquare,
  Globe,
  ShieldAlert,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout";

export default function TermsOfUse() {
  const lastUpdate = "1 de Março de 2026";

  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Título da Página */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <Scale className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl font-serif font-bold tracking-tight">
              Termos de Uso
            </h1>
            <p className="text-muted-foreground">
              Última atualização: {lastUpdate}
            </p>
          </div>

          <Card className="p-8 md:p-12 prose prose-invert max-w-none">
            <div className="mb-12 p-6 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex gap-4">
                <ShieldAlert className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Importante</h4>
                  <p className="text-sm text-muted-foreground">
                    <b className="text-foreground/70">
                      A plataforma é uma comunidade independente feita por fãs
                    </b>
                    , criada com o objetivo de reunir admiradores da banda
                    Hollow Coves no Brasil. Este site não possui vínculo oficial
                    com a banda, sua equipe ou gravadora. Conteúdos incorporados
                    de terceiros (como vídeos públicos do Instagram ou outras
                    redes) permanecem sob titularidade de seus respectivos
                    autores.
                  </p>
                </div>
              </div>
            </div>

            <section className="space-y-6">
              <div className="flex items-center gap-3 border-b border-border pb-2">
                <Globe className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-serif font-bold m-0">
                  1. Aceitação dos Termos
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e utilizar a plataforma da Comunidade Hollow Coves
                Brasil, você concorda em cumprir e estar vinculado a estes
                Termos de Uso. Se você não concordar com qualquer parte destes
                termos, não deverá utilizar nossos serviços.
              </p>

              <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                <Users className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-serif font-bold m-0">
                  2. Cadastro e Perfil
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                O acesso à plataforma é feito exclusivamente via autenticação
                Google. Ao se cadastrar, você se compromete a:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Fornecer informações precisas durante a configuração do seu
                  perfil (Nome, @ do Instagram e Imagem).
                </li>
                <li>Não se passar por outra pessoa ou entidade.</li>
                <li>Manter a segurança de sua conta vinculada ao Google.</li>
              </ul>

              <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-serif font-bold m-0">
                  3. Conteúdo do Usuário
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Nossa comunidade permite que usuários postem notícias,
                comentários e mídias. Ao publicar conteúdo, você garante que
                possui os direitos necessários e concede à plataforma uma
                licença gratuita para exibir tal conteúdo. É estritamente
                proibido:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Postar conteúdo ofensivo, discriminatório ou que incite o
                  ódio.
                </li>
                <li>Publicar informações falsas (Fake News).</li>
                <li>Violar direitos autorais de terceiros.</li>
              </ul>

              <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                <Lock className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-serif font-bold m-0">
                  4. Privacidade
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Sua privacidade é importante para nós. As informações coletadas
                (como seu e-mail do Google, nome e arroba do Instagram) são
                utilizadas apenas para o funcionamento da comunidade e
                identificação de suas postagens. Nunca venderemos seus dados a
                terceiros.
              </p>

              <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                <AlertCircle className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-serif font-bold m-0">
                  5. Limitação de Responsabilidade
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A plataforma não se responsabiliza por:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Interações entre usuários</li>
                <li>Acordos realizados fora do site</li>
                <li>
                  Problemas decorrentes de eventos ou encontros organizados por
                  membros
                </li>
              </ul>
              <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                <AlertCircle className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-serif font-bold m-0">
                  6. Moderação e Banimento
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A equipe de moderação reserva-se o direito de remover qualquer
                conteúdo ou suspender contas que violem estas diretrizes, sem
                aviso prévio, para garantir a segurança e harmonia da
                comunidade.
              </p>
            </section>

            <div className="mt-12 p-6 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex gap-4">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Dúvidas?</h4>
                  <p className="text-sm text-muted-foreground">
                    Se você tiver perguntas sobre nossos termos, entre em
                    contato através dos nossos canais oficiais de suporte.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <p className="text-sm text-muted-foreground italic">
              Este é um site de fãs e não possui vínculo comercial oficial com a
              banda Hollow Coves.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
