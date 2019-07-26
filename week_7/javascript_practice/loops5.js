
var counter = 10;


while (counter >= 0) {

    console.log("While loop: this is loop number: " + counter + ".");
    
    counter = counter - 1;
}

// For loop
for (var counter = 0; counter <= 10; counter = counter + 1) {

    console.log("For loop: this is loop number: " + counter + ".");
}

// Shorter for Loop
for (var i = 0; i < 100; i++) {
    console.log(i);
}

// Counting the amount of letters in a string.
var string = "Hello there, how are u doing?";
console.log(string);

var stringLength = string.length;
console.log(stringLength)

for (var i = 0; i < string.length; i++) {
    console.log("Character: " + string[i]);

    if (string[i] == "l" || string[i] == "L") {
        lCount = lCount + 1;
    }
}
console.log("The string" + "has" + lCount + " l's in it.");

function letterCounter(string, lowercase, uppercase) {

    var letterCounter = 0;

    for (var i = 0; i < string.length; i++) {

        if (string[i] == lowercase || uppercase) {

            letterCounter++;
        }

    }

console.log("we found lette" + letterCounter + " " + lowercase + " letters inside the text.");
}

letterCounter("hello world.", "o", "O");

letterCounter("goodbye world", "g", "G");