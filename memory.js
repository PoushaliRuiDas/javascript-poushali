//stack and heap 

//stack (primitive)

let myName = "Poushali RuiDas"
let anothername = myName
anothername = "Mandakini"

console.log(myName);
console.log(anothername);    //copy

//heap (non-primitive)

let userOne = {
    email: "pou@gmail.com",
    upi: "pou@oksbi"
}

let userTwo = userOne
userTwo.email = "mandakini@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);         //references
