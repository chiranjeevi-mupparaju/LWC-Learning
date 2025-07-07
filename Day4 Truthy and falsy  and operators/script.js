console.log('Truthy and falsy');

let myName;
console.log(myName);
console.log(typeof myName);

if(myName)
    console.log('Print myName',myName);
else{
console.log('myName is not defined' )
}


let mySalary = 0;
console.log(mySalary);
console.log("typeofmySalary",typeof Salary);

if(mySalary)
    console.log('print mySalary',0)
else{
    console.log('0 is undefined');
}

//Arthimatatic operator

let myNumber1="20";
let myNumber2=10;
console.log(typeof myNumber1);
console.log(typeof myNumber2);
if(isNaN(myNumber1))
console.log('Check the number1 is number or not ');
else{
console.log(myNumber1 + myNumber2);
}

let myNumber3="30";
let myNumber4=10;

console.log(typeof myNumber3);
console.log(typeof myNumber4);
console.log(myNumber3 + myNumber4)
console.log(myNumber3 - myNumber4)
console.log(myNumber3 * myNumber4)
console.log(myNumber3 / myNumber4)


//Assignment operator
let myNumber5=10;
myNumber5=90;


//Comparsion operator
let myNumber7=10;
let myNumber8=3;
console.log(myNumber7 > myNumber8);
console.log(myNumber7 < myNumber8);


//Logical operator

console.log(true&&true);
console.log(true&&false);

console.log(true||true);
console.log(true||false);
console.log(false||false);

string1="chiru";
string2="Muppa";
console.log(string1&&string2);//Muppa
console.log(string1||string2);//chiru

issalarycredited=false;
console.log("issalarycredited",issalarycredited);
issalarycredited= !issalarycredited;
console.log("issalarycredited",issalarycredited);

//Terinary Operator

let age=21;
let output = age<18 ? "Too Young" :"Old Enough";
console.log(output);


// == it check only the values,=== it will check the type nad values

let myNumber11=3;
let myNumber12="3";

console.log(typeof myNumber11 ,typeof myNumber12);
console.log(myNumber11==myNumber12);
console.log(myNumber11===myNumber12);

console.log("ankit"=="Ankit");
console.log("ankit"==="Ankit");

//null,Undefined

let string10=null;
let string11;
console.log(string10,string11);
console.log(string10==string11);
console.log(string10===string11);