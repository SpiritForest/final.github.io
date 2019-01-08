import gameState from '../gameState/gameState';
import drawMonsterHealth from './drawMonsterHealth';
import drawPlayerHealth from './drawPlayerHealth';

export default
function showBar(obj) {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  const img = obj[obj.length - 2].url;
  const offsetXMonster = 300;
  const offsetXPlayer = 100;
  const offsetY = 100;
  const positionX = (1902 - img.width) / 2;
  ctx.drawImage(img, positionX, 0);
  ctx.fillStyle = '#ccc';
  ctx.font = '42px serif';
  ctx.fillText(gameState.monster.name,
    positionX + img.width / 2 + offsetXMonster,
    offsetY);
  ctx.fillText(gameState.player.name,
    positionX + offsetXPlayer,
    offsetY);
  ctx.fillText(`Round: ${gameState.round}`, positionX + img.width / 2 - 60, offsetY);
  ctx.fillText(`Points: ${gameState.points}`, positionX + img.width / 2 - 60, 50);
  drawMonsterHealth(obj, gameState);
  drawPlayerHealth(obj, gameState);
}
