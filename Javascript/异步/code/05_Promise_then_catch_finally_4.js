Promise
  .resolve('1')
  .finally(() => {
    console.log('finally1');
    return throw new Error('我是 finally1 中抛出的异常');
  }).then((res) => {
    console.log('finally 后面的 then 函数: ', res);
  }).catch((err) => {
    console.log('捕获错误: ', err);
  })
