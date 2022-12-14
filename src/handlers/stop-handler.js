import { startCountHandler } from "./start-handler.js";
import {miliSecondsInterval} from "../handlers/start-handler.js";
import { START_COUNT } from "../../data/constants.js";
import {BEGIN_EVENT} from "../../data/constants.js";

export const stopCountHandler = () => {
  debugger;
  // clearing the interval of the counting elements
  clearInterval(miliSecondsInterval);
  
  // restoring the event listener for the start button
  document.getElementById(START_COUNT).addEventListener(BEGIN_EVENT, startCountHandler)
};
