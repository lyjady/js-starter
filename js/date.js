// 构造时间对象
let d1 = new Date();
console.log(d1);
let d2 = new Date('2020-07-22 15:08:00');
console.log(d2);

// 获取具体时间, 月的索引从0开始, 星期从周日开始索引也是0
console.log(d2.getFullYear());
console.log(d2.getMonth() + 1);
console.log(d2.getDate());
console.log(d2.getHours());
console.log(d2.getMinutes());
console.log(d2.getSeconds());

console.log(d2.getDay());
