//var //let //const
console.log(true==1);
function variable(){
    var a=10;
    if(true){
      const  a=20;
        console.log(a);
    }
    console.log(a);
}
variable();
let res1= false || variable();
console.log(res1);

const arr=[1,2,3,4,5]
console.log(arr);

//const
 const b=100;
 b=200;
 console.log(b);  // error


let a = 10;
function f() {
    if (true) {
        let b = 9

        // It prints 9
        console.log(b);
    }

    // It gives error as it
    // defined in if block
    console.log(b);
}
f()

// It prints 10
console.log(a)