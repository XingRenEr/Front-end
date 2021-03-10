// async函数没有显式返回值
async function foo() {
  console.log(1);
  // return 3
}

foo().then(console.log);

console.log(2);
