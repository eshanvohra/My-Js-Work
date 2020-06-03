console.log("tut19");
//  for all links 
// let str="python";
// let links=document.links;
// console.log(links);

// let href;
// Array.from(links).forEach(function(element){
// href=element.href;
// console.log(href);
// })

let str="python";
let links=document.links;
console.log(links);

let href;
Array.from(links).forEach(function(element){
href=element.href;
if(href.includes(str)){
console.log(href);}
})