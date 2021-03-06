// 1. 根据构造函数返回值创建对象
/* function Person( name, age){
  this.name = name;
  this.age = age;
 
  // return;                              // 返回 this
  // return null;                         // 返回 this
  // return this;                         // 返回 this
  // return false;                        // 返回 this
  // return 'hello world';                // 返回 this
  // return 2;                            // 返回 this
  
  // return [];                           // 抛弃 this, person.name = undefined, 返回 新建的 []
  // return function(){};                 // 抛弃 this, person.name = undefined, 返回 新建的 function
  // return new Boolean(false);           // 抛弃 this, person.name = undefined, 返回 新建的 boolean
  // return new String('hello world');    // 抛弃 this, person.name = undefined, 返回 新建的 string
  // return new Number(32);               // 抛弃 this, person.name = undefined, 返回 新建的 number
}

var person = new Person("jsliang", 25);
console.log(person); // Person {name: "jsliang", age: 25} */

// 2. 简易版手写new
/* function myNew(func, ...args) {
  var tempObj = {};
  func.apply(tempObj, args);
  return tempObj;
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person = myNew(Person, 'joanna', 23);
console.log(person); */

// 3. 完全版手写new
function myNew(func, ...args) {
  if (typeof func != "function") {
    throw '不是合适的构造器';
  }
  const tempObj = {};
  tempObj.__proto__ = func.prototype;
  // const tempObj = Object.create(func.prototype);
  const funcObj = func.apply(tempObj, args);
  return (typeof funcObj == 'object' && funcObj != null) || typeof funcObj == 'function' ? funcObj : tempObj;
}
function Person(name, age) {
  this.name = name;
  this.age = age;
  return [null];
}
let person = myNew(Person, 'joanna', 23);
console.log(person);