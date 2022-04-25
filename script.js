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