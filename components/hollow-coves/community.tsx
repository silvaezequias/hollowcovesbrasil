import { Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const socialLinks = [
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/hollowcoves",
    description: "Clipes e performances",
    followers: "624K+",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/hollowcoves",
    description: "Siga para fotos e stories",
    followers: "250K+",
  },
  {
    name: "Twitter / X",
    icon: Twitter,
    url: "https://twitter.com/hollowcoves",
    description: "Novidades e interações",
    followers: "~8K+",
  },

  {
    name: "Discord Brasil",
    icon: MessageCircle,
    url: "https://discord.gg/tJSnReg3gD",
    description: "Comunidade brasileira",
    followers: "Conheça nossos",
  },
];

const stats = [
  { value: "600M+", label: "Streams globais" },
  { value: "3M+", label: "Ouvintes mensais" },
  { value: "30K+", label: "Fãs no Brasil" },
  { value: "13", label: "Anos de carreira" },
];

export function Community() {
  return (
    <section id="comunidade" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Comunidade
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Faça Parte da Família
          </h2>
          <p className="text-muted-foreground text-lg">
            Conecte-se com outros fãs brasileiros e fique por dentro de tudo
            sobre Hollow Coves
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-lg bg-background border border-border"
            >
              <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {socialLinks.map((social) => (
            <Card
              key={social.name}
              className="bg-background border-border hover:border-primary/50 transition-colors group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <social.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {social.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {social.description}
                </p>
                <p className="text-xs text-primary font-medium mb-4">
                  {social.followers} seguidores
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full min-h-[44px] bg-transparent"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Seguir
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
