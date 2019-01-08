import $ from 'jquery';
import template from './choosePlayerName.template';
import startBattle from '../../battle/startBattle';
import gameState from '../../gameState/gameState';

export default function createModal() {
  const modal = document.querySelector('body');
  modal.insertAdjacentHTML('afterbegin', template);
  $('.js-form').on('submit', (e) => {
    e.preventDefault();
    const playerName = $('.form-control').val();
    gameState.player.name = playerName;

    if (playerName) {
      $('#demoModal').remove();
      $('.choosePlayerName').text(gameState.player.name);
      startBattle();
    } else {
      $('#formHelp').text('Герой не может быть без имени');
    }
  });
}
