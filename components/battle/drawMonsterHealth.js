export default
function drawMonsterHealth(obj, gameState) {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  const img = obj[obj.length - 1].url;
  const imgBgload = obj[obj.length - 3].url;
  const positionX = (1902 - img.width) / 2;
  const offsetX = 300;
  const offsetY = 10;
  const scaleX = img.width * gameState.monster.health / 100;
  ctx.drawImage(imgBgload, positionX + img.width / 2 + offsetX, offsetY - 11, 334, 58);
  ctx.drawImage(img, positionX + img.width / 2 + offsetX, offsetY, scaleX, img.height);
}
