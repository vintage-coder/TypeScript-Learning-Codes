

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




class BSchool
{

    readonly Name:string;
    Degree:string;
    Percentile:number;
    Color:string;
    Nationality:string;


    constructor(Name:string,Degree:string,percentile:number,color:string="white",Nationality:string)  //Default string type annotations
    {
        this.Name=Name;
        this.Degree=Degree;
        this.Percentile=percentile;
        this.Color=color;
        this.Nationality=Nationality;
    }
}


let HarvardBSchool=new BSchool("Antony","BCom",89,"Black","African");

let IIMBSchool=new BSchool("javad","MBA",80,null,"Indian");

let OxfordBSchool=new BSchool("Manas","BE",92,"","Mexican");

console.log(HarvardBSchool);

///HarvardBSchool.Name="Arvind"; // we cannot assign value to the readonly propery of class

HarvardBSchool.Degree="MS";  //ok

console.log(HarvardBSchool);


console.log(IIMBSchool);


console.log(OxfordBSchool);




