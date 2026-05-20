import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Over Onderwijsbouwen";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OverOpengraphImage() {
  return buildOgImage({
    title: "Over Onderwijsbouwen.",
    subtitle:
      "Een Nederlandse onderwijssoftware-studio, gevestigd in Rotterdam.",
  });
}
