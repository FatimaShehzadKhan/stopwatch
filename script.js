let millisecs = 00;
let seconds = 00;
let minutes = 00;
var milsecSpan = document.querySelector('.milliseconds');
let secSpan = document.querySelector('.seconds');
let minSpan = document.querySelector('.minutes');
let currTime = document.querySelector('.currTime');
let lapseContent = document.querySelector('.lapse-content');
let times = [];
let deleteBtn = document.querySelector('#closebtn');
var sign = deleteBtn.innerText;
deleteBtn.style.visibility='hidden';
// console.log(currTime.innerText);

function start() {
    millisecs++;
    
    if (millisecs <= 9) {
        // console.log(milsecSpan);
        milsecSpan.innerHTML = '0' + millisecs;
        // seconds++;
    }
    if (millisecs >= 10) {
        milsecSpan.innerHTML = millisecs;

    }
    if (millisecs == 100) {
        seconds++;
        millisecs = 00;
        milsecSpan.innerHTML = millisecs;
        if (seconds <= 9) {
            // console.log(milsecSpan);
            secSpan.innerHTML = '0' + seconds;
            // seconds++;
        }
        if (seconds >= 10) {
            secSpan.innerHTML = seconds;

        }
        if (seconds == 60) {
            minutes++;
            seconds = 00;
            secSpan.innerHTML = seconds;
            if (minutes <= 9) {
                minSpan.innerHTML = '0' + minutes;

            }
            if (minutes >= 10) {
                minSpan.innerHTML = minutes;
                
            }

            // minSpan.innerHTML= minutes;
        }

        // secSpan.innerHTML= '0' + seconds;
        
    }
}
//     if (seconds <= 9) {
    //         // console.log(milsecSpan);
    //         secSpan.innerHTML = '0' + millisecs;
    //         // seconds++;
    //     }
    //     if (seconds >= 10) {
        //         secSpan.innerHTML = millisecs;

//     }
//     if (seconds == 60) {
    //         minutes++;
    //         seconds = 00;
    //         secSpan.innerHTML = seconds;
//         minSpan.innerHTML = minutes;
//     }

// }
let myInterval;

function intervalSet() {
    
    clearInterval(myInterval);
    myInterval = setInterval(start, 10);

}
function stop() {
    clearInterval(myInterval);
    var time1 = currTime.innerText;
    times.push(time1);
    // console.log(times);
    // console.log(time1);
}
function reset() {
    clearInterval(myInterval);
    millisecs = 00;
    seconds = 00;
    minutes = 00;
    milsecSpan.innerHTML = '0' + millisecs;
    secSpan.innerHTML = '0' + seconds;
    minSpan.innerHTML = '0' + minutes;
    // console.log(myInterval);

}
function lapse() {
    deleteBtn.style.visibility='visible';
    for (let index = 0; index < times.length; index++) {
        // deleteBtn.innerText='X';
        lapseContent.innerText+=times[index] + '\n\n';
        // deleteBtn.style.visibility='visible';
        
        
        
    }

    
}
function removeInterval() {
    times = [];
    lapseContent.innerText=times;
    deleteBtn.style.visibility='hidden';

    
}


// let seconds = 00;
// let tens = 00;
// let mins = 00;
// let getSeconds = document.querySelector('.seconds');
// let getTens = document.querySelector('.tens');
// let getMins = document.querySelector('.mins');
// let btnStart = document.querySelector('.btn-start');
// let btnStop = document.querySelector('.btn-stop');
// let btnReset = document.querySelector('.btn-reset');
// let interval;

// btnStart.addEventListener('click', () => {
//     clearInterval(interval);
//     inverval = setInterval(startTimer, 10);
// })
// btnStop.addEventListener('click', () => {
//     clearInterval(inverval);
// })
// btnReset.addEventListener('click', () => {
//     clearInterval(inverval);
//     tens = '00';
//     seconds = '00';
//     mins = '00';
//     getSeconds.innerHTML = seconds;
//     getTens.innerHTML = tens;
//     getMins.innerHTML = mins;
// })

// function startTimer(){
//     tens++;
//     if(tens <= 9){
//         getTens.innerHTML = '0' + tens;
//     }
//     if(tens > 9){
//         getTens.innerHTML = tens;
//     }
//     if(tens > 99){
//         seconds++;
//         getSeconds.innerHTML = '0' + seconds;
//         tens = 0;
//         getTens.innerHTML = '0' + 0;
//     }
//     if(seconds > 9){
//         getSeconds.innerHTML = seconds;
//     }
//     if(seconds > 59){
//         mins++;
//         getMins.innerHTML = '0' + mins;
//         seconds = 0;
//         getSeconds.innerHTML = '0' + 0;
//     }
//     if(mins > 9){
//         getSeconds.innerHTML = mins;
//     }
// }

