"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Music,
  User,
  LogIn,
  ChevronDown,
  Users,
  ImageIcon,
  Newspaper,
  MapPin,
  Disc,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainNavLinks = [
  { href: "/#inicio", label: "Inicio" },
  // { href: "/noticias", label: "Noticias" }, finalizar sistema de notícias
  { href: "/come-to-brazil", label: "Come to Brazil" },
];

const bandaDropdownItems = [
  { href: "/#sobre", label: "Sobre", icon: Users },
  { href: "/discografia", label: "Discografia", icon: Disc },
  { href: "/#letras", label: "Letras", icon: FileText },
];

const comunidadeDropdownItems = [
  { href: "/membros", label: "Membros", icon: Users },
  { href: "/galeria", label: "Galeria", icon: ImageIcon },
  { href: "/enviar-foto", label: "Enviar Foto", icon: ImageIcon },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user: any = null; // TODO: Adicionar autenticação mais tarde
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Music className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              Hollow Coves <span className="text-primary">Brasil</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm font-medium outline-none">
                Banda
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-44">
                {bandaDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm font-medium outline-none">
                Comunidade
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-44">
                {comunidadeDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {/* {user ? (
              <Button asChild variant="ghost" size="sm">
                <Link href="/perfil" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {user.displayName}
                </Link>
              </Button>
            ) : (
              <Button asChild variant="ghost" size="sm">
                <Link href="/entrar" className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Entrar
                </Link>
              </Button>
            )} */}
            <Button asChild>
              <a
                href="https://open.spotify.com/artist/7IAFAOtc9kTYNTizhLSWM6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ouvir no Spotify
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-base font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="py-2 border-t border-border/50 mt-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground/70 font-medium">
                  Banda
                </span>
                <div className="flex flex-col gap-1 mt-2">
                  {bandaDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2 pl-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="py-2 border-t border-border/50">
                <span className="text-xs uppercase tracking-wider text-muted-foreground/70 font-medium">
                  Comunidade
                </span>
                <div className="flex flex-col gap-1 mt-2">
                  {comunidadeDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2 pl-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-border/50 pt-4 mt-2">
                {user ? (
                  <Link
                    href="/perfil"
                    className="text-primary font-medium py-2 flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    Meu Perfil
                  </Link>
                ) : (
                  <Link
                    href="/entrar"
                    className="text-primary font-medium py-2 flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LogIn className="w-4 h-4" />
                    Entrar / Registrar
                  </Link>
                )}
                <Button asChild className="mt-3 w-full">
                  <a
                    href="https://open.spotify.com/artist/7IAFAOtc9kTYNTizhLSWM6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ouvir no Spotify
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
