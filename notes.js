//#datatypes have been devided into two categories base on how the data is stored in the memory and how it is accesed

//#Primitive datatypes: call by value : the data is copied to be used.
//7 types: string,number,boolean,null(),undefine(variable declared but value is not assigned),symbol(used to make a component unique),
// bigint(scientific vale)

//#javascript is dynamically typed language since it does not requre us to specify the data type of the variable.
//The type of variable is checked at runtime.

//#Reference type/Non primitive type:
//Arrays, Objects, Functions
// return object as the output when "typeof" function is called and function actually returns object function; 

let alpha1 = Symbol('123')
let theta1 = Symbol('123')
console.log(alpha1 == theta1) //false since the symbol return a unique symbol datatype as output even if the values are same.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Types of memory:
// Stack (Primitive), Heap(Non primitive)

