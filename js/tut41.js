console.log("tut41.js");

// const harry= function(){
//     console.log("this i s me");
// }

// const harry= ()=>{
//     console.log("this i s me");
// }

// const greet= ()=>{
//    return  "this i s me";
// }

// one liners donot require braces/return
// const greet= ()=> "this i s me";
// const greet= ()=> ({name:"harry"}); // to return object
// const greet= (name)=> "good morning "+ name;


//single parameters donot require parentheses

const greet= (name,ending)=> "good morning "+ name+ending;


console.log(greet('eshan','bye'));
