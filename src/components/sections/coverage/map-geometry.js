import hidalgo from "@/data/hidalgo.json";

export const PAD = 28;
const POINTS = hidalgo.flatMap((m) => m.rings.flat());
const BOUNDS = {
  minLon: Math.min(...POINTS.map((p) => p[0])),
  maxLon: Math.max(...POINTS.map((p) => p[0])),
  minLat: Math.min(...POINTS.map((p) => p[1])),
  maxLat: Math.max(...POINTS.map((p) => p[1])),
};
export const CENTER = Object.fromEntries(hidalgo.map((m) => [m.name, m.c]));
// a degree of longitude is shorter than one of latitude: cos(lat) keeps real proportions
const LON_K = Math.cos((((BOUNDS.minLat + BOUNDS.maxLat) / 2) * Math.PI) / 180);
export const SPAN_X = (BOUNDS.maxLon - BOUNDS.minLon) * LON_K;
export const SPAN_Y = BOUNDS.maxLat - BOUNDS.minLat;

export function project(lon, lat, w, h) {
  const sc = Math.min((w - PAD * 2) / SPAN_X, (h - PAD * 2) / SPAN_Y);
  const offX = PAD + (w - PAD * 2 - SPAN_X * sc) / 2;
  const offY = PAD + (h - PAD * 2 - SPAN_Y * sc) / 2;
  return [offX + (lon - BOUNDS.minLon) * LON_K * sc, h - (offY + (lat - BOUNDS.minLat) * sc)];
}
