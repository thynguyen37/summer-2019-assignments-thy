function mathify(number1, number2) {

    if (typeof number1 == "number") {

        console.log(typeof number1);
        console.log("number1 is a datatype of Number.");
    }


    var sum = number1 + number2;
    var difference = number1 - number2;
    var product = number1 * number2;
    var quotient = number1 / number2;
    
    console.log("The sum of " + number1 + " and " + number2 + " is: ", sum);
    console.log("The difference of " + number1 + " and " + number2 + " is: ", difference);
    console.log("The product of " + number1 + " and " + number2 + " is: ", product);
    console.log("The quotient of " + number1 + " and " + number2 + " is: ", quotient);
    
    }
    
    mathify(1000, 5);
    mathify(40, 5);
    mathify(.3403, .8503);
