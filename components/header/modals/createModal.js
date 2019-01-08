import $ from 'jquery';
import pause from '../../utils/pause';
import template from './createModal.template';
import chooseCast from '../../casts/chooseCast';

export default function showModal() {
  if (document.querySelectorAll('#demoModal').length === 1) {
    $('#demoModal').remove();
  }
  const modal = document.querySelector('body');
  modal.insertAdjacentHTML('afterbegin', template);
  $('#demoModal').modal('show');

  $('.js-form').on('click', (e) => {
    e.preventDefault();
    const eventContent = e.target.innerHTML;
    $('#demoModal').modal('hide').empty();
    pause(500).then(() => chooseCast(eventContent));
  });
}
