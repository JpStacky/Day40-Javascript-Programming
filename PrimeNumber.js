const readline = require("readline-sync");
function PrimeNumber(num) {
    let i, cnt = 0;
    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            cnt++;
        }
    }
    if (cnt == 2) {
        console.log("is a prime number");
    } else {
        console.log("is not prime number");
    }
}
console.log("Enter number to check number is prime or not");
let num = Number(readline.question());
PrimeNumber(num);