console.log("Array Methods");

let mycars=[];
console.log("mycars",mycars);
console.log("typeof mycars",typeof mycars);
console.log("mycarslength",mycars.length)

let myfavcars=["bmw","maruthi","fortuner"];
console.log("myfavcars",myfavcars);
console.log("myfavcarslength",myfavcars.length)

// push method is add only at the end
//unshift method add at only start
//spread operator we can add on anywhere

myfavcars.push("Tata");
console.log("myfavcars",myfavcars);

myfavcars.unshift("suzuki");
console.log("myfavcars",myfavcars);

 myfavcars=["test",...myfavcars,"fsdf"];
console.log("myfavcars",myfavcars);

//Remove th elements from the array
//pop is uesd to remove the elements from the array from end
//shift is used to remove the elements from array from start
console.log("myfavcars",myfavcars);

let popitem=myfavcars.pop();
console.log("popitem",popitem);
console.log("myfavcars",myfavcars);

let shiftitem=myfavcars.shift();
console.log("shiftitem",shiftitem);
console.log("myfavcars",myfavcars);

//Modify the elements from the array

myfavcars[0]="Honda";
console.log("myfavcars",myfavcars);

//search eleemnts with indexof and includes

console.log(myfavcars.indexOf('bmw'));
console.log(myfavcars.indexOf('dsgf'));
console.log(myfavcars.includes('bmw'));
console.log(myfavcars.includes('sdca'));

//Convert the array into the string,we can use to string and join

console.log("myfavcarsstring",myfavcars.toString());
console.log("myfavcarsjoin",myfavcars.join(" "))

//Splice,Slice
//using splice we can the add the elements and remove the elemnets
//splice(param1,param2,rest)
//param1 is used for adding elements
//param2 is uesd for removing elements
//rest new elements to be added
//splice return the deleted array
const fruits =["apples","oranges","pineapple","grapes"];
console.log("fruits",fruits);

let addfruits=fruits.splice(2,0,"kiwi","lemons");
console.log("addfruits",addfruits);
console.log("fruits",fruits);

let removefruits1=fruits.splice(0,2);
console.log("removefruits1",removefruits1);
console.log("fruits",fruits);

//slice
//slice is used to extract the elements
//slice(param1,param2),it returns the new array
//param1  is starting index number from array
//param2 is ending index number plus one from array

let sliceitem=fruits.slice(1,4);
console.log("sliceitem",sliceitem);

let sliceitem1=fruits.slice(0,1);
console.log("sliceitem1",sliceitem1);

//methods

let bankingtransactions =[5000,-7000,9000,4000,5600];
console.log("bankingtransactions",bankingtransactions);

//foreach return statement not able to use in foreach
bankingtransactions.forEach((curritem)=>{
curritem=curritem/10;
})

//map return statement is used in map
let updatedArray=bankingtransactions.map((curritem)=>{
    return curritem/10;
})
console.log("updatedarray",updatedArray);

//filter array

let filterarray =bankingtransactions.filter(currentitem=>currentitem>0)
    console.log("filterarray",filterarray);

let filerarray1=bankingtransactions.filter(currentitem=>currentitem<0)
console.log("filterarray1",filerarray1);

let fruitscheck=['fig','apples','banana'];
let fruitsfilter=fruitscheck.filter(currentitem=>currentitem.length>3);
console.log("fruitscheck",fruitsfilter);

//find
let findarray=bankingtransactions.find(currentitem=>currentitem==5000);
console.log("findarray",findarray);

//EXAMPLES

//1.INPUT="hello world";
  //OUTPUT="Hello World";

  let captilizeletter =(inputstring)=>{
    let convertedtoarray =inputstring.split(" ");
    let convertedmap =convertedtoarray.map((currentitem)=>
      currentitem[0].toUpperCase()+currentitem.slice(1)

    );
    let resultstring =convertedmap.join(" ");

    console.log("convertedarray",convertedtoarray);
    console.log("convertedmap",convertedmap);
    console.log("resultstring",resultstring);
  }
  
  captilizeletter("hello world");
  


//2.reverse
// Input=Hello World
//Output= dlroW olleH
let stringreverse=(inputstring1)=>{
let convertarraycase =inputstring1.split("");
let splitstring = convertarraycase.reverse();
let convertstring=splitstring.join("");
console.log("convertedarraycase",convertarraycase);
console.log("splitstring",splitstring);
console.log("convertstring",convertstring);
}
stringreverse("Hello World");

//3
//Input='hello'
//output={h:1,e:1,l:2,o:1}

let stringinput=(stringchar)=>{
  let output={};
  let stringsplit=stringchar.split("");
  console.log("stringsplit",stringsplit);
  for(let currentitem of stringsplit){
    console.log("currentitem",currentitem);
    if(output.hasOwnProperty(currentitem)){
      output[currentitem]=output[currentitem]+1;
    }else
    output[currentitem]=1;
    

  }
  console.log("output",output);
  
}
stringinput("hello");

//4
//Input=ankit dilipin jain
//Output=ADJ

let stringchar1=(inputstring)=>{
  let splitstr=inputstring.toUpperCase();
  let splitstr1=splitstr.split(" ");
  let mapstr=splitstr1.map((currentitem)=>currentitem[0]
 
  );
   let stringchar6=mapstr.join("");
   
  console.log("splitstr",splitstr);
  console.log("splitstr1",splitstr1);
  console.log("mapstr",mapstr);

  console.log("stringchar6",stringchar6);
  
}
stringchar1("ankit dilipin jain");

//5
//Input=[1,2,3,4,5,6]
//output=[1,3,5]
//let numbers=[1,2,3,4,5,6];
//let divnum=number(currentitem)



//6
//Input=[Apple,banana,Grape,Orange,Kiwi,]
//output=[Apple,banana,orange]


let fruits3 =['Apple','banana','Grape','Orange','Kiwi'];
let chefr=fruits3.filter(currentitem=>currentitem.length>5)
let slicefr =chefr.unshift('Apple')
console.log("chefr",chefr);


























