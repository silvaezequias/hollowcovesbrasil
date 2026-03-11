import { Track } from "@/data/tracks";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertSecondsToDuration(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const leftSeconds = seconds % 60;

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = leftSeconds.toString().padStart(2, "0");

  if (hours > 0) {
    return `${hours}:${formattedMinutes}:${formattedSeconds}`;
  }

  return `${minutes}:${formattedSeconds}`;
}
export const calculateDuration = (tracks?: Track[]) =>
  tracks?.reduce((acc, track) => acc + track.duration, 0) || 0;

export function kebabCase(text: string) {
  return text
    .toLocaleLowerCase()
    .split(" ")
    .join("-")
    .replaceAll("&", "e")
    .replaceAll("'", "")
    .replaceAll("’", "");
}

export function getId(prefix: string, target: string) {
  return `${prefix}-${kebabCase(target)}`;
}

export function getTranslatedLyricsUrl(songTitle: string) {
  return `https://www.letras.mus.br/hollow-coves/${kebabCase(songTitle)}/traducao.html`;
}

export const formatPlaysCompact = (plays: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    notation: "compact",
    compactDisplay: "short",
  }).format(plays);
};
