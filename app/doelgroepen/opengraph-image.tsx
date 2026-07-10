import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "De doelgroepen van Onderwijsbouwen";
export const size = ogSize;
export const contentType = ogContentType;

export default async function DoelgroepenOpengraphImage() {
  return buildOgImage({
    title: "Voor wie we bouwen.",
    subtitle:
      "Scholen, docenten, leerlingen, ouders en beleidsmakers — de groepen waarmee we samenwerken.",
  });
}
