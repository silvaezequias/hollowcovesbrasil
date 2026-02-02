"use client";

import React, { useState, useEffect } from "react";
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
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Newspaper,
  Loader2,
  ImageIcon,
  Send,
  Shield,
  AlertTriangle,
  Bold,
  Italic,
  Link2,
  List,
  ListOrdered,
  Quote,
  Code,
  Youtube,
  Twitter,
  Instagram,
  X,
  Copy,
  Check,
  Share2,
  ExternalLink,
  Hash,
  Gauge,
  Eye,
  EyeOff,
} from "lucide-react";
import Link from "next/link";

const TAGS_SUGGESTIONS = [
  "Turne",
  "Lancamento",
  "Entrevista",
  "Spotify",
  "Brasil",
  "Comunidade",
  "Exclusivo",
  "Ao Vivo",
  "Colaboracao",
  "Marco",
];

export default function PostNewsPage() {
  const router = useRouter();

  // Form states
  const [title, setTitle] = useState("");
  const [headline, setHeadline] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [customTag, setCustomTag] = useState("");
  const [importance, setImportance] = useState([5]);
  const [isPreview, setIsPreview] = useState(false);

  // UI states
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [publishedNewsId, setPublishedNewsId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!true) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 py-20">
          <Card className="w-full max-w-md border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center space-y-2">
              <div className="mx-auto w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-2">
                <Shield className="w-8 h-8 text-red-500" />
              </div>
              <CardTitle className="text-2xl font-serif">
                Acesso Restrito
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Voce nao tem permissao para postar noticias. Esta funcionalidade
                e restrita a moderadores e administradores.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button asChild>
                <Link href="/">Voltar ao Inicio</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  // Markdown toolbar actions
  const insertMarkdown = (
    prefix: string,
    suffix: string = prefix,
    placeholder: string = "",
  ) => {
    const textarea = document.getElementById("content") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end) || placeholder;

    const newContent =
      content.substring(0, start) +
      prefix +
      selectedText +
      suffix +
      content.substring(end);
    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + prefix.length + selectedText.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const insertEmbed = (type: "instagram" | "twitter" | "youtube") => {
    const url = prompt(
      `Cole a URL do ${type === "instagram" ? "post do Instagram" : type === "twitter" ? "tweet/post do X" : "video do YouTube"}:`,
    );
    if (!url) return;

    let embedCode = "";
    if (type === "instagram") {
      embedCode = `\n\n[instagram:${url}]\n\n`;
    } else if (type === "twitter") {
      embedCode = `\n\n[twitter:${url}]\n\n`;
    } else if (type === "youtube") {
      const videoId = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s]+)/,
      )?.[1];
      if (videoId) {
        embedCode = `\n\n[youtube:${videoId}]\n\n`;
      } else {
        alert("URL do YouTube invalida");
        return;
      }
    }

    setContent(content + embedCode);
  };

  const insertImage = () => {
    const url = prompt("Cole a URL da imagem:");
    if (!url) return;
    const alt = prompt("Texto alternativo (descricao da imagem):") || "Imagem";
    setContent(content + `\n\n![${alt}](${url})\n\n`);
  };

  const addTag = (tag: string) => {
    if (!tags.includes(tag) && tags.length < 5) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const addCustomTag = () => {
    if (
      customTag.trim() &&
      !tags.includes(customTag.trim()) &&
      tags.length < 5
    ) {
      setTags([...tags, customTag.trim()]);
      setCustomTag("");
    }
  };

  const getImportanceLabel = (value: number) => {
    if (value <= 2) return "Baixa";
    if (value <= 4) return "Normal";
    if (value <= 6) return "Media";
    if (value <= 8) return "Alta";
    return "Urgente";
  };

  const getImportanceColor = (value: number) => {
    if (value <= 2) return "text-muted-foreground";
    if (value <= 4) return "text-blue-500";
    if (value <= 6) return "text-primary";
    if (value <= 8) return "text-orange-500";
    return "text-red-500";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Por favor, insira um titulo para a noticia");
      return;
    }

    if (!headline.trim()) {
      setError("Por favor, insira uma manchete para a noticia");
      return;
    }

    if (!content.trim()) {
      setError("Por favor, insira o conteudo da noticia");
      return;
    }

    setIsSubmitting(true);

    try {
      setPublishedNewsId("newsId");
      setShowShareModal(true);
    } catch {
      setError("Erro ao publicar noticia. Tente novamente.");
      setIsSubmitting(false);
    }
  };

  const getNewsUrl = () => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/noticias/${publishedNewsId}`;
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(getNewsUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
    }
  };

  const shareToSocial = (platform: "twitter" | "whatsapp" | "facebook") => {
    const url = getNewsUrl();
    const text = `Confira: ${title}`;

    let shareUrl = "";
    if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    } else if (platform === "whatsapp") {
      shareUrl = `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
    } else if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  const renderPreview = () => {
    let rendered = content;

    // Bold
    rendered = rendered.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Italic
    rendered = rendered.replace(/\*(.*?)\*/g, "<em>$1</em>");
    // Links
    rendered = rendered.replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" class="text-primary underline" target="_blank" rel="noopener">$1</a>',
    );
    // Images
    rendered = rendered.replace(
      /!\[(.*?)\]\((.*?)\)/g,
      '<img src="$2" alt="$1" class="rounded-lg max-w-full my-4" />',
    );
    // Quotes
    rendered = rendered.replace(
      /^> (.*$)/gm,
      '<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">$1</blockquote>',
    );
    // Headers
    rendered = rendered.replace(
      /^### (.*$)/gm,
      '<h3 class="text-lg font-bold mt-6 mb-2">$1</h3>',
    );
    rendered = rendered.replace(
      /^## (.*$)/gm,
      '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>',
    );
    // Lists
    rendered = rendered.replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>');
    rendered = rendered.replace(
      /^(\d+)\. (.*$)/gm,
      '<li class="ml-4 list-decimal">$2</li>',
    );
    // Code
    rendered = rendered.replace(
      /`(.*?)`/g,
      '<code class="bg-muted px-1.5 py-0.5 rounded text-sm">$1</code>',
    );
    // Embeds (show placeholder)
    rendered = rendered.replace(
      /\[instagram:(.*?)\]/g,
      '<div class="bg-muted/50 border rounded-lg p-4 my-4 text-center text-sm text-muted-foreground">Embed do Instagram: $1</div>',
    );
    rendered = rendered.replace(
      /\[twitter:(.*?)\]/g,
      '<div class="bg-muted/50 border rounded-lg p-4 my-4 text-center text-sm text-muted-foreground">Embed do X/Twitter: $1</div>',
    );
    rendered = rendered.replace(
      /\[youtube:(.*?)\]/g,
      '<div class="bg-muted/50 border rounded-lg p-4 my-4"><iframe class="w-full aspect-video rounded" src="https://www.youtube.com/embed/$1" allowfullscreen></iframe></div>',
    );
    // Paragraphs
    rendered = rendered
      .split("\n\n")
      .map((p) => `<p class="mb-4">${p}</p>`)
      .join("");

    return rendered;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {!false && (
            <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-500 font-medium">
                  Modo de Demonstracao
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  As permissoes estao desativadas. Em producao, apenas
                  moderadores e administradores poderao postar noticias.
                </p>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-serif flex items-center gap-2">
                        <Newspaper className="w-5 h-5 text-primary" />
                        Editor de Noticia
                      </CardTitle>
                      <CardDescription>
                        Use markdown para formatar o conteudo
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsPreview(!isPreview)}
                      className="bg-transparent gap-2"
                    >
                      {isPreview ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                      {isPreview ? "Editar" : "Preview"}
                    </Button>
                  </div>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Titulo *</Label>
                      <Input
                        id="title"
                        type="text"
                        placeholder="Titulo principal da noticia"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        disabled={isSubmitting}
                        className="text-lg font-medium"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="headline">Manchete *</Label>
                      <Input
                        id="headline"
                        type="text"
                        placeholder="Resumo breve que aparece na listagem"
                        value={headline}
                        onChange={(e) => setHeadline(e.target.value)}
                        disabled={isSubmitting}
                      />
                      <p className="text-xs text-muted-foreground">
                        Uma ou duas frases que resumem a noticia
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="coverUrl">URL da Capa</Label>
                      <div className="relative">
                        <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="coverUrl"
                          type="url"
                          placeholder="https://exemplo.com/imagem-capa.jpg"
                          value={coverUrl}
                          onChange={(e) => setCoverUrl(e.target.value)}
                          className="pl-10"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="content">Conteudo *</Label>

                      {!isPreview && (
                        <div className="flex flex-wrap items-center gap-1 p-2 bg-muted/50 rounded-t-lg border border-b-0 border-border">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => insertMarkdown("**", "**", "texto")}
                            title="Negrito"
                            className="h-8 w-8 p-0"
                          >
                            <Bold className="w-4 h-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => insertMarkdown("*", "*", "texto")}
                            title="Italico"
                            className="h-8 w-8 p-0"
                          >
                            <Italic className="w-4 h-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              insertMarkdown("[", "](url)", "texto")
                            }
                            title="Link"
                            className="h-8 w-8 p-0"
                          >
                            <Link2 className="w-4 h-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => insertMarkdown("> ", "", "citacao")}
                            title="Citacao"
                            className="h-8 w-8 p-0"
                          >
                            <Quote className="w-4 h-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => insertMarkdown("- ", "", "item")}
                            title="Lista"
                            className="h-8 w-8 p-0"
                          >
                            <List className="w-4 h-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => insertMarkdown("1. ", "", "item")}
                            title="Lista numerada"
                            className="h-8 w-8 p-0"
                          >
                            <ListOrdered className="w-4 h-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => insertMarkdown("`", "`", "codigo")}
                            title="Codigo"
                            className="h-8 w-8 p-0"
                          >
                            <Code className="w-4 h-4" />
                          </Button>

                          <div className="w-px h-6 bg-border mx-1" />

                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={insertImage}
                            title="Inserir imagem"
                            className="h-8 w-8 p-0"
                          >
                            <ImageIcon className="w-4 h-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => insertEmbed("youtube")}
                            title="Embed YouTube"
                            className="h-8 w-8 p-0"
                          >
                            <Youtube className="w-4 h-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => insertEmbed("instagram")}
                            title="Embed Instagram"
                            className="h-8 w-8 p-0"
                          >
                            <Instagram className="w-4 h-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => insertEmbed("twitter")}
                            title="Embed X/Twitter"
                            className="h-8 w-8 p-0"
                          >
                            <Twitter className="w-4 h-4" />
                          </Button>
                        </div>
                      )}

                      {isPreview ? (
                        <div
                          className="min-h-[300px] p-4 bg-background border rounded-lg prose prose-sm max-w-none"
                          dangerouslySetInnerHTML={{ __html: renderPreview() }}
                        />
                      ) : (
                        <Textarea
                          id="content"
                          placeholder="Escreva o conteudo da noticia usando markdown...

**Negrito** | *Italico* | [Link](url)
> Citacao
- Lista
1. Lista numerada
`codigo`

Use os botoes acima para inserir imagens e embeds de redes sociais."
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          className="min-h-[300px] resize-y font-mono text-sm rounded-t-none"
                          disabled={isSubmitting}
                        />
                      )}
                    </div>

                    {error && (
                      <p className="text-sm text-red-500 bg-red-500/10 px-3 py-2 rounded-md">
                        {error}
                      </p>
                    )}

                    <div className="flex gap-3 pt-4 border-t border-border">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={() => router.back()}
                        disabled={isSubmitting}
                      >
                        Cancelar
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Publicando...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Publicar Noticia
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Hash className="w-4 h-4 text-primary" />
                    Tags
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Adicione ate 5 tags
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
                          onClick={() => removeTag(tag)}
                        >
                          {tag}
                          <X className="w-3 h-3 ml-1" />
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Input
                      placeholder="Nova tag..."
                      value={customTag}
                      onChange={(e) => setCustomTag(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" &&
                        (e.preventDefault(), addCustomTag())
                      }
                      className="h-8 text-sm"
                      disabled={tags.length >= 5}
                    />
                    <Button
                      type="button"
                      size="sm"
                      onClick={addCustomTag}
                      disabled={tags.length >= 5 || !customTag.trim()}
                      className="h-8"
                    >
                      +
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {TAGS_SUGGESTIONS.filter((t) => !tags.includes(t))
                      .slice(0, 6)
                      .map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
                          onClick={() => addTag(tag)}
                        >
                          + {tag}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-primary" />
                    Importancia
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Define o destaque da noticia
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Slider
                    value={importance}
                    onValueChange={setImportance}
                    max={10}
                    min={0}
                    step={1}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Nivel: {importance[0]}/10
                    </span>
                    <span
                      className={`text-sm font-medium ${getImportanceColor(importance[0])}`}
                    >
                      {getImportanceLabel(importance[0])}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Noticias com maior importancia aparecem primeiro e podem
                    receber destaque especial.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-4">
                  <p className="text-xs text-muted-foreground text-center">
                    Publicando como
                  </p>
                  <p className="text-sm font-medium text-center mt-1">
                    {"user.displayName"}
                  </p>
                  <p className="text-xs text-muted-foreground text-center">
                    @{"user.instagram"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Dialog open={showShareModal} onOpenChange={setShowShareModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Noticia Publicada!
            </DialogTitle>
            <DialogDescription>
              Sua noticia foi publicada com sucesso. Compartilhe com a
              comunidade!
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="flex items-center gap-2">
              <Input readOnly value={getNewsUrl()} className="text-sm" />
              <Button
                size="icon"
                variant="outline"
                onClick={copyLink}
                className="bg-transparent shrink-0"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => shareToSocial("twitter")}
              >
                <Twitter className="w-4 h-4 mr-2" />X
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => shareToSocial("whatsapp")}
              >
                <Share2 className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => shareToSocial("facebook")}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Facebook
              </Button>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => {
                setShowShareModal(false);
                router.push("/noticias");
              }}
            >
              Ver Noticias
            </Button>
            <Button
              className="flex-1"
              onClick={() => {
                setShowShareModal(false);
                router.push(`/noticias/${publishedNewsId}`);
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Abrir Noticia
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
