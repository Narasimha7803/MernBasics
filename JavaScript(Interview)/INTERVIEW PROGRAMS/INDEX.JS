var a = 'mnbvcxzzxcvbnm'
b=a.split('').reverse().join('')
if(a==b){
    console.log('is palindrown')
}
else{
    console.log('is  not palindrown')
}

let ar=[1,2,3,4,5,88,6,7]
console.log(Math.max(...ar))

const socials = ['Twitter', 'Facebook', 'Linkedin', 'Instagram']

console.log(socials.__proto__)

socials.forEach((element, index, arr) => {
    console.log(`${index} - ${element} - ${arr}`);
});

function logSocialsn(ar){
    console.log(ar)
}

socials.forEach(logSocialsn) 

const socialObjs = [{name:'Twitter', url:'https//twitter.com'}, {name:'Facebook', url:'https//facebook.com'}, {name:'Linkedin', url:'https//linkedin.com'},{name:'Instagram', url:'https//instagram.com'},]

socialObjs.forEach((item) => console.log(item.url));



// function findDuplicates(arr) {
//     const seen = new Set();
//     const duplicates = new Set();
//     arr.forEach(item => {
//       if (seen.has(item)) {
//         duplicates.add(item);
//       } else {
//         seen.add(item);
//       }
//     });
//     return Array.from(duplicates);
//   } 
  
//   // Test
//   console.log(findDuplicates([1, 2, 3, 4, 5, 3, 2])); // [3, 2]
  

  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // Test
  console.log(removeDuplicates([1, 2, 3, 4, 5, 3, 2])); // [1, 2, 3, 4, 5]
  

  function fibonacci(n) {
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result
  }
  
  // Test
  console.log(fibonacci(15)); // [0, 1, 1, 2, 3]

  function isPrime(n) {
    tag= false;
    for (let i = 2; i < n; i++) {
        
      if (n % i === 0);
      tag=false
    }
    return tag
  }
  
  // Test
  console.log(isPrime(7)); // true
  console.log(isPrime(4)); // false
  
  