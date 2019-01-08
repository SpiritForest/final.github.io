import showScreenTaskMath from './screenMath/createMathScreen';
import showScreenTaskTranslate from './screenEng/createEngScreen';

export default
function chooseCast(eventContent) {
  switch (eventContent) {
    case 'Заклинание Ветра':
      showScreenTaskMath();
      break;

    case 'Заклинание Огня':
      showScreenTaskTranslate();
      break;
        // case '':;
        // // showScreenTaskSort();
        // break;
        // case '':;
        // // showScreenTaskSort();
        // break;
        // default:;
  }
}
