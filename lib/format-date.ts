// Gedeelde datumopmaak voor publieke pagina's (roadmap, changelog).
// Zet een ISO-datum (YYYY-MM-DD) om naar een Nederlands leesbare datum.

const maanden = [
  "januari",
  "februari",
  "maart",
  "april",
  "mei",
  "juni",
  "juli",
  "augustus",
  "september",
  "oktober",
  "november",
  "december",
];

export function formatDatum(iso: string): string {
  const [y, m, d] = iso.split("-");
  const dag = parseInt(d, 10);
  const maand = maanden[parseInt(m, 10) - 1];
  return `${dag} ${maand} ${y}`;
}
