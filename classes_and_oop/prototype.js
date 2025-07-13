//let myName = "Poushali    "
//let myId = "iti_poushali    "

//console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.poushali = function(){
    console.log(`poushali is present in all objects`);
}
Array.prototype.heypoushali = function(){
    console.log(`poushali says hello`);
}

//heroPower.poushali()
//myHeros.poushali()
//myHeros.heypoushali()
//heroPower.heypoushali()


//inheritence

const User = {
    name: "pou",
    email: "pou@google.com"
}

const Teacher = {
    makeNotes: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User    //outdated

//updated

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Mandakini   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"poushali".trueLength()
"pizza".trueLength()