import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Pers en mediakit Onderwijsbouwen";
export const size = ogSize;
export const contentType = ogContentType;

export default async function PersOpengraphImage() {
  return buildOgImage({
    title: "Pers en mediakit.",
    subtitle:
      "Voor pers, onderzoekers en mediavragen over Onderwijsbouwen, Corrigo en Nexus.",
  });
}
