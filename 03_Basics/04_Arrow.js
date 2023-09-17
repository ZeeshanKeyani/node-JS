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
        //user.welcomeMessage()
        //user.username ="sam"
        //user.welcomeMessage()
        //console.log(this);


        // function chai() {
        //     let username ="Hitesh"
        //     //console.log(this);
        //     console.log(this.username)
        // }
        // chai()

       const chai =  () => {
            let username ="Hitesh"
            //console.log(this);
            console.log(this);
        }
        //chai()

        const addTwo = (num1, num2) => {
                return num1 + num2

        }

        console.log(addTwo(3,4));