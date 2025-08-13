// Global scope in IDE and on webpage is different
// let a = 50 //global scope 
// d = 90 // var datatype by default
// if(true){
//     let a = 10 //completely new variable with scope within the curly braces;
//    var d = 60
// }

// console.log(a)
// console.log(d)

// function one(){
//     const username = "Kunal"
    
//     function two(){
//         const website = "Youtube"
//         console.log(username)
//     }
//     // console.log(website) //will give error since it cant be accessed
//     two()
// }
// one() //when this executes only then the inner function executes

// if(true){
//     const username = "Kunal"
//     if(true){
//        const website = " Youtube"
//        console.log(username + website) 
//     }
//     // console.log(website) //will give error since it cant be accessed
// }

//+++++++++++++++++ Interesting++++++++++++++++++++//
// Function expresions 

const addtwo = function(num){
    return num+2
}

console.log(addtwo(5))