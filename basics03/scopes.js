// Global scope in IDE and on webpage is different
let a = 50 //global scope 
d = 90 // var datatype by default
if(true){
    let a = 10 //completely new variable with scope within the curly braces;
   var d = 60
}

console.log(a)
console.log(d)