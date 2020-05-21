class Tourister
{
    public place:string;
    mode_of_transportation:string;
    protected days:number;
    private budget:number;

    constructor(place:string,mode:string,budget:number,days:number)
    {

        this.place=place;
        this.mode_of_transportation=mode;
        this.days=days;
        this.budget=budget;
    }

    getBudget():number
    {
        //private members can be accessed inside the class
        console.log("The budget is: "+this.budget);

        return this.budget;
    }
}

class Wonders extends Tourister
{
    food:string;

    constructor(place:string,mode:string,budget:number,days:number,food:string)
    {
        //super() call must be inclueded to drived class to access all members of base class
        super(place,mode,budget,days);

        //food property belongs to wonders class
        this.food=food;
    }

    getWonders():void
    {
        //protected members of base class can be accessed in derived class
        console.log("No of days: ",this.days);

        ////public members of base class can be accessed in derived class
        console.log("Place name: "+this.place);


        //Error: private members of base class cann't be accessed in derived class
        //console.log("budget: "+this.budget);

        console.log("Food name: "+ this.food);

    }

}

var KSRTravals=new Tourister("Frankfurt","flight",56000,10);
var makeMyTrip=new Tourister("Alaska","flight",100000,30);


console.log(KSRTravals);
console.log(makeMyTrip);



// Public members can be accessed outside the class
console.log(KSRTravals.place);

console.log(makeMyTrip.mode_of_transportation);

//console.log(KSRTravals.budget); //CompileTime Error:private members of class cann't be access outside of the class

// private members of class can be accessed by public methods of class
console.log(KSRTravals.getBudget());

var EfilTower=new Wonders("paris","flight",200000,40,"french fries");

EfilTower.getWonders();

EfilTower.getBudget();