const one = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('one');
    reject('one reject');
  }, 1000);
})
const two = new Promise((resolve) => {
  setTimeout(() => {
    console.log('two');
    resolve('two resolve');
  }, 3000);
})
const three = new Promise((resolve) => {
  setTimeout(() => {
    console.log('three');
    resolve('three resolve');
  }, 2000);
})

Promise.race([one, two, three]).then((res) => {
  console.log(res);
}, (err) => {
  console.log(err);
});