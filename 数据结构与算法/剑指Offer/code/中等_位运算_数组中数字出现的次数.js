var singleNumber = function(nums) {
    var a = 0, b = 0;
    for (let num of nums) {
        debugger;
        b = b ^ num & ~a;
        a = a ^ num & ~b;
    }
    return b;
};

var nums = [3, 4, 3, 3];
singleNumber(nums);