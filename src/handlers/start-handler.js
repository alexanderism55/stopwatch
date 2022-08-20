import { HOURS } from "../../data/constants.js";
import { MINUTES } from "../../data/constants.js";
import { SECONDS } from "../../data/constants.js";
import { MILISECONDS } from "../../data/constants.js";
import { START_COUNT } from "../../data/constants.js";
import { BEGIN_EVENT } from "../../data/constants.js";

export let miliSecondsInterval = "";
export let secondsInterval = "";
export let minutesInterval = "";
export let hoursInterval = "";
export const startCountHandler = () => {
  debugger;
  // **miliseconds counter**
  
  const miliSeconds = document.getElementById(MILISECONDS);
  const seconds = document.getElementById(SECONDS);
  const minutes = document.getElementById(MINUTES);
  const hours = document.getElementById(HOURS);
  // seting up a function for the miliSeconds
  // the function converts the inner html of the grabbed element
  // and sets an argument that turns the value to zero,
  // if the value is +99
  // other wise it addes 1 to the current value
  const milisecondsCounter = () => {
    if (Number(miliSeconds.innerHTML) === 99) {
      miliSeconds.innerHTML = 0;
      seconds.innerHTML = Number(seconds.innerHTML) + 1;
    }
    miliSeconds.innerHTML = Number(miliSeconds.innerHTML) + 1;
  };
  // setting up the interval to 10
  miliSecondsInterval = setInterval(milisecondsCounter, 10);
  miliSecondsInterval;


  // **seconds counter**

  // seting up a function for the miliSeconds
  // the function converts the inner html of the grabbed element
  // and sets an argument that turns the value to zero,
  // if the value is +60
  // other wise it addes 1 to the current value
  const secondsCounter = () => {
    if (Number(seconds.innerHTML) === 60) {
      seconds.innerHTML = 0;
      minutes.innerHTML = Number(minutes.innerHTML) + 1;
    }
  };
  
  // minutes counter

  // seting up a function for the miliSeconds
  // the function converts the inner html of the grabbed element
  // and sets an argument that turns the value to zero,
  // if the value is +60
  // other wise it addes 1 to the current value
  const minutesCounter = () => {
    if (Number(minutes.innerHTML) === 60) {
      minutes.innerHTML = 0;
      hours.innerHTML = Number(hours.innerHTML) + 1;
    }
  };
  
  // hours counter

  // seting up a function for the miliSeconds
  // the function converts the inner html of the grabbed element
  // and sets an argument that turns the value to zero,
  // if the value is +23
  // other wise it addes 1 to the current value
  const hoursCounter = () => {
    if (Number(hours.innerHTML) === 23) {
      hours.innerHTML = 0;
    }
  };
 
  // removeing the event listener so that it cant be called again
  document
    .getElementById(START_COUNT)
    .removeEventListener(BEGIN_EVENT, startCountHandler);
};
