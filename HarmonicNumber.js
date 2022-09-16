const readline = require("readline-sync");
function HarmonicNumber(){
	let sum=0,i;
		console.log("Enter number");
        let num = Number(readline.question());
		for(i=1;i<num;i++)
		{
			sum=sum+1/i;
			console.log(sum);
		}
}
HarmonicNumber()