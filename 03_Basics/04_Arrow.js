const user ={
    username: "hitesh",
    price: 999,
    prereq: "development",

    welcomeMessage: function (){
            //this is used for the curren content for accessing
        console.log(`${this.username}, Welcome to website`);
        console.log(`${this.price}, your fee wil be `);
        console.log(`${this.prereq}, will the prequiest for enterning this field`)
        console.log(this)
    }
}
        user.welcomeMessage()
        user.username ="sam"
        user.welcomeMessage()