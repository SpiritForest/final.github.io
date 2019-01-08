import random from './getRandom';

export default function getUrl(array, item) {
  const part = random() + 1;
  const res = `./components/battle/monsters/img/bodyP${part}/${part}_ork_${item}.png`;
  for (let i = 15; i < array.length; i += 1) {
    if (array[i].path.toLowerCase() === res.toLowerCase()) {
      return array[i].url;
    }
  }
  return new Error('somethig went wrong with generation of monster\'s body');
}
