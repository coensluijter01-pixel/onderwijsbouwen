import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Veiligheid en privacy bij Onderwijsbouwen";
export const size = ogSize;
export const contentType = ogContentType;

export default async function VeiligheidOpengraphImage() {
  return buildOgImage({
    title: "Veiligheid en privacy.",
    subtitle:
      "Binnen de Nederlandse standaarden voor onderwijsdata, met heldere sub-verwerkers.",
  });
}
