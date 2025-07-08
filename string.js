const name = "Poushali"
const repoCount = 30

// console.log(name + repoCount + " value");   xx

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('food-mania')
console.log(gameName[3]);  //answer is d
console.log(gameName.__proto__);
console.log(gameName.length); 
console.log(gameName.charAt(5));
console.log(gameName.indexOf('a')); 
//can access all methods

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-2,4)
console.log(anotherString);

const newStringOne = "     Pou     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.youtube.com/"
console.log(url.replace('com','org'));

console.log(url.includes('youtube'));
console.log(url.includes('Pou'));

console.log(gameName.split('-'));

//read MDN docs to know more about string