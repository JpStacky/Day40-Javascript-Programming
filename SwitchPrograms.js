const readline = require("readline-sync");
function DisplayNumberInString() {
    console.log("Enter number 1/10/100/1000")
    let number = Number(readline.question());
    switch (number) {
        case 1:
            console.log("One")
            break;
        case 10:
            console.log("Ten")
            break;
        case 100:
            console.log("Handred");
            break;
        case 1000:
            console.log("Thousend")
            break; 
    }
}
DisplayNumberInString();