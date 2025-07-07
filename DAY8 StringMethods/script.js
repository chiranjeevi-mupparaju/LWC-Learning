console.log("StringMethods");

//Length

let string="My Name is Chiru";
console.log("string",string.length);

//Slice(Startposition,endposition+1)

let text="Apples,banana,Grapes";
console.log(text);

let slicefruits=text.slice(7,13);
console.log("slicefruits",slicefruits);

let sliceremaingfruits=text.slice(7);
console.log("sliceremaingfruits",sliceremaingfruits);

let slicenegative=text.slice(-13);
console.log("slicenegative",slicenegative);

//substring(StartPosition,EndPosition)

let substringcheck=text.substring(7,13);
console.log("substringcheck",substringcheck);

let substringnegative=text.substring(-6);
console.log("substringnegative",substringnegative);

//substr(Startposition,length)

let substrcheck=text.substr(7,6);//this substr method is not in use
console.log("substrcheck",substrcheck);

//Replace 
//1.Replace method replace only the first match
//2.Replace must be cassenstive
//3.Replace will not modify the exising string

let replaceString=text.replace("banana","manago");
console.log("replaceString",replaceString)
console.log("originalString",text);

//upercase and lowercase

console.log("uppercasestring",string.toUpperCase());
console.log("uppercasestring",string.toLowerCase());

//contact (for concating the string we can use the string interpolation instead of +)
let text1="hello";
let text2="check";

let text3=`${text1} ${text2}`;
console.log("concat the string",text3);

//Trim() it will remove all the spaces,trimstart(it will remove only on start space),trimend(it will remove only end space)

let trimtext="   Hello World   ";
console.log("trimtext",trimtext);

console.log("trimstart",trimtext.trimStart());

console.log("trimend",trimtext.trimEnd());

//pad start,padend

let myNumber="7";
console.log(myNumber.padStart(7,"*"));

console.log(myNumber.padEnd(7,"*"));

//split,  by using split we can convert the string into the array

let splitstring="mahi,chiru,rami,madhu";
let splitstring1=splitstring.split();
console.log("splitstring1",splitstring1);


//Convert the array into the string using tostring and join

let stringtest=splitstring1.toString();
console.log("stringtest",stringtest);

let joinstring=splitstring1.join(".");
console.log("joinstring",joinstring);

//Indexof,includes

console.log(text);
console.log("indexof",text.indexOf("banana"));
console.log("indexof",text.indexOf("lemons"));
console.log("indexof",text.includes("banana"));
console.log("indexof",text.includes("lemons"));

//Starts with ,ends with

console.log("startswith",text.startsWith("Apples"));
console.log("startsWith",text.startsWith("lemons"));
console.log("endsWith",text.endsWith("Grapes"));
console.log("endsWith",text.endsWith("lemons"));






