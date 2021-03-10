for (let i = 0; i < 5; i++) {
  console.log('for', i);
  setTimeout(() => {
    console.log('setTimeout', i);
  }, 1000);
}
