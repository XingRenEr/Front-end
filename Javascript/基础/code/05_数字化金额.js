// 方法一：使用API toLocaleString 
/* function myFunc(num) {
  return num.toLocaleString('en-US')
} */

// 方法二：使用正则表达式

// 方法三：使用API reduce 
/* function myFunc(num) {
  var str = String(num)
  var newStr = str.split('').reverse().reduce((acc, item, index) => {
    return item + (index !== 0 && index % 3 === 0 ? ',' : '') + acc
  })
  return newStr
} */

// 方法四：暴力遍历
function myFunc(num) {
  var str = String(num)
  var newStr = ''
  var strLen = str.length
  for (var i = 0; i < strLen; i++) {
    newStr = str[strLen - i - 1] + (i !== 0 && i % 3 === 0 ? ',' : '') + newStr
  }
  return newStr
}

var result = myFunc(12345678900)
console.log(result)