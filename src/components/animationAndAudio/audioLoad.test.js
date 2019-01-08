import loadAudio from './audioLoader';
import playAudio from './playAudio';

describe('Modal', () => {
  it('drow modal template into the body', () => {
    loadAudio()
      .then((music) => {
        playAudio(music[0]);
      })
      .then(() => {
        const item = document.querySelectorAll('audio');
        expect(item.length).toBe(1);
      });
  });
});
