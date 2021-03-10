const promise = new Promise((resolve, reject) => {
  reject('error');
  resolve('success2');
});

let promise2 = promise.then((res) => {
  console.log('then1: ', res);
}).then((res) => {
  console.log('then2: ', res);
}).catch((error) => {
  console.log('catch: ', error);
})
/* .then((res) => {
  console.log('then3: ', res);
}) */

setTimeout(console.log, 0, promise2);
