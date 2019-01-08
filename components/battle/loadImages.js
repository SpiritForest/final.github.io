import array from './items';

export default function loadImages() {
  const fairy = [];


  function loadImg(path) {
    const image = document.createElement('img');
    image.src = path;

    const res = {
      path,
      url: image,
      loaded: false,
    };

    image.onload = function load() {
      res.loaded = true;
    };
    return res;
  }

  for (let i = 0; i < array.length; i += 1) {
    fairy.push(loadImg(array[i]));
  }

  return new Promise((resolve) => {
    setInterval(() => {
      let counter = 0;
      for (let i = 0; i < fairy.length; i += 1) {
        if (fairy[i].loaded === true) {
          counter += 1;
        } else counter = 0;
        if (counter === fairy.length) {
          resolve(fairy);
        }
      }
    }, 10);
  });
}
