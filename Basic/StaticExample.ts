class SurvivalKits
{
    static flares:string="Rocket Hand Flare";
    knief:string="Swiss Knife";
    
    constructor()
    {
        console.log("Static value inside constractor: "+SurvivalKits.flares);

    }

    getDetails():void
    {
        console.log("Survival kits Class members: "+this.knief);
    }

    static displayDetails():void
    {
            console.log("Static members inside static methods: "+this.flares);
            console.log("Static members inside the static methods: "+SurvivalKits.flares);
    }
}


let obj=new SurvivalKits();


console.log(SurvivalKits.flares);

obj.getDetails();

SurvivalKits.displayDetails();

console.log("Using objects: "+obj.knief);

