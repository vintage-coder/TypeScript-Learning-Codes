var number1 = 12;
var number2 = 25;
var number3 = 89;
function Greatest_Number(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        console.log("The Greatest number is: " + number1);
    }
    else if (number2 > number3) {
        console.log("The Greatest number is: " + number2);
    }
    else {
        console.log("The Greatest number is: " + number3);
    }
}
Greatest_Number(number1, number2, number3);
