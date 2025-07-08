// Javascript is a dynamically typed language
// // Primitive

// 7 types: string, Number, boolean, Null, Undefined, Symbol(make it unique), bigint
const score = 100
const scoreValue = 100.5
const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3566668296479n   //bigint

// reference (non-primitive)

// array, objects, functions

const heros = ["Ironman","Spiderman","Superman","Batman"]

let myObj = {
    name: "Poushali",
    age: 21,
}

const myFunction = function(){
    console.log("Datatypes Summary");
}

//console.log(typeof "datatypes")