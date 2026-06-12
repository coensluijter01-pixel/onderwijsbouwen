import { ImageResponse } from "next/og";

export const iconContentType = "image/png";

export function buildBrandIcon(size: number) {
  const barWidth = Math.round(size * 0.45);
  const barHeight = Math.max(2, Math.round(size * 0.075));
  const barTop = Math.round(size * 0.26);
  const barLeft = Math.round(size * 0.22);
  const showLetter = size >= 64;
  const letterSize = Math.round(size * 0.5);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1B4D3E",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: barTop,
            left: barLeft,
            width: barWidth,
            height: barHeight,
            backgroundColor: "#c9a961",
          }}
        />
        {showLetter ? (
          <div
            style={{
              display: "flex",
              fontSize: letterSize,
              fontFamily: "Georgia, serif",
              color: "#f5f1e8",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              marginTop: Math.round(size * 0.1),
            }}
          >
            o
          </div>
        ) : null}
      </div>
    ),
    { width: size, height: size },
  );
}
