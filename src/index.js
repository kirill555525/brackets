module.exports = function check(str, bracketsConfig) {
  let obj = {};
  for (let arr of bracketsConfig) {
    obj[arr[0]] = arr[1];
  }

  let new_str = '';

  for (let i = 0; i < str.length; i++) {
    new_str += str[i];
    if (!Object.values(obj).includes(str[i])) continue;

    if (str[i] === obj[new_str.at(-2)]) {
      new_str = new_str.slice(0, -2);
      continue;
    }

    if (Object.keys(obj).includes(str[i])) continue;

    break;

  }
  
  return new_str === '';

}
