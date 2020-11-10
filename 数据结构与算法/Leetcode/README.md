# 字符串
## 剑指 Offer 58 - Ⅱ.左旋转字符串
字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

示例 1：

输入: s = "abcdefg", k = 2
输出: "cdefgab"
示例 2：

输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"
 

限制：

1 <= k < s.length <= 10000

```JS
var reverseLeftWords = function(s, n) {
	// 方法一：slice
	return s.slice(n) + s.slice(0, n)
};
```

## 剑指 Offer 58 - Ⅰ.翻转单词顺序
输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

示例 1：

输入: "the sky is blue"
输出: "blue is sky the"
示例 2：

输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
示例 3：

输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 

说明：

无空格字符构成一个单词。
输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

```JS
var reverseWords = function(s) {
	s = s.trim();
	var arr = s.split(/\s+/);
	return arr.reverse().join(' ');
};
```

# 数组
## 数组去重
### 剑指 Offer 03.数组中的重复数字
找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
 

限制：

2 <= n <= 100000

```JS
// 方法一：暴力 时间O(n2)，空间O(1)
var findRepeatNumber = function(nums) {
	const numLength = nums.length
	for (var i = 0; i < numLength; i++) {
		for (var j = i + 1; j < numLength; j++) {
			if (nums[j] === nums[i]) {
				return nums[i]
			}
		}
	}
};
```
```JS
// 方法二：数组模拟Java中的哈希表 时间O(n)，空间O(n)
var findRepeatNumber = function(nums) {
	var newNums = new Array(nums.length)
	newNums.fill(-1)
	for(var i in nums) {
		if(newNums[nums[i]] !== -1) {
			return nums[i]
		}
		newNums[nums[i]] = i
	}
};
```
```JS
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
```
```js
// 方法四：二分法 如果面试官要求空间O(1)并且不能修改原数组，还得写成二分法
```

