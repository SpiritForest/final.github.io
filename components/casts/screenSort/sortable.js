export default
function sortable(word) {
  function compareRandom() {
    return Math.random() - 0.5;
  }

  const arr = word.split('');
  arr.sort(compareRandom);

  return arr;
}
