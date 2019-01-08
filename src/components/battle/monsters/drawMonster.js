
export default function monster(monst, offsetX) {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  const scale = 0.3;

  for (const key in monst) {
    ctx.drawImage(monst[key].url,
      monst[key].x + offsetX,
      monst[key].y - (canvas.height * 0.1), monst[key].url.width * scale,
      monst[key].url.height * scale);
  }
}
