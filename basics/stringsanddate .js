//String interpolation

//old way of concatinating strings
const name = 'Kunal'
const age = 21
//console.log(name +" is " + age)
//New way of writing (using string interpolation)
console.log(`Hello my name is ${name} and my age is ${age} `)

//Date
let myDate = new Date() //Date is n object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());  

//let mycreateddate = new Date(2023, 0, 23, 17, 30) //when using single digits months start with 0;
// let mycreateddate = new Date("2023-01-05")
let mycreateddate = new Date("01-05-2023")
// console.log(mycreateddate.toLocaleString())

//Time stamp
let myTimestamp = Date.now()
// console.log(myTimestamp)
// console.log(mycreateddate.getTime())
// console.log(mycreateddate.getTime())
//console.log(Math.floor(Date.now()/1000))
let newdate = new Date()
newdate.toLocaleString('default',{
    weekday:"long"
})
 
