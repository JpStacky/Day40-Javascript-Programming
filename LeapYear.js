const readline = require("readline-sync");
function LeapYear() {
    console.log("Enter Year")
    let year = Number(readline.question());
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        console.log("is a leap year");
    }
    else {
        console.log("is not a leap year");
    }
}
LeapYear();