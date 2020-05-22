//Function names are same , but signature of arguments are different type


// function declaration
function add(a:number,b:number):number;
function add(a:string,b:string):string;


//function definition with different types
function add(a:any,b:any):any
{
    return a+b;
}



let answer:any= add("Steve","Jobs"); // String concatination

let value:any=add(125,150);          // Addition of values

console.log(" Answer is: ",answer," Value is: ",value);



