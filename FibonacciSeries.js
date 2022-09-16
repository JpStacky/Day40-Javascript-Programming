function FibonacciSeries() {
    let num1 = 0, num2 = 1, num3, i;
    console.log(num1 + " " + num2 + " ");
    for (i = 2; i < cnt; i++) {
        num3 = num1 + num2;
        console.log(num3 + " ");
        num1 = num2;
        num2 = num3;
    }
}
let cnt = 20;
FibonacciSeries(cnt);
