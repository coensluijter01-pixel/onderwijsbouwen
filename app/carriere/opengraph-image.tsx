import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Carrière bij Onderwijsbouwen";
export const size = ogSize;
export const contentType = ogContentType;

export default async function CarriereOpengraphImage() {
  return buildOgImage({
    title: "Carrière.",
    subtitle:
      "Wij groeien op basis van inhoudelijke fit, niet op functietitel.",
  });
}
