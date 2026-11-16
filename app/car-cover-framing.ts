import type { CSSProperties } from "react";

/**
 * Single K&Z card framing rule used by both the public inventory and admin preview.
 * The vertical auto-lift is a display-only adjustment: no uploaded photo is edited.
 * Future cars automatically receive the same upward crop without any DB migrations.
 */
export const AUTOMATIC_COVER_LIFT_PERCENT = 7;

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
  const baseY = clamp(car.cover_y, 50, 0, 100);
  const y = clamp(baseY + AUTOMATIC_COVER_LIFT_PERCENT, 57, 0, 100);

  return {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: `${x}% ${y}%`,
    transform: `scale(${zoom / 100})`,
  };
}
