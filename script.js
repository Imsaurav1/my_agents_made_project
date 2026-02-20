// Get elements
const timeElement = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const pauseButton = document.getElementById('pause');
const countElement = document.getElementById('count');

// Clock function
function updateClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Counter function
let count = 0;
let intervalId = null;

function startCounter() {
    intervalId = setInterval(() => {
        count++;
        countElement.textContent = count;
    }, 1000);
}

function stopCounter() {
    clearInterval(intervalId);
    countElement.textContent = '0';
}

function pauseCounter() {
    clearInterval(intervalId);
}

// Event listeners
startButton.addEventListener('click', startCounter);
stopButton.addEventListener('click', stopCounter);
pauseButton.addEventListener('click', pauseCounter);

// Update clock every second
setInterval(updateClock, 1000);