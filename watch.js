const stopWatchTag = document.getElementsByClassName("stopWatch")[0]
const startTag = document.getElementsByClassName("startButton")[0]
const pauseTag = document.getElementsByClassName(" pauseButton")[0]
const continueTag = document.getElementsByClassName("continuebutton")[0]
const restartTag = document.getElementsByClassName("restartButton")[0]
const milisecondTag = document.getElementsByClassName("miliSecond")[0]

let second = 0; minute = 0; hour = 0;
let milisecond = 00;   



let startTimer = () => {
    milisecond += 1
    if (milisecond === 99){
        milisecond = 1
        second += 1  
        if (second === 60){
            second = 1
            minute += 1
            if (minute === 60){
                milisecond = 0
                second     = 0
                minute     = 0
                hour += 1
            }
        }
    }
    let secondText = second < 10 ? "0" + second.toString() : second ;
    let minuteText = minute < 10 ? "0" + minute.toString() : minute ;
    let hourText   = hour   < 10 ? "0" + hour.toString()   : hour ;
    // let miliText   = milisecond   < 100 ? "000" + milisecond.toString()   : milisecond ;

    stopWatchTag.textContent = hourText+":" + minuteText+":" + secondText;
    milisecondTag.textContent = milisecond;    

    console.log(milisecond)
}



let timeInterval;
let miliInterval;
startTag.addEventListener("click", () =>{
    timeInterval = setInterval(startTimer,10)
 
})

 pauseTag.addEventListener("click", () =>{
    clearInterval(timeInterval)
 }) 

 continueTag.addEventListener("click",() =>{
    clearInterval(timeInterval)
    timeInterval = setInterval(startTimer,10)
 })

 
restartTag.addEventListener("click",() =>{
    clearInterval(timeInterval)
    hour = 0; minute = 0; second = 0; milisecond = 00;
    timeInterval = setInterval(startTimer,10)
 })