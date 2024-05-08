let timer;
let isRunning = false;
let lapCount = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
    } else {
        timer = setInterval(updateDisplay, 10);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function lapReset() {
    if (isRunning) {
        const lapTime = document.getElementById("display").textContent;
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapCount++}: ${lapTime}`;
        document.getElementById("lapTimes").appendChild(lapItem);
    } else {
        document.getElementById("display").textContent = "00:00:00";
        lapCount = 1;
        document.getElementById("lapTimes").innerHTML = "";
    }
}

function updateDisplay() {
    const display = document.getElementById("display");
    const time = display.textContent.split(":");
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    if (++seconds === 60) {
        seconds = 0;
        if (++minutes === 60) {
            minutes = 0;
            ++hours;
        }
    }

    display.textContent = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}

function updateTime() {
    const now = new Date();

    const timeElement = document.getElementById('time');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;

    const dateElement = document.getElementById('date');
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', dateOptions);

    const dayElement = document.getElementById('day');
    const dayOptions = { weekday: 'long' };
    dayElement.textContent = now.toLocaleDateString('en-US', dayOptions);
}

setInterval(updateTime, 1000);

updateTime();
