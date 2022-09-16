const readline = require("readline-sync");
function Palindrome()
{
    let r,sum=0,temp;    
    let n=4543524;//It is the number variable to be checked for palindrome  
    
    temp=n;    
    while(n>0){    
     r=n%10;  //getting remainder  
     sum=(sum*10)+r;     
     n=n/10;    
    }    
    if(temp==sum)    
     console.log("palindrome number ");    
    else    
     console.log("not palindrome");    
}
Palindrome();