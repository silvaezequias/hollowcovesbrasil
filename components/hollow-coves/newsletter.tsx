"use client";

import React from "react";

import { useState } from "react";
import Image from "next/image";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/acoustic-guitar.jpg"
          alt="Violão acústico"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-card mb-4 text-balance">
            Fique Por Dentro
          </h2>
          <p className="text-card/80 text-lg mb-8">
            Receba novidades sobre shows, lançamentos e conteúdos exclusivos da
            comunidade brasileira
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-primary/20 text-card">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span className="font-medium">
                Obrigado! Esse sistema ainda está em desenvolvimento.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 min-h-12 bg-card/10 border-card/30 text-card placeholder:text-card/50 focus:border-primary"
              />
              <Button type="submit" size="lg" className="min-h-12">
                Inscrever-se
              </Button>
            </form>
          )}

          <p className="text-card/60 text-xs mt-4">
            Prometemos não enviar spam. Apenas conteúdo relevante para fãs.
          </p>
        </div>
      </div>
    </section>
  );
}
