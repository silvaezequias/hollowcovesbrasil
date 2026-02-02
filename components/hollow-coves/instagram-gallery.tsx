"use client";

import { useEffect, useRef, useState } from "react";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";
import Script from "next/script";

const instagramPosts = [
  {
    id: "1",
    embedUrl: "https://www.instagram.com/p/DT22VjHDY0I/?img_index=2",
    username: "hollowcovesbrasil",
    caption: "Hollow Coves no Brasil - momentos inesqueciveis",
  },
  {
    id: "2",
    embedUrl: "https://www.instagram.com/p/DT523lzj1WC/?img_index=1",
    username: "hollowcovesbrasil",
    caption: "Show incrivel em Sao Paulo",
  },
  {
    id: "3",
    embedUrl: "https://www.instagram.com/p/DTxaAj0kQVw/",
    username: "hollowcovesbrasil",
    caption: "Fans reunidos para celebrar",
  },
  {
    id: "4",
    embedUrl: "https://www.instagram.com/p/DTvWcrmEVYm/",
    username: "hollowcovesbrasil",
    caption: "A magia da musica ao vivo",
  },
  {
    id: "5",
    embedUrl: "https://www.instagram.com/p/DTuC6o6DsbH/?img_index=6",
    username: "hollowcovesbrasil",
    caption: "Encontro de fas emocionante",
  },
  {
    id: "6",
    embedUrl: "https://www.instagram.com/p/DT_VdOojzJL/?img_index=2",
    username: "hollowcovesbrasil",
    caption: "Hollow Coves sempre no coracao",
  },
  {
    id: "7",
    embedUrl: "https://www.instagram.com/p/DT8yktCka_P/?img_index=1",
    username: "hollowcovesbrasil",
    caption: "Mais um show memoravel",
  },
  {
    id: "8",
    embedUrl: "https://www.instagram.com/p/DT8ALWsjuVA/?img_index=5",
    username: "hollowcovesbrasil",
    caption: "A comunidade crescendo",
  },
  {
    id: "9",
    embedUrl: "https://www.instagram.com/p/DT9Cs6dgKdc/?img_index=1",
    username: "hollowcovesbrasil",
    caption: "Vibrando juntos com a musica",
  },
];

function InstagramEmbed({ post }: { post: (typeof instagramPosts)[0] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const processEmbed = () => {
      if (
        typeof window !== "undefined" &&
        (window as unknown as { instgrm?: { Embeds: { process: () => void } } })
          .instgrm
      ) {
        (
          window as unknown as { instgrm: { Embeds: { process: () => void } } }
        ).instgrm.Embeds.process();
        setIsLoaded(true);
      }
    };

    processEmbed();

    const interval = setInterval(() => {
      if (
        typeof window !== "undefined" &&
        (window as unknown as { instgrm?: { Embeds: { process: () => void } } })
          .instgrm
      ) {
        processEmbed();
        clearInterval(interval);
      }
    }, 500);

    const timeout = setTimeout(() => {
      if (!isLoaded) {
        setHasError(true);
      }
      clearInterval(interval);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isLoaded]);

  if (hasError) {
    return (
      <a
        href={post.embedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group"
      >
        <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex flex-col items-center justify-center p-6 text-center">
          <Instagram className="w-12 h-12 text-primary mb-4" />
          <p className="text-foreground font-medium mb-2">@{post.username}</p>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {post.caption}
          </p>
          <span className="inline-flex items-center gap-2 text-primary text-sm group-hover:underline">
            Ver no Instagram <ExternalLink className="w-4 h-4" />
          </span>
        </div>
      </a>
    );
  }

  return (
    <div ref={containerRef} className="instagram-embed-container">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={post.embedUrl}
        data-instgrm-version="14"
        style={{
          background: "var(--card)",
          border: "0",
          borderRadius: "12px",
          boxShadow: "none",
          margin: "0",
          maxWidth: "100%",
          minWidth: "100%",
          padding: "0",
          width: "100%",
        }}
      >
        <div className="p-4">
          <a
            href={post.embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Instagram className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-medium">@{post.username}</p>
              <p className="text-sm text-muted-foreground">Ver no Instagram</p>
            </div>
          </a>
        </div>
      </blockquote>
    </div>
  );
}

function PlaceholderCard({ index }: { index: number }) {
  const heights = [
    "aspect-square",
    "aspect-[4/5]",
    "aspect-[3/4]",
    "aspect-[4/3]",
  ];
  const height = heights[index % heights.length];

  return (
    <div
      className={`bg-card rounded-xl overflow-hidden border border-border ${height} animate-pulse`}
    >
      <div className="w-full h-full bg-linear-to-br from-muted to-muted/50 flex items-center justify-center">
        <Instagram className="w-8 h-8 text-muted-foreground/50" />
      </div>
    </div>
  );
}

export function InstagramGallery() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (
            typeof window !== "undefined" &&
            (
              window as unknown as {
                instgrm?: { Embeds: { process: () => void } };
              }
            ).instgrm
          ) {
            (
              window as unknown as {
                instgrm: { Embeds: { process: () => void } };
              }
            ).instgrm.Embeds.process();
          }
        }}
      />

      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {mounted
          ? instagramPosts.map((post) => (
              <div key={post.id} className="break-inside-avoid">
                <InstagramEmbed post={post} />
              </div>
            ))
          : Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="break-inside-avoid">
                <PlaceholderCard index={i} />
              </div>
            ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-xl p-6 text-center border border-border">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <Instagram className="w-6 h-6 text-primary" />
          </div>
          <p className="text-3xl font-bold text-foreground mb-1">500+</p>
          <p className="text-muted-foreground">Posts com a hashtag</p>
        </div>
        <div className="bg-card rounded-xl p-6 text-center border border-border">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <p className="text-3xl font-bold text-foreground mb-1">10K+</p>
          <p className="text-muted-foreground">Curtidas nas fotos</p>
        </div>
        <div className="bg-card rounded-xl p-6 text-center border border-border">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-6 h-6 text-primary" />
          </div>
          <p className="text-3xl font-bold text-foreground mb-1">2K+</p>
          <p className="text-muted-foreground">Comentarios da comunidade</p>
        </div>
      </div>

      <style jsx global>{`
        .instagram-media {
          background: var(--card) !important;
          border-radius: 12px !important;
          box-shadow: none !important;
          border: 1px solid var(--border) !important;
        }

        .instagram-media iframe {
          border-radius: 12px !important;
        }

        .instagram-embed-container {
          width: 100%;
        }

        .instagram-embed-container .instagram-media {
          min-width: 100% !important;
          max-width: 100% !important;
          width: 100% !important;
        }
      `}</style>
    </>
  );
}
