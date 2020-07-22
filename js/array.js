let arr = [1, 2, 3, 4, 5]
// 判断是否为数据
console.log(Array.isArray(arr));
// push向数组尾部追加元素, 返回追加后数据的长度
console.log(arr.push(6, 7));
console.log(arr);

//unshift向数组头部追加元素, 返回追加后数据的长度
console.log(arr.unshift(-1, 0));
console.log(arr);