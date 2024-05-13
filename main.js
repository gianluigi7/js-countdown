'use strict'


let count;
let seconds = 9;
const countdownEl = document.getElementById('countdown');


function countdown() {
    countdownEl.innerHTML = `Mancano ${seconds} secondi`;
    
    
    
    if (seconds === 0) {
        countdownEl.innerHTML = "Buon anno!";
        return;
    }
        
    
    seconds--;
}

setInterval(countdown, 1000);


//setTimeout(function ()  {
//   alert("Buon anno!");
//
//}, 10000);