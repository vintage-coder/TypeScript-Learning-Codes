let msg:string="This is the sample message";


let NewsAgency1:string="Deutsch World";

let NewsAgency2:string="BBC World";

let fruit:string="kiwi,banana,jack fruit";



let msg1:any="US stucks with heavy Economic crisis";



console.log("message is: " + msg + "\n");
console.log("string length: ", (msg as string).length+ "\n");


console.log("string length: ", (<string>msg1).length);

console.log(`The News Agencies are: ${NewsAgency1} and ${NewsAgency2} `);


console.log(`At 0 index of ${NewsAgency2} is: ${NewsAgency2.charAt(0)}`);
console.log(`At 4 index of ${NewsAgency1} is: ${NewsAgency1.charAt(4)} `);

console.log("agencies are:",NewsAgency1.concat(" ", NewsAgency2));


console.log(NewsAgency2.indexOf('W'));

console.log("UperCase: "+NewsAgency2.toUpperCase());
console.log("LowerCase: "+NewsAgency2.toLowerCase());

console.log(typeof(NewsAgency2.replace('World','Mundo')));
console.log(NewsAgency1.replace('World','Welt'));



console.log( typeof(fruit.split(',')));






