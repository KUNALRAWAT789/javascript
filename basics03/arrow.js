// THIS and ARROW Function

//THIS refers to the current context as the value is not hardcoded meaning it can be changed
const user = {
username: "KUNAL",
price : 999,
welcomeMessage: function(){
    console.log(`${this.username} , Welcome to the website`);
    console.log(this);
}
}
// user.welcomeMessage();
// user.username = "PABLO"
// user.welcomeMessage();
// console.log(this) // returns {} as there is no global context since this is called in the node
// returns the window object when on the browser

// function ello(){
//     let username = "Kunal"
//     console.log(this)
// }

// ello() //returns undefined for this.username and global object for just this;

// ARROW FUNCTION ++++++++++++++++++++++++++++++++++++++++++++++

// const  jello = () => {
//     let username = "Kunal"
//     console.log(this)
// }

// jello() // return undefine for this.username and {} for just this keyword

//ARROW FUNCTION WITH AND WITHOUT IMPLICIT RETURN +++++++++++++++++++++++++

// const addtwo = (num1 , num2) =>{
//     return num1 + num2;
// }

// const addtwo = (num1 , num2) => num1 + num2 //implicit return assumes that we do not need the return keyword when on a single line
// const addtwo = (num1 , num2) => (num1 + num2) //another way
const addtwo = (num1 , num2) => ({username:"Kunal"}) //helps return objects
console.log(addtwo(3,4))

