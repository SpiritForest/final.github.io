import $ from 'jquery';
import createTable from './createTable';
import getRand from '../screenEng/getRandom';
import template from './crateModal.template';

export default
function showModal() {
  const wordObj = getRand();
  const wordEng = Object.keys(wordObj)[0];
  const wordRus = wordObj[wordEng][0];
  const body = document.querySelector('body');
  body.insertAdjacentHTML('afterbegin', template(wordRus));
  $('#demoModal').modal('show');
  const ul = createTable(wordEng);
  const modalBody = document.querySelector('.modal-body');
  modalBody.insertAdjacentElement('beforeend', ul);
  // console.log(wordRus);
}
