export default
function mathGenerator(len) {
  const arr = [];
  let str = '';
  const operand = ['+', '-', '*', '/'];

  for (let i = 0; i < len; i += 1) {
    arr[i] = Math.floor(Math.random() * 20 + 1);
  }

  for (let i = 0; i < len - 1; i += 1) {
    str += arr[i];
    if (arr[i] % arr[i + 1] === 0) str += operand[3];
    else {
      str += operand[Math.floor(Math.random() * 3)];
    }
  }

  str += arr[arr.length - 1];
  return [str, eval(str)];
}
