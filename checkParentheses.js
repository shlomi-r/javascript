checkParentheses = (str) => {
    const stack = [];
    
    for (let char of str){
        if (['(', '[', '{'].includes(char))
            stack.push(char); /* save opening parentheses */
        else if ([')', ']', '}'].includes(char)) {
            if (!stack.length) { /* closing without opening */
                return false;
            }
            else if (char == ')' && stack.slice(-1) == '(') {
                stack.pop(); /* match */
            }
            else if (char == ']' && stack.slice(-1) == '[') {
                stack.pop(); /* match */
            }
            else if (char == '}' && stack.slice(-1) == '{') {
                stack.pop(); /* match */
            }
            else{
                return false;
            }

//           console.log(`stack: '${stack}' ; char '${char}'`);
        }        
    }

    return !stack.length; // empty stack (length == 0) => all parentheses have their closing pairs
};

console.log(`"({})": ${checkParentheses("({})")}`) ; // true
console.log(`"][[()}}": ${checkParentheses("][[()}}")}`) ; // false
