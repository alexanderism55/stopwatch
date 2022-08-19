import { miliSecondsInterval } from "../handlers/start-handler.js";
import { secondsInterval } from "../handlers/start-handler.js";
import { minutesInterval } from "../handlers/start-handler.js";
import { hoursInterval } from "../handlers/start-handler.js";
import { MILISECONDS } from "../../data/constants.js";
import { SECONDS } from "../../data/constants.js";
import { MINUTES } from "../../data/constants.js";
import { HOURS } from "../../data/constants.js";
import { BEGIN_EVENT } from "../../data/constants.js";
import { START_COUNT } from "../../data/constants.js";
import { startCountHandler } from "./start-handler.js";

export const resetCountHandler = () => {
  clearInterval(miliSecondsInterval);
  clearInterval(secondsInterval);
  clearInterval(minutesInterval);
  clearInterval(hoursInterval);

  document.getElementById(MILISECONDS).innerHTML = "00";
  document.getElementById(SECONDS).innerHTML = "00";
  document.getElementById(MINUTES).innerHTML = "00";
  document.getElementById(HOURS).innerHTML = "00";

  document
    .getElementById(START_COUNT)
    .addEventListener(BEGIN_EVENT, startCountHandler);
};
