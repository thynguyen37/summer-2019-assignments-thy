/*
multi
Line
*/

// Single Line Comment

// Console Log Function
// console.log( "Hello World" );

// Numbers, Text, Booleans,

// Datatyes
// Booleans
true;
false;

// Numnbers
1000;
999;
10;

// Text
"This is a sentence.";
'This is another sentence.';

// Variables
var mySpecialNumber = 100;

// Calling: Get the value of the variable you are "calling"
var anotherVariable = mySpecialNumber;



anotherVariable = 600;

// assignment   =   value


mySpecialNumber;

console.log("Before I updated anotherVariable", anotherVariable);

anotherVariable = 1000;


console.log("After I updated anotherVariable", anotherVariable);

console.log("Value 1:", 600, "Value 2:", 1000);



// Math
// + - / * %

var myNumber = 1000 + 500;

console.log(myNumber);

var newNumber = myNumber + 1000;

console.log(newNumber);

newNumber = newNumber + myNumber;

console.log(newNumber);

// The computer runs the stuff on the right side of the equals sign first.
// newNumber = newNumber + myNumber;

var divided = 1000 / 200;

var multiplied = 500 * 10;

var subtraction = 10 - 1;

console.log(multiplied / subtraction);
var order = (multiplied + subtraction);
// (5000 + 9) / 3
console.log("The value of order: ", order);
if (true) {
    console.log("I ran because this if statement allowed me to run");
}

if (true) {
    console.log("It is raining!");
}

if (true) {
    if (false) {
        console.log("Something");
        if (false) {}
    }
}

if (false) {
    console.log("this will run if true");
} else if (false) {
    console.log("This will run if true but the first one was false.");
} else {
    console.log("Nothing was true, so I will run instead.");
}

var isItRaining = true;
var isItSunny = false;

if ( isItRaining ) {
    console.log("Make sure to take your umbrella!");
} else {
    console.log("Enjoy your day!");

}
if ( isItSunny ) {
    console.log("Wear sunscreen");
}

// if
// else if
// (optional) else
