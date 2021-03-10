// awaitÔÝÍ£ºÍ»Ö¸´Ö´ÐÐ

/* example 1 */

async function foo() {
  console.log(await Promise.resolve('foo'));
  console.log(3);
}

foo();
console.log(2);

/* 2
 * foo
 * 3
 */

/* example 2 */

// async function foo() {
//   console.log(Promise.resolve('foo'));
//   console.log(3);
// }

// foo();
// console.log(2);

/* PromiseÂ {<fulfilled>: "foo"}
 * 3
 * 2
 */
