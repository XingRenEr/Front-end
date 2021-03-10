// async函数return await和return的区别(不知道)

/* example 1 */

async function bar() {
  return await Promise.resolve('bar');
}

bar().then(console.log);

// async function bar() {
//   return Promise.resolve('bar');
// }

// bar().then(console.log);
