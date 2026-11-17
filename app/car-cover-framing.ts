import type { CSSProperties } from "react";

/**
 * A neutral cover image default with individual, owner-controlled position
 * and zoom for each vehicle. Never auto-shift every car in the same direction.
 * The underlying uploaded image remains untouched.
 */
type CarCoverFraming = {
  cover_zoom?: number | null;
  cover_x?: number | null;
  cover_y?: number | null;
};

function clamp(value: number | null | undefined, fallback: number, min: number, max: number) {
  return typeof value === "number" && Number.isFinite(value)
    ? Math.min(max, Math.max(min, value))
    : fallback;
}

export function getCarCoverImageStyle(car: CarCoverFraming): CSSProperties {
  const zoom = clamp(car.cover_zoom, 100, 80, 150);
  const x = clamp(car.cover_x, 50, 0, 100);
  const y = clamp(car.cover_y, 50, 0, 100);

  return {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: `${x}% ${y}%`,
    // 80% means the minimum cover crop, never a shrunken image with blank edges.
    // Additional zoom creates room for horizontal and vertical panning.
    // Size the image layer itself, then move that layer across the full frame.
    // Unlike transform-origin scaling, 0/100 always reach the real edges.
    position: "absolute",
    width: `${100 + (zoom - 80)}%`,
    height: `${100 + (zoom - 80)}%`,
    left: `${-(zoom - 80) * x / 100}%`,
    top: `${-(zoom - 80) * y / 100}%`,
  };
}
