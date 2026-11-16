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
    transform: `scale(${zoom / 100})`,
  };
}
