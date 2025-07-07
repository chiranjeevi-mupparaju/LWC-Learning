console.log("promise");

//Create the promise

function generatepromise(message) {
    return new Promise((resolve, reject) => {
        if(!message){
            reject('message is empty');
        }else{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },1000);
    }
    })
}

async function generatedifferentpromises(){
    try{
         await generatepromise('1st call');
    await generatepromise('2nd call');

    }catch(error){
        console.log(error);
    }
   
}
generatedifferentpromises();

//how to call promise

   /* generatepromise('1st call')
    .then(()=>{
    console.log('promise called the successfully')
});
generatepromise('2nd call')
    .then(()=>{
    console.log('promise called the successfully')
});
generatepromise()
.catch((error)=>{
        console.log("promise rejected",error);
    })*/


/*generatepromise()
.then(()=>{
    console.log("promise called successfully");
}).catch((error)=>{
    console.log("promise rejected",error);
}
);*/


function resolvetimeout(value,delay){
    return new Promise((resolve,reject)=>
        setTimeout(() => 
        resolve(value),delay)
    
);
}

function rejecttimeout(reason,delay){
    return new Promise((resolve,reject)=>
        setTimeout(() => 
        reject(reason),delay)
    
);
}



async function load(){
    let promise1=resolvetimeout("welcome to ankit1 js learing",5000);
   // let promise2=resolvetimeout("welcome to ankit2 js learing",1000);
    let promise2=rejecttimeout("welcome to ankit reject js learing",3000);
    const promiseall=Promise.race([promise2,promise1]);

    try{
        const lists=await promiseall;
        console.log("lists",lists);
    }catch (error){
        console.log(error);
    }
    
}
load();






