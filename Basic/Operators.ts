let msg:string ="This is the sample text message";

let num1:number=20;
let num2:number=30;

// arithematic operation
console.log("addition:"+(num1+num2)+"\n subtraction:"+(num1-num2)+"\n multiplication:"+(num1*num2)+"\n division:"+(num1/num2)+"\n modulus:"+(num1%num2));

//assignment operation

let num3:number=num1+=num2;
let num4:number=num1-=num2;
let num5:number=num1*=num2;
let num6:number=num1/=num2;
let num7:number=num1%=num2;

console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);


//boolean operators

let yes:boolean=true;
let no:boolean=false;


console.log("yes : "+yes);
console.log("no : "+no);


//ternary operators



//inline Anotation

var student : {
    id : number;
    name :string;
    age:number;
};


student={
    id:100,
    name:"Emma",
    age:19
}

console.log("The student object is: " + student);
console.log("Name: "+student.name);
console.log("Id: "+student.id);
console.log("Age: "+student.age);



//type checking

console.log( typeof msg);
console.log(typeof yes);
console.log(typeof num1);
















