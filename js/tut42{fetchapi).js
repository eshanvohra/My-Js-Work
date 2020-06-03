console.log("tut42.js")

//button with id myBtn

let myBtn=document.getElementById('myBtn');

//div with id content

let content=document.getElementById('content');

// function getData(){
//     url='harry.txt';
//     console.log("started getData")
//     fetch(url).then((response)=>{
//         console.log("inside first then")                              //fetch() is asynchronoueus runns in background
//         return response.text;
//     }).then((data)=>{
//         console.log("inside second then")
//         console.log(data);
//     })
// }
function getData(){
    url='https://api.github.com/users';
    console.log("started getData")
    fetch(url).then((response)=>{
        console.log("inside first then")                              //fetch() is asynchronoueus runns in background
        return response.json();
    }).then((data)=>{
        console.log("inside second then")
        console.log(data);
    })
}
function postData(){
    url='http://dummy.restapiexample.com/api/v1/create';
    data='	{"name":"testeseese","salary":"123","age":"23"}'
    params={
        method:'post',
        headers:{
            'Content-Type':'application/json'

        },
        body:data
    }
    fetch(url,params).then(response=> response.json())
    .then(data=>console.log(data))
}
postData();
// console.log("before getdata")
// getData();
// console.log("after getdata")