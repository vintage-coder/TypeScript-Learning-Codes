//Looping Statements

let num1:number;

var num2:number;

//For Loops

console.log("For Loop Example coding...................");

for(num1=0;num1<10;num1++)
{
    console.log(num1);
}

//While Loops

num2=0;
console.log("While loop Example coding ...................");


while(num2<=20)
{
    console.log(num2);
    num2++;
}


let arr=[10,20,30,40,50];

var str="Happy Death Day 2 U";


for(var val of arr)
{
    console.log(val);
}

for(var array in arr)
{
    console.log("At Index position "+`${array} :` + `${arr[array]}`);

}


//Do-While Examples


let i:number=2;

console.log("Do While Example................");


do{
    console.log("The value is: "+ `${i}`);
    i++;
}
while(i<5)

