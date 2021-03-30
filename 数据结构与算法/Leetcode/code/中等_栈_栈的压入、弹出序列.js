var validateStackSequences = function(pushed, popped) {
    var stack = [];
    var i = 0;
    for (let num of pushed) {
        stack.push(num);
        while (stack.length && stack[stack.length - 1] == popped[i]) {
            stack.pop();
            i++;
        }
    }
    return stack.length == 0;
};
