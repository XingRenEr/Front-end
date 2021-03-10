var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = "hello";
  }
}

f(); // undefined

/* function f() {
  console.log(tmp);
}

f(); // 日期 */
