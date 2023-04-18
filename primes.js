function isPrime(n){
    for (let i=2 ; i<n ; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

function primes(n){
    const primes = [];
    for(let i=2;i<=n;i++){
        if(isPrime(i)){
            primes.push(i);
        }
    }

    return primes;
}

primes(7919);
