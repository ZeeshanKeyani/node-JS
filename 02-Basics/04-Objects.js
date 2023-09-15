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
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const  emp = [ 
{
    id: 1,
    email: "abc@gmail.com"
},
{
    id: 1,
    email: "abc@gmail.com"
},
{
    id: 1,
    email: "abc@gmail.com"
}
]
emp[1].email
//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));


//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//object destructruing 

const course = {
course: "Js in Hindi",
coursePrise: "999",
courseInstructer: "hitesh"
}
// apny hisab sy bhi name dai skty hain
const {courseInstructer: instructor} = course
//console.log(courseInstructer);
console.log(instructor);

{


    
}