//US6

/*class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const pou = new User("pou", "pou@gmail.com", "123")

console.log(pou.encryptPassword());
console.log(pou.changeUsername()); */

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const ami = new User("ami", "ami@gmail.com", "123")

console.log(ami.encryptPassword());
console.log(ami.changeUsername());