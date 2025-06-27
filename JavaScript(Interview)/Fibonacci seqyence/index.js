function feb(n){
    let a=0 , b=1 ,temp ;

  for(let i=2; i<=n; i++){
    temp= a+b;
    a=b;
    b=temp;
  }
  return b

}
console.log(feb(25));


// or 

function febseries(n){
    let fib=[0,1];
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
    return fib;
} 
console.log(febseries(28)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]