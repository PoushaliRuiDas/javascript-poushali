class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}
const poushali = new User("poushali")
//console.log(poushali.createId());

class Student extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const mandakini = new Student("mandakini", "mandakini@gmail.com")
//mandakini.logMe()
console.log(mandakini.createId());