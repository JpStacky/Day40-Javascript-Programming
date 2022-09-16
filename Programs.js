const readline = require("readline-sync");
function SingleDigit() {
    var singleDigit = Math.floor(Math.random() * 10)
    console.log("Single Digit", singleDigit)
    var a = Math.floor(Math.random() * 6) + 1
    console.log("random number ", a)
    var firstDice = Math.floor(Math.random() % 6)
    var secondDice = Math.floor(Math.random() % 6)
    console.log(" " + firstDice + " " + secondDice)
}
SingleDigit()
function FiveRandomValue() {
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < 5; i++) {
        var singleDigit = Math.floor(Math.random() * 100)
        sum += singleDigit
        console.log("Sum of 5 Random number are : ", sum)
    }
    avg = sum / 5
    console.log("avg of 5 Random number are : ", avg)
}
FiveRandomValue();
function UnitConvertion() {
    //Inchess Into Feet
    console.log("Enter Inch value")
    let feet = Number(readline.question());
    var converter = Math.round(feet / 12)
    console.log(converter)
    //Square or Rectangular Areas
    var square = Math.round(80 * 60)
    console.log("Square or Rectangular Areas", square)
}
UnitConvertion()
function FlipCoin() {
    console.log("FLip the coin")
    let n = Number(readline.question());
    var heads = 0, tails = 0; // Initiates the heads and tails variables.
    for (var i = 0; i < n; i++) {
        if (Math.random() < 0.50) {
            heads++;
            console.log("Head")
        } else {
            tails++;
            console.log("Tail")
        }
    }
}
FlipCoin()
function Month() {
    console.log("Enter date")
    let date = Number(readline.question());
    console.log("Enter month")
    let month = Number(readline.question());
    if (month <= 6 & date <= 20) {
        true;
        console.log(date + " " + month + " True")
    }
    else if (month >= 3 & month < 6 & date < 20) {
        false;
        console.log(date + " " + month + " false")
    }
}
Month()