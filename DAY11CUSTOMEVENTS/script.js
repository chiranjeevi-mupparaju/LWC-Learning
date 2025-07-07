import { weekdays } from "./utils.js";

console.log("Custom Events");

document.addEventListener("valueten",(event)=>{
    console.log("access the data",event.detail.message);
});

function changeHandler(event){
    console.log(event.target.value);
    let value=event.target.value;


//when an user enter the 10 ,trigger the custom event
if(value==10){
const myevent=new CustomEvent("valueten",{
    detail:{
        message:"fire the custom event when user eneter the 10",
    },
});
document.dispatchEvent(myevent);

}
}


console.log("settimeout and settimeinterval");

/*setTimeout(()=>{
    console.log("settimeout done");

},5000);*/

let timeinterval = ""
timeinterval=setInterval(()=>{
    console.log("settimeinterval done")
},5000);

setTimeout(()=>{
    clearInterval(timeinterval)
    console.log("time processing is done")

},15000);

console.log("Import");


