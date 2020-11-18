# 字符串
## (简单) 剑指 Offer 58 - Ⅱ. 左旋转字符串
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

## (简单) 剑指 Offer 58 - Ⅰ. 翻转单词顺序
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


# 线性结构
## 数组
### (简单) 数组去重
#### 剑指 Offer 03. 数组中的重复数字
找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

输入：  
[2, 3, 1, 0, 2, 5, 3]  
输出：2 或 3 
 

限制：

2 <= n <= 100000

(加分项：问时间、空间复杂度)  
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

#### 数组去重

数组去重是个经常提及的点：

```JS
const arr = [1, 1, 2, 3, 3];
// 期望得到：[1, 2, 3]
```

解答：  
```JS
// 方法一：includes
const newArr1 = [];
for (let i = 0; i < arr.length; i++) {
  if (!newArr1.includes(arr[i])) {
    newArr1.push(arr[i]); 
  }
}
console.log('newArr1：', newArr1);
```

```JS
// 方法二： Set
const newArr2 = [...new Set(arr)];
console.log('newArr2：', newArr2);
```

```JS
// 方法三： filter
const newArr3 = arr.filter((item, index) => arr.lastIndexOf(item) === index);
console.log('newArr3：', newArr3);
```

有一次面试碰到的有意思的提问是：不使用数组 `API` 进行去重。

> 注意：不能使用 `push`、`indexOf` 等 `API`

```JS
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
```

### (简单) 剑指 Offer 53 - Ⅰ. 在排序数组中查找数字Ⅰ
统计一个数字在排序数组中出现的次数。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8  
输出: 2  
示例 2:  

输入: nums = [5,7,7,8,8,10], target = 6  
输出: 0  

限制：

0 <= 数组长度 <= 50000

```JS
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
  target = 6;
console.log(search(nums, target));
```

### (简单) 剑指 Offer 29. 顺时针打印矩阵
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 

限制：

0 <= matrix.length <= 100  
0 <= matrix[i].length <= 100  

```js
var spiralOrder = function(matrix) {
  var j = 0; // 用于判断是第几行/列
  var newMatrix = [];

  while (matrix.length !== 0) {
    switch (j++ % 4) {
      case 0:
        newMatrix = [...newMatrix, ...matrix.shift()];
        break;
      case 1:
        matrix.forEach((item) => {
          newMatrix.push(item.pop());
        });
        if (matrix[0] && matrix[0].length === 0) { // 防止[[],[],[]]这种情况出现
          matrix = [];
        }
        break;
      case 2:
        newMatrix = [...newMatrix, ...matrix.pop().reverse()];
        break;
      case 3:
        for (let i = matrix.length - 1; i >= 0; i--) {
          newMatrix.push(matrix[i].shift());
        }
        if (matrix[0] && matrix[0].length === 0) { // 防止[[],[],[]]这种情况出现
          matrix = [];
        }
    }
  }

  return newMatrix;
};

var matrix = [
  [7],
  [9],
  [6]
];
console.log(spiralOrder(matrix));
```

### (简单) 剑指 Offer 53 - Ⅱ. 0~n-1中缺失的数字
一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

示例 1:

输入: [0,1,3]  
输出: 2  
示例 2:  

输入: [0,1,2,3,4,5,6,7,9]  
输出: 8  

限制：

1 <= 数组长度 <= 10000

```js
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
```

## 栈  
### (简单) 剑指 Offer 09. 用两个栈实现队列
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

示例 1：

输入：  
["CQueue","appendTail","deleteHead","deleteHead"]  
[[],[3],[],[]]  
输出：[null,null,3,-1]  
示例 2：  

输入：  
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]  
[[],[],[5],[2],[],[]]  
输出：[null,-1,null,null,5,2]  
提示：  

1 <= values <= 10000  
最多会对 appendTail、deleteHead 进行 10000 次调用  

```js
// 方法一：
var CQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    while(this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop());
    };
    this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    while(this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
    };
    return this.stack2.pop() || -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
```

### (简单) 剑指 Offer 30. 包含min函数的栈
定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

示例:

MinStack minStack = new MinStack();  
minStack.push(-2);  
minStack.push(0);  
minStack.push(-3);  
minStack.min();   --> 返回 -3.  
minStack.pop();  
minStack.top();      --> 返回 0.  
minStack.min();   --> 返回 -2.  
 
提示：

各函数的调用总次数不超过 20000 次
 
```js
// 方法一：数组中存储对象
var MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(x) {
    if(this.stack.length === 0) {
        this.stack[0] = {
            num: x,
            min: x
        };
    } else {
        this.stack[this.stack.length] = {
            num: x,
            min: Math.min(this.stack[this.stack.length - 1].min, x)
        };
    }
};

MinStack.prototype.pop = function() {
    this.stack.length--;
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].num;
};

MinStack.prototype.min = function() {
    return this.stack[this.stack.length - 1].min;
};
```

```js
// 方法二：两个数组，不用每一步都存储当前最小值
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function(x) {
    if(this.stack.length === 0) {
        this.minStack[0] = x;
    } else {
        if (x <= this.minStack[this.minStack.length - 1]) {
          this.minStack[this.minStack.length] = x
        }
    }
    this.stack[this.stack.length] = x;
};

MinStack.prototype.pop = function() {
    if (this.minStack[this.minStack.length - 1] === this.stack[this.stack.length - 1]) {
        this.minStack.length--;
    }
    this.stack.length--;
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.min = function() {
    return this.minStack[this.minStack.length - 1];
};
```

## 链表  
### (简单) 剑指 Offer 22. 链表中倒数第k个节点
输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。

示例：

给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.

```js
// 方法一：用数组存放所有节点的指针 时间O(n)，空间O(n)
var getKthFromEnd = function(head, k) {
    var p = head;
    var pArr = [];
    while(p != null) {
        pArr.push(p);
        p = p.next;
    }
    return pArr[pArr.length - k];
};
```

```js
// 方法二：快慢指针 时间O(n)，空间O(1)
var getKthFromEnd = function(head, k) {
    var pFront = head, pBehind = head;
    while(k-- > 0) {
        pFront = pFront.next;
    }
    while(pFront != null) {
        pFront = pFront.next;
        pBehind = pBehind.next;
    }
    return pBehind;
};
```

### (简单) 剑指 Offer 06. 从尾到头打印链表
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

示例 1：

输入：head = [1,3,2]  
输出：[2,3,1]  

限制：

0 <= 链表长度 <= 10000

```js
// 方法一 时间O(n)，空间O(n)
var reversePrint = function(head) {
    var p = head;
    var pArr = [];
    while(p != null) {
        pArr.push(p.val);
        p = p.next;
    }
    pArr.reverse();
    return pArr;
};
```

```js
// 方法一 时间O(n)，空间O(n)
// 代码简洁了，但是貌似时间更久了？
var reversePrint = function(head) {
    let nums = [];
    let node = head;
    while (node !== null) {
        nums.unshift(node.val);
        node = node.next;
    }
    return nums;
};
```

### (简单) 剑指 Offer 24. 反转链表
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

示例:

输入: 1->2->3->4->5->NULL  
输出: 5->4->3->2->1->NULL  

限制：

0 <= 节点个数 <= 5000

```js
// (我的方法)
// 方法一：pLeft pMiddle pRight三个指针，移动顺序为左中右
var reverseList = function(head) {
    if (head === null) { // 空链表
        return null;
    }
    var pLeft = null, pMiddle = head, pRight = pMiddle.next;
    if (pRight === null) { // 只有一个元素的链表
        return pMiddle;
    }
    pMiddle.next = null;
    do {
        pLeft = pMiddle;
        pMiddle = pRight;
        pRight = pRight.next;
        pMiddle.next = pLeft;
    } while (pRight != null)
    return pMiddle;
};
```

![1.jpg](https://github.com/XingRenEr/Front-end/blob/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/Leetcode/images/1.jpg)  
```js
// 方法一：双指针(官方方法。和上面的方法几乎无差别，但是'双指针'比'三个指针'思路更清晰)
var reverseList = function(head) {
    if (head === null) { // 空链表
        return null;
    }
    var cur = null, pre = head;
    if (pre.next === null) { // 只有一个元素的链表
        return pre;
    }
    while (pre != null) {
        var t = pre.next;
        pre.next = cur;
        cur = pre;
        pre = t;
    } 
    return cur;
};
```

```js
// (我的方法)
// 方法二：链表入栈 空间O(n)
var reverseList = function(head) {
    // 空链表 或 只有一个元素的链表
    if (head == null || head.next == null) {
        return head;
    }

    var arr = [];
    while(head != null) {
        arr.push(head); // 入栈
        head = head.next;
    }
    head = arr.pop();
    var t = head;
    while (t.next = arr.pop()) { // 出栈
        t = t.next;
    }
    t.next = null;
    return head;
};
```

```js
// 方法二：递归。递归的内部实现是使用栈
```

![2.jpg](https://github.com/XingRenEr/Front-end/blob/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/Leetcode/images/2.jpg)  
```js
// 方法三：妖魔化的双指针
```

### (简单) 剑指 Offer 06. 
### (简单) 剑指 Offer 06. 

## 队列

# 哈希表(散列表)  

# 树形结构
## 树  
## 二叉搜索树  
## 字典树  
## 树状数组  
## 线段树

# 堆  

# 图  
## 拓扑排序  

# 基本算法思想
## 动态规划  
## 贪心算法  
## 回溯算法  
## 分治算法  

# 搜索
## 深度优先搜索  
## 广度优先搜索  

# 查找
## 二分查找  

# 排序  

# 其他
## 并查集  

# LeetCode其他分类
## 数学(210)  
## 双指针(75)  
## 设计(69)  
## 位运算(67)  
## Sliding Window(29)  
## 递归(24)  
## Ordered Map(13)  
## 几何(12)  
## 极小化极大(8)  
## 脑筋急转弯(7)  
## Random(6)  
## Line Sweep(6)  
## 记忆化(3)  
## 蓄水池抽样(2)  
## Rejection Sampling(2)  
## Map()  