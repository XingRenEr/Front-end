var exchange = function(nums) {
    var l = 0, r = nums.length-1;
    while(l<r) {
        if (nums[l]%2 != 0) {
            l++;
        }
        if (nums[r]%2 ==0){
            r--;
        }
        if (nums[l]%2 == 0 && nums[r]%2 !=0){
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++,r--;
        }
    }
    return nums;
};