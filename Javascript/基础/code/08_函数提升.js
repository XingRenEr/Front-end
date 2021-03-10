var foo = 3;

/* function getFoo() {
  var foo = foo || 5;
  console.log(foo); // 输出 5
} */

/* function getFoo() {
  var foo = foo;
  console.log(foo); // 输出 undefined
} */

function getFoo() {
  console.log(foo); // 输出 3
}

getFoo();
