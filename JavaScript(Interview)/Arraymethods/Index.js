//array methods
const arr = [34, 55, 95, 20, 15]

arr.push(200);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(99)
console.log(arr);
arr.shift()
console.log(arr);
arr.reverse()
console.log(arr);

// x = arr.includes(220)
// console.log(x)

// x = arr.indexOf(34)
// console.log(x)

// x = arr.slice(1)
// console.log(x)

// x = arr.splice(1, 4)
// console.log(x, arr)



const arr4 = [1, 2, 3, 4, 5]

arr4.push(6)
arr4.unshift(0)
const reverseArr = arr4.reverse()
console.log(reverseArr)

const arr1 = [1,2,3,4,5]
const arr2 = [5,6,7,8,9,10,5]
let x = arr2.splice(0,2)

const arr3 = [...arr1, ...arr2]
console.log(arr3)


//-----------********** ARRAY-LIKE  OBJECSTS **********----------------//
// 1)
function demo() {
    const argsArray = Array.from(arguments);
    console.log(argsArray.map(arg => arg * 2)); // Works like an array
    console.log(argsArray);
}

demo(1, 2, 3); // Output: [2, 4, 6]


// 2)
// var arraylike={ '0': 1, '1': 2, '2': 3 }
// var arrr=[...arraylike];
// console.log(arrr);

const nodeList = document.getElementsByName('didsd','svsv');
console.log(nodeList.length)
const nodesArray = [...nodeList];
console.log(nodesArray); // Now a true array

// 3)
function demo() {
    const argsArray = Array.prototype.slice.call(arguments);
    console.log(argsArray);
}

demo(1, 2, 3,4,5,6,7); // Output: [1, 2, 3]


const person = { name: "John", age: 25 };
for (let key in person) {
    console.log(key, person[key]);
}

const arr11 = [10, 20, 30];
for (let num of arr11) {
    console.log(num);
}


// let input;
// while (input !== "yes") {
//     input = prompt("Type 'yes' to continue:");
// }
// console.log("Thank you!");

// let password;
// while (password !== "1234") {
//     password = prompt("Enter the password:");
// }

const arrrr = [10, 20, 30];

arrrr.forEach((value, index) => {
    console.log(value,index);
});

function mainFunction(callback) {
    // Perform some operation
    console.log("Main function executed");
  
    // Call the callback function
    callback();
  }
  
  function callbackFunction() {
    console.log("Callback function executed");
  }
  
  // Passing the callback function
mainFunction(callbackFunction);
  

 function fetchData(callback) {
    setTimeout(() => {
      callback("Data loaded");
    }, 1000);
  }
fetchData((message) => console.log(message));
  
let promise = new Promise((resolve, reject) => {
    let success = true;
    success ? resolve("Success!") : reject("Error!");
  });
  promise.then((message) => console.log(message))
.catch((error) => console.log(error));
  

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const PI = 3.14;
export function add(a, b) {
  return a + b;
}
export class Calculator {
  subtract(a, b) {
    return a - b;
  }
}


