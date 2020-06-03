console.log("tut54.js");

const alarmSubmit=document.getElementById("alarmSubmit");
alarmSubmit.addEventListener('click',setAlarm);
var audio = new Audio('alarm.mp3');

function ringBell(){
audio.play();
}

function setAlarm(e){
    e.preventDefault();
    const alarm=document.getElementById('alarm');
    alarmDate=new Date(alarm.value);
    console.log(`setting alarm for ${alarmDate}...`);

    let now=new Date();

    let timeToAlarm = alarmDate-now;
    console.log(timeToAlarm);

    if(timeToAlarm>=0){
        setTimeout(() => {
            ringBell();
        }, timeToAlarm);
    }

}