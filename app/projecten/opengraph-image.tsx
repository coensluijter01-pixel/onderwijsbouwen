import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Projecten en richting van Onderwijsbouwen";
export const size = ogSize;
export const contentType = ogContentType;

export default async function ProjectenOpengraphImage() {
  return buildOgImage({
    title: "Projecten en richting.",
    subtitle:
      "Tijd voor docenten, toegang voor leerlingen, inzicht in het systeem.",
  });
}
