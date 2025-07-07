console.log("Fetch API");

/*function loadRandomusers(){
    fetch("https://reqres.in/api/users",{
        method:"GET",
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data));
}

loadRandomusers();*/

/*async function loadRandomcatImg(){
    let response= await fetch("https://api.thecatapi.com/v1/images/search");
    console.log(response);
    let data =await response.json();
    console.log("data",data);
    let imgUrl = data[0].url;
        const catImg = document.querySelector('.catimg');
        catImg.src = imgUrl;
}

loadRandomcatImg();*/

async function coinload(){
    let response= await fetch("https://old.docs.coinapi.io/market-data/rest-api/metadata",{
        method:"GET",
       // Headers:{"X-CoinAPI-Key": "73034021-THIS-IS-SAMPLE-KEY",

       // },
    
}
    );
    let data=await response.json();
    console.log("data",data);

}
coinload();
