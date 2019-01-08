import sortable from './sortable';

export default
function createTable(wordEng) {
  const ul = document.createElement('ul');
  ul.id = 'sort1';
  const arr = sortable(wordEng);
  const li = document.createElement('div');
  // const span = document.createElement('span');
  // span.className = 'ui-icon ui-icon-carat-2-n-s';
  // li.appendChild(span);

  for (let i = 0; i < arr.length; i += 1) {
    const liItem = li.cloneNode(true);
    liItem.innerHTML = `${arr[i]}`;
    ul.appendChild(liItem);
  }
  return ul;
}
