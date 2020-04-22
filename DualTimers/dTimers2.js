var clickedTime; var reactionTime; var createdTime; var isSet = 0;
var userMinSet = 4000;

document.getElementById("userTime").onclick = function () {
  userMinSet;
}

document.getElementById("timerP1").onclick = function () {
  clickedTime = Date.now();

  reactionTime = (clickedTime - createdTime) / 1000;

  document.getElementById("countdownP1").innerHTML = reactionTime;
  isSet = 0;
}

document.getElementById("buttonP1").onclick = function () {
  createdTime = Date.now() + userMinSet;
  isSet = 1;
  var number = document.getElementById("userNumber").value;
  console.log(number)

}
setInterval(function () {
  if (isSet == 1) {

    var timeMinutes = Math.floor(Math.abs((Date.now() - createdTime) / 1000 / 60));

    var timeSeconds = Math.floor(Math.abs(timeMinutes * 60 - (Math.abs((Date.now() - createdTime) / 1000))));

    document.getElementById("countdownP1").innerHTML = timeMinutes;
    document.getElementById("countdownP1").append(":" + timeSeconds);

    if (timeMinutes == 0) {
      if (timeSeconds == 0) {
        document.getElementById("countdownP1").innerHTML = "TIMES UP";
        console.log("before")
        //alert("Times up");
        console.log("after")

        isSet = 0;

      }
    }

  }
}, 1000)

