var seconds = 0;
var tens = 0;
var isTimerRunning = false;
var interval;
//variables accessing with id's.
const secondsElement = document.getElementById("seconds");
const tensElement  = document.getElementById("tens");
//variables accessing with tagname.
const startButton = document.getElementsByTagName('button')[0];
const pauseButton = document.getElementsByTagName('button')[1];
const resetButton = document.getElementsByTagName('button')[2];

//Function to start timer
function startTimer() {
    if(!isTimerRunning){
    interval = setInterval(function () {
        tens++;
        if (tens < 10) {
            tensElement.textContent = '0' + tens;
        }
        else {
            tensElement.textContent = tens;
        }

        if (tens === 100) {
            tens = '0';
            seconds++;
            if (seconds < 10) {
                secondsElement.textContent = '0' + seconds + ':';
            }
            else {
                secondsElement.textContent = seconds + ':';
            }
        }
    }, 10);
}
    isTimerRunning = true;
    startButton.disabled = true;
}
// Function to pause the timer
function pauseTimer() {
    if(isTimerRunning){
    clearInterval(interval);
    isTimerRunning = false;
    startButton.disabled = false;
}}

// Function to reset the timer
function resetTimer() {
    clearInterval(interval);
    seconds = '0';
    tens = '0';
    secondsElement.textContent = '00:';
    tensElement.textContent = '00';
    isTimerRunning = false;
    startButton.disabled = false;

}
//Event listeners for button clicks, calling the respective functions
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
