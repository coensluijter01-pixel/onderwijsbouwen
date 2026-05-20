import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Veelgestelde vragen Onderwijsbouwen";
export const size = ogSize;
export const contentType = ogContentType;

export default async function FaqOpengraphImage() {
  return buildOgImage({
    title: "Veelgestelde vragen.",
    subtitle:
      "Over Onderwijsbouwen, onze initiatieven, privacy en samenwerken.",
  });
}
