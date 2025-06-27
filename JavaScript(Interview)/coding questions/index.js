// Problem Statement –

// A chocolate factory is packing chocolates into the packets. The chocolate packets here represent an array  of N number of integer values. The task is to find the empty packets(0) of chocolate and push it to the end of the conveyor belt(array).

// Example 1 :

// N=8 and arr = [4,5,0,1,9,0,5,0].

// There are 3 empty packets in the given set. These 3 empty packets represented as O should be pushed towards the end of the array

// Input :

// 8  – Value of N

// [4,5,0,1,9,0,5,0] – Element of arr[O] to arr[N-1],While input each element is separated by newline

// Output:

// 4 5 1 9 5 0 0 0

function pushZerosToEnd(n, arr) {
    let array = [];
    let zeroCount = 0;
    for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
    array.push(arr[i]);
    } else {
    zeroCount++;
    }
    }
    
    while (zeroCount > 0) {
    array.push(0);
    zeroCount--;
    }
    
    console.log(array);
    }
    
    const n = 8;
    const arr = [4, 5, 0, 1, 9, 0, 5, 0];
pushZerosToEnd(n, arr);


// Joseph is learning digital logic subject which will be for his next semester. He usually tries to solve unit assignment problems before the lecture. Today he got one tricky question. The problem statement is “A positive integer has been given as an input. Convert decimal value to binary representation. Toggle all bits of it after the most significant bit including the most significant bit. Print the positive integer value after toggling all bits”.

// Constraints-

// 1<=N<=100

// Example 1:

// Input :

// 10  -> Integer

// Output :

// 5    -> result- Integer

// Explanation:

// Binary representation of 10 is 1010. After toggling the bits(1010), will get 0101 which represents “5”. Hence output will print “5”.


function togeel(n){
    let binary = n.toString(2);
    let toggledBinary = ""; 
    for (let i = 0; i < binary.length; i++) {
        toggledBinary += binary[i] === '0' ? '1' : '0'; // Step 3: Toggle bits
    }
    let result = parseInt(toggledBinary, 2);
    return result;
}
console.log(togeel(14));





// You are given a function,
// int findCount(int arr[], int length, int num, int diff);

// The function accepts an integer array ‘arr’, its length and two integer variables ‘num’ and ‘diff’. Implement this function to find and return the number of elements of ‘arr’ having an absolute difference of less than or equal to ‘diff’ with ‘num’.
// Note: In case there is no element in ‘arr’ whose absolute difference with ‘num’ is less than or equal to ‘diff’, return -1.

// Example:
// Input:

// arr: 12 3 14 56 77 13
// num: 13
// diff: 2
// Output:
// 3

// Explanation:
// Elements of ‘arr’ having absolute difference of less than or equal to ‘diff’ i.e. 2 with ‘num’ i.e. 13 are 12, 13 and 14.

function findCount(arr1, num, diff) {
    // Initialize a counter to keep track of matching elements
    let count = 0;

    // Loop through the array
    for (let i = 0; i < arr1.length; i++) {
        // Check if the absolute difference is less than or equal to diff
        if (Math.abs(arr1[i] - num) <= diff) {
            count++;
        }
    }

    // If no elements match the condition, return -1
    return count;
}

// Example usage
const arr1 = [12, 3, 14, 57, 77, 13];
const num = 13;
const diff = 2;
console.log(findCount(arr1, num, diff)); // Output: 3



// Implement the following Function 

// def differenceofSum(n. m)

// The function accepts two integers n, m as arguments Find the sum of all numbers in range from 1 to m(both inclusive) that are not divisible by n. Return difference between sum of integers not divisible by n with sum of numbers divisible by n.

// Assumption:

// n>0 and m>0
// Sum lies between integral range
// Example

// Input
// n:4
// m:20
// Output
// 90

// Explanation

// Sum of numbers divisible by 4 are 4 + 8 + 12 + 16 + 20 = 60
// Sum of numbers not divisible by 4 are 1 +2 + 3 + 5 + 6 + 7 + 9 + 10 + 11 + 13 + 14 + 15 + 17 + 18 + 19 = 150
// Difference 150 – 60 = 90

function differenceofSum(a,b){
    let sum1=0;
    let sum2=0;
    for(let i=0; i<=b; i++){
        if(i%a==0){
            sum1 +=i
        }
        else{
            sum2 +=i
        }  
    }
    let sum=sum2-sum1;
    return sum;
}
let a=3;
let b=10;
console.log(differenceofSum(a,b));


// Airport security officials have confiscated several item of the passengers at the security check point. All the items have been dumped into a huge box (array). Each item possesses a certain amount of risk[0,1,2]. Here, the risk severity of the items represent an array[] of N number of integer values. The task here is to sort the items based on their levels of risk in the array. The risk values range from 0 to 2.

// Example :

// Input :

// 7  -> Value of N

// [1,0,2,0,1,0,2]-> Element of arr[0] to arr[N-1], while input each element is separated by new line.

// Output :

// 0 0 0 1 1 2 2  -> Element after sorting based on risk severity 

// Example 2:

// input : 10  -> Value of N 

// [2,1,0,2,1,0,0,1,2,0] -> Element of arr[0] to arr[N-1], while input each element is separated by a new line.

// Output : 

// 0 0 0 0 1 1 1 2 2 2  ->Elements after sorting based on risk severity.

// Explanation:

// In the above example, the input is an array of size N consisting of only 0’s, 1’s and 2s. The output is a sorted array from 0 to 2 based on risk severity.

function sortRiskLevels(arr) {
    let count0 = 0, count1 = 0, count2 = 0;
    
    // Count the number of 0s, 1s, and 2s
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
    count0++;
    } else if (arr[i] === 1) {
    count1++;
    } else if (arr[i] === 2) {
    count2++;
    }
    }
    
    // Fill the array with 0s, 1s, and 2s based on the counts
    for (let i = 0; i < count0; i++) {
    arr[i] = 0;
    }
    for (let i = count0; i < count0 + count1; i++) {
    arr[i] = 1;
    }
    for (let i = count0 + count1; i < arr.length; i++) {
    arr[i] = 2;
    }
    
    return arr;
    }

    function sortRiskLevels(arr) {
let count0 = 0, count1 = 0, count2 = 0;

// Count the number of 0s, 1s, and 2s
for (let i = 0; i < arr.length; i++) {
if (arr[i] === 0) {
count0++;
} else if (arr[i] === 1) {
count1++;
} else if (arr[i] === 2) {
count2++;
}
}

// Fill the array with 0s, 1s, and 2s based on the counts
for (let i = 0; i < count0; i++) {
arr[i] = 0;
}
for (let i = count0; i < count0 + count1; i++) {
arr[i] = 1;
}
for (let i = count0 + count1; i < arr.length; i++) {
arr[i] = 2;
}

return arr;
}

const arr11 = [1, 0, 2, 0, 1, 0, 2];
console.log(sortRiskLevels(arr11)); // Output: [0, 0, 0, 1, 1, 2, 2]



function sum1212(a,b){
    x= 5
    
}
sum1212(1,2)
console.log(x)