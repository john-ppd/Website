var x = 0;
function setTime(time) {
  x = time * 60;
  document.getElementById("timeBox").innerHTML = x;

}

document.getElementById("min1").onclick = function () { setTime(1) };

document.getElementById("min5").onclick = function () { setTime(5) };

document.getElementById("min15").onclick = function () { setTime(15) };

function countDown() {
  x--;
  document.getElementById("timeBox").innerHTML = x;
}

var timerRun;
var timeOn = false;
document.getElementById("buttonGo").onclick = function () {

  if (timeOn == false) {
    timerRun = setInterval(countDown, 1000);
    timeOn = true;
    document.getElementById("buttonGo").innerHTML = "STOP";
    document.getElementById("buttonGo").style.backgroundColor = "red";
  }
  else if (timeOn == true) {
    clearInterval(timerRun);
    document.getElementById("buttonGo").innerHTML = "START";
    document.getElementById("buttonGo").style.backgroundColor = "green";
    timeOn = false;
  }

};
