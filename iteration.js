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

const coding = ["js","rb","cpp","py"]
/* coding.forEach(  function (val) {
    console.log(val);
}  )  */
