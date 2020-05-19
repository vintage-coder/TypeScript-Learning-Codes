

class Dog
{
    name:string;
    stamina:number;
    color:string;


    constructor(name:string,stamina:number,color:string)
    {
        this.name=name;
        this.color=color;
        this.stamina=stamina;     
    }


    getDogDetails()
    {
        console.log("Name:" + this.name + "\n Color: " + this.color + "\n stamina: "+ this.stamina );

    }

}

let dogs= new Dog("German sepherd",3500,"tan");

console.log("Dog object :",dogs);

dogs.getDogDetails();






