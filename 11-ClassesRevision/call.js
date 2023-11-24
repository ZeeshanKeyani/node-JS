function setUserName (username){
    //complex db 
    this.username = username
    console.log("called");
}

function CreateUser(username, email, password){
    setUserName.call(this, username)
    this.email = email;
    this.password = password
}
const chai = new CreateUser("Chai","abc@123","123")
console.log(chai);