// Function syntax
function functionName() {

    // Code that runs when the function is called
    console.log("Say something!");
    console.log("Okay fine I will say something.");
}

functionName();
functionName();
functionName();











function langNuongNamBo() {

    console.log('I missed Lang Nuong Nam Bo');
    console.log("I'll revisit that place once I'm in town.");
}

langNuongNamBo();
langNuongNamBo();


// Takes in two strings, concatenates them and console log the result.
function concatSentence(string1, string2) {

    var quanNgon = "ambient cozy Viet restaurant.";
    var xeCo = "relaxed karaoke cafe";

    console.log(quanNgon + xeCo);
}

concatSentence();

/* Parameters and Arguments

function functionName(parameter1, parameter2) {}
*/


function concatSentence(string1 + string2) {
console.log(string1 + string2);
}

concatSentence("$", "10.50");
concatSentence("100", "C");

function concatItself(string1, string2) {
concatSentence(string1, string2);
}