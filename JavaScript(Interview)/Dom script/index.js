const bodyelement = document.querySelector("body");
const form = document.createElement("form");
const lable = document.createElement("label");
lable.setAttribute("for","username");
lable.innerText = 'User Name :'
bodyelement.appendChild(form);
form.appendChild(lable);
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "narasimha")
// input.querySelector("input").addEventListener('change')
function value(){
    console.log("event triggered")
}
input.onchange = value;
form.appendChild(input)



// //TabNnineai








//Create an array called products that contains five objects.
// Each object should have the following properties:
// id (a unique number)
// name (a string)
// price (a number)
// category (a string)
// stock (a number)

let products=[
    {
        id:12,
        name:"vivo",
        price:25000,
        category:"smartphone",
        stock:11
    },
    {
        id:34,
        name:"samsung1",
        price:20000,
        category:"smartphone",
        stock:22
    },
    {
        id:76,
        name:"oppo",
        price:28000,
        category:"smartphone",
        stock:33
    },
    {
        id:78,
        name:"realme",
        price:22000,
        category:"smartphone",
        stock:44
    },
    {
        id:3,
        name:"samsung",
        price:18000,
        category:"smartphone",
        stock:55
    },
]


function params(na,pri){
    for(let arr of products){
        if(na==arr.name && pri==arr.price){
            return("sucess login")
        }
        
    }
    return "login failed"
}
let a=params("samsung",18000);
console.log(a)


//Task 2: Modify Product Data
// Increase the price of the third product by 20%.
// Reduce the stock of the first product by 5 units.
// Change the category of the last product to "Electronics".
// products[2].price = products[2].price * 1.2;
// products[0].stock = products[0].stock - 5;
// products[4].category = 'electronic';
// console.log(products);


//Accessing and Displaying Data
// Print the name of the most expensive product in products.
// Print the category of the second product.
// Print the stock of the product with ID = 3.


let highestproduct=products.reduce((a,b)=> a.price>b.price?a:b)
console.log(highestproduct.name)

    let stock=products.filter(product => product.id === 3)
    console.log(stock[0].stock)

    // Task 4: Create an Employee Database
    // Create an array called employees with four employee objects.
    // Each employee object should have:
    // empId (a unique number)
    // name (a string)
    // designation (a string)
    // salary (a number)
    // department (a string)

    // Task 5: Update Employee Details
    // Increase the salary of the first employee by 10%.
    // Change the designation of the third employee to "Senior Developer".
    // Assign "HR" as the department of the second employee.

    // Task 6: Retrieve Employee Data
    // Print the name of the highest-paid employee.
    // Print the designation of the employee with empId = 2.
    // Print the department of the last employee.


    function Totitlecase(name){
        let fullname='';
        for(let i=0; i<name.length; i++){
            if(i===0){
                fullname += name[i].toUpperCase()
            }
            else if(name[i-1]===" "){
                fullname += name[i].toUpperCase()
            }
            else{
                fullname+=name[i]
            }
       }
        console.log(fullname)
    }
    Totitlecase("narasimha naidu pendyala")


    function toTitleCase(name) {
        let Arr = name.split(' ');
        let final = '';

        for (let word of Arr) {
            let a = word.charAt(0).toUpperCase() + word.slice(1);
            final+= a + ' ';
        }
    
        return final;
    }
    
    console.log(toTitleCase('narasimha naidu pendyala'));  
    

   
       
    