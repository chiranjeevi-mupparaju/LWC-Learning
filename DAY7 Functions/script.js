console.log("Functions");

//Function Declaration

function cal1(Number1 , Number2){
let sum=Number1+Number2;
return sum;
}
let cal1result =cal1(10,5);
console.log("cal1result",cal1result);

//Function Expression

let cal2=function(Number1,Number2){
   let sum=Number1+Number2;
return sum;
}
let cal2result =cal2(10,5);
console.log("cal2result",cal2result); 

//Hosting is  worked on function declaration 

let cal3result =cal3(10,5);
console.log("cal3result",cal3result);

function cal3(Number1 , Number2){
let sum=Number1+Number2;
return sum;
}

//Hosting is not worked on function expression 
//let cal4result =cal4(10,5);
//console.log("cal4result",cal4result);


//let cal4=function(Number1 , Number2){
//let sum=Number1+Number2;
//return sum;
//}

//Function Expression
let cal5=function(Number1,Number2){
    if(Number2){
    let sum=Number1+Number2;
    return sum;
    }else{
        return Number1

    }
    
}
let cal5result=cal5(10);
console.log("cal5result",cal5result);

//Arrow Function.....In arrow function we don't use the function name instead of that we can use arrow symbol=>
let cal6=(Number1,Number2)=>{
    if(Number2){
    let sum=Number1+Number2;
    return sum;
    }else{
        return Number1

    }
    
}
let cal6result=cal6(10,5);
console.log("cal6result",cal6result);
//using function name

let greet=function(username){
    return `${username},welcome to learn js`;
}
console.log(greet("ankit"));

//with using arrow function

let greetArrowFunction=(username)=> `${username},welcome to learn js`;

console.log(greetArrowFunction("ankit"));

//Callback functions

function welcomeme(name,call){
    console.log(`hello,${name}`);
    call();
}

function greetmetoo(){
    console.log("welcome to learn js");
}

function goodbye(){
    console.log("see u in future sessions");
}

welcomeme("mahi",greetmetoo);
welcomeme("mahi",goodbye);




