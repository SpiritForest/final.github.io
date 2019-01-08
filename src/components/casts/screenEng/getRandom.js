import vocab from './vocab';

export default
function getRand() {
  const length = Object.keys(vocab).length;
  const rand = Math.floor(Math.random() * length);
  let counter = 0;
  const result = {};

  if (Object.keys(vocab).length) {
    for (const key in vocab) {
      if (counter === rand) {
        result[key] = vocab[key];
        break;
      }
      counter += 1;
    }
  }

  return result;
}
