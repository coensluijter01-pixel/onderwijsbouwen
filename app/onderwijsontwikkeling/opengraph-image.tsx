import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Onderwijs onder druk — de analyse van Onderwijsbouwen";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OnderwijsontwikkelingOpengraphImage() {
  return buildOgImage({
    title: "Onderwijs onder druk.",
    subtitle:
      "Lerarentekort, AI-disruptie en kansenongelijkheid — en waar wij aan werken.",
  });
}
