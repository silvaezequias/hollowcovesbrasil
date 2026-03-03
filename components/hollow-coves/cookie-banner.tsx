"use client";

import { Cookie, ExternalLink, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { IconLink } from "../ui/icon-link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("hc-cookies-consent");

    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hc-cookies-consent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-100 p-4 md:p-6 animate-in fade-in slide-in-from-bottom-8 duration-500 ">
      <div className="max-w-5xl mx-auto h-full">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/90 backdrop-blur-md shadow-2xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary/10 rounded-full blur-3xl  pointer-events-none" />

          {/* Ícone e Texto */}
          <div className="flex items-start gap-4 flex-1">
            <div className="hidden sm:flex w-12 h-12 rounded-full bg-primary/10 items-center justify-center shrink-0">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-lg flex items-center gap-2">
                <span className="sm:hidden">
                  <Cookie className="w-5 h-5 text-primary" />
                </span>
                Valorizamos sua privacidade
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos cookies para melhorar sua experiência na nossa
                comunidade, personalizar conteúdos e analisar o tráfego do site.
                Ao clicar em "Aceitar tudo", você concorda com o uso de todas as
                tecnologias conforme descrito na nossa{" "}
                <IconLink
                  content="Política de Cookies"
                  type="external-link"
                  url="/legal/politica-de-cookies"
                  variant="primary"
                />
                .
              </p>
            </div>
          </div>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0 border-t md:border-t-0 border-border/50 pt-4 md:pt-0">
            <Button
              variant="ghost"
              onClick={handleDecline}
              className="w-full sm:w-auto"
            >
              Negar
            </Button>
            <Button
              variant="default"
              onClick={handleAccept}
              className="w-full sm:w-auto gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              Aceitar Tudo
            </Button>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition-colors md:hidden"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
