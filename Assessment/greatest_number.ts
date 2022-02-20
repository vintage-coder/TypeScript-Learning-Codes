let number1:number=12;
let number2:number=25;
let number3:number=89;

function Greatest_Number(number1:number,number2:number,number3:number)
{
    if(number1>number2 && number1>number3)
    {
        console.log("The Greatest number is: "+number1);
    }
    else if(number2>number3)
    {
        console.log("The Greatest number is: "+number2);
    }
    else
    {
        console.log("The Greatest number is: "+number3);
    }
}

Greatest_Number(number1,number2,number3);