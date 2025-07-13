/*class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}pou`
    }

    set password(value){
        this._password = value
    }
}

const poushali = new User("pou@gmail.com", "abc")
console.log(poushali.email);  */

//with_properties

/*function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const pou = new User("poushali@gmail.com", "pou")
console.log(pou.email); */

//with object

const User = {
    _email: 'pou@gmail.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const pou = Object.create(User)
console.log(pou.email);