//constructor function
function User(username, logInCount,IsLoggedIn) {
    this.username = username;
    this.logInCount= logInCount;
    this.IsLoggedIn = IsLoggedIn
    
    return this
    
}

const userOner = new User("shan", 12, true)
const usertwo =  new User("chaieaurcode", 11, false)
console.log(userOner);
console.log(usertwo);