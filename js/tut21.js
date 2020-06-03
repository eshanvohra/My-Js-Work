console.log("tut21");

let divElem=document.createElement('div');
let text=document.createTextNode("click to edit it");

divElem.appendChild(text);

divElem.setAttribute('id','elem');
divElem.setAttribute('style','border:2px solid red; width:14 px; height: 100px; padding:23px ;');

let container= document.querySelector('.container');
let first=document.getElementById('myfirst');

container.insertBefore(divElem,first);

divElem.appendChild(text);

divElem.addEventListener('click',function(){
    let html=divElem.innerHtml
     divElem.innerHTML=html;
})
 
 