console.log("tut56.js for for in and for of loops");

let people = ["harry", "rohan", "vikrant", "shubham", "sahil", "naman"];

//traditional for loop
// for (let index = 0; index <people.length; index++) {
//     const element =people[index];
//     console.log(element);

// }

let obj = {
    name: "eshan",
    language: "web development",
    framework: "react"
};
// console.log(obj);

//iterating obj using traditional for loop
//traditional for loop
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);

// }
//iterating obj using for in loop

// for(let key in obj){
//     console.log(obj[key]);
// }

//we can use for in with strings to loop through characters
let myString="this is mu string";
// for(let char in myString){
//     console.log(myString[char]);
// }

for (let index = 0; index < myString.length; index++) {
    const element = myString[index];
    console.log(element);

}

//*****************for of loop */

people = ["harry", "rohan", "vikrant", "shubham", "sahil", "naman"];
for(name of people){
    console.log(name);
}