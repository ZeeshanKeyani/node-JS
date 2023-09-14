//singleton object
//literals ki tarha discuss krty hain to singleton nhi bnta
//constructor sy agar bnay ga to singleton bny ga

//object literals

const mySym = Symbol ("Key1")

const JsUser = {

    name: "Hitesh",
    "full name": "Hitesh Chaoudhary",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday "]

}

//console.log(JsUser.name)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(typeof JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email="hitesh@microsoft.com"
//console.log(JsUser)

JsUser.greetings = function(){

    console.log("Hello JsUser");
}
JsUser.greetingsTwo = function(){

    console.log(`Hello Js user, ${this.name}`)
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());



