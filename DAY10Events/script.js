console.log("Events");

function clickme(){
    alert("welcome me");
}
function mouseoverhandler(){
    let element=document.querySelector(".hover");
element.style.display="none";

}

function mouseouthandler(){
    let element=document.querySelector(".hover");
element.style.display="";

}

function changeHandler(event){
    console.log(event.target.value);
}
