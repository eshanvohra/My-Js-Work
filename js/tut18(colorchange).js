console.log("tut18");

let btn=document.getElementById('btn');

btn.addEventListener('click',func1);
btn.addEventListener('mousedown',func2);
//mouse down includes right and left click
function func1(e){
console.log('thanks',e);
e.preventDefault(); // to suspend a particular enent

}

function func2(e){
console.log('thanks it is mouse down',e);
e.preventDefault(); // to suspend a particular enent

}
document.querySelector('.container').addEventListener('mousemove',function (e){
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor=`rgb(${e.offsetX-10},${e.offsetY-50},${e.offsetX-2*e.offsetY})`;
})