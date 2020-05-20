// Interface as Type


interface Nationality
{
    flagsColor:string;
    democracy:boolean;
    population:number;
}


let Indian:Nationality={flagsColor:"red",democracy:true,population:83740043958};
let Bavarian:Nationality={flagsColor:"skyblue",democracy:false,population:843659845};

console.log(Indian.flagsColor,Bavarian.population);

//optional propery

interface Language
{
    difficultyLevel:string;
    grammarLevel:string;
    alphabetcount:number;
    family?:string;
}

let Malay:Language={difficultyLevel:"hard",grammarLevel:"hard",alphabetcount:32,family:"asia"};

let Sotho:Language={difficultyLevel:"very hard",grammarLevel:"very hard",alphabetcount:64};

console.log(Malay.grammarLevel,Sotho.family);



//Interface as function Type


interface Food
{
    (name:string,cost:number,origin:string):void;
}




function DisplayFood(name:string,cost:number,origin:string):void
{
    console.log("Food name: "+name+" cost: "+cost+" origin: "+origin);
}


var Ajith:Food=DisplayFood;
var Deol:Food=DisplayFood;


Ajith("Rogan Josh",1000,"kasmiri");
Deol("Bhave bhuji",350,"mumbai");

// Readonly interface

interface Country
{
    Name:string;
    Capital:string;
}


var sweden:Readonly<Country>={
    Name:"sweden",
    Capital:"Stockholm"
}

//sweden.Name="america";  //compile time error

console.log(sweden);


var America:Country={
    Name:"United States of America",
    Capital:"Washington D.C"
}

console.log(America);

America.Name="USA";  // the propery of interface can be changed here.

console.log(America);
