//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    //console.log(element)
}

for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value : ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop value : ${j}`);
        //console.log(i + '*' + j + '=' + i*j)
    }
}

let myArray = ["Superman", "Batman","Flash"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 10){
        //console.log(`detected 10`)
        //break
    }
    //console.log(`value of index is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 10){
        //console.log(`detected 10`)
        //continue
    }
    //console.log(`value of index is ${index}`);
    
}

//While loop
 let index = 0
 while (index <= 10) {
    //console.log(`value of index is ${index}`);
    index = index + 2
 }

 let myArr = ["Superman", "Batman","Flash"]
 let arr = 0
 while (arr < myArr.length) {
   // console.log(`value is ${myArr[arr]}`);
    arr = arr + 1
 }

 //do-while loop
 let score = 1
do {
    //console.log(`score is ${score}`);
    score++
} while (score <= 10);

//for of
//[" "," "," "]
//[{},{},{}]

const anothertArr = [1,2,3,4,5]   //also can do it in string

for(const num of anothertArr){
    //console.log(num);
}

//*maps     //hold key value pairs
const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
map.set('IN' , "India")

//console.log(map);

for (const [key, value] of map){
    //console.log(key, ':-', value);
}

//const myObj = {
    //not 
//}

//for-in

const myObj = {
    js : "Javascript",
    cpp :"C++",
    rb: "Ruby"
}

for (const key in myObj){
    //console.log(`${key} shortcut is for ${myObj[key]}`);
} 

const programming = ["js","rb","cpp","py"]
for (const key in programming){
    //console.log(programming[key]);
} 

//higher-order

//const coding = ["js","rb","cpp","py"]
/* coding.forEach(  function (val) {
    console.log(val);
}  )  */

/*coding.forEach((item) => {
    console.log(item);
    
})*/

 /*function printMe(item){
    console.log(item);
 }

 coding.forEach(printMe) */

 /*coding.forEach(  (item, index, arr) => {
    console.log(item, index, arr);
 }  ) */

/*const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach(  (item) => {
    console.log(item.languageName );
 }  )*/

//Filter
//const coding = ["js","rb","cpp","py"]

//const values = coding.forEach(  (item) => {
    //console.log(item);
//    return item
//}  )
//console.log(values);   //doesn't return the value

//const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter(  (num) => num > 5  )
//console.log(newNums);

//const newName = []
//myNums.forEach( (num) => {
//    if(num > 5){
//        newName.push(num)
//    }
//})
//console.log(newName);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((bk) => bk.genre === 'Fiction')

//userBooks = books.filter((bk) => { return bk.publish >= 2000})

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

//console.log(userBooks);


//map

const usBhai = [1,2,3,4,5,6,7,8,9,10]
//const newBhai = usBhai.map( (bhai) => { return bhai + 10})

const newBhai = usBhai
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 50)
//console.log(newBhai);             //chaining

//

const pouAmi = [1,2,3]
/*const myTotal = pouAmi.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${ currval}`);
    
    return acc + currval
}, 0) */

const myTotal = pouAmi.reduce(  (acc, curr) => acc + curr, 0)

//console.log(myTotal); 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);