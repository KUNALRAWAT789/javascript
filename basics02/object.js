// two ways to declarea an object literal and custructor.
// custructor objects are singleton (only one like them) by default.

//object literals
// an object contains key value pairs
//How to declare a symbol and use it as a key in an object in order to use it as a symbol
const mysym = Symbol("key1")
const jsuser = {
    name: "KUNAL",
    [mysym]: "mykey1",
    age: 18,
    location: "Delhi"
}

// console.log(jsuser.age)
// console.log(jsuser["name"])

 // calling the symbol key
// console.log(jsuser[mysym]) //in case of the symbol key we have no choise but to use this method

// change values
// jsuser.location = "Dehradun"
// Object.freeze(jsuser) // used to lock all the values so that they cannot be changed
// jsuser.location = "Bengaluru"
// console.log(jsuser)

//Functions in object
jsuser.greeting = function(){
    console.log("Hello there! ")
}
jsuser.greetingtwo = function(){
    console.log(`Hello there!, ${this.name}` )
} //we can refence another key of the same object in the function using string interpolation 
console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())

