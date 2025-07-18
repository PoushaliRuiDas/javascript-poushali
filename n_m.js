// Numbers

const score = 500
console.log(score);

const balance = new Number(250)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 345.54
console.log(otherNumber.toPrecision(4));

const anotherNum = 1000000
console.log(anotherNum.toLocaleString('en-IN')); 


//Maths

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(5.8));
console.log(Math.ceil(5.3));
console.log(Math.floor(5.9));
//can access all methods
console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);  //*/
