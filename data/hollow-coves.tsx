import { tracks } from "./tracks";
import { albums, eps } from "./albums";
import { IconLink } from "@/components/ui/icon-link";

export const hollowCoves = {
  eps,
  albums,
  tracks,
  mattCarins: {
    name: "Matt Carins",
    instagramUrl: "https://www.instagram.com/mattcarins/",
    get externalLink() {
      return (
        <IconLink
          content={this.name}
          type="instagram"
          variant="primary"
          url={this.instagramUrl}
        />
      );
    },
  },
  ryanHenderson: {
    name: "Ryan Henderson",
    instagramUrl: "https://www.instagram.com/ryanhendersonmusic/",
    get externalLink() {
      return (
        <IconLink
          content={this.name}
          type="instagram"
          variant="primary"
          url={this.instagramUrl}
        />
      );
    },
  },
};
