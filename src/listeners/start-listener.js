import {BEGIN_EVENT} from '../../data/constants.js';
import {startCountHandler} from "../../src/handlers/start-handler.js"

// exporting an event listener for the start button
export const startCountListener= (element) => {
    element.addEventListener(BEGIN_EVENT,startCountHandler);
}