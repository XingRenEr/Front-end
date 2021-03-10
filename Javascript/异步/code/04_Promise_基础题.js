const promise1 = new Promise((resolve, reject) => {
  console.log('promise1');
  resolve('resolve1');
})

const promise2 = promise1.then((res) => {
  console.log(res);
});

console.log('1', promise1);
// debugger;
// console.log('2', promise2);
setTimeout(console.log, 0, '2', promise2);
