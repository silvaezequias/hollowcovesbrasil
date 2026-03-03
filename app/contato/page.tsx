"use client";

import { HTMLAttributeAnchorTarget, JSX, useState } from "react";
import {
  Mail,
  ExternalLink,
  AtSign,
  Users,
  Copy,
  Check,
  LucideMessageCircleReply,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout";

const email = "contatohcbr@gmail.com";
const instagram = "hollowcovesbrasil";

const whatsappLink = "https://chat.whatsapp.com/C57qaICOABA3VDta4iIGfv";
const instagramLink = `https://instagram.com/${instagram}`;
const emailLink = `mailto:${email}`;

export default function ContactPage() {
  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:py-20">
        <div className="max-w-6xl mx-auto space-y-12  flex flex-col items-center">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-serif font-bold tracking-tight">
              Contato
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Dúvidas, parcerias ou apenas quer bater um papo? Escolha o melhor
              canal para falar com a nossa comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-20 items-stretch lg:items-end gap-6 order">
            <ContactCard
              type="whatsapp"
              variant="featured"
              classNames="md:col-span-20 lg:col-span-10 lg:order-2"
            />
            <ContactCard
              type="instagram"
              variant="primary"
              classNames="md:col-span-10 lg:col-span-5 lg:order-1"
            />
            <ContactCard
              type="email"
              variant="primary"
              target="_self"
              actionButton="copy"
              classNames="md:col-span-10 lg:col-span-5 lg:order-3"
              copyText={email}
            />
          </div>
          <Divider />
          <DirectMessageCard />
          <WarningBanner />
        </div>
      </main>
    </Layout>
  );
}

type BaseProps = {
  type: "instagram" | "whatsapp" | "email";
  variant: "primary" | "featured";
  target?: HTMLAttributeAnchorTarget;
  classNames?: string;
};

type RedirectAction = {
  actionButton?: "redirect";
};

type CopyAction = {
  actionButton: "copy";
  copyText: string;
};

type ContactCardProps = BaseProps & (RedirectAction | CopyAction);
const ContactCard = (props: ContactCardProps) => {
  const { type, variant, target, actionButton } = props;
  const [copied, setCopied] = useState(false);

  const contactChannels: Record<
    ContactCardProps["type"],
    {
      title: string;
      description: string;
      qrCodeUrl: string;
      footer: React.ReactNode;
      featuredText?: string;
      buttonUrl: string;
      buttonText: string;
    }
  > = {
    instagram: {
      title: "Instagram",
      description: "Acompanhe nossas novidades, fotos, vídeos e colabs.",
      footer: <Badge content="hollowcovesbrasil" icon={AtSign} />,
      qrCodeUrl: "/images/hollowcovesbrasil-instagram-qr.png",
      featuredText: "Conteúdos",
      buttonUrl: instagramLink,
      buttonText: "Seguir no instagram",
    },
    whatsapp: {
      title: "Grupo de Fãs",
      description: "Entre no nosso grupo oficial do WhatsApp",
      footer: <Badge content="+80 membros ativos" icon={Users} />,
      qrCodeUrl: "/images/hollowcovesbrasil-whatsapp-qr.png",
      buttonUrl: whatsappLink,
      featuredText: "Comunidade",
      buttonText: "Entrar no Grupo",
    },
    email: {
      title: "E-mail",
      description: "Para assuntos formais, parcerias ou denúncias/reports",
      footer: <Badge content={email} icon={Mail} />,
      qrCodeUrl: "/images/hollowcovesbrasil-email-qr.png",
      buttonUrl: emailLink,
      buttonText: "Copiar E-mail",
      featuredText: "CONTATO DIRETO",
    },
  };

  const {
    title,
    description,
    footer,
    qrCodeUrl,
    buttonUrl,
    buttonText,
    featuredText,
  } = contactChannels[type];

  const isFeatured = variant === "featured";

  const handleCopyText = () => {
    if (actionButton === "copy") {
      navigator.clipboard.writeText(props.copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const FeaturedBadge = () => {
    return (
      isFeatured && (
        <div className="absolute top-0 right-0 p-2">
          <span className="bg-primary text-[10px] text-primary-foreground px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">
            {featuredText}
          </span>
        </div>
      )
    );
  };

  const cardStyle = {
    featured: `relative hover:border-primary/70 bg-transparent bg-linear-to-b from-card/60 via-card/70 to-card/80`,
    primary: "hover:border-primary/50",
  }[variant];

  const buttonStyle = copied
    ? "bg-transparent text-primary border border-primary hover:bg-transparent "
    : "bg-primary hover:bg-primary/50 text-white";

  const frameStyle = {
    featured: `
      bg-linear-to-b
      from-primary/60
      via-primary/30
      to-transparent
      p-1
    `,
    primary: "border-primary/20",
  }[variant];

  return (
    <div
      className={`
        relative
        group
        rounded-md
        ${props.classNames}
        ${frameStyle}
      `}
    >
      <Card
        className={`p-6 flex flex-col items-center text-center transition-colors  overflow-hidden border border-transparent ${cardStyle}`}
      >
        {<FeaturedBadge />}

        <div className="space-y-1">
          <h3 className="font-serif font-bold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <img
          src={qrCodeUrl}
          alt={`Imagem de um código QR para acessar nosso ${title}. ${description}`}
        />

        {footer}
        <Button
          className={`w-full gap-2 cursor-pointer ${buttonStyle} duration-300`}
          onClick={() => {
            if (actionButton !== "copy") return window.open(buttonUrl, target);

            handleCopyText();
          }}
        >
          {copied ? "Copiado" : buttonText}

          {actionButton === "copy" ? (
            copied ? (
              <Check className="w-3 h-3" />
            ) : (
              <Copy className="w-3 h-3" />
            )
          ) : (
            <ExternalLink className="w-3 h-3" />
          )}
        </Button>
      </Card>
    </div>
  );
};

type BadgeProps = {
  icon: JSX.ElementType;
  content: string;
};

const Badge = ({ icon: Icon, content }: BadgeProps) => {
  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-background/50 px-3 py-1 rounded-full border">
      {<Icon className="w-3 h-3" />}
      <span>{content}</span>
    </div>
  );
};

const DirectMessageCard = () => {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const subject = encodeURIComponent(
      `Nova mensagem de ${name || "Visitante"}`,
    );

    const body = encodeURIComponent(
      `Nome: ${name}
Email: ${senderEmail}

Mensagem:
${message}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const isDisabled = !message || !name || !senderEmail;

  return (
    <div className="relative rounded-md p-2 w-[90%] md:w-[70%]">
      <div className="space-y-2 text-center mb-6">
        <h3 className="text-xl font-serif font-bold">
          Prefere enviar uma mensagem direta?
        </h3>
        <p className="text-sm text-foreground/40 flex gap-2 w-full justify-center">
          <LucideMessageCircleReply size={20} />
          Responderemos o mais rápido possível
        </p>
      </div>

      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-background border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary w-full"
        />

        <input
          type="email"
          placeholder="E-mail"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          className="bg-background border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary w-full"
        />

        <textarea
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="bg-background border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary resize-none w-full"
        />
        <div className="w-full flex justify-center">
          <Button
            onClick={handleSend}
            className="bg-primary hover:bg-primary/80 w-fit px-20 text-card font-serif font-bold"
            disabled={isDisabled}
          >
            {isDisabled ? "Preencha Todos os Campos" : "Enviar Mensagem"}
          </Button>
        </div>
      </div>
    </div>
  );
};

const Divider = () => {
  return (
    <div className="flex items-center gap-4 w-[90%] md:w-[70%]">
      <div className="flex-1 h-px bg-[repeating-linear-gradient(to_right,var(--color-border)_0px,var(--color-border)_15px,transparent_15px,transparent_24px)] opacity-80" />
      <span className="tracking-widest text-foreground font-serif font-bold text-2xl">
        Ou
      </span>
      <div className="flex-1 h-px bg-[repeating-linear-gradient(to_right,var(--color-border)_0px,var(--color-border)_15px,transparent_15px,transparent_24px)] opacity-80" />
    </div>
  );
};

const WarningBanner = () => {
  return (
    <div
      className="
      rounded-md
      bg-linear-to-b
      from-primary/10
      to-transparent
      p-5
    "
    >
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <div className="mt-0.5">
          <ShieldAlert className="w-5 h-5 text-primary" />
        </div>

        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground text-center sm:text-start mb-2 sm:mb-0">
            Sua mensagem será tratada com cuidado e sigilo.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed text-center sm:text-start">
            Não é necessário enviar várias vezes. Assim que possível,
            retornaremos seu contato.
          </p>
        </div>
      </div>
    </div>
  );
};
