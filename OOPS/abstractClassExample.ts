abstract class Movies
{
    name:string;

    constructor(name:string)
    {
        console.log("Abstract class constractor was invoked....");
        this.name=name;
    }

    // Normal methods without abstraction.
    display():void
    {
        console.log("Movie Name : "+this.name);

    }

    //abstracted methods only declarations defined in the derived classes
    abstract director():void;
    abstract displayDataBase():void;
    
}



export class ActionThriller extends Movies
{
    duration:number;
    direction:string;
    budget:number;

    constructor(name:string,duration:number,direction:string,budget:number)
    {
        
        super(name);

        console.log("concrete class constractor was called...");
        this.duration=duration;
        this.direction=direction;
        this.budget=budget;
    }

    director():void
    {
        console.log("direcor name is: "+this.direction);
    }

    displayDataBase():void
    {
        console.log("Name of movie: "+this.name + " budget: "+this.budget );
    }

}


let tallgrass:Movies=new ActionThriller("conjuring",230,"leonarda",353534);

// let abstractObj=new Movies("Avangers: The End Game");; // Cannot be created/ instantiate object of the abstract base class.

console.log(tallgrass);

//only the movie name property can be set
tallgrass.name="saccin series";

tallgrass.displayDataBase();

tallgrass.director();

//calling the direct method through its reference
tallgrass.display();
























// abstract class Person {
//     name: string;
    
//     constructor(name: string) {
//         this.name = name;
//     }

//     display(): void{
//         console.log(this.name);
//     }

//     abstract find(string): Person;
// }

// class Employee extends Person { 
//     empCode: number;
    
//     constructor(name: string, code: number) { 
//         super(name); // must call super()
//         this.empCode = code;
//     }

//     find(name:string): Person { 
//         // execute AJAX request to find an employee from a db
//         return new Employee(name, 1);
//     }
// }

// let emp: Person = new Employee("James", 100);
// emp.display(); //James

// let emp2: Person = emp.find('Steve');


// console.log(emp);

// console.log(emp2);

// console.log(emp);
