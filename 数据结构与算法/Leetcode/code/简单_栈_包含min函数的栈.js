var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
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

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.length--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].num;
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.stack[this.stack.length - 1].min;
};

var minStack = new MinStack();
console.log(minStack.push(-2));
console.log(minStack.push(0));
console.log(minStack.push(-3));
console.log(minStack.min());  // --> 返回 -3.
console.log(minStack.pop());
console.log(minStack.top());     // --> 返回 0.
console.log(minStack.min());  // --> 返回 -2.
