const user = {
    username: "Kitkat",
    price: 299,

    welcomeMessage: function(){
        console.log(`${this.username},  welcome to website`);
       // console.log(this);
    }
}
//user.welcomeMessage()
//user.username = "Nestle"
//user.welcomeMessage()
//console.log(this);      //provides empty value in node

/*function one(){
    let username = "Poushali"
    console.log(this.username);   //'this' work on object not in function //output: undefined
    
}
one()  */

const one = () => {
    let username = "Poushali"
    console.log(this);
}
//one()    //empty value

/*const two = (n1,n2) => {
    return n1 + n2    //explicit
} */

//const two = (n1,n2) =>  (n1 + n2)         //implicit

const two = (n1,n2) =>  ({username: "Poushali"})      //must keep ()
console.log(two(5,10));     

//const array = [2,4,6,7,9]
//array.forEach(() => {})