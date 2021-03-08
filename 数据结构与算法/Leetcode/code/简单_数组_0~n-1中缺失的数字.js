var missingNumber = function(nums) {
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
};

var nums = [0, 1, 2];
console.log(missingNumber(nums));