//Export during the declaration
export let weekdays=['mon','tue','wed','thr','fri'];
export const dateofdithyear=1947;
export function sayHi(message){
    alert(message);
}

//Export after the declaration

 function doadd(number1,number2){
    alert(number1+number2);

}
export{doadd};

//default

export function domul(number1,number2){
    alert(number1*number2);
}
