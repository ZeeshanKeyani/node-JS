class user {
    constructor(username, email, password){
        this.username= username;
        this.password =password;
        this.email = email;
    }
    encrptPasswrod(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }

}
const chai = new user ("chai","chai@123","123")
console.log(chai.encrptPasswrod());