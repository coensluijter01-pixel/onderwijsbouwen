/**
 * Rendert JSON-LD structured data veilig in een <script>-element.
 *
 * Escapet elke `<` naar de JSON-escape <: mocht een waarde ooit
 * `</script>` bevatten (bijv. via later toegevoegde/CMS-gestuurde content),
 * dan kan die niet uit het script-element breken en HTML/JS injecteren.
 * De uitvoer blijft valide JSON voor crawlers, want < is een geldige
 * JSON-escape voor `<`.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
