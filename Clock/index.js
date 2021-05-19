console.log("File atteched");

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digital = document.querySelector('.digital-clock');

function setTime() {
    // Hand clock Section
  const now = new Date();

  let currentSeconds = now.getSeconds();
  let secondsDegrees = ((currentSeconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  let currentMinutes = now.getMinutes();
  let minuteDegrees = ((currentMinutes / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minuteDegrees}deg)`;

  let currentHour = now.getHours();
  let hourDegrees = ((currentHour / 60) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    //Digital clock sedction
    
    currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds; 

    // Convert railway clock to AM/PM clock
    currentHour = (currentHour>12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour==0) ?  12 : currentHour;
    
    // Choose AM/PM as per the time of the day
    let timeOfDay = (currentHour < 12 ) ? "AM" : "PM";

    // Prepare the time string from hours, minutes and seconds
    let currentTimeStr = currentHour + ":" + currentMinutes  
                        + ":" + currentSeconds + " " + timeOfDay;
                        digital.innerHTML=currentTimeStr;


}

setInterval(setTime,1000);
