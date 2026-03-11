import { IconLink } from "@/components/ui/icon-link";
import { getId, getTranslatedLyricsUrl } from "@/lib/utils";

export type Track = {
  id?: string;
  title: Musics;
  duration: number;
  plays: number;
  lyricsUrl: string;
  spotifyUrl: string;
  externalLink: React.ReactNode;
};

type TrackInput = Pick<Track, "title" | "duration" | "spotifyUrl" | "plays">;

export enum Musics {
  NothingToLose = "Nothing to Lose",
  LettingGo = "Letting Go",
  MilkAndHoney = "Milk & Honey",
  Photographs = "Photographs",
  HarderToFakeIt = "Harder to Fake It",
  LetsGo = "Let’s Go",
  Purple = "Purple",
  OnTheWay = "On the Way",
  BeAlright = "Be Alright",
  FactOrFiction = "Fact or Fiction",
  SeeYouSoon = "See You Soon",
  Anew = "Anew",
  Moments = "Moments",
  WhenWeWereYoung = "When We Were Young",
  Borderlines = "Borderlines",
  TheOpenRoad = "The Open Road",
  Adrift = "Adrift",
  Patience = "Patience",
  RanAway = "Ran Away",
  BeautyInTheLight = "Beauty in the Light",
  Notions = "Notions",
  Pictures = "Pictures",
  Coastline = "Coastline",
  WeWillRun = "We Will Run",
  TheWoods = "The Woods",
  Interlude = "Interlude",
  Home = "Home",
  TheseMemories = "These Memories",

  Hello = "Hello",
  Blessings = "Blessings",
  Evermore = "Evermore",
  Unfamiliar = "Unfamiliar",
  ChasingTheSun = "Chasing the Sun",
}

function createTrack({
  title,
  duration,
  spotifyUrl,
  plays,
}: TrackInput): Track {
  return {
    title,
    plays,
    duration,
    spotifyUrl,
    lyricsUrl: getTranslatedLyricsUrl(title!),
    id: getId("tk", title!),
    externalLink: <IconLink content={title} type="music" url={spotifyUrl} />,
  };
}

export const tracks = {
  [Musics.NothingToLose]: createTrack({
    duration: 237,
    title: Musics.NothingToLose,
    plays: 5200000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/434io34sIbKCD3KzuoJCg5?si=b94d6830a8aa4c36",
  }),
  [Musics.LettingGo]: createTrack({
    duration: 210,
    title: Musics.LettingGo,
    plays: 4100000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/19AMrr1Gef190GG13TjZYh?si=1388bb382b704372",
  }),
  [Musics.MilkAndHoney]: createTrack({
    duration: 237,
    title: Musics.MilkAndHoney,
    plays: 3800000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/0g9PpERyTEuKV4mgKhrudQ?si=ed19375658594d41",
  }),
  [Musics.Photographs]: createTrack({
    duration: 175,
    title: Musics.Photographs,
    plays: 12500000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/artist/7IAFAOtc9kTYNTizhLSWM6?si=56f7fa4802fd4385",
  }),
  [Musics.HarderToFakeIt]: createTrack({
    duration: 202,
    title: Musics.HarderToFakeIt,
    plays: 2900000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/2WUCs7g2ruBYftxFROc9fA?si=74a05058f91a42e1",
  }),
  [Musics.LetsGo]: createTrack({
    duration: 190,
    title: Musics.LetsGo,
    plays: 3200000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/0RwbesR0N3ktMbPHgy9ic0?si=fd447ced34bb4dfb",
  }),
  [Musics.Purple]: createTrack({
    duration: 266,
    title: Musics.Purple,
    plays: 4500000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/2oUkMuFYBhdBmMsLLkE0Uy?si=c2e7b6607b764454",
  }),
  [Musics.OnTheWay]: createTrack({
    duration: 192,
    title: Musics.OnTheWay,
    plays: 15800000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/69tijN4CptXIifDieXBtXa?si=fd16eaa4b4ad4760",
  }),
  [Musics.BeAlright]: createTrack({
    duration: 174,
    title: Musics.BeAlright,
    plays: 2100000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/3PoCrbrClzOxwoSYmL0Ifk?si=b537335587a940b1",
  }),
  [Musics.FactOrFiction]: createTrack({
    duration: 249,
    title: Musics.FactOrFiction,
    plays: 1800000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/72mx154fty7x9S3qJ8wpqm?si=bc2c2ae303374b65",
  }),
  [Musics.SeeYouSoon]: createTrack({
    duration: 196,
    title: Musics.SeeYouSoon,
    plays: 2400000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/04pyymQHOj9epQvpveEC1A?si=a6c7519e05094961",
  }),

  // Álbum: Moments (2019)
  [Musics.Anew]: createTrack({
    duration: 313,
    title: Musics.Anew,
    plays: 18500000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/1irbTMG2ULyD9mmr3fpSk5?si=4688efe0c19a4157",
  }),
  [Musics.Moments]: createTrack({
    duration: 269,
    title: Musics.Moments,
    plays: 12200000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/1ZsUx0zG78g51kxphSGz9d?si=55fdd18dd079463b",
  }),
  [Musics.WhenWeWereYoung]: createTrack({
    duration: 258,
    title: Musics.WhenWeWereYoung,
    plays: 45000000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/50vosp6iPtCPTakd1w6WEU?si=bb83bff523fe4dfe",
  }),
  [Musics.Borderlines]: createTrack({
    duration: 264,
    title: Musics.Borderlines,
    plays: 8900000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/4jAC2Lav7JkBosmiiO0b4D?si=3f55ea5de78b4b20",
  }),
  [Musics.TheOpenRoad]: createTrack({
    duration: 200,
    title: Musics.TheOpenRoad,
    plays: 11400000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/2Dj9OOoQHG5f0jlL5vt7Ve?si=5171d5a863704332",
  }),
  [Musics.Adrift]: createTrack({
    duration: 323,
    title: Musics.Adrift,
    plays: 6700000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/0MdtJCzUTPElxjURurOXa3?si=020865dd1a5a43cd",
  }),
  [Musics.Patience]: createTrack({
    duration: 291,
    title: Musics.Patience,
    plays: 5300000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/6U4v708wqTL3CPUEX79p1a?si=a0c16cbe5fbf4aaa",
  }),
  [Musics.RanAway]: createTrack({
    duration: 255,
    title: Musics.RanAway,
    plays: 4900000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/2nQUwM55eYkY2bWtF3EzCm?si=17ebf96014174bc3",
  }),
  [Musics.BeautyInTheLight]: createTrack({
    duration: 255,
    title: Musics.BeautyInTheLight,
    plays: 4200000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/2x1eImwtkgb4cLoFzj6gwL?si=a29ec775b4ad41a8",
  }),
  [Musics.Notions]: createTrack({
    duration: 360,
    title: Musics.Notions,
    plays: 3500000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/3gU2je4blllYeSsBJcMkGO?si=7b4a0a70fada408c",
  }),
  [Musics.Pictures]: createTrack({
    duration: 301,
    title: Musics.Pictures,
    plays: 3100000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/2YcLNHjj2AEZnvDKUcYG6j?si=8f5e1e7940aa4216",
  }),

  [Musics.Coastline]: createTrack({
    duration: 233,
    title: Musics.Coastline,
    plays: 320000000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/4sDbdBjuYQVdNNB4PiHUPo?si=3e2eadf9769a40a5",
  }),
  [Musics.WeWillRun]: createTrack({
    duration: 255,
    title: Musics.WeWillRun,
    plays: 28000000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/75jqKUwTZo2UtqW7xAzIni?si=d9f4fb663c5f48b6",
  }),
  [Musics.TheWoods]: createTrack({
    duration: 241,
    title: Musics.TheWoods,
    plays: 42000000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/5377z0OljWvRR7CdSQrJxP?si=1e703cb7b1e449ac",
  }),
  [Musics.Interlude]: createTrack({
    duration: 60,
    title: Musics.Interlude,
    plays: 2500000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/4cJsJdwEp3y4K1slV5fRZm?si=672fa7f2f5af45ec",
  }),
  [Musics.Home]: createTrack({
    duration: 202,
    title: Musics.Home,
    plays: 35000000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/6SGoFZFKjF1ZbGDkImEaS7?si=7af3329171674e1e",
  }),
  [Musics.TheseMemories]: createTrack({
    duration: 313,
    title: Musics.TheseMemories,
    plays: 58000000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/3ZOD3aghbxBkgKsLu2jOEK?si=63264742819b4060",
  }),

  [Musics.Hello]: createTrack({
    duration: 194,
    title: Musics.Hello,
    plays: 7500000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/3PDJfUCgOy0mqm3jxUVA5F?si=5a271471a60d4c37",
  }),
  [Musics.Blessings]: createTrack({
    duration: 194,
    title: Musics.Blessings,
    plays: 5600000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/4QpnTJdniesQvZfHfzLTXJ?si=046a03d3f19242e7",
  }),
  [Musics.Evermore]: createTrack({
    duration: 194,
    title: Musics.Evermore,
    plays: 3800000,
    spotifyUrl:
      "https://open.spotify.com/intl-pt/track/7LdUTzOChvJJbJPZNhJj5X?si=677701870ceb4433",
  }),
};
