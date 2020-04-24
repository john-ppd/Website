var x = 0;
function setTime(time) {
  x = time;
  document.getElementById("timeBox").innerHTML = time;

}

document.getElementById("min1").onclick = function () { setTime(1) };

document.getElementById("min5").onclick = function () { setTime(5) };

document.getElementById("min15").onclick = function () { setTime(15) };

var timeStart = Date.now();
var timerStartValue;
function getStartTime() {
  console.log("timeStart is: " + timeStart);

  timerStartValue = timeStart + (x * 60000);

  console.log("timeStartTime is: " + timerStartValue);

  console.log("x in function is: " + x);
}

document.getElementById("buttonGo").onclick = function () {
  getStartTime();
  document.getElementById("timeBox").innerHTML = timerStartValue;

  console.log("x value is " + x);

  document.getElementById("timeBox2").innerHTML = timeStart;

}

