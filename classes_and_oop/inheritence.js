class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const pou = new Teacher("pou", "pou@teacher.com", "123")
pou.addCourse()
pou.logMe()
const amiPou = new User("amiPou")

amiPou.logMe()

console.log(pou instanceof User); 