function checkParentheses(str) {
    const stack = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };

    for (let char of str) {
        if (['(', '[', '{'].includes(char)) {
            stack.push(char);
        } else if ([')', ']', '}'].includes(char)) {
            if (!stack.length || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Example usage:
console.log(checkParentheses("({})")); // true
console.log(checkParentheses("][[()}}")); // false
