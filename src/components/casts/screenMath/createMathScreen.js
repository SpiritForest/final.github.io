import $ from 'jquery';
import template from './createMathScreen.template';
import mathGenerator from './mathGenerator';
import pause from '../../utils/pause';
import checkAnswers from '../checkAnswers';

export default
function showScreenTaskMath() {
  const paradigm = mathGenerator(2);
  $('#demoModal').append(template(paradigm[0])).modal('show');
  $('.js-form').on('submit', (e) => {
    e.preventDefault();
    const val = +$('.form-control').val();

    pause(0)
      .then(() => {
        $('#demoModal').modal('hide').empty();
      })
      .then(() => {
        checkAnswers(val, paradigm[1]);
      });
  });
}
