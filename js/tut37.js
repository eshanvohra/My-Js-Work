console.log("tut37.js");

const students=[{
name:"harry",subject:"javascript"},
{name:"Rohan",subject:"Machine Learning"}
]

function enrollStudent(student,callback){
    setTimeout(() => {
        students.push(student);
        console.log("student erolled");
        callback();
    },3000);
}

function getStudents(){
    setTimeout(function(){
        let str="";
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`;
        })
        document.getElementById('student').innerHTML=str;
        console.log("student fetched");
    }, 2000);
}
let newStudent={name:"sunny",subject:"python"};

enrollStudent(newStudent,getStudents);
