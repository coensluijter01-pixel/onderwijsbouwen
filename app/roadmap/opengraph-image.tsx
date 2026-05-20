import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Roadmap Onderwijsbouwen";
export const size = ogSize;
export const contentType = ogContentType;

export default async function RoadmapOpengraphImage() {
  return buildOgImage({
    title: "Roadmap.",
    subtitle: "Waar wij per kwartaal aan bouwen voor het voortgezet onderwijs.",
  });
}
