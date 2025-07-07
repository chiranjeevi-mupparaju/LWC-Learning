console.log('Loopscollection');

let myFavCars=["audi","bmw","maruthi","tata","suzuki"];

let myDetails={
    fname:'chiru',
    lname:'muppa',
    age:27
}

//For Loop Condition

for(let i=0;i<myFavCars.length;i++){
    console.log(`${i+1}.${myFavCars[i]}`);
}

//While Loop Condition
let currentIndex=0;
console.log(myFavCars.length);
while(currentIndex<myFavCars.length){
console.log(`${currentIndex+1}.${myFavCars[currentIndex]}`);
currentIndex=currentIndex+1;
}

//Do While Loop

do{
    console.log("do while loop");
}while(1==2){

}

//For of loop on Array

for(let currentItem of myFavCars){
    console.log("currentItem",currentItem);
}

for(let currentItem of myFavCars.entries()){//user want index
    console.log("currentItem",currentItem);
}

for(let [Index,Cars] of myFavCars.entries()){
    console.log(`${Index+1}.${Cars}`);
}

//FOR OF LOOP on Object


//for(let currentItem of myDetails){ //mydetails is not iterable showing error
//Object.Keys,Object.Value,Object.Entries
    //console.log("currentItem",currentItem);
//}

for(let currentItem of Object.keys(myDetails)){ 
    console.log("currentItem",currentItem);
}

for(let currentItem of Object.values(myDetails)){ 
    console.log("currentItem",currentItem);
}

for(let currentItem of Object.entries(myDetails)){ 
    console.log("currentItem",currentItem);
}

for(let currentItem of Object.keys(myDetails)){ 
    console.log("currentItem",currentItem);
    console.log("Property Value",myDetails[currentItem])
}

for(let [Key,Value] of Object.entries(myDetails)){ 
    console.log(Key,Value);
}

//for in loop in array

for(let currentItem in myFavCars){
    console.log("Currentitem",currentItem);
}

//for in loop on object
for(let currentItem in myDetails){
    console.log(currentItem,myDetails[currentItem]);
}



//Examples
let officeHours={
    fri:{open:'10Am',Close:'7Pm'},
    sat:{open:'9Am',Close:'8Pm'},
    sun:{open:'8Am',Close:'9Pm'},
}

for(let currentItem in officeHours){
    console.log(currentItem);
    console.log(officeHours[currentItem]);
    let{open,Close}=officeHours[currentItem];
    console.log(open,Close);
    console.log(`on ${currentItem} office starts at${open} and closed at${Close}`);

}

//Above Example with for of
for(let [day,{open,Close}] of  Object.entries(officeHours)){
    console.log(day,open,Close);
    console.log(`on ${day} office starts at${open} and closed at${Close}`);
}

console.log("Map Collection");

let myMap=new Map();
console.log("mymap",myMap);

myMap.set("1","Chiru");
myMap.set("2","muppa");
myMap.set(3,25);
console.log("mymap",myMap);

console.log(myMap.get("1"));
console.log(myMap.get(3));
console.log(myMap.size);


let map1=([
    ["fname","chiru"],
    ['lname',"muppa"],
    ["place","darsi"],
]);



for(let [key,value] of map1){
    console.log(key,value);
}

//Small Project

const game={
    team1:"India",
    team2:"Australia",
    players:[
        [
            "Rohith",
            "Dhoni",
            "Kohil",
            "Rahul",
            "Jadeja",
            "Pant",
            "Pandeya",
            "Ashwin",
            "Chahal",
            "Siraj",
            "Shami",
        ],
        [
            "Wade",
            "Cummins",
            "Creen",
            "Maxwell",
            "Finch",
            "Hazelwood",
            "Marsh",
            "Stoinis",
            "Richarson",
            "Starc",
            "Warner",
        ],
    ],
    Century:["Kohil","Rohith","Warner","Maxwell"],
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.5
    },
};

//1 Create one player array for  each team (Variables 'players1'and 'players2')

let [Players1,Players2] =game.players;
console.log("Players1",Players1);
console.log("Players2",Players2);

//2 The first player in any team ,the first player is wicket keeper and others are the field players for ind team1 create one variable for wicketkeeper name array and remaining 10 players(Field Players) with another array

let [wicketkeeper,...FieldPlayers]=Players1;
console.log("wicketkeeperName",wicketkeeper);
console.log("FieldPlayers",FieldPlayers);

//3Create an array 'allPlayers',containing all players for both the team
let allPlayers= [...Players1,...Players2];
console.log("allPlayers",allPlayers);

//4 During the game1 the ind team used three substitute players ,so create new array contating the orginal team members with "chiru","rami","mahi".
 let FinalTeam1 =[...Players1,"Chiru","Mahi","Rami"];
 console.log("FinalTeam1",FinalTeam1);

 //5 Based on game odds object ,create one variable for each odd(team1,draw,team2)
 let {team1,x:draw,team2} =game.odds;
 console.log(team1,draw,team2);

 //6 the team with lower order is more likely to win,print to the console which team is more likely to win and without using if,else and terninary operator
 team1<team2 && console.log('team1 is more likely to win');
 team2<team1 && console.log('team1 is more likely to win');

 //7Loop over the gam.century array.print the each player to the console along with century number

 for(let [index,value] of game.Century.entries()){
    console.log(`Century ${index+1}: ${value}`);
 }

 //8 use a loop to calculate the average odd and log into the console

 let sum=0;
 let current=0;
 for(let currentItem of Object.values(game.odds)){
    sum = sum + currentItem;
    current=current+1;
 }
 console.log("Sum",sum);
 console.log("current",current);
 console.log("Average",Math.round(sum/current));


 


