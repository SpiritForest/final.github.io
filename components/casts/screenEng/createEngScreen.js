import $ from 'jquery';

import template from './createEngScreen.template';
import getRand from './getRandom';
import pause from '../../utils/pause';
import checkAnswers from '../checkAnswers';

export default function createEngScreen() {
  const result = getRand();
  const key = Object.keys(result)[0];
  $('#demoModal').append(template(key)).modal('show');
  $('.js-form').on('submit', (e) => {
    e.preventDefault();
    const val = $('.form-control').val();

    pause(0)
      .then(() => {
        $('#demoModal').empty();
      })
      .then(() => {
        if (result[key].find((v) => {
          if (v === val) {
            return true;
          }

          return false;
        })) checkAnswers(true, true); // do if right
        else {
          checkAnswers(false, true);
        } // do if wrong
      });
  });
}
