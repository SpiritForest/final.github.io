export default function player(array, pose, x, y) {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  ctx.drawImage(array[pose].url, x, y);
}
