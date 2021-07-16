// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
// console.log(cohort.length)

// a) Your answer: in your terminal if you run this bit of code i think you will see the number 12 displayed.
// b) Verify and explain: To my understanding first you are assigning the variable named cohort to a value of string "Charlie 2021" next you are using console.log to display (cohort.length) and using the built in method of .length which counts how long a string type code is. 


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: if you run this bit of code in your terminal I think you will see the letter "l" displayed.
// b) Verify and explain: To my understanding first you are assigning the variable named greeting to the value of the string "Hello World!" next you are using the operation console.log(greeting[3]) which is using [] to call upon the value of data that is located at index "3" [] starts counting at a zero index meaning your first letter counted would start at index 0 which would land the letter "l" at the value of index 3 


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
//console.log(languages[index])

// a) Your answer: If you ran this bit of code in your terminal I think you would see the string "Ruby" displayed.
// b) Verify and explain: in this string of code first you are creating an array with the variable assignment of languages containing four strings listing 4 different types of languages, next you are assigning the variable named index to 1, next you are using the console.log(languages[index]) which is going to display the value of the second item in your array because the variable languages is assigned to your array and your [] are accessing the item that is at index 1 of the array which again starts counting at 0 meaning index 1 is actually your second item listed in your array.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
 console.log(weekendDays.toUpperCase())

// a) Your answer: In this bit of code I think your terminal will display "SATURDAY" "SUNDAYS" 
// b) Verify and explain: My answer was incorrect and I recieved this error "TypeError: weekendDays.toUpperCase is not a function" which upon doing some research I found that arrays do not have a method that allows you to use.toUpperCase instead you would have to use a .map function which we have not covered yet and I know nothing about ¯\_(ツ)_/¯  .


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: If you ran this bit of code in your terminal you would see it display the data type "number"
// b) Verify and explain: In this bit of code you are creating an array with the variable assignment of dataTypes containing 3 strings listing 3 different data types then you are using console.log (typeof dataTypes.length) which is using the typeof built in function to tell you what data type dataType.length which is also using a built in method of .length which is counting the length of the items in the array and giving you the amount using a data type of number which is giving the typeof the information it is going to display which is the datatype of number. 
