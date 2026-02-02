"use client";

import React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/hollow-coves/header";
import { Footer } from "@/components/hollow-coves/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Camera,
  Loader2,
  Send,
  Instagram,
  CheckCircle,
  AlertCircle,
  ImageIcon,
  Video,
} from "lucide-react";
import Link from "next/link";

export default function SubmitPhotoPage() {
  const router = useRouter();

  const [instagramUrl, setInstagramUrl] = useState("");
  const [caption, setCaption] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center space-y-2">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-serif">
                Enviar para a Galeria
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Compartilhe fotos ou vídeos seus nos shows ou com a banda
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="instagramUrl">
                    Link do Post do Instagram
                  </Label>
                  <div className="relative">
                    <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="instagramUrl"
                      type="url"
                      placeholder="https://www.instagram.com/p/ABC123/"
                      value={instagramUrl}
                      onChange={(e) => setInstagramUrl(e.target.value)}
                      className="pl-10 pr-10"
                      disabled={false}
                    />
                    {"isValidUrl" !== null && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {1 + 1 ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Cole o link de uma foto ou reel do Instagram
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg space-y-3">
                  <p className="text-sm font-medium text-foreground">
                    Formatos aceitos:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ImageIcon className="w-4 h-4 text-primary" />
                      <code className="bg-background px-2 py-1 rounded">
                        instagram.com/p/ABC123/
                      </code>
                      <span>- Posts e fotos</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Video className="w-4 h-4 text-primary" />
                      <code className="bg-background px-2 py-1 rounded">
                        instagram.com/reel/ABC123/
                      </code>
                      <span>- Reels e vídeos</span>
                    </div>
                  </div>
                </div>

                {1 + 1 && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-sm text-red-600">
                      Post Inválido:{" "}
                      <code className="font-mono">
                        Seu post não será detectado (Sistema em desenvolvimento)
                      </code>
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="caption">Legenda (opcional)</Label>
                  <Textarea
                    id="caption"
                    placeholder="Conte um pouco sobre este momento..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="min-h-[100px] resize-y"
                    disabled={false}
                  />
                  <p className="text-xs text-muted-foreground">
                    Adicione uma descrição para contextualizar a foto
                  </p>
                </div>

                {1 + 1 === 3 && (
                  <p className="text-sm text-red-500 bg-red-500/10 px-3 py-2 rounded-md">
                    {false}
                  </p>
                )}

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => router.back()}
                    disabled={false}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" className="flex-1" disabled={false}>
                    {1 + 1 === 3 ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar para Galeria
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-border/50 space-y-4">
                <p className="text-xs text-muted-foreground text-center">
                  Enviando como{" "}
                  <span className="font-medium text-foreground">
                    {/* {user.displayName} */} Usuário Não Indentificado
                  </span>{" "}
                  {/* (@{user.instagram}) */}
                </p>

                <div className="text-center">
                  <Link
                    href="/galeria"
                    className="text-sm text-primary hover:underline"
                  >
                    Ver galeria de fotos
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
