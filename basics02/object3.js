 //destructuring object
 
 const course = {
    coursename : "java in hindi",
    courseamount : 999,
    courseinstructor : "Kunal"
 }

 console.log(course.courseinstructor) // common menthod

 //Alternative method :-

 const {courseinstructor} = course
 console.log(courseinstructor)
 const {courseinstructor : teacher} = course //we can give a name as well
 console.log(teacher)

 //API brief( basically making someone else do your job )
 //josn structure (the keys are also a string)

 //  {
//     "Name" : "KUNAL RAWAT";
//     "COURSE" : "Java in hindi",
//     "Price" : "Free"
//  }

