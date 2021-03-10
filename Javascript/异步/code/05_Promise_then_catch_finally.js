const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('timer');
    resolve('success');
  }, 0);
});

const start = Date.now();

promise.then((res) => {
  console.log(res, Date.now() - start);
});

promise.then((res) => {
  console.log(res, Date.now() - start);
});
