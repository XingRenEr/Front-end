function runAsync(x) {
  const p = new Promise((resolved, reject) => {
    if (x % 2 === 0) {
      setTimeout(() => {
        console.log(x);
        resolved(x);
      }, 2000);
    } else {
      setTimeout(() => {
        console.log(x);
        resolved(x);
      }, 1000);
    }
  });
  return p;
}

Promise.all([
  runAsync(1),
  runAsync(2),
  runAsync(3)
]).then((res) => {
  console.log(res);
})
