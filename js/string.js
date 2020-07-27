// 统计字符串中指定元素的出现次数
const str = 'akmdkfksmcjagkfmekgldkf';
const findStr = 'f';
let index = str.indexOf(findStr);
let count = 0;
while (index !== -1) {
  count++;
  index = str.indexOf(findStr, index + 1);
}
console.log(count);
// 统计字符串中各个字符出现的次数
const obj = {};
for (let i = 0; i < str.length; i++) {
  obj[str[i]] ? obj[str[i]]++ : obj[str[i]] = 1;
}
console.log(obj);
let max = 0;
let ch = '';
for (a in obj) {
  if (obj[a] > max) {
    max = obj[a];
    ch = a;
  }
}
console.log(ch + ': ' + max);
// substr(startIndex, length)
// substring(startIndex, endIndex) [startIndex, endIndex)