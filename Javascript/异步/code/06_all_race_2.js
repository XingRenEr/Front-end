function runAsync(x) {
  const p = new Promise((res, rej) => {
    if (x === 3) {
      return setTimeout(() => {
        rej(x, console.log(x));
      }, 500);
    }
    return setTimeout(() => {
      res(x, console.log(x));
    }, 1000);
  });
  return p;
}

function runReject(x) {
  const p = new Promise((res, rej) => {
    return setTimeout(() => {
      rej(x, console.log(x));
    }, 1000 * x);
  });
  return p;
}

Promise.all([
  runAsync(1),
  runReject(4),
  runAsync(3),
  runReject(2),
]).then((res) => {
  console.log('then: ', res);
}, (err) => {
  console.log('err: ', err);
}).catch((err) => {
  console.log('catch: ', err);
})
