import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Contact en samenwerking met Onderwijsbouwen";
export const size = ogSize;
export const contentType = ogContentType;

export default async function ContactOpengraphImage() {
  return buildOgImage({
    title: "Contact.",
    subtitle:
      "Voor schoolpilots, partnerships, onderzoek en pers. We reageren binnen twee werkdagen.",
  });
}
