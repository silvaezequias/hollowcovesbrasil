"use client";

import {
  ShieldCheck,
  Database,
  Scale,
  UserX,
  Lock,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout";
import { IconLink } from "@/components/ui/icon-link";

export default function PrivacyPolicy() {
  const lastUpdate = "3 de Março de 2026";

  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Título da Página */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl font-serif font-bold tracking-tight">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground">
              Sua segurança e privacidade são nossa prioridade. <br />
              Última atualização: {lastUpdate}
            </p>
          </div>

          <Card className="p-8 md:p-12 prose prose-invert max-w-none">
            <section className="space-y-10">
              {/* 1. Dados Coletados */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2">
                  <Database className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    1. Dados Coletados
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  A plataforma pode coletar as seguintes informações:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                    <h4 className="font-bold text-sm mb-2 text-primary uppercase tracking-wider">
                      Fornecidos por você
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-none p-0">
                      <li>• Nome e E-mail</li>
                      <li>• Cidade e Estado</li>
                      <li>• Conteúdos e notícias publicados</li>
                      <li>• @ do Instagram</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                    <h4 className="font-bold text-sm mb-2 text-primary uppercase tracking-wider">
                      Coletados Automaticamente
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-none p-0">
                      <li>• Endereço IP (ou hash do IP)</li>
                      <li>• Dados técnicos do navegador</li>
                      <li>• Data e horário de acesso</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Finalidade */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    2. Finalidade da Coleta
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Os dados são utilizados estritamente para garantir a melhor
                  experiência na comunidade:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>
                    Permitir o funcionamento de enquetes e prevenir votos
                    duplicados.
                  </li>
                  <li>
                    Viabilizar a participação em caravanas e eventos da
                    comunidade.
                  </li>
                  <li>
                    Exibir usuários no mapa de fãs (apenas quando autorizado
                    expressamente).
                  </li>
                  <li>
                    Garantir a segurança da plataforma contra acessos indevidos
                    e fraudes.
                  </li>
                </ul>
              </div>

              {/* 3. Base Legal */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <Scale className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    3. Base Legal
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  O tratamento de seus dados ocorre com respaldo na{" "}
                  <strong>LGPD (Lei Geral de Proteção de Dados)</strong>,
                  fundamentado em: execução de contrato/funcionalidades
                  solicitadas, legítimo interesse para segurança e consentimento
                  explícito do usuário.
                </p>
              </div>

              {/* 4. Compartilhamento */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <Lock className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    4. Compartilhamento de Dados
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A plataforma <strong>não comercializa</strong> seus dados
                  pessoais. Informações podem ser armazenadas em serviços de
                  infraestrutura (hospedagem, banco de dados ou autenticação
                  Google) que seguem padrões rigorosos de segurança.
                </p>
              </div>

              {/* 5. Direitos do Usuário */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <UserX className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    5. Direitos do Usuário (LGPD)
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Você possui total controle sobre seus dados e pode solicitar a
                  qualquer momento:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {["Acesso", "Correção", "Exclusão", "Revogação"].map(
                    (item) => (
                      <div
                        key={item}
                        className="p-2 border border-border rounded text-center text-xs font-medium bg-muted/20"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* 6. Armazenamento e Segurança */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    6. Armazenamento e Segurança
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Adotamos criptografia em trânsito (SSL), controle de acesso
                  rigoroso e armazenamento em servidores seguros para proteger
                  suas informações contra perda ou acesso não autorizado.
                </p>
              </div>

              {/* 7. Exclusão de Conta */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <UserX className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    7. Exclusão de Conta
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A exclusão da conta pode ser feita via painel de configurações
                  ou contato oficial. Ressaltamos que alguns dados podem ser
                  mantidos para cumprimento de obrigações legais ou garantia da
                  segurança da plataforma (como registros de auditoria).
                </p>
              </div>
              {/* 7.1. Prazo de Retenção de Dados */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <Database className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    7.1. Prazo de Retenção de Dados (Art. 15 e 16 da LGPD)
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Os dados pessoais serão armazenados apenas pelo tempo
                  necessário para cumprir as finalidades para as quais foram
                  coletados, incluindo:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Manutenção do funcionamento da plataforma.</li>
                  <li>Cumprimento de obrigações legais ou regulatórias.</li>
                  <li>
                    Exercício regular de direitos em processos judiciais,
                    administrativos ou arbitrais.
                  </li>
                  <li>Garantia da segurança e prevenção a fraudes.</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed">
                  Após a exclusão da conta pelo usuário, os dados pessoais serão
                  removidos, anonimizados ou bloqueados, conforme aplicável,
                  exceto quando sua retenção for necessária para:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Cumprimento de obrigação legal.</li>
                  <li>
                    Preservação de registros de acesso, conforme previsto no
                    Marco Civil da Internet.
                  </li>
                  <li>Resolução de disputas ou prevenção de fraudes.</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed">
                  Os registros de acesso poderão ser mantidos pelo prazo mínimo
                  de 6 (seis) meses, conforme previsto no{" "}
                  <IconLink
                    content="Art. 15 do Marco Civil da Internet (Lei nº 12.965/2014)"
                    type="external-link"
                    url={
                      "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
                    }
                  />{" "}
                  que obriga a guarda de registros de acesso (logs).
                </p>
              </div>
              {/* 8. Alterações */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-2 pt-4">
                  <RefreshCw className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-serif font-bold m-0">
                    8. Alterações na Política
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Esta política poderá ser atualizada periodicamente.
                  Recomendamos a visita regular a esta página para manter-se
                  informado sobre como protegemos seus dados.
                </p>
              </div>
            </section>

            <div className="mt-12 p-6 rounded-lg bg-primary/5 border border-primary/20 text-center">
              <p className="text-sm text-muted-foreground">
                Para exercer seus direitos ou tirar dúvidas,{" "}
                <IconLink
                  content="entre em contato"
                  url="/contato"
                  type="internal-link"
                  variant="primary"
                />{" "}
                conosco pelos canais oficiais da comunidade.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </Layout>
  );
}
