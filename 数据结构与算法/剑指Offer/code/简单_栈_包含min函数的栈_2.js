
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
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

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.minStack[this.minStack.length - 1] === this.stack[this.stack.length - 1]) {
        this.minStack.length--;
    }
    this.stack.length--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minStack[this.minStack.length - 1];
};

var minStack = new MinStack();
console.log(minStack.push(-2));
console.log(minStack.push(0));
console.log(minStack.push(-3));
console.log(minStack.min());  // --> 返回 -3.
console.log(minStack.pop());
console.log(minStack.top());     // --> 返回 0.
console.log(minStack.min());  // --> 返回 -2.
