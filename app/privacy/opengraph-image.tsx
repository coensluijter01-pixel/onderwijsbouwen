import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Privacyverklaring Onderwijsbouwen";
export const size = ogSize;
export const contentType = ogContentType;

export default async function PrivacyOpengraphImage() {
  return buildOgImage({
    title: "Privacyverklaring.",
    subtitle:
      "Hoe wij omgaan met persoonsgegevens van bezoekers van onderwijsbouwen.nl.",
  });
}
