console.log("tut61.js wall clock");

function updateClock() {
    let currentTime = new Date();

    let b = currentTime.getMinutes();
    let a = currentTime.getHours();
    let c = currentTime.getSeconds();

    b=(b<10?"0":"") +b;
    c=(c<10?"0":"") +c;
    let timeOfDay = (a < 12) ? "AM" : "PM";

    a=(a>12?a-12:a);
    a=(a==0?a=12:a);

    let timeStr=a+":"+b+":"+c+" "+timeOfDay;
    document.getElementById('clock').innerHTML=timeStr;
}
updateClock();