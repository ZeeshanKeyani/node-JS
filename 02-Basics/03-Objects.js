//singleton object
//literals ki tarha discuss krty hain to singleton nhi bnta
//constructor sy agar bnay ga to singleton bny ga

//object literals

const mySym = Symbol ("Key")

const JsUser = {

    name: "Hitesh",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday "]

}

console.log(JsUser.name)
console.log(JsUser["email"])

