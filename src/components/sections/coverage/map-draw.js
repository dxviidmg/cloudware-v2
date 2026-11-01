import { CENTER, project } from "./map-geometry";

export const FONT = "Poppins, sans-serif";

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
