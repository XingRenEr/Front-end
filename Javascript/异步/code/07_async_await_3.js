/* example 1 */

async function bar() {
  return await Promise.resolve('bar');
}

bar().then(console.log);

// async function bar() {
//   return Promise.resolve('bar');
// }

// bar().then(console.log);