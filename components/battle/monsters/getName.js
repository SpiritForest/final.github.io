import random from './getRandom';

export default function getName() {
  const nameArray1 = ['Ужасный', 'Злобный', 'Сопливый'];
  const nameArray2 = ['огр', 'гном', 'гоблин'];
  const nameArray3 = ['Том', 'Макс', 'Дима'];

  const name = `${nameArray1[random()]} ${nameArray2[random()]} ${nameArray3[random()]}`;
  return name;
}
