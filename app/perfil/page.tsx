"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/hollow-coves/header";
import { Footer } from "@/components/hollow-coves/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  User,
  Loader2,
  Instagram,
  Edit2,
  Save,
  X,
  LogOut,
  Camera,
  ExternalLink,
  Calendar,
  Crown,
  Shield,
  Star,
  Plus,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const roleLabels: Record<
  string,
  { label: string; icon: typeof Crown; color: string }
> = {
  founder: { label: "Fundador(a)", icon: Crown, color: "text-yellow-500" },
  admin: { label: "Administrador(a)", icon: Shield, color: "text-red-500" },
  moderator: { label: "Moderador(a)", icon: Star, color: "text-primary" },
  member: { label: "Membro", icon: User, color: "text-muted-foreground" },
};

export default function ProfilePage() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [instagram, setInstagram] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [userGallery, setUserGallery] = useState<[]>([]);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />

            <CardContent className="relative pt-0 pb-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-12">
                
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-muted border-4 border-background overflow-hidden">
                    {false ? (
                      <></>
                    ) : (
                      // <Image
                      //   src={user.avatarUrl || "/placeholder.svg"}
                      //   alt={user.displayName}
                      //   width={96}
                      //   height={96}
                      //   className="w-full h-full object-cover"
                      // />
                      <div className="w-full h-full flex items-center justify-center bg-primary/10">
                        <User className="w-10 h-10 text-primary" />
                      </div>
                    )}
                  </div>
                </div>

                
                <div className="flex-1 text-center sm:text-left">
                  <h1 className="text-2xl font-serif font-bold">
                    {"user.displayName"}
                  </h1>
                  <a
                    href={`https://instagram.com/${"user.instagram"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-4 h-4" />@{"user.instagram"}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <div className="mt-1 flex items-center justify-center sm:justify-start gap-2">
                    <span className={`text-sm ${"roleInfo.color"}`}>
                      {"roleInfo.label"}
                    </span>
                    <span className="text-muted-foreground text-sm">•</span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Membro desde{" "}
                      {new Date("user.createdAt").toLocaleDateString("pt-BR", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                    className="bg-transparent"
                  >
                    <Edit2 className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-red-500"
                  >
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          
          {isEditing && (
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Editar Perfil</CardTitle>
                <CardDescription>Atualize suas informacoes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="displayName">Nome de exibicao</Label>
                  <Input
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    disabled={isSaving}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instagram">@ do Instagram</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      @
                    </span>
                    <Input
                      id="instagram"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      className="pl-8"
                      disabled={isSaving}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="avatarUrl">URL da foto de perfil</Label>
                  <Input
                    id="avatarUrl"
                    type="url"
                    placeholder="https://exemplo.com/sua-foto.jpg"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                    disabled={isSaving}
                  />
                  <p className="text-xs text-muted-foreground">
                    Cole a URL de uma imagem para usar como foto de perfil
                  </p>
                </div>

                {error && (
                  <p className="text-sm text-red-500 bg-red-500/10 px-3 py-2 rounded-md">
                    {error}
                  </p>
                )}

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    disabled={isSaving}
                    className="flex-1 bg-transparent"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancelar
                  </Button>
                  <Button
                    disabled={isSaving}
                    className="flex-1"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Salvando...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Salvar
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl font-serif flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" />
                  Minha Galeria
                </CardTitle>
                <CardDescription>
                  {userGallery.length}{" "}
                  {userGallery.length || 1 + 1 === 1 ? "foto enviada" : "fotos enviadas"}
                </CardDescription>
              </div>
              <Button asChild size="sm">
                <Link href="/enviar-foto" className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Enviar Foto
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              {userGallery.length > 0 ? (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                  {userGallery.slice(0, 12).map((post) => (
                    <a
                      key={'post.id'}
                      href={'post.instagramUrl'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aspect-square rounded-lg overflow-hidden bg-muted/50 relative group"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Instagram className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </a>
                  ))}

                  
                  <Link
                    href="/enviar-foto"
                    className="aspect-square rounded-lg overflow-hidden bg-muted/30 border-2 border-dashed border-muted-foreground/30 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors group"
                  >
                    <Plus className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                </div>
              ) : (
                <div className="py-8 text-center">
                  <Camera className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Voce ainda nao enviou nenhuma foto para a galeria
                  </p>
                  <Button asChild>
                    <Link
                      href="/enviar-foto"
                      className="flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Enviar Primeira Foto
                    </Link>
                  </Button>
                </div>
              )}

              {userGallery.length > 12 && (
                <div className="text-center mt-4">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="bg-transparent"
                  >
                    <Link href="/galeria">
                      Ver todas as {userGallery.length} fotos
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
