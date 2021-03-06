const arr = [1, 1, 2, 3, 3];
// 期望得到：[1, 2, 3]

// 方法一：includes
var newArr1 = [];
arr.forEach((item) => {
  if (!newArr1.includes(item)) {
    newArr1.push(item);
  }
});
console.log('newArr1', newArr1);

// 方法二：Set
var newArr2 = [...new Set(arr)];
console.log('newArr2', newArr2);

// 方法三：filter
var newArr3 = arr.filter((item, index) => arr.lastIndexOf(item) === index);
console.log('newArr3', newArr3);

// 方法四：不使用数组API
// (1) 暴力遍历
var newArr4 = [arr[0]];
for (var i = 1; i < arr.length; i++) {
  var repeatflag = false;
  for (var j = 0; j < newArr4.length; j++) {
    if (arr[i] === newArr4[j]) {
      repeatflag = true;
      break;
    }
  }
  if (!repeatflag) {
    newArr4[newArr4.length] = arr[i];
  }
}
console.log('newArr4', newArr4);
// (2) 二分法
