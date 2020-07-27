let arr = [1, 2, 3, 4, 5]
// 判断是否为数据
console.log(Array.isArray(arr));
// push向数组尾部追加元素, 返回追加后数据的长度
console.log(arr.push(6, 7));
console.log(arr);

//unshift向数组头部追加元素, 返回追加后数据的长度
console.log(arr.unshift(-1, 0));
console.log(arr);

// pop()弹出数组最后一位元素, 返回值是弹出单位元素
console.log(arr.pop())
// shift()弹出数组第一位元素, 返回值是弹出单位元素
console.log(arr.shift())

// reverse()反转数组, 会改变原数组
let arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr2.reverse());
console.log(arr2)

// sort(function (a, b) {...}) 对数组进行排序, 参数传入排序的函数, a - b是升序, b - a是降序, 会改变数组的
let arr3 = [2, 5, 6, 1, 12, 9, 8, 10];
console.log(arr3.sort((a, b) => a - b));

// indexOf 指定元素的索引(从头开始), lastIndexOf 指定元素的索引(从尾部开始)
console.log(arr3.indexOf(2));
console.log(arr3.lastIndexOf(2));

// concat 连接数组 返回新数组
console.log(arr2.concat(['aa', 'bb'], ['cc', 'dd']))
console.log(arr2)

// slice(startIndex, endIndex) 不包含endIndex 截取数组, 返回截取后的数组, 不会改变原数组
console.log(arr2.slice(0, 1))
console.log(arr2)

// splice(startIndex, deleteCount) 截取数组, 返回截取后的数组, 会改变原数组
console.log(arr2.splice(0, 2))
console.log(arr2)

// 将数组转成字符串
console.log(arr.toString());

// 使用指定的字符分割数组
console.log(arr.join(";"))