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
