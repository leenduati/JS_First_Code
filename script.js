// var input = parseInt(prompt("Please enter value in pounds: "))
// var output = input * 0.454
//     // Concatenate strings in JS
// alert("Your weight is " + Math.round(output, 2) + " KGs")
//     // Console part
// console.log("Conversion Completed")
console.log("lee")

// Control flow
// IF Statement statements
// if (condition){
//Execute Code} else if(condtion two){//execute code} else{//Execute some other code}

//Examples
var hot = false
var temp = 600

if (temp > 80) {
    hot = "true" //trying to change data formats
        //use else if(condition) for multiple jargons
    console.log("Temp is " + temp + " :very hot sir " + hot)
} else {
    console.log("Temp is less than 80")
}

//LOOPS
//while loops
//while(condition){//execute code while condition is true, it may run forever}
let x = 0
while (x < 5) {
    console.log("Value of x is " + x)
        // add break to loop using if statement
    if (x == 3) {
        console.log("X is 3 biach")
        break
    }
    x += 1
        //adding break to loop
}

//Assignment1 - While loop that prints out even numbers
var result = 0
while (result <= 10) {
    if (result % 2 == 0) {
        console.log("This is an even number: " + result)
    }
    result += 1
}
//for loops

/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop

var num = 0;
while (num < 5) {
    console.log("Hello using a while loop");
    num++;
}



// For Loop

for (let numFor = 0; numFor < 5; numFor++) {
    console.log("Hello using a for loop");

}




/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop

numWhile = 0
while (numWhile < 26) {
    if (numWhile % 2 != 0) {
        console.log("Odd numbers using while " + numWhile);
    }
    numWhile++;
}

// METHOD TWO
// For Loop
for (let index = 0; index < 26; index++) {
    if (index % 2 != 0) {
        console.log("Odd numbers using for " + index);
    }

}

//JS Final Project

var firstName = prompt("Please enter your first name: ");
var secondName = prompt("Please enter your second name:");
var age = prompt("Please enter your age: ");
var height = prompt("Please enter your height in cm: ");
var pet = prompt("Please enter your pet's name: ");

for (let petLastName = 0; petLastName < pet.length; petLastName++) {
    result = pet[petLastName];

}

console.log(result)

if (firstName[0] == secondName[0] && 20 < age < 30 && height >= 170 && result == "y") {
    console.log("Welcome to the brotherhood spy!!!!");
} else {
    console.log("Nothing to see here HUMAN!!!");
}