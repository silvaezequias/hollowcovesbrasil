import {
  ArrowRight,
  ExternalLink,
  Instagram,
  ListMusic,
  Music,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { AiOutlineSpotify } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

type LinkTypes =
  | "instagram"
  | "music"
  | "spotify"
  | "music-album"
  | "external-link"
  | "internal-link";

type LinkVariants = "primary" | "normal";
type IconPosition = "right" | "left";

type IconLinkProps = {
  url: string;
  type: LinkTypes;
  content: string;
  variant?: LinkVariants;
  iconPosition?: IconPosition;
};

export const IconLink = ({
  type,
  url,
  variant = "normal",
  content,
  iconPosition = "left",
}: IconLinkProps) => {
  const icons: Record<LinkTypes, React.ReactNode> = {
    "internal-link": <ArrowRight className="h-4 w-4 inline mr-1 self-center" />,
    "external-link": (
      <ExternalLink className="h-4 w-4 inline mr-1 self-center" />
    ),
    "music-album": <ListMusic className="h-4 w-4 inline mr-1 self-center" />,
    instagram: <FaInstagram className="h-4 w-4 inline mr-1 self-center" />,
    spotify: <AiOutlineSpotify className="h-4 w-4 inline mr-1 self-center" />,
    music: <Music className="h-4 w-4 inline mr-1 self-center" />,
  };

  const variantText: Record<LinkVariants, string> = {
    normal: "text-foreground font-bold",
    primary: "text-primary",
  };

  return (
    <Link
      href={url}
      target={type === "internal-link" ? "_self" : "_blank"}
      className={`hover:underline inline-flex items-baseline w-fit ${variantText[variant]}`}
    >
      {iconPosition === "left" && icons[type]}
      {content}
      {iconPosition === "right" && icons[type]}
    </Link>
  );
};
