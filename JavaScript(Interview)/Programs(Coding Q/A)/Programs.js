// Find the largest and smallest numbers in an array
function array(){
let array=[1,2,3,4,5,6,7,8,9]
let largest=0
smallest=array[0]
for(let i=0; i<array.length; i++){
    if(array[i]>largest){
        largest=array[i]
    }
    if(array[i]<smallest){
        smallest=array[i]
    }
}
console.log(largest)
console.log(smallest)
}
array()

//Reverse a string without using built-in functions.

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
const inputString = "hello";
console.log(reverseString(inputString));

           // or
function reverseStringUsingBuiltIn(str) {
return str.split("").reverse().join("");
}
 const original = "world";
console.log("Original String:", original);
console.log("Reversed String:", reverseStringUsingBuiltIn(original));


//Check if a string is a palindrome
function palindrome(str){
let palindrome=str.split("").reverse().join("");
if(str===palindrome){
    console.log("palindrown",str)
}
else{
    console.log(" not palindrown",str)
}
}
const str="nnnaaoiiannn"
palindrome(str);

//Remove duplicate elements from an array
function removeDuplicates(arr) {
    const uniqueElements = [];
    const repeatedElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueElements.includes(arr[i])) {
            uniqueElements.push(arr[i]);
        }
        else{
            repeatedElements.push(arr[i])
        }
    }
    console.log("Original Array:", numbers);
    console.log("Array with Duplicates Removed:", uniqueElements);
    console.log("Array with Duplicates :", repeatedElements);
}

// Example usage
const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1];
const uniqueNumbers = removeDuplicates(numbers);



// *Program to find the first non-repeating character in a string

function firstNonRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) === str.lastIndexOf(char)) {
    return char;
    }
    }
    return null; 
    }
    const str1 = "swiss";
    console.log(firstNonRepeatingCharacter(str1)); // Output: "w"


//////********Merge two sorted arrays into one sorted array.********//////
function MergeArray(){
    let arr1=[1,2,3,4,5,];
    let arr2=[6,7,8,9,10];
    const arr4= [...arr1,...arr2]
    console.log(arr4)}
MergeArray()


// **Implement a function to count vowels and consonants in a string.**
function count(str2){
    let vowels=0;
    let v=[]
    let consonants=0;
    let c=[]
    for(let i=0; i<str2.length; i++){
        let char=str2[i].toLowerCase();
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"  ) {
            vowels +=1;
            v.push(char)
        }
        else{
            consonants +=1;
            c.push(char)
        }
    }
    console.log(vowels,"vowels");
    console.log(consonants,"consonants")
    console.log(v,"vovels");
    console.log(c,"consonants")

}
const str2="naraJGUYSDGQIHIYsimha"
count(str2)

//  1. **Check if a number is prime.**
//  2. **Generate the first `n` prime numbers.**
//  3. **Find the greatest common divisor (GCD) of two numbers.**
//  4. **Check if a number is a power of two.**
//  5. **Solve the "FizzBuzz" problem.**

function isPrime(num) {
if (num <= 1) 
    return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        //*****Math.sqrt(num) is main point
if (num % i === 0)
    return false;
    }
    return true;
    }
console.log(isPrime(7)); 
console.log(isPrime(10));

function generatePrimes(n) {
    const primes = [];
    let num = 2;
    while (primes.length < n) {
    if (isPrime(num)) {
    primes.push(num);
    }
    num++;
    }
    return primes;
    }
    
    console.log(generatePrimes(5)); // Output: [2, 3, 5, 7, 11]

//**Generate the first `n` prime numbers.**


function primenumber(a){
    let arr=[]
    for (let i=2; i<=a; i++){
        let isPrime = true;
        for(let j=2; j<=Math.sqrt(i);j++ ){ 
            if(i%j === 0){
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            arr.push(i);
        }
    }
    console.log(arr)
}
primenumber(100)




///////***call back function ****** */
function greet(a,b, callback) {
    console.log(a+b);
    callback(); // Call the callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}
greet(5,4, sayGoodbye);





function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;

    // Compare elements from both arrays and push the smaller one
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1 (if any)
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2 (if any)
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    

    return result;
}

// Example Usage
let arr1 = [1, 3, 5,8,9, 7];
let arr2 = [6,2, 4, 6, 8];
let array3= [...arr1,...arr2]
console.log(array3)
console.log(mergeSortedArrays(arr1, arr2));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]



function findMissingNumber(arr) {
    const actualSum = arr.reduce((sum, num) => sum + num,0);
    return  actualSum;
}

// Example Usage
const arr = [1, 2, 4, 5, 6];
console.log(findMissingNumber(arr)); 
