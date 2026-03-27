import { calculateDuration, getId } from "@/lib/utils";
import { Musics, Track, tracks } from "./tracks";
import { IconLink } from "@/components/ui/icon-link";

export type Album = {
  id?: string;
  title: Albums;
  year: string;
  releaseDate: string;
  cover: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  description: string;
  totalDuration: number;
  highlights: string[];
  tracks: Track[];
  externalLink: React.ReactNode;
};

export enum Albums {
  NothingToLose = "Nothing to Lose",
  Moments = "Moments",
  Wanderlust = "Wanderlust",
}

export const eps = {
  tracks: [
    tracks[Musics.Hello],
    tracks[Musics.Blessings],
    tracks[Musics.Evermore],
  ],
};

export const albums = {
  [Albums.Wanderlust]: {
    title: Albums.Wanderlust,
    year: "2017",
    releaseDate: "3 de Fevereiro, 2017",
    cover: "/images/album-wanderlust.jpg",
    spotifyUrl: "https://open.spotify.com/album/37yGR6auNK3W1XbcDYfSjw",
    appleMusicUrl: "https://music.apple.com/us/album/wanderlust-ep/1609039040",
    description:
      "O EP que lançou a banda ao reconhecimento global. Com foco em temas de viagem e exploração, 'Wanderlust' captura a essência da liberdade e o desejo de descobrir o novo através de harmonias vocais impecáveis.",
    highlights: [
      "EP de estreia",
      "Primeiro sucesso de fãs",
      "Som acústico puro",
    ],
    id: getId("ab", Albums.Wanderlust),
    tracks: [
      tracks[Musics.Coastline],
      tracks[Musics.WeWillRun],
      tracks[Musics.TheWoods],
      tracks[Musics.Interlude],
      tracks[Musics.Home],
      tracks[Musics.TheseMemories],
    ],
    get totalDuration() {
      return calculateDuration(this.tracks);
    },
    get externalLink() {
      return (
        <IconLink
          content={this.title}
          type="music-album"
          url={this.spotifyUrl}
        />
      );
    },
  },
  [Albums.NothingToLose]: {
    title: Albums.NothingToLose,
    year: "2024",
    releaseDate: "1 de Março, 2024",
    cover: "/images/album-nothing-to-lose.jpg",
    spotifyUrl: "https://open.spotify.com/album/3MLs9OSTBURXZ87o8ItJSp",
    appleMusicUrl:
      "https://music.apple.com/br/album/nothing-to-lose/1720184172",
    description:
      "O segundo álbum de estúdio completo do Hollow Coves explora temas como jornada, simplicidade e conexão humana, refletindo sobre a vida contemporânea com melodias folk e arranjos mais amplos do que nos trabalhos anteriores.",
    highlights: [
      "Leva mais para o indie folk amadurecido",
      "Tema de aceitação e gratidão",
      "Singles populares como 'Photographs' e 'On The Way'",
    ],

    id: getId("ab", Albums.NothingToLose),
    tracks: [
      tracks[Musics.NothingToLose],
      tracks[Musics.LettingGo],
      tracks[Musics.MilkAndHoney],
      tracks[Musics.Photographs],
      tracks[Musics.HarderToFakeIt],
      tracks[Musics.LetsGo],
      tracks[Musics.Purple],
      tracks[Musics.OnTheWay],
      tracks[Musics.BeAlright],
      tracks[Musics.FactOrFiction],
      tracks[Musics.SeeYouSoon],
    ],
    get totalDuration() {
      return calculateDuration(this.tracks);
    },
    get externalLink() {
      return (
        <IconLink content={this.title} type="music" url={this.spotifyUrl} />
      );
    },
  },

  [Albums.Moments]: {
    title: Albums.Moments,
    year: "2019",
    releaseDate: "18 de Outubro, 2019",
    cover: "/images/album-moments.jpg",
    spotifyUrl: "https://open.spotify.com/album/1AdV0dbxTNI6ihLCJYyE96",
    appleMusicUrl: "https://music.apple.com/us/album/moments/1609043786",
    description:
      "O álbum de estreia da banda, gravado no interior da Inglaterra. 'Moments' é uma coleção de canções inspiradas por reflexões sobre momentos inesquecíveis e experiências compartilhadas, trazendo um som folk clássico e nostálgico.",
    highlights: [
      "Álbum de estreia completo",
      "Inclui o single ‘When We Were Young’",
      "Sonoridade acústica e emocional",
    ],
    id: getId("ab", Albums.Moments),
    tracks: [
      tracks[Musics.Anew],
      tracks[Musics.Moments],
      tracks[Musics.WhenWeWereYoung],
      tracks[Musics.Borderlines],
      tracks[Musics.TheOpenRoad],
      tracks[Musics.Adrift],
      tracks[Musics.Patience],
      tracks[Musics.RanAway],
      tracks[Musics.BeautyInTheLight],
      tracks[Musics.Notions],
      tracks[Musics.Pictures],
    ],
    get totalDuration() {
      return calculateDuration(this.tracks);
    },
    get externalLink() {
      return (
        <IconLink content={this.title} type="music" url={this.spotifyUrl} />
      );
    },
  },
};
