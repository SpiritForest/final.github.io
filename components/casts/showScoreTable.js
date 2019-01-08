import $ from 'jquery';

import gameState from '../gameState/gameState';
import template from './showScoreTable.template';
import pause from '../utils/pause';

export default
function showScoreTable() {
  const ol = document.createElement('ol');
  const li = document.createElement('li');

  for (const key in gameState.records) {
    const liItem = li.cloneNode(true);
    liItem.innerHTML = `${key}: ${gameState.records[key]}`; // there must be request to a server
    ol.appendChild(liItem);
  }
  $('#demoModal').append(template());
  pause(500).then(() => {
    $('.modal-body').append(ol); 
    $('#demoModal').modal('show');
  })
}
