//O(N) complexity - better than Recursive & Recursive with Memoaization
function fibonacci(n){
    let [current, next] = [0, 1];


    while(n >= 0){
        [current, next] = [next, current + next];
        n--;
    }

    return current;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
