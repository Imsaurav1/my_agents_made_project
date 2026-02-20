let intervalId = null;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let format = '12-hour';
let amPm = 'AM';

document.getElementById('12-hour').addEventListener('change', function() {
    format = '12-hour';
    document.getElementById('am-pm').innerText = amPm;
});

document.getElementById('24-hour').addEventListener('change', function() {
    format = '24-hour';
    document.getElementById('am-pm').innerText = '';
});

function updateClock() {
    let now = new Date();
    let hoursNow = now.getHours();
    let minutesNow = now.getMinutes();
    let secondsNow = now.getSeconds();
    let millisecondsNow = now.getMilliseconds();

    if (format === '12-hour') {
        if (hoursNow > 12) {
            hoursNow -= 12;
            amPm = 'PM';
        } else if (hoursNow === 0) {
            hoursNow = 12;
            amPm = 'AM';
        } else if (hoursNow === 12) {
            amPm = 'PM';
        } else {
            amPm = 'AM';
        }
    }

    document.getElementById('hours').innerText = hoursNow.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutesNow.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = secondsNow.toString().padStart(2, '0');
    document.getElementById('am-pm').innerText = amPm;

    if (millisecondsNow < 100) {
        millisecondsNow = 0;
    }

    document.getElementById('stopwatch-hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('stopwatch-minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('stopwatch-seconds').innerText = seconds.toString().padStart(2, '0');
    document.getElementById('stopwatch-milliseconds').innerText = millisecondsNow.toString().padStart(3, '0');
}

function startStopwatch() {
    intervalId = setInterval(function() {
        milliseconds += 10;
        seconds += Math.floor(milliseconds / 1000);
        minutes += Math.floor(seconds / 60);
        hours += Math.floor(minutes / 60);
        milliseconds %= 1000;
        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        document.getElementById('stopwatch-hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('stopwatch-minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('stopwatch-seconds').innerText = seconds.toString().padStart(2, '0');
        document.getElementById('stopwatch-milliseconds').innerText = milliseconds.toString().padStart(3, '0');
    }, 10);
}

document.getElementById('start').addEventListener('click', function() {
    startStopwatch();
});

document.getElementById('pause').addEventListener('click', function() {
    clearInterval(intervalId);
});

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('stopwatch-hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('stopwatch-minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('stopwatch-seconds').innerText = seconds.toString().padStart(2, '0');
    document.getElementById('stopwatch-milliseconds').innerText = milliseconds.toString().padStart(3, '0');
});

setInterval(updateClock, 1000);