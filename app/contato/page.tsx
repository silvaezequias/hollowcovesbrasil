"use client";

import { useState } from "react";
import {
  ChevronLeft,
  Music,
  Mail,
  Instagram,
  MessageCircle,
  ExternalLink,
  Copy,
  Check,
  Send,
  Users,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "contatohcbr@gmail.com";
  const instagram = "@hollowcovesbrasil";
  const whatsappLink = "https://chat.whatsapp.com/C57qaICOABA3VDta4iIGfv"; // Substituir pelo link real

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Título da Página */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <Send className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl font-serif font-bold tracking-tight">
              Contato
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Dúvidas, parcerias ou apenas quer bater um papo? Escolha o melhor
              canal para falar com a nossa comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card Instagram */}
            <Card className="p-6 flex flex-col items-center text-center space-y-4 hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-lg">Instagram</h3>
                <p className="text-sm text-muted-foreground">
                  Acompanhe nossas novidades e fotos.
                </p>
              </div>

              <img src={"/images/hollowcovesbrasil-instagram-qr.png"} />
              <p
                className="text-sm font-medium truncate w-full text-primary"
                title={instagram}
              >
                {instagram}
              </p>
              <Button
                variant="outline"
                className="w-full gap-2"
                onClick={() =>
                  window.open(
                    `https://instagram.com/hollowcovesbrasil`,
                    "_blank",
                  )
                }
              >
                Seguir no Instagram
                <ExternalLink className="w-3 h-3" />
              </Button>
            </Card>

            {/* Card WhatsApp (Destaque) */}
            <Card className="p-6 flex flex-col items-center text-center space-y-4 border-primary/30 bg-primary/5 hover:border-primary/60 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <span className="bg-primary text-[10px] text-primary-foreground px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                  Comunidade
                </span>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-lg">Grupo de Fãs</h3>
                <p className="text-sm text-muted-foreground">
                  Entre no nosso grupo oficial no WhatsApp.
                </p>
              </div>
              <img src={"/images/hollowcovesbrasil-whatsapp-qr.png"} />

              <div className="flex items-center gap-2 text-xs text-muted-foreground bg-background/50 px-3 py-1 rounded-full border border-border">
                <Users className="w-3 h-3" />
                <span>+80 membros ativos</span>
              </div>
              <Button
                className="w-full gap-2 bg-primary hover:bg-primary/50 text-white"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Entrar no Grupo
                <ExternalLink className="w-3 h-3" />
              </Button>
            </Card>

            {/* Card E-mail */}
            <Card className="p-6 flex flex-col items-center text-center space-y-4 hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-lg">E-mail</h3>
                <p className="text-sm text-muted-foreground">
                  Para assuntos formais, parcerias ou denúncias/reports.
                </p>
              </div>
              <img src={"/images/hollowcovesbrasil-email-qr.png"} />
              <p
                className="text-sm font-medium truncate w-full text-primary"
                title={email}
              >
                {email}
              </p>
              <div className="flex w-full gap-2">
                <Button
                  variant="outline"
                  className="flex-1 h-10 px-0"
                  onClick={copyEmail}
                  title="Copiar e-mail"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
                <Button
                  className="flex-[2] h-10"
                  onClick={() => (window.location.href = `mailto:${email}`)}
                >
                  Enviar E-mail
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  );
}
