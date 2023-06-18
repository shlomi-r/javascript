//O(2N) complexity - better than fibonacciRec O(2^N)
function fibonacciRecMem(n, memo){
    memo = memo || {};//hash (memoization)

    if (memo[n]) return memo[n];
    if(n<=1) return 1;

    return memo[n] = fibonacciRecMem(n - 1, memo) + fibonacciRecMem(n - 2, memo);
}

console.log(fibonacciRecMem(0));
console.log(fibonacciRecMem(1));
console.log(fibonacciRecMem(2));
console.log(fibonacciRecMem(3));
console.log(fibonacciRecMem(4));
