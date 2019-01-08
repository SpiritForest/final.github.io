import 'bootstrap';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

import drawHeader from './components/header/header';
import drawNav from './components/header/navigation/nav';
import choosePlayerName from './components/header/modalChooseName/choosePlayerName';
import audioBar from './components/animationAndAudio/audioBar';
import drawFooter from './components/footer/footer';

const startApp = () => {
  window.$ = $;
  drawHeader();
  drawNav();
  audioBar();
  // showModal();
  drawFooter();
  $('.choosePlayerName').on('click', () => {
    choosePlayerName();
  });
};

startApp();
