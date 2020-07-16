// Number
// 最大值
console.log(Number.MAX_VALUE)
// 最小值
console.log(Number.MIN_VALUE)
// 无穷大
console.log(Number.MAX_VALUE * 2)
// 无穷小
console.log(Number.MIN_VALUE  -231)
console.log('------------------');
// Boolean与Number类型的对应关系 true -> 1 false ->0
console.log(true + 1);
console.log(false + 1);
console.log('------------------');
// null在调用typeof方法是Object类型, 是空的意思转换为Number为0
// undefined是当声明了变量但是没有赋予初始值时
// + 运算符如果是有一个String那么最终的结果也是字符串, 如果都不是那么会被转换成Number进行运算
// undefined + 1 -> NaN, true + false -> 1, null + 1 -> 0, true + null -> 1, false + null -> 0
console.log(undefined + 1)
console.log(true + false)
console.log(null + 1)
console.log(true + null)
console.log(false + null)
// ('', 0 ,undefined, null) 转成Boolean为false, 其他均为true
// 短路非和短路与如果第一个表达式能确定结果就将第一个表达式的结果返回, 如果不能那么就继续判断后面的表达式, 如果表达式能确定结果就将返回值返回
