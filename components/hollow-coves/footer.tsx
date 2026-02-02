import Link from "next/link";
import { Music, Instagram, Twitter, Youtube, Heart } from "lucide-react";

const footerLinks = [
  {
    title: "Navegação",
    links: [
      { label: "Início", href: "/#inicio" },
      { label: "Notícias", href: "/noticias" },
      { label: "Sobre", href: "/#sobre" },
      { label: "Discografia", href: "/discografia" },
      { label: "Letras", href: "/#letras" },
      { label: "Comunidade", href: "/#comunidade" },
    ],
  },
  {
    title: "Plataformas",
    links: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/artist/7IAFAOtc9kTYNTizhLSWM6",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/pt/artist/hollow-coves/964310843",
      },
      {
        label: "YouTube Music",
        href: "https://music.youtube.com/channel/UCXXtcdTIu-usD7rrq1w0TAw",
      },
      { label: "Deezer", href: "https://www.deezer.com/br/artist/7492486" },
    ],
  },
  {
    title: "Oficial",
    links: [
      { label: "Site Oficial", href: "https://hollowcoves.com" },
      { label: "Loja Oficial", href: "https://hollowcoves.terrible.group/" },
      {
        label: "Shows & Turnês",
        href: "https://go.seated.com/notifications/welcome/1eb4bda9-f948-4d43-83d2-4ea248b12cdb",
      },
    ],
  },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/hollowcoves",
    label: "Instagram",
  },
  { icon: Twitter, href: "https://twitter.com/hollowcoves", label: "Twitter" },
  {
    icon: Youtube,
    href: "https://www.youtube.com/hollowcoves",
    label: "YouTube",
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Music className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-semibold">
                Hollow Coves <span className="text-primary">Brasil</span>
              </span>
            </Link>
            <p className="text-card/70 text-sm leading-relaxed mb-6 max-w-xs">
              Comunidade brasileira dedicada à dupla australiana Hollow Coves.
              Conectando fãs através da música folk que toca a alma.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-card/80 hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-card mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-card/70 hover:text-primary text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-card/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-card/60">
            <p>
              © {new Date().getFullYear()} Hollow Coves Brasil. Site não oficial
              feito por fãs.
            </p>
            <p className="flex items-center gap-1">
              Feito com <Heart className="h-4 w-4 text-primary fill-primary" />{" "}
              no Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
