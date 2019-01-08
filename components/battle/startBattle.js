import loadImages from './loadImages';
import getParts from './monsters/getParts';
import start from './start';
import stopObj from '../gameState/stopAnimation';
import showModalCast from '../header/modals/createModal';
import pause from '../utils/pause';
import getName from './monsters/getName';
import gameState from '../gameState/gameState';

export default function startBattle() {
  const canvas = document.querySelector('#canvas');
  const headerHeigth = document.querySelector('header').offsetHeight;
  canvas.width = window.innerWidth;
  const proportion = canvas.width / 1904;
  canvas.height = canvas.width * 0.479; -headerHeigth;
  canvas.style.position = 'relative';
  canvas.style.top = '40px';

  let monsterObj = {};
  loadImages()
    .then((playerObj) => {
      gameState.monster.name = getName();
      monsterObj = getParts(playerObj, proportion); // there we get new parts of our monster
      stopObj.stop = true;
      start(monsterObj, playerObj, proportion);
    })
    .then(() => {
      pause(500).then(() => {
        showModalCast();
      });
    });
}
