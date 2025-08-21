//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
/* to protect from pollution from global scope variables meaning we dont want global
variables to pollute or make changes in our function 
and so we want it to execute immediately when the program is started */

//NAMED IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})(); //immediate invoke functions do not know where to stop the context so we need to add ; at the end to actually end the function

//IIFE with arrow function with argument
//UNNAMED IIFE / REGUALR IIFE
((name)=>{
    console.log(`DB CONNECTED SUCCESSFULLY ${name}`)
})('KUNAL_PC');
