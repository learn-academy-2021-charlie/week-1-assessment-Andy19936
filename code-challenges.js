// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212



// assign a function called tempChecker
// use a conditional statement containing statements for the 3 conditions that return the strings above for various inputs
// create a catch all else statement for invalid data types 
// remember to type condionals from either top to bottom or bottom to top in regards to conditional amounts
// got stuck on my catch all statement reached out to Austin and Sarah * realized I need to use proper datatype notation (typing "k" instead of just k) and continued on
// typed true as my input and recieved "true is below boiling point"....

const tempChecker =(temp)=> {
    if (temp  >= 350){
        return `${temp} is above boiling point` 
    } else if (temp === 212) {
        return `${temp} is at boiling point`
    } else if (temp <=211) {
        return `${temp} is bellow boiling point`
    } else  {
        return "please enter a valid input"
    }
    }

console.log(tempChecker(temp1))
console.log(tempChecker(temp2))
console.log(tempChecker(temp3))



// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

// assign my function with a name were going with masher
// make an argument statement with 2 inputs
// use a built in method to combine the arrays together
// use a built in method to sort the arrays
// cross my fingers and hope it works -_-
// waste 30 min of errors because you forgot to use camelCase...
// get severely stuck on why my string isnt being sorted 
// spend the next 40 minutes discovering callback functions

const masher = (array1, array2) => {
   return array1.concat(array2).sort(function(a,b){return a-b}).join()
}
console.log(masher(myNumbers1,myNumbers2))




// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"    

// name my function reverse
// use the built in method .reverse
//realize that doesnt work and do some reviewing for the next hour
//split it into single letter arrays reverse the arrays and then we join the same way we split

var myString1 = "bravo"
var myString2 = "charlie"
 
 const reverse = (string) => {
     return   string.split ('').reverse().join('')
 }
 
 console.log(reverse(myString1))
 console.log(reverse(myString2))




// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

//  name my function mathify
//  set my function two take two parameters
//  use conditionals to make my function work
//  set a conditional for if the numbers are equal to eachother
//  set a catch all conditional for invalid inputs


var numberExample1 = 42
var numberExample2 = 27

var numberExample3 = 7
var numberExample4 = 19

const mathify = (number1, number2) =>{
     if(number1 > number2) {
        return number1 - number2
    } else if (number1 < 2) {
        return number2 - number1
    } else if(number1 == number2){
        return "your numbers are equal to each other and are wasting mathify's time!"
    } else { 
        return "please enter a valid entry"
    }

}
console.log(mathify(42, 27))
console.log(mathify(19, 7))
console.log(mathify(5, 5))


// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)


// getting nan instead of desired message from terminal going to reach out to instructors!
// have existencial breakdown
// Sarah to the rescue! totally incorrect logic started out with number1 || number 2 !== number....


var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"

var numberExampleRefactor3 = 27
var numberExampleRefactor4 = 24

const mathify2 = (number1, number2) =>{
    if(typeof number1 !== "number" ||  typeof number2 !== "number"){
        return "your input is not a number"
    } else if(number1 > number2) {
       return number1 - number2
    }else if (number1 < 2) {
       return number2 - number1
   }else if(number1 == number2){
       return "your numbers are equal to each other and are wasting mathify's time!"
   } else { 
       return "please enter a valid entry"
   }

}
console.log(mathify2(numberExampleRefactor1, numberExampleRefactor2))
console.log(mathify2(numberExampleRefactor3, numberExampleRefactor4))

