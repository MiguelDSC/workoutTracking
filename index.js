let seconds = 0;
let minutes = 0;
let hours = 0;
const DOUBLE_DIGIT_ENTRY = 10;

let started = false;

let displaySeconds = "";
let displayMinutes = "";
let displayHours = "";

let timerID = "";

const display = document.getElementById("display");

const ADDITIONAL_ZERO = "0";

function stopwatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
  }
  if (minutes / 60 === 1) {
    minutes = 0;
    hours++;
  }

  if (seconds < DOUBLE_DIGIT_ENTRY) {
    displaySeconds = `${ADDITIONAL_ZERO}${seconds}`;
  } else displaySeconds = seconds;

  if (minutes < DOUBLE_DIGIT_ENTRY) {
    displayMinutes = `${ADDITIONAL_ZERO}${minutes}`;
  } else displayMinutes = minutes;

  if (hours < DOUBLE_DIGIT_ENTRY) {
    displayHours = `${ADDITIONAL_ZERO}${hours}`;
  } else displayHours = displayHours;

  display.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

// function start
const startBtn = document.getElementById("start-stopwatch");
const stopBtn = document.getElementById("stop-stopwatch");

function startTimer() {
  timerID = setInterval(stopwatch, 1000);
}

// function stop
function stopTimer() {
  clearInterval(timerID);
  seconds = 0;
  minutes = 0;
  hours = 0;

  started = false;
  display.innerHTML = `00:00:00`;
  startBtn.innerText = "Start";
}

// function pause

// window.setInterval(stopwatch, 1000);

startBtn.addEventListener("click", () => {
  started = !started;

  if (started) {
    startTimer();
    startBtn.innerText = "Pause";
  } else if (!started) {
    startBtn.innerText = "Continue";
    clearInterval(timerID);
    started = false;
  }
});

stopBtn.addEventListener("click", stopTimer);
