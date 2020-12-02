console.log('index-同步任务', new Date);
Promise.resolve().then((res) => {
  console.log('index-Promise', new Date);
});
setTimeout(() => {
  console.log('index-setTimeout', new Date);
}, 1000);