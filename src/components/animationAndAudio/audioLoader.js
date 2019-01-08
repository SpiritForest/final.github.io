import array from './items';

export default function loadAudio() {
  const sounds = [];


  function ldAudio(path) {
    const audio = document.createElement('audio');
    audio.src = path;

    const res = {
      path,
      url: audio,
      loaded: false,
    };

    audio.onloadeddata = function load() {
      res.loaded = true;
    };

    return res;
  }

  for (let i = 0; i < array.length; i += 1) {
    sounds.push(ldAudio(array[i]));
  }

  return new Promise((resolve) => {
    setInterval(() => {
      let counter = 0;
      for (let i = 0; i < sounds.length; i += 1) {
        if (sounds[i].loaded === true) {
          counter += 1;
        } else counter = 0;
        if (counter === sounds.length) {
          resolve(sounds);
        }
      }
    }, 10);
  });
}
