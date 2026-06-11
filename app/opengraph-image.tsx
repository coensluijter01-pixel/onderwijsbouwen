import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Onderwijsbouwen, bouwen aan onderwijs";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage() {
  return buildOgImage({
    title: "Bouwen aan onderwijs.",
    subtitle:
      "Nederlandse onderwijssoftware-studio. We bouwen aan Corrigo, Actuales en Nexus Academy.",
  });
}
