// copying

const OrgArr=[1,2,3,4];
const CopyArr=[...OrgArr];
console.log(CopyArr)

//Merging arr
const arr1=[1,2,3,4]
const arr2=[5,6,7,8]
const Merging=[...arr1,...arr2]
console.log(Merging)

//passing multiple operators

function sum(x, y, z) {
    return x + y + z;
  }
  const numbers = [1, 2, 3];
  
console.log(sum(...numbers));
// Expected output: 6

//question 1  (how many 1000,100,10  in 2525number)
  let number=2525;
   let res=Math.floor(number/1000); //2
   let results=number%1000 //525
   let res1=Math.floor(results/100);  //5
   let results1=number%100 //25
   let res2=Math.floor(results1/10); //2
console.log(res,res1,res2);

//question2 (array)
let array1=['n','a','i','d','u'];
let array2=['c','e','f','g','h'];
let re=[];
for (let index = 0; index < array1.length; index++) {
    if (index%2==0) {
        re.push(array1[index])
    }
    else{
        re.push(array2[index])
    }
}
let rel=re.join('')
console.log(rel);

//question (string)

let a1='qwert';
let a2='asdfg';
let string='';
for (let i = 0; i < a1.length; i++) {
    if (i%2==0) {
        string+=a1[i]
    }
    else{
        string+=a2[i]
    }
}

console.log(string);
