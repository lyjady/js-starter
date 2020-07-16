// arguments传入这个函数的全部参数取得, arguments是一个伪数组具有数据的特性, 但是没有数据的push、pop等方法
function args() {
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
  let arr = [1, 2, 3, 4, 5];
  // arguments无数组的方法
  arr.forEach(item => {
    console.log(item);
  })
}
args(1, 2, 3, 4, 5)
