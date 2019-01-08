import gameState from '../gameState/gameState';
import pause from '../utils/pause';
import showModal from '../header/modals/createModal';
import startBattle from '../battle/startBattle';
import showScoreTable from './showScoreTable';


export default
function checkAnswers(answer, real) {
  if (answer === real) {
    gameState.monster.health -= gameState.player.attack;
    gameState.points += gameState.player.attack;
  } else {
    gameState.player.health -= gameState.monster.attack;
  }

  if (gameState.monster.health && gameState.player.health) {
    pause(1000).then(() => {
      showModal();
    });
  }

  if (!(gameState.monster.health)) {
    gameState.monster.health = 100;
    gameState.round += 1;
    startBattle();
  }

  if (!(gameState.player.health)) {
    
    if (gameState.records.hasOwnProperty[gameState.player.name]) {
      if (gameState.points > gameState.records[gameState.player.name]) {
        gameState.records[gameState.player.name] = gameState.points;
        showScoreTable();
        console.log(`${gameState}if`);
      }
    } else {
      console.log(`${gameState}else`);
      gameState.records[gameState.player.name] = gameState.points;
      showScoreTable();
    }
  }
}
