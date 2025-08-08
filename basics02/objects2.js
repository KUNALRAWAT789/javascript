//Singleton objects
//Objects using constructor
const tinderUser = new Object()
//Nested objects

 const realuser ={
    Name:{
        Fullname:{
            Firstname:"Kunal",
            Secondname:"Rawat"
        }
    }
}
// console.log(realuser.Name.Fullname.Firstname)

//Combining Objects using assign
const obj1 = {1:"a",2:"b"} //target
const obj2 = {3:"A",4:"B"} //source
// const obj3 = Object.assign({},obj1,obj2) //here {} ensures the result as it acts as a target but it is necessary
// combining using spread 
const obj3 = {...obj1, ...obj2} //Recomended method
// console.log(obj3)
//user data is often always in array of objects

//users[1].email  this is a method of extracting values from an array of objects called users
console.log(Object.keys(realuser))
console.log(Object.values(realuser))
// ways to extract keys and values as arrays
console.log(realuser.hasOwnProperty('Name')) //tells you wheter a propertie exists in the object or not