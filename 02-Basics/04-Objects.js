//singlton constructor
//const tinderUser = new  Object()
const tinderUser ={}

tinderUser.id = "123abc" 
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {

    email: "some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Hitesh",
            lastName: "Chaoudhary"

        }

    }
}

//console.log(regularUser.fullName.userFullName.firstName);

//we can combine objects
const Obj1 = {1:  "a", 2: "b"}
const Obj2 = {3:  "a", 4: "b"}
const Obj4 = {5:  "a", 6: "b"}

//const obj3 = {Obj1, Obj2}
//const obj3 = Object.assign({},Obj1 , Obj2,Obj4)

const obj3 = {...Obj1, ...Obj2}

//console.log(obj3);

const users = [
{
    id: 1,
    email: "h@gmail.com"

},
{
        id: 1,
        email: "h@gmail.com"
    
    },

    {
        id: 1,
        email: "h@gmail.com"
    
    },


]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));