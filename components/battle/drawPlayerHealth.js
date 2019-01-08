export default
function drawMonsterHealth(obj, gameState) {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  const img = obj[obj.length - 1].url;
  const imgBgload = obj[obj.length - 3].url;
  const imgBar = obj[obj.length - 2].url;
  const positionX = (1902 - imgBar.width) / 2;
  const offsetX = 100;
  const offsetY = 10;
  const scaleX = img.width * gameState.player.health / 100;
  ctx.drawImage(imgBgload, positionX + offsetX, offsetY - 11, 334, 58);
  ctx.drawImage(img, positionX + offsetX, offsetY, scaleX, img.height);
}
