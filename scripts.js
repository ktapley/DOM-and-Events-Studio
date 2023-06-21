
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
});

const flightStatus = document.getElementById('flightStatus');
const flightDisplay = document.getElementById('flightDisplay');
const shuttleBackground = document.getElementById('shuttleBackground');
const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
const takeoff = document.getElementById('takeoff');
const landing = document.getElementById('landing');
const missionAbort = document.getElementById('missionAbort');

const up = document.getElementById('up');
const down = document.getElementById('down');
const right = document.getElementById('right');
const left = document.getElementById('left');

left.addEventListener('click', function () {
    const logo = document.getElementById('logo');
    if (left) {
        logo.style.marginLeft = "-10px";
    }
})

right.addEventListener('click', function () {
    const logo = document.getElementById('logo');
    if (right) {
        logo.style.marginLeft = "+10px";
    }
})

up.addEventListener('click', function () {
    const logo = document.getElementById('logo');
    if (up) {
        logo.style.marginTop = "80px";
        spaceShuttleHeight.innerHTML = "10,000";
    }
})

down.addEventListener('click', function () {
    const logo = document.getElementById('logo');
    if (down) {
        logo.style.marginTop = "100px";
        spaceShuttleHeight.innerHTML = "0";
    }
})

takeoff.addEventListener('click', function () {
    let confirmTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (confirmTakeoff) {
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = "10,000";
    }
});

landing.addEventListener('click', function () {
    let landingNotice = window.confirm("The shuttle is landing. Landing gear engaged.");
    if (landingNotice) {
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0";
    }
});

missionAbort.addEventListener('click', function () {
    let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
    if (confirmAbort) {
        flightStatus.innerHTML = "Mission aborted";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0";
    }
});
