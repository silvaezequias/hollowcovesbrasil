import { Instagram, ListMusic, Music } from "lucide-react";
import Link from "next/link";
import React from "react";

type LinkTypes = "instagram" | "music" | "music-album";
type LinkVariants = "primary" | "normal";

type IconLinkProps = {
  url: string;
  type: LinkTypes;
  content: string;
  variant?: LinkVariants;
};

export const IconLink = ({
  type,
  url,
  variant = "normal",
  content,
}: IconLinkProps) => {
  const icons: Record<LinkTypes, React.ReactNode> = {
    "music-album": <ListMusic className="h-4 w-4 inline mr-1" />,
    instagram: <Instagram className="h-4 w-4 inline mr-1" />,
    music: <Music className="h-4 w-4 inline mr-1" />,
  };

  const variantText: Record<LinkVariants, string> = {
    normal: "text-foreground font-bold",
    primary: "text-primary",
  };

  return (
    <Link
      href={url}
      target="_blank"
      className={`hover:underline ${variantText[variant]}`}
    >
      {icons[type]}
      {content}
    </Link>
  );
};
