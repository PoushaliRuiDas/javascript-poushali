// array
// storing a list of data items under a single variable name.
// JavaScript arrays are resizable and can contain a mix of different data types. 
// JavaScript arrays are not associative arrays
// JavaScript arrays are zero-indexed
// JavaScript array-copy operations create shallow copies. 

const myArr = [0,1,2,3,4,5]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);

// Array methods

myArr.push(6)      //add
console.log(myArr);
myArr.pop()     //last one delete
console.log(myArr);

//try another methods

// methods - slice and spice
console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ",myArr); 

//

const marvelHeros = ["Ironman","Spiderman","Thor"]
const dcHeros = ["Superman", "Batman","Flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);    xxx

const myHeros = marvelHeros.concat(dcHeros)
console.log(myHeros);

const allNewHeros = [...marvelHeros, ...dcHeros]    //spread operator
console.log(allNewHeros);

// flat

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("Poushali"));
console.log(Array.from("Poushali"));
console.log(Array.from({name : "Poushali"}));   //interesting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
