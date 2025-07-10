
function sayMyName(){
    console.log("P");
    console.log("O");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
    console.log("I");  
 
}
//sayMyName()

function addTwoNum(num1, num2){       //parameter
    console.log(num1+num2);    
}
addTwoNum(5,10)      //argument  

function addTwoNum(num1, num2){       
      let result = num1+num2
      return result            //after return statement nothing will print

  //  return num1+num2       // we can also do this directly
}

const result = addTwoNum(5,10)   //we can store it in variables also but it,s not the right process
//console.log("Result:", result);    //undefined

function loginUserMessage(username){
    return`${username} just logged in`
}
//console.log(loginUserMessage("Poushali"));

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}
console.log(loginUserMessage());   //if we don't want this then we can put a default value in function


function calculateCartPrice(...num1){     //rest operator
    return num1
}
console.log(calculateCartPrice(386, 246, 576, 866));

const users = {
    username: "Pou",
    price: 499
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}
handleObject(users)
handleObject({
    username: "Vicky",
    price: 999
})

const newArray = [386, 246, 576, 866]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(newArray));
console.log(returnSecondValue([386, 246, 576, 866]));