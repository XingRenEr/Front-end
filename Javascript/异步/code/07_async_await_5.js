// 15.10题目十

async function async1() {
  await async2();
  console.log('async1');
  return 'async1 success';
}

async function async2() {
  return new Promise((resolve, reject) => {
    console.log('async2');
    reject('error');
  })
}

async1().catch((err) => {
  console.log('err: ', err);
})