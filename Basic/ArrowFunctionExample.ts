// Arrow function is a anonymous function which don't have function keyword. In other programming languages it is well known as lambda functions.

var Print=(str:string)=>{console.log(str)};

var Alien:string="Alien Abduction";

Print("Vampires & Wolfs");

Print(Alien);


// Arrow Function
var Addition=(x:number,y:number)=>{
    return x+y;
}

console.log(Addition(34,56));

let ans:number=Addition(76,23);

console.log(ans);



// Arrow Function Inside Class


class Vegetables
{
    name:string;
    cost:number;

    constructor(name:string,cost:number)
    {
        this.name=name;
        this.cost=cost;
    }


    display=()=>{console.log("Vegetable Name: "+ this.name + "Cost: "+this.cost)};

    getDetails():void
    {
        console.log("Details: "+this.name + this.cost);
    }
}

var domesticVeg=new Vegetables("Turnip",634);

var greens=new Vegetables("sweet Potatos",532);

var fruits=new Vegetables("Pear",534);


console.log(domesticVeg);

console.log(greens);

console.log(fruits);

domesticVeg.display();

domesticVeg.getDetails();
