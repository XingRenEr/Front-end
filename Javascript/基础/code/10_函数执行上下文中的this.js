/* window.color = 'red';
let o = {
  color: 'blue'
};
let sayColor = () => console.log(this.color);
sayColor(); // 'red'
o.sayColor = sayColor;
o.sayColor(); // 'red' */

/* let myObj = {
  myName: 'jsliang',
  showThis: function() {
    console.log(this.myName);
  },
};
let foo = myObj.showThis; // showThis函数的执行上下文变为全局上下文，即被window调用
foo(); // 输出啥？ */

/* let myObj = {
  myName: 'jsliang',
  showThis: function() { // 另外一种使 showThis函数的执行上下文变为全局上下文 的方法
    setTimeout(function() {
      console.log(this.myName);
    }, 1000)
  },
};
myObj.showThis(); */

/* var name = 'window name';
function fn() {
  var myname = 'jsliang';
  function innerFn() {
    console.log(this.myname);
  };
  innerFn();
}
fn(); */

/* var myObj = {
  myName: "jsliang", 
  showThis: function(){
    console.log(this, this.myName); // 输出啥？myObj
    function bar(){
      console.log(this, this.myName); // 输出啥？Window
    }
    bar();
  },
};
myObj.showThis(); */

/* function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  console.log(this);
  fn();
}
var obj = { a: 1, foo };
var a = 2;
doFoo(obj.foo); // 输出啥？ */

function foo() {
  console.log(this.a);
}

function doFoo(fn) {
  console.log(this);
  fn();
}
var obj = {
  a: 1,
  foo
};
var a = 2;
var obj2 = {
  a: 3,
  doFoo
};

obj2.doFoo(obj.foo); // 输出啥？
