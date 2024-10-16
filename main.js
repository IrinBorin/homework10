//task1
let evenOrOddNumbers = function(x){
    let integer = Math.floor(x);
    if (integer % 2 === 0){
     return 'even'
    }
    if(integer % 2 !== 0){
     return 'odd'
    }
 }
 console.log(evenOrOddNumbers(4));
 
 //task2
 let squareNumber = (b) => Math.floor(b)*Math.floor(b);
 console.log(squareNumber(5.3));
 

 
 //task3
 function primeNumber(b){
    if(b <= 1){
        return false;
    }
}
    function sumOfEvenNumbers(first, last){
    let roundedFirst = Math.floor(first);
    let roundedLast = Math.floor(last);
    let sum = 0;
    for (let i = roundedFirst; i <= roundedLast; i++) {
        if (i % 2 === 0) {
            sum += i; 
        }
    }

    return sum;
}
console.log(sumOfEvenNumbers(4, 10));



//task4
function isPrime(c) {
    if (c < 2) return false; 
    for (let i = 2; i <= Math.sqrt(c); i++) {
        if (c % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrimes(n) {
    const primes = [];
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(getPrimes(23));