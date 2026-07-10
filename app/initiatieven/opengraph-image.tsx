import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "De initiatieven van Onderwijsbouwen";
export const size = ogSize;
export const contentType = ogContentType;

export default async function InitiatievenOpengraphImage() {
  return buildOgImage({
    title: "Onze initiatieven.",
    subtitle:
      "Corrigo, Actuales en Nexus Academy — drie ingangen, één samenhangende visie op onderwijs.",
  });
}
