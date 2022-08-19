import { HOURS } from "../../data/constants.js";
import { MINUTES } from "../../data/constants.js";
import { SECONDS } from "../../data/constants.js";
import { MILISECONDS } from "../../data/constants.js";
import { START_COUNT } from "../../data/constants.js";
import {BEGIN_EVENT} from "../../data/constants.js";

export const startCountHandler = () => {
  debugger;
  // miliseconds counter

  const miliSeconds = document.getElementById(MILISECONDS);
  const milisecondsCounter = () => {
    if (Number(miliSeconds.innerHTML) === 99) {
      miliSeconds.innerHTML = 0;
    }
    miliSeconds.innerHTML = Number(miliSeconds.innerHTML) + 1;
  };
  const miliSecondsInterval = setInterval(milisecondsCounter, 10);
  miliSecondsInterval;

  // seconds counter

  const seconds = document.getElementById(SECONDS);
  const secondsCounter = () => {
    if (Number(seconds.innerHTML) === 60) {
      seconds.innerHTML = 0;
    }
    seconds.innerHTML = Number(seconds.innerHTML) + 1;
  };
  const secondsInterval = setInterval(secondsCounter, 1000);

  // minutes counter

  const minutes = document.getElementById(MINUTES);
  const minutesCounter = () => {
    if (Number(minutes.innerHTML) === 60) {
      minutes.innerHTML = 0;
    }
    minutes.innerHTML = Number(minutes.innerHTML) + 1;
  };
  const minutesInterval = setInterval(minutesCounter, 60000);

  // hours counter

  const hours = document.getElementById(HOURS);
  const hoursCounter = () => {
    if (Number(hours.innerHTML) === 23) {
      hours.innerHTML = 0;
    }
    hours.innerHTML = Number(hours.innerHTML) + 1;
  };
  const hoursInterval = setInterval(hoursCounter, 3600000);
  document.getElementById(START_COUNT).removeEventListener(BEGIN_EVENT,startCountHandler);
};
