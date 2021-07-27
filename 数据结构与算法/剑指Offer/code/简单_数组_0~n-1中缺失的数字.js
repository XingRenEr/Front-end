/* var missingNumber = function(nums) {
  var l = 0,
    r = nums.length - 1;
  var middle;
  if (nums[0] > 0) {
    return 0;
  } else if (nums[r] === r) {
    return r + 1;
  } else {
    while (r - l > 1) {
      middle = Math.floor((l + r) / 2);
      if (nums[middle] > middle) {
        r = middle;
      } else {
        l = middle;
      }
    }
    return nums[l] + 1;
  }
}; */
var missingNumber = function(nums) {
  var l = 0,
    r = nums.length - 1;
  var middle;
  if (nums[r] == r) return r + 1;
  while (l < r) {
    middle = Math.floor((l + r) / 2);
    if (nums[middle] > middle) {
      r = middle;
    } else {
      l = middle + 1;
    }
  }
  return nums[l] - 1;
};

var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(missingNumber(nums));
