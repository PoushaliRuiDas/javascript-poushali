let a = 100  //global scope

if(true){
    let a = 10
    let b = 20
    console.log("INNER: ", a);    //block scope
}
console.log(a);

//nested scope
function one(){
    const username = "Pou"

    function two(){
        const website = "gitHub"
        console.log(username);
    }
    //console.log(website);
    two()
}
//one()

if(true){
    const username = "Pou"
    if (username === "Pou"){
        const website = " gitHub"
        console.log(username + website);
    }
    //console.log(website);   //erroe bcz out of scope     
}
//console.log(username);      //erroe bcz out of scope   


//interesting

console.log(addone(5));
function addone(num){
    return num + 1
}

addtwo(5)
const addtwo = function(num){    //hold in variable //shows error
    return num + 2
}
