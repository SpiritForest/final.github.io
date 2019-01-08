import pause from '../utils/pause';
import monster from './monsters/drawMonster';
import player from './player/drawPlayer';
import stopObj from '../gameState/stopAnimation';
import showBar from './showBar';

export default function start(monsterObj, playerObj, proportion) {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  ctx.scale(proportion, proportion);
  let pose = 0;
  const changePose = 1;

  function run() {
    ctx.clearRect(0, 0, canvas.width / proportion, canvas.height / proportion);
    player(playerObj, pose,
      (canvas.width * 0.079) / proportion,
      (canvas.height * 0.37) / proportion);
    monster(monsterObj, -150 * proportion);
    showBar(playerObj);
    pose += changePose;
    if (pose > 4) pose = 0;

    pause(500).then(() => {
      requestAnimationFrame(() => {
        if (stopObj.stop === true) {
          return;
        }
        run(playerObj, monsterObj);
      });
    });
  }
  pause(500).then(() => {
    stopObj.stop = false;
    run();
  });
}
