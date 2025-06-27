
// JavaScript Assignments: Day 1 to Day 3 Topics
// Here’s a list of assignments to practice the concepts you’ve learned so far:

// Day 1: JavaScript Basics
// Variable Declaration and Data Types

// Write a program to declare variables of different data types (number, string, boolean, object, undefined, and null) and print their types using typeof.

let a="narasimha"
console.log(typeof(a))
console.log(a)

let a1=123
console.log(typeof(a1))
console.log(a1)

let a2=true
console.log(typeof(a2))
console.log(a2)

const person = { name: "Alice", age: 25 }; // object
console.log("Type of person:", typeof person); // object
console.log(person); // object

const emptyValue = null; // null
console.log(emptyValue);

// Arithmetic Operations

// Write a program that takes two numbers as input and performs all arithmetic operations (+, -, *, /, %) on them. Display the results.

// const num1 = parseFloat(prompt("Enter the first number: "));
// const num2 = parseFloat(prompt("Enter the second number: "));
// const sum = num1 + num2;
// const difference = num1 - num2;
// const product = num1 * num2;
// const quotient = num1 / num2;
// const remainder = num1 % num2;
// console.log(`Sum: ${sum}`);
// console.log(`Difference: ${difference}`);
// console.log(`Product: ${product}`);
// console.log(`Quotient: ${quotient}`);
// console.log(`Remainder: ${remainder}`);

// String Manipulation

// Create a program that accepts a user’s full name, splits it into first and last name, and displays them separately. Then display the name in uppercase and lowercase.

// const fullName = prompt("Enter your full name (first and last name): ");
// const [firstName, lastName] = fullName.split(" ");
// console.log(`First Name: ${firstName}`);
// console.log(`Last Name: ${lastName}`);
// console.log(`Full Name in Uppercase: ${fullName.toUpperCase()}`);
// console.log(`Full Name in Lowercase: ${fullName.toLowerCase()}`);


// // Type Conversion

// Write a program to convert a string containing a number into a numeric value and perform arithmetic operations on it. Handle invalid input using isNaN.


// Convert the string to a numeric value
let string="100"
const num = parseFloat(string);
if (isNaN(num)) {
    console.log("Invalid input! Please enter a valid number.");
} else {
    const added = num + 10;
    const subtracted = num - 5;
    const multiplied = num * 2;
    const divided = num / 2;
    console.log(`string: ${string}`)
    console.log("num",num)
    console.log(`After Adding 10: ${added}`);
    console.log(`After Subtracting 5: ${subtracted}`);
    console.log(`After Multiplying by 2: ${multiplied}`);
    console.log(`After Dividing by 2: ${divided}`);
}

// Day 2: Operators and Conditionals
// Comparison and Logical Operators

// Write a program to check if a number is within the range of 10 and 50 using comparison and logical operators. Display appropriate messages.

// const number = parseFloat(prompt("Enter a number: "));
// // Check if the number is within the range
// if (number >= 10 && number <= 50) {
//     console.log(`${number} is within the range of 10 and 50.`);
// } else {
//     console.log(`${number} is not within the range of 10 and 50.`);
// }
// Odd or Even

// Write a program that takes a number as input and checks whether it’s odd or even.
// Grading System

// Write a program that takes a student's marks as input and assigns grades based on the following criteria:
// Marks >= 90: Grade A
// Marks >= 75 and < 90: Grade B
// Marks >= 50 and < 75: Grade C
// Marks < 50: Grade F
// Leap Year

// Write a program that checks if a given year is a leap year or not using the modulo operator.

 const year = parseFloat(prompt("enter the  year"));
 if(year%4==0 ){
    console.log("leap year")
 }
else{
    console.log("not a leap year") 
}

// Number Guessing Game

// Write a program to randomly generate a number between 1 and 10 and allow the user to guess the number. Give hints like "too high" or "too low."


// let nummm=21
//  const num1 = parseFloat(prompt("Guess the  number within the range of 10 and 50: "));
// if(num1>nummm){
//     console.log("number is  too high",num1)
// }
// else if(num1<nummm){
//     console.log("number is  too low",num1)
// }
// else{
//     console.log("number is correct",num1)
// }


// Day 3: Functions and Scope
// Basic Function

// Create a function called greet that takes a name as a parameter and prints "Hello, [name]!".


// Area Calculator

// Write functions to calculate:
// The area of a rectangle (length × width)
// The area of a circle (π × radius²)
// Call these functions with different inputs.
// Sum of an Array

// Write a function sumArray that takes an array of numbers as input and returns the sum of all the elements.
// Scope and Hoisting

// Write a program that demonstrates:
// The difference between var, let, and const in terms of scope.
// Hoisting of var and why let and const do not behave the same way.
// Default Parameters

// Write a function multiply that multiplies two numbers. Set a default value of 1 for the second parameter in case it's not provided.
// IIFE (Immediately Invoked Function Expression)

// Write an IIFE that calculates the square of a number and prints it.


