//O(2^N) complexity - slow (exponential)
function fibonacciRec(n){
    if(n<=1) return 1;

    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
