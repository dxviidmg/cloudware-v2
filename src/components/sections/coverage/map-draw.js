import hidalgo from "@/data/hidalgo.json";
import { CENTER, project } from "./map-geometry";

export const FONT = "Poppins, sans-serif";

// label position relative to the real municipio location (px); keeps pins at true scale
const LABELS = {
  "Santiago de Anaya": [-28, -34],
  "San Salvador": [-70, 6],
  Actopan: [30, -40],
  "El Arenal": [62, 12],
  "San Agustín Tlaxiaca": [0, 36],
};

export function pill(ctx, x, y, w, h, r) {
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
  else ctx.rect(x, y, w, h);
}

export function drawPopup(ctx, selected, color, w, h) {
  const [sx, sy] = project(...CENTER[selected.name], w, h);
  const locs = selected.localidades;
  let cols = locs.length > 10 ? 2 : 1;
  let popW = cols === 2 ? 240 : 175;
  if (popW > w - 16) {
    cols = 1;
    popW = Math.min(175, w - 16);
  }
  const perCol = Math.ceil(locs.length / cols);
  const popH = perCol * 17 + 44;
  let px = sx + 16;
  let py = sy - popH / 2;
  if (px + popW > w - 10) px = sx - popW - 16;
  px = Math.max(8, Math.min(px, w - popW - 8));
  py = Math.max(8, Math.min(py, h - popH - 8));

  ctx.shadowColor = "rgba(0,0,0,0.4)";
  ctx.shadowBlur = 14;
  ctx.fillStyle = "#2a2142";
  pill(ctx, px, py, popW, popH, 10);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.font = `bold 13px ${FONT}`;
  ctx.fillText(selected.name, px + 12, py + 22);
  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(px + 10, py + 29);
  ctx.lineTo(px + popW - 10, py + 29);
  ctx.stroke();
  ctx.font = `11px ${FONT}`;
  locs.forEach((loc, i) => {
    const col = Math.floor(i / perCol);
    const row = i % perCol;
    const tx = px + 12 + col * (popW / cols);
    const ty = py + 44 + row * 17;
    ctx.fillStyle = color;
    ctx.fillText("•", tx, ty);
    ctx.fillStyle = "#f4f1fb";
    ctx.fillText(loc, tx + 10, ty);
  });
}

export function drawMunicipios(ctx, covered, color, w, h) {
  hidalgo.forEach((m) => {
    const on = covered.has(m.name);
    ctx.beginPath();
    m.rings.forEach((ring) => {
      ring.forEach(([lon, lat], i) => {
        const [x, y] = project(lon, lat, w, h);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.closePath();
    });
    ctx.fillStyle = on ? `${color}55` : "rgba(108, 63, 160, 0.22)";
    ctx.fill();
    ctx.strokeStyle = on ? color : "rgba(165, 140, 191, 0.45)";
    ctx.lineWidth = on ? 1.5 : 0.7;
    ctx.stroke();
  });
}

export function drawSignal(ctx, s, muns, color, w, h) {
  const from = muns[s.from % muns.length];
  const to = muns[s.to % muns.length];
  if (!from || !to) return;
  const [fx, fy] = project(...CENTER[from.name], w, h);
  const [tx, ty] = project(...CENTER[to.name], w, h);
  const x = fx + (tx - fx) * s.t;
  const y = fy + (ty - fy) * s.t;
  const grd = ctx.createRadialGradient(x, y, 0, x, y, s.size * 3);
  grd.addColorStop(0, `${color}${Math.round(s.opacity * 255).toString(16).padStart(2, "0")}`);
  grd.addColorStop(1, `${color}00`);
  ctx.beginPath();
  ctx.arc(x, y, s.size * 3, 0, Math.PI * 2);
  ctx.fillStyle = grd;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, y, s.size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

export function drawPin(ctx, m, [x, y], color, isSel, pulse) {
  for (let r = 0; r < 3; r++) {
    const pr = (isSel ? 14 : 9) + r * 7 + Math.sin(pulse - r * 0.8) * 2;
    ctx.beginPath();
    ctx.arc(x, y, pr, 0, Math.PI * 2);
    ctx.fillStyle = `${color}${Math.round((0.15 - r * 0.04) * (isSel ? 1.5 : 1) * 255).toString(16).padStart(2, "0")}`;
    ctx.fill();
  }
  const [ldx, ldy] = LABELS[m.name] ?? [0, -30];
  const lx = x + ldx;
  const ly = y + ldy;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(lx, ly - 4);
  ctx.strokeStyle = "rgba(255,255,255,0.35)";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x, y, isSel ? 6 : 4.5, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = "#14101f";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.font = `${isSel ? "bold " : ""}11px ${FONT}`;
  const lw = ctx.measureText(m.name).width;
  ctx.fillStyle = isSel ? color : "rgba(20, 16, 31, 0.92)";
  pill(ctx, lx - lw / 2 - 5, ly - 12, lw + 10, 17, 4);
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = isSel ? "#14101f" : "#f4f1fb";
  ctx.textAlign = "center";
  ctx.fillText(m.name, lx, ly);
  return { x, y, mun: m, box: { x: lx - lw / 2 - 5, y: ly - 12, w: lw + 10, h: 17 } };
}
