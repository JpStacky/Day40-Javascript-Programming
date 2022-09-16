function PrimeFactor() {
    let num = 10
    for (let i = 2; i <= num; i++) {
        if (num % i == 0) {
            prime = 1;
            for (let j = 2; j < i / 2; j++) {
                if (i % j == 0) {
                    prime = 0;
                    break;
                }
            }
            if (prime == 1) {
                console.log(i);
            }
        }
    }
}
PrimeFactor();