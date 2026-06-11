import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Changelog Onderwijsbouwen";
export const size = ogSize;
export const contentType = ogContentType;

export default async function ChangelogOpengraphImage() {
  return buildOgImage({
    title: "Changelog.",
    subtitle:
      "Mijlpalen van Onderwijsbouwen, Corrigo, Actuales en Nexus, gesorteerd op datum.",
  });
}
