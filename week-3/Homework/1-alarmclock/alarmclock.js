let time = document.getElementById('alarmSet');

let timeDisplay = document.getElementById('remain');


let countTime = 0;
let timeLeft;

function setAlarm() {
let body = document.getElementsByName('body');
  timeLeft = document.getElementById('alarmSet').valueAsNumber;
  
  const convertSecond = (sec) => {
    let minute = Math.floor( sec / 60);
    let seconds = sec % 60;
    return  minute +  ':'  + seconds;
}

let IntervalValue = setInterval((counter), 1000);
function counter () {
  countTime++
  timeDisplay.innerHTML = convertSecond(timeLeft - countTime);
  document.getElementById("set").innerHTML = 'Set Alarm';

  if(countTime === timeLeft) {
      playAlarm();
      clearInterval(IntervalValue);
      document.getElementById("set").innerHTML = 'Reset';
    }
  }
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm(); 
    countTime = 0;
    timeLeft;
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
