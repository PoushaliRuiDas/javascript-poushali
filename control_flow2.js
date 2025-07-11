//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", "false", "  ", [], {}, function(){}

const useremail = []

if (useremail.length === 0){
    console.log("Array is empty")
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): Null , Undefined

let val1;
/*val1 = 5 ?? 10
val1 = null ?? 45
val1 = undefined ?? 50
val1 = null ?? 10 ?? 15  */
console.log(val1);

// Ternary Operator

//condition ? true : false

const price = 100
price <= 80 ? console.log("less than 80") : console.log("more than 80");
