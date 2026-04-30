import { ImageResponse } from "next/og";

export const alt = "Onderwijsbouwen, bouwen aan onderwijs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1B4D3E",
          color: "#f5f1e8",
          padding: "80px",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "80px",
            width: "80px",
            height: "4px",
            backgroundColor: "#c9a961",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-160px",
            width: "640px",
            height: "640px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at center, rgba(116, 168, 146, 0.18), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            left: "-100px",
            width: "640px",
            height: "640px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at center, rgba(201, 169, 97, 0.10), transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            flex: 1,
            position: "relative",
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "20px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(245, 241, 232, 0.6)",
              marginBottom: "24px",
            }}
          >
            Onderwijsbouwen
          </div>
          <div
            style={{
              fontSize: "128px",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              fontWeight: 500,
              maxWidth: "1000px",
              display: "flex",
            }}
          >
            Bouwen aan onderwijs.
          </div>
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "28px",
              lineHeight: 1.4,
              color: "rgba(245, 241, 232, 0.75)",
              marginTop: "32px",
              maxWidth: "800px",
              display: "flex",
            }}
          >
            De Nederlandse holding achter Corrigo en Nexus Academy.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            bottom: "80px",
            left: "80px",
            right: "80px",
            fontFamily: "monospace",
            fontSize: "16px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(245, 241, 232, 0.5)",
          }}
        >
          <span>onderwijsbouwen.nl</span>
          <span style={{ color: "#c9a961" }}>Rotterdam</span>
        </div>
      </div>
    ),
    size,
  );
}
