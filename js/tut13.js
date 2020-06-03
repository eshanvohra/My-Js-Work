console.log("tut 13");

let a= document.links;

let b="javascript";

console.log("hello");

Array.from(a).forEach(function(element){
if(String(element.includes(b)))
console.log(element);
});