let timerInterval;
let time = 45*60;
let remainingTime = time; // 45 minutes in seconds
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}
function updateTimer() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById("timer").textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    remainingTime--;
    if (remainingTime < 0) {
        clearInterval(timerInterval);
        // lancer un son !
    }
    move();
}
/* Progress bar */
function move() {
    var elem = document.getElementById("myBar");   
    var width = 100;
    var id = setInterval(frame, 50);
    function frame() {
    if (width <= 0) {
        elem.hidden = true;
    } else {
        elem.hidden = false;
        width = (remainingTime / time) * 100;
        if (width < 50 && width > 25) {
            elem.className = "w3-orange";
            }
            else if (width < 25) {
            elem.className = "w3-red";
            }
            elem.style.width = width + '%'; 
        }
    }
}