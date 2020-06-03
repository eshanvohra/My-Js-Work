console.log('Welcome to tutorial 14');
/*
element selectors:
1. Single element selector
2. Multi element selector

*/

// 1. Single element selector
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = '<i>Harry is a bad boy</i>';
//element.innerHTML = '<b>Harry is a ba boy</b>';
console.log(element.innerText);

//innerText is to change just text without any formatting innerHTML also changes and formats text.


let sel = document.querySelector('#myfirst');
//sel = document.querySelector('.child');
//sel = document.querySelector('div');
sel.innerText="eshan vohra";
sel.style.color = 'aqua';
console.log(sel.innerText);



// 2. Multi element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems)

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//    element.style.color = 'blue'; 
// }
Array.from(elems).forEach(element => { 
    console.log(element);
   element.style.color = 'red'; 
});
console.log(elems[0].getElementsByClassName('child'))
