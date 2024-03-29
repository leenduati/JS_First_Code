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

// var firstName = prompt("Please enter your first name: ");
// var secondName = prompt("Please enter your second name:");
// var age = prompt("Please enter your age: ");
// var height = prompt("Please enter your height in cm: ");
// var pet = prompt("Please enter your pet's name: ");

// for (let petLastName = 0; petLastName < pet.length; petLastName++) {
//     result = pet[petLastName];

// }

// console.log(result)

// if (firstName[0] == secondName[0] && 20 < age < 30 && height >= 170 && result == "y") {
//     console.log("Welcome to the brotherhood spy!!!!");
// } else {
//     console.log("Nothing to see here HUMAN!!!");
// }

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
    if (weekday && !vacation) {
        return false
    } else if (!weekday && !vacation) {
        return true
    } else if (!weekday && vacation) {
        return true
    } else {
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
    if (aSmile && bSmile) {
        return true
    } else if (!aSmile && !bSmile) {
        return true
    } else if (aSmile && !bSmile) {
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

function luckySum(a, b, c) {
    //Code Goes Here
    if (a === 13) {
        return null
    } else if (b === 13) {
        return a
    } else if (c === 13) {
        return a + b
    } else {
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

function caught_speeding(speed, is_birthday) {
    //Code Goes Here
    if (speed < 60 && !is_birthday) {
        return 0
    } else if (61 < speed <= 80 && !is_birthday) {
        return 1
    } else if (speed > 80) {
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

function makeBricks(small, big, goal) {
    //Code Goes Here
    numOfSmalls = small * 1
    numOfBigs = big * 5
    result = numOfSmalls + numOfBigs
    if (result == goal || goal > result) {
        return true
    } else {
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
})


//Student Roster App Array Excercise

// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!

var roster = [];

// Create the functions for the tasks
// ADD A NEW STUDENT
// var input = prompt("Would you like to start the roster web app? y/n")
// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
// function quitArray() {
//     alert("Thanks for using the Web App! Please refresh the page to start over")
//     console.log(roster)
// }

// function continueArray() {
//     var result = prompt("Please select an action: add, remove, display, or quit")
//         // while(result != "quit"){
//     if (result == "add") {
//         var addy = prompt("Which name do you want to add to array? ")
//         roster.push(addy);
//         console.log(roster)
//         continueArray();

//     } else if (result == "remove") {
//         var remo = prompt("Which entry do you want to remove? ")
//         for (let index = 0; index < roster.length; index++) {
//             if (roster[index].toLowerCase() == remo) {
//                 roster.splice(index, 1)
//                 console.log(roster)

//             }
//             continueArray()
//                 // else{
//                 //   console.log("Entry selected not found: ")
//                 // }

//         }
//     } else if (result.toLowerCase() == "display") {
//         console.log(roster)
//         var action = prompt("Would you like to contiunue after viewing the array? y/n ")
//         if (action == "y") {
//             continueArray()
//         } else if (action == "n") {
//             quitArray()
//         }


//     } else if (result == "quit") {
//         quitArray();
//     } else {
//         alert("Select either add, remove, display or quit; Refresh page please")
//         continueArray()
//     }
// }

// function addNewArray() {
//     if (input == "y") {
//         continueArray();
//     } else if (input == "n") {
//         quitArray();
//     } else {
//         alert("Please select y/n")
//             // addNewArray()
//     }
// }

// addNewArray();

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.


// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command

//Objects

//Written as {key1: "Value one", key2: "value two:, ..."}

var car_hire = {
    color: "red",
    design: "toyota",
    make: "corolla",
    year: 1995,
    true: "yes, it is true",
    hello: 35,
    obj_arr: [36, "jojo", false],
    34: "I am 34 years old",
    fn: function helloWorld() {
        console.log("Hello Guy!!!")
    }
};

console.log(car_hire)
    // Reference keys via doule quites, eg.
console.log(car_hire["hello"]);
//objects can have values of various data types
car_hire["obj_arr"]["length"]
    //change the value of a key by:
car_hire["year"] = 2006
console.log(car_hire)
    //iterate thru an car_hire using for in
for (key in car_hire) {
    console.log("These are keys " + key);
    //for iteration within values, use
    console.log("These are values " + car_hire[key])
}

//Object Methods
// insert a function inside the object above and call it as a method using the dot notation eg car.fn
car_hire.fn()
    // In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.
//To show actual property in an object, use this
var objName = {
        name: "lee",
        callName: function() {
            console.log("Hello " + this.name)
        }
    }
    // Without the this keyword, the name referenced above produces a deprecated error,meaning it's void

// JS Part Exercise
// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength: function() {
        console.log(this.employee["name"].length)
            //this.name.length
    }
}

// Add a method called nameLength that prints out the
// length of the employees name to the console.


///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    alFN: function() {
        console.log("Name is " + this.name + ", Job is " + this.job + " Age is " + this.age)
    }
}

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.
employee.alFN(0)


///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    lastNameCall: function() {
        return this.name.split(" ")[1]
    }
}

// Add a method called lastName that prints
// out the employee's last name to the console.

// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp

//Document Object Module Use DOM JS tointeract with the webpage. TYpe Document/ console.dir(documeny) on Console window then enter to view the webpage DOM
// thre are many document.(methods) for grabbing html attributes eg. document.getElemntById(), byClasName, ByTagname, querySelector selects 1st object for css selector, selectorAll selects all objects.

var randomColor = ["red", "blue", "green", "purple", "cyan", "turqoise"];
var headTag = document.querySelector("h1")


function changeHeaderColor() {
    var out = Math.ceil(Math.random() * randomColor.length)

    headTag.style.color = randomColor[out]
}
// setInterval("changeHeaderColor()", 50) //call a function every 500 ms
changeHeaderColor()
    // headTag.style.color = "red"
Math.random()

// data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, or extra properties on DOM.

var p = document.getElementById("par")
var pClass = document.querySelector(".par-class")
pClass.innerText = "haha"
    //use inerHTML to add html tags eg
pClass.innerHTML = "<em>Haha Msee</em>";

console.log(p)
var special = document.querySelector("#special")
    // Call an element within an element by
var specialA = special.querySelector("a")

// Change attribute by set attribute
specialA.setAttribute("href", "https://google.com")

//DOM EVENTS : Using JS to trigger events
// Syntax myvar.addEventListener(event, func) e.g. head.addEventListener("cick", changeColor)
var head1 = document.querySelector("#one")
var head2 = document.querySelector("#two")
var head3 = document.querySelector("#three")

head1.setAttribute("title", "Hover over me")
head1.addEventListener("mouseover", function() {
    // mouse over will not change back after
    head1.style.backgroundColor = "yellow";
})

head1.addEventListener("mouseout", function() {
    head1.style.backgroundColor = "black"
    head1.style.color = "white"
})

head2.addEventListener("click", function() {
    head2.innerHTML = "<strong>Clicked kapsaa</strong>"
})

head3.addEventListener("ondblclick", function() {
        head3.style.fontSize = "2000 px";
    })
    // double click not working

//DOM EXERCISE DESIGN GAME TIC TAC TOE
//
tableData = document.querySelectorAll("td")
    //function to switch thru tic tac toe

//choose random X O ""
function chooseRand() {
    var randTic = ["X", "O", ""]
    var randMath = Math.floor(Math.random() * randTic.length)
    return randMath
}

chooseRand()

function changeTic() {
    var randTic = ["X", "O"]
    var randMath = Math.floor(Math.random() * randTic.length)
    if (this.innerHTML === "") {
        this.innerHTML = randTic[randMath]
    } else if (this.innerHTML === "X") {
        this.innerHTML = randTic[randMath]
    } else {
        this.innerHTML = randTic[randMath]
    }

}

for (let index = 0; index < tableData.length; index++) {
    tableData[index].addEventListener("click", changeTic)


}


//reload button
var btn = document.querySelector("#btn")
btn.addEventListener("click", function() {
    for (let index = 0; index < tableData.length; index++) {
        tableData[index].innerHTML = " "
        console.log(index)
    }
})