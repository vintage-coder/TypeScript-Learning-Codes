
//Rest parameters (...) with three dots allows to pass multiple parameters to the function.
// Rest parameters should be in the last parameters of the function.
let President=(country:string,...name:string[])=>{

    console.log("Hello, President "+name.join(",") +" of "+country);

}


President("United States ","Donald","Trump");
President("Russia ","Vladimir ","Putin");
President("India","Narendra ","Modi");
President("Japan","shinzo","Abe");
President("China","Xi","jinping");