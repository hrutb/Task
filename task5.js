//wap to find sum of n number 
 let a=0; 
 let i=1 ;
do{
  a = a + i
  i++         
}while ( i<10) 

    console.log(`sum of numbers ${a}`);

//factorial of number 

let fact =1  

do{
     fact *=i 
     i++
}while(i<=10) 
    console.log(`Factorial of number : ${fact}`);
 
    
  //   
  
do{
     if(i%4==0 && i%5==0){
          
        console.log(i);
           
     }
     i++
}while(i<=100)
 




// 
const prompt = require("prompt-sync")(); 

let choice 
do{
    console.log("Arithmatic operation");
    console.log('1. Add');
    console.log('2. sub');
    console.log('3. multy');
    console.log('4. div');

let opt = parseInt(prompt(`Enter option from 1-5`)) 
let a = parseInt(prompt(`enter first number: `))
let b = parseInt(prompt(`enter second number: `))
let result

switch(opt){
    case 1 : 
      result = a +b 
      console.log(`sub : ${result}`);
    break;
    
    case 2 : 
     result  =a-b 
     console.log("sub: "+ result);
   break;  
 
   case 3 : 
      result = a * b 
      console.log(`multy : ${result}`);
    break;
    
   case 4 : 
     result  =a/b 
     console.log("division: "+ result);
   break;




default :
       console.log("Invalid choice" );
       

}

  choice= prompt(`do you want to continue (y/n)`).toLowerCase()

}while(choice==="y") 

    console.log("program ended");


//fibonacci series


    let n = 10;
let a1 = 0, b = 1, i1 = 1;

console.log("Fibonacci Series:");

while (i1 <= n) {
  console.log(a1);
  let next = a1 + b;
  a1 = b;
  b = next;
  i1++;
}

