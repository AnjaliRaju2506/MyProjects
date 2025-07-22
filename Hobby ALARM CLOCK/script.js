const clock = document.getElementById('clock');
const alarmAudio = document.getElementById('alarm-audio');
const alarmStatus = document.getElementById('alarm-status');
let alarmTime = null;
let alarmTimeout = null;

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { hour12: false });
  clock.textContent = timeString;

  if (alarmTime === timeString.slice(0, 5)) {
    playAlarm();
  }
}

function setAlarm() {
  const input = document.getElementById('alarm-time').value;
  if (!input) {
    alert("Please set a valid time!");
    return;
  }
  alarmTime = input;
  alarmStatus.textContent = `Alarm set for ${alarmTime}`;
}

function clearAlarm() {
  alarmTime = null;
  alarmAudio.pause();
  alarmAudio.currentTime = 0;
  alarmStatus.textContent = "No alarm set.";
}

function playAlarm() {
  alarmAudio.play();
  alert("⏰ Time's up!");
  clearAlarm();
}

setInterval(updateClock, 1000);
