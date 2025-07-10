// singleton
//object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Pou",
    "full name" : "Poushali RuiDas",    //console.log(jsUser.full name);    xxx
    [mySym] : "myKey1",
    age : 21,
    location : "Rajarhat",
    email : "pou@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Sunday","Friday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]); //ok
console.log(jsUser["full name"]);    //use in special cases
console.log(jsUser[mySym]); 

jsUser.email = "pou@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "poushali@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());  


const tinderUser = new Object()   //singleton
tinderUser.id = "123abc"
tinderUser.name = "Vicky"
tinderUser.isLoggedIn = false

const regularUser = {
    email : "vicky@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Vicky",
            lastname : "Bhattacharya"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

const obj3 = {...obj1,...obj2}
console.log(obj3);

const user = [
     {
        id: 1,
        email: "pv@gmiil.com"
     },
     {
     },
     {
     },
]
user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));