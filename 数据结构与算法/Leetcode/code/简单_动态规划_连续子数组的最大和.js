var maxSubArray = function(nums) {
    var res = nums[0], tempMax = -101, sum;
    for (let i = 1; i <= nums.length - 1; i++) {
        sum = 0;
        for(let j = i; j >= 0; j--) {
            sum += nums[j];
            tempMax = tempMax < sum ? sum : tempMax;
        }
        res = Math.max(res, tempMax);
    }
    return res;
};