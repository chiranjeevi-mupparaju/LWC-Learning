console.log('Objects');

let myDetails ={
    fname:'chiru',
    lname:"muppa",
    age:25,
    skills:['admin','apex','lwc']
}
console.log("typeof myDetails",typeof myDetails);
console.log("myDetails",myDetails);

//json strigify covert object into the string

let JsonStringfy =JSON.stringify(myDetails);
console.log("JsonStringfy",JsonStringfy);
console.log("typeof JsonStringfy", typeof JsonStringfy);

//Json parse convert string into object

let JsonParse =JSON.parse(JsonStringfy);
console.log("JsonParse",JsonParse);
console.log("Typeof JsonParse",typeof JsonParse);

//modify the object using dot notation or []

myDetails.doy=1999;
console.log("myDetails",myDetails);

myDetails.age=1999-2025;
console.log("myDetails",myDetails);

myCountry="country";
myDetails[myCountry]="India";
console.log("myDetails",myDetails);

myDetails["city name"]="Pune";
console.log("myDetails",myDetails);

//Get the values from the object

let myCountry1 = myDetails.country;
console.log("myCountry1",myCountry1);

let myCity1 = myDetails["city name"];
console.log("myCity1",myCity1);

console.log("Spread Operator");

//Combing two arrays

let numberone=[1,2,3];
let numbertwo=[4,5,6];
let combinedarray=[...numberone,...numbertwo];
console.log("numberone",numberone);
console.log("numbertwo",numbertwo);
console.log("combinedarray",combinedarray);

//Expanding string

let string101="my name is chiranjeevi";
console.log("string101",string101);
console.log(...string101);

//Adding values

let addvalues=[10,11,...numberone,12,13];
console.log("addvalues",addvalues);

//add two objects
let obj1={"fname":"chiru","skills":['admin','apex']};
let obj2={"lname":"muppa","doy":2000}

let combineobj={...obj1,...obj2};
console.log(combineobj);

//shallow copy on array and on 0bject
let myfavfruits=['grapes','apples','banana'];
let myfavfruitscopy=myfavfruits;

myfavfruitscopy.push('cherry');
console.log("myfavfruits",myfavfruits);
console.log("myfavfruitscopy",myfavfruitscopy);

let myfavfruits1=['grapes','apples','banana'];
let myfavfruitscopy1=[...myfavfruits];

myfavfruitscopy1.push('cherry');
console.log("myfavfruits1",myfavfruits1);
console.log("myfavfruitscopy1",myfavfruitscopy1);

let myobj11={fname:'chiru',lname:'test'}
let myobj11copy={...myobj11}
myobj11copy.age=27;
console.log("myobj11",myobj11);
console.log("myobj11copy",myobj11copy);

console.log("Destructing");

let myFavFruits=["grapes","apples","banana","lemons"];

let[favfruit1,,favfruit2,favfruit3] =myFavFruits;
console.log("favfruit1",favfruit1);
console.log("favfruit2",favfruit2);
console.log("favfruit3",favfruit3);

let[favfruit4,favfruit5,...rest]=myFavFruits;
console.log("favfruit4",favfruit4);
console.log("favfruit5",favfruit5);
console.log("rest",rest);

let obj109={
    fname:"check",
    lname:"test",
    doy:"2000"
}

let{fname,lname,doy}=obj109;
console.log("fname",fname);
console.log("lname",lname);

console.log("String Interpolation");
let myString1='my name is';
let mystring2='chiru';
let mystring3='i stay in';
let mystring4='pune';
let myage=26;

let finalstring=`my name is ${mystring2}.i stay in ${mystring4} 26`;
console.log(finalstring);


