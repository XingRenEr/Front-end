Promise
  .resolve('1')
  .then((res) => {
    console.log(res);
  }).finally(() => {
    console.log('finally1');
  });

Promise
  .resolve('2')
  .finally(() => {
    console.log('finally2');
    return '这里是 finally2';
  }).then((res) => {
    console.log('finally2 后面的 then 函数', res);
  })
