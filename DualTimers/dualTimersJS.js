var clickedTime; var reactionTime; var createdTime; var isSet = 0;
document.getElementById("timerP1").onclick = function () {
  clickedTime = Date.now();

  reactionTime = (clickedTime - createdTime) / 1000;

  document.getElementById("countdownP1").innerHTML = reactionTime;
  isSet = 0;
}

document.getElementById("buttonP1").onclick = function () {
  createdTime = Date.now();
  isSet = 1;
}
setInterval(function () {
  if (isSet == 1) {
    document.getElementById("countdownP1").innerHTML = (Date.now() - createdTime) / 1000;
  }
}, 1000)
