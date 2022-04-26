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

// FUNCTION EXERCISES - SOLUTIONS

// Functions are an extremely important part of understanding how to program
// and they also allow for an ideal way of testing out your general JavaScript
// knowledge.

// These problem statements are sourced from codingbat.com,
// a great website to practice your code!

// The problems will gradually get harder and harder.

//
// PROBLEM 1: SLEEPING IN
//
// Write a function called sleepIn that takes in two boolean parameters: weekday
// and vacation.
//
// The parameter weekday is true if it is a weekday, and the parameter vacation is
// true if we are on vacation. We sleep in if it is not a weekday or
// we're on vacation. Return true if we sleep in. So some example input and output:
//
// sleepIn(false, false) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true

function sleepIn(weekday, vacation) {
  //Code Goes Here
if(weekday && !vacation){
  return false
}
else if(!weekday && !vacation){
  return true
}
else if(!weekday && vacation){
return true}
else{
  return "Situation Doesn't Exist"
}
}



//
// PROBLEM 2: MONKEY TROUBLE
//
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if
// each is smiling. We are in trouble if they are both smiling or if neither of
// them is smiling. Return true if we are in trouble.
//
// Example Input and Output
//
// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false

function monkeyTrouble(aSmile, bSmile) {
    //Code Goes Here
    if(aSmile && bSmile){
      return true
    }
    else if(!aSmile && !bSmile){
      return true
    }
    else if(aSmile && !bSmile){
      return false
    }
}


//
// PROBLEM 3: STRING TIMES
//
// Given a string and a non-negative int n, return a larger
// string that is n copies of the original string.
//
// Example input and output:
//
// stringTimes("Hi", 2) → "HiHi"
// stringTimes("Hi", 3) → "HiHiHi"
// stringTimes("Hi", 1) → "Hi"

function stringTimes(str, n) {
    //Code Goes Here
    result = "";
    for (let index = 0; index < n; index++) {
      for (let j = 0; j < str.length; j++) {
        result += str[j]
        
      }
      
    }
    return result
}

// PROBLEM 4: LUCKY SUM

// Given 3 numerical values, a b c, return their sum. However, if one of the values is
// 13 then it does not count towards the sum and values to its right do not count.
// So for example, if b is 13, then both b and c do not count.
//
// Hint (Explore using multiple return statements inside a single function!)
//
// Example input and output
//
// luckySum(1, 2, 3) → 6
// luckySum(1, 2, 13) → 3
// luckySum(1, 13, 3) → 1

function luckySum(a, b, c){
   //Code Goes Here
  if(a === 13){
    return null
  }
  else if(b === 13){
    return a
  }
  else if(c === 13){
    return a + b
  }
 else{
   return a + b + c
 }
}

// PROBLEM 5:
//
// You are driving a little too fast, and a police officer stops you. Write code to
// compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
// 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61
// and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2.
// Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
//
// Here are some example inputs and outputs:
//
// caught_speeding(60, false) → 0
// caught_speeding(65, false) → 1
// caught_speeding(65, true) → 0

function caught_speeding(speed, is_birthday){
  //Code Goes Here
  if(speed <60 && !is_birthday){
    return 0
  }

  else if(61 < speed <= 80 && !is_birthday){
    return 1
  }
  else if(speed > 80){
    return 2
  }
}


// BONUS: MAKE BRICKS
//
// We want to make a row of bricks that is goal inches long. We have a number of
// small bricks (1 inch each) and big bricks (5 inches each). Return true if it
// is possible to make the goal by choosing from the given bricks. This is a
// little harder than it looks and can be done without any loops in a single line!
//
// If you can't figue this one out, don't worry, that's why its a bonus!
//
// makeBricks(3, 1, 8) → true
// makeBricks(3, 1, 9) → false
// makeBricks(3, 2, 10) → true

function makeBricks(small, big, goal){
  //Code Goes Here
  numOfSmalls = small * 1
  numOfBigs = big * 5
  result = numOfSmalls + numOfBigs
  if(result == goal || goal > result){
    return true
  }
else{
  return false
}
}

//arrays
// newArray = []
var countries = ["USA", "Germany", "China"];
console.log(countries[1]);
countries[1] = "Kenya";
//immutable //mutable an array is mutable //Stirngs are immutable
var rando = [1, true, "string"];
rando.length
//array methods
//remove last item. array.pop(), add an element, return last item, array[length - 1]
//we can do nested arrays
//array irretariton //for of is for arrays, for in ids for objects
for (const iterator of rando) {
  console.log(iterator)
  
  
}


const array1 = ['a', 'b', 'c'];
//for each using an arrow function
array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

// Arrow function
// forEach((element) => { /* ... */ })
// forEach((element, index) => { /* ... */ })
// forEach((element, index, array) => { /* ... */ })

// // Callback function
// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// // Inline callback function
// forEach(function(element) { /* ... */ })
// forEach(function(element, index) { /* ... */ })
// forEach(function(element, index, array){ /* ... */ })
// forEach(function(element, index, array) { /* ... */ }, thisArg)

function awesomo(para) {
  console.log(para + " is soo cool");
  
}

var array_awe = ["django", "python", "javascript", "react"];

array_awe.forEach(haha => {
  awesomo(haha)
