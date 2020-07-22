function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function () {
    console.log(this.name + this.age);
  }
}

let person = new Person('Jack', 12);
person.hello()
// 遍历对象属性(获取对象熟悉可以使用object['attrName']的形式)
for (attr in person) {
  console.log(attr + ':' + person[attr]);
}