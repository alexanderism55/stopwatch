import { startCountHandler } from "./start-handler.js";
import {miliSecondsInterval} from "../handlers/start-handler.js";
import { secondsInterval } from "../handlers/start-handler.js";
import { minutesInterval } from "../handlers/start-handler.js";
import {hoursInterval} from "../handlers/start-handler.js";
import { START_COUNT } from "../../data/constants.js";
import {BEGIN_EVENT} from "../../data/constants.js";

export const stopCountHandler = () => {
  debugger;
  // clearing the interval of the counting elements
  clearInterval(miliSecondsInterval);
  clearInterval(secondsInterval);
  clearInterval(minutesInterval);
  clearInterval(hoursInterval);

  // restoring the event listener for the start button
  document.getElementById(START_COUNT).addEventListener(BEGIN_EVENT, startCountHandler)
};
