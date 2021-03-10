/* let str = "abcdefg";

console.log(str.substr(1,6));  //"bcdefg" 6代表切割的length
console.log(str.substr(1));   //"bcdefg" [1,str.length-1]
console.log(str.substr());  //"abcdefg" [0,str.length-1]
console.log(str.substr(-1));  //"g"
console.log(str.substr(-1, -2));  //""

console.log(str.match('bc'))
console.log(str.indexOf('bc')) */

var str = "Hello world!"
document.write(str.match("world") + "<br />")
document.write(str.match("world") + "<br />")
document.write(str.match("worlld") + "<br />")
document.write(str.match("world!"))