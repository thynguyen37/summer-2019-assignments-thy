// Function syntax
function functionName() {

    // Code that runs when the function is called
    console.log("Say something!");
    console.log("Okay fine I will say something.");
}

functionName();
functionName();
functionName();





// Describe in paranthesis to clarify
var somethingImportant = "Not really important";

// Defining a function
function takeInfo(firstVariable, secondVariable) {

    secondVariable = secondVariable + "!";
    console.log(firstVariable);
    console.log(secondVariable);
    
    var sentence = firstVariable + " " + secondVariable + "!";

    return sentence;

}


// Calling a function
var results = takeInfo("hello", "goodbye");

console.log(takeInfo("How", "are you"));

var results2 = takeInfo(takeInfo("hello", "there"), takeInfo("goodbye", "friend"));

console.log(results2);


console.log("what's up!");
Math.random();