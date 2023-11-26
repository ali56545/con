let timeBegun = null
let timeStopped = null
let stoppedDuration = 0
let startInterva = null
let flag = false

const timercont = document.getElementsByClassName("timer-cont") [0]
  
timercont.addEventListener("click",function()
{
    if(!flag) {
       startTimer()
       flag = true 
    }
    else {
        stopTimer()
        flag = false
    }
})

timercont.addEventListener("dblclick",function(){
    resetTimer()
})
function startTimer(){
 if (timeBegun === null)
     timeBegun = new Date();
  if(timeStopped !== null)
  stoppedDuration += (new Date() - timeStopped)

  startInterva = setInterval(clockRunning,10)
 
}

function stopTimer() {
timeStopped = new Date()
clearInterval(startInterva)
}

function clockRunning(){
  let currentTime = new Date()
  let timeElapsed = new Date(currentTime - timeBegun - stoppedDuration)
  let minutes = timeElapsed.getUTCMinutes()
  let seconds = timeElapsed.getSeconds()
  let milliseconds = timeElapsed.getUTCMilliseconds()

  milliseconds = Math.floor(milliseconds/10);

  document.getElementById("timer-disp").innerHTML = 
  (minutes = minutes < 10 ? '0' + minutes:minutes) + ":"+
  (seconds = seconds < 10 ? '0' + seconds:seconds) + ":"+
  (milliseconds = milliseconds < 10 ? '0' + milliseconds:milliseconds);
}

function resetTimer(){
    clearInterval(startInterva)
    timeBegun = null;
    timeStopped = null
    stoppedDuration = 0
    document.getElementById("timer-disp").innerHTML = "00:00:00"
    flag = false
}
    