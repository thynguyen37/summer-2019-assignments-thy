// Loops

/* Infinite loop, try to avoid
while (true) { 
}
*/

var counter = 0;
console.log("Value of counter at start:" + counter);

while (counter <= 10) {

    console.log("Value of counter inside of while loop before updating." + counter);
    counter = counter + 1;
    console.log("Value of counter inside of while loop before updating." + counter);
}
