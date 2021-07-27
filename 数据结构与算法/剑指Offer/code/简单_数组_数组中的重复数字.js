// 前提：数组元素在 0 ~ n-1 之间

// 方法一：暴力 时间O(n2)，空间O(1)
/* var findRepeatNumber = function(nums) {
  const numLength = nums.length
  for (var i = 0; i < numLength; i++) {
    for (var j = i + 1; j < numLength; j++) {
      if (nums[j] === nums[i]) {
        return nums[i]
      }
    }
  }
}; */

// 方法二：数组模拟Java中的哈希表 时间O(n)，空间O(n)
/* var findRepeatNumber = function(nums) {
  var newNums = new Array(nums.length)
  newNums.fill(-1)
  for(var i in nums) {
    if(newNums[nums[i]] !== -1) {
      return nums[i]
    }
    newNums[nums[i]] = i
  }
}; */

// 方法三：利用原地排序的思路 时间O(n)，空间O(1)
var findRepeatNumber = function(nums) {
  for (var i in nums) {
    var temp
    while (nums[i] != i) {
      if (nums[nums[i]] === nums[i]) {
        return nums[i]
      } else {
        temp = nums[nums[i]]
        nums[nums[i]] = nums[i]
        nums[i] = temp
      }
    }
  }
};

var num = findRepeatNumber([0, 1, 2, 3, 4, 6, 11, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
