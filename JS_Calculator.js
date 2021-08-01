var readlineSync = require('readline-sync'); //refernece from library

var firstNumber = readlineSync.questionInt('Please enter first number.');
var secondNumber = readlineSync.questionInt('Please enter second number.');
var operation = readlineSync.question('What operation would you like to perform? (add/sub/mult/div)?');
//function definition
function myAddition(num1, num2){
    return num1 + num2;
}
function mySubtraction(num1, num2){
    return num1 - num2;
}
function myMultiplication(num1, num2){
    return num1 * num2;
}
function myDivision(num1, num2){
    return num1 / num2;
}

function jsCalculator(number1, number2, enterOperation){
    if (enterOperation == "add"){
        //call addition function
        console.log('Addition of first number: ' + number1 + ' with second number: ' + number2 + ' results in: ' + myAddition(number1, number2));
    }
    else if (enterOperation == "sub"){
        //call subtraction function
        console.log('Subtraction of first number: ' + number1 + ' minus second number: ' + number2 + ' results in: ' + mySubtraction(number1, number2));
    }
    else if (enterOperation == "mult"){
        //call multiplication function
        console.log('Multiplication of: ' + number1 + ' and ' + number2 + ' results in: ' + myMultiplication(number1, number2));
    }
    else if (enterOperation == "div"){
        //call division function
        console.log('Division of: ' + number1 + ' and ' + number2 + ' results in: ' + myDivision(number1, number2));
    }
    else{
        console.log('Error');
    }
}

//function call
jsCalculator(firstNumber, secondNumber, operation);