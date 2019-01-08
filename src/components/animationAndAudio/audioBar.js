import playAudio from './playAudio';
import loadAudio from './audioLoader';

export default
function audioBar() {
  loadAudio()
    .then((music) => {
      const audio = playAudio(music[0]);
      const div = document.createElement('div');
      div.classList.add('audioBar');
      const button = document.createElement('div');
      button.classList.add('button-audioBar');
      button.classList.add('mute');
      // const button2 = button.cloneNode(true);
      const main = document.querySelector('main');
      main.insertAdjacentElement('afterbegin', div);
      div.insertAdjacentElement('afterbegin', button);
      // div.insertAdjacentElement('afterbegin', button2);
      div.addEventListener('click', (e) => {
        e.target.classList.toggle('mute');
        if (e.target.classList.contains('mute')) {
          audio.pause();
        } else {
          audio.play();
        }
      });
    });
}
