/* var search = function(nums, target) {
  var left = 0,
    right = nums.length - 1,
    middle = Math.floor((right - left) / 2),
    temp;

  while (nums[middle] !== target) {
    if (middle !== left || middle !== right) {
      if (right - left === 1 && nums[left] !== target && nums[right] !== target) {
        return 0
      } else { // 没有结束，继续寻找
        temp = middle
        if (target < nums[middle]) {
          middle = Math.floor((left + middle) / 2)
          right = temp
        } else {
          middle = Math.ceil((middle + right) / 2)
          left = temp
        }
      }
    } else { // 没找到，返回0
      return 0
    }
  }

  while (nums[middle - 1] === target) { // 将指针移动到最左边
    middle--
  }

  left = middle

  while (nums[middle + 1] === target) { // 将指针移动到最右边
    middle++
  }

  return middle - left + 1

}; */

var search = function(nums, target) {
  var left = 0,
    right = nums.length - 1,
    middle, count = 0;

  while (left < right) {
    middle = Math.floor((right + left) / 2);
    if (nums[middle] >= target) {
      right = middle
    } else {
      left = middle + 1
    }
  }

  while (left < nums.length && nums[left++] == target) {
    count++
  }
  
  return count

};

var nums = [5, 7, 7, 8, 8, 10],
  target = 8;
console.log(search(nums, target));
