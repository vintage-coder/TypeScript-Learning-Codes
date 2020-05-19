let msg:string="This is the sample message";



let msg1:any="US stucks with heavy Economic crisis";



console.log("message is: " + msg + "\n");
console.log("string length: ", (msg as string).length+ "\n");


console.log("string length: ", (<string>msg1).length);





