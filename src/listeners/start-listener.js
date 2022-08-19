import {BEGIN_EVENT} from '../../data/constants.js';
import {startCountHandler} from "../../src/handlers/start-handler.js"

export const startCountListener= (element) => {
    element.addEventListener(BEGIN_EVENT,startCountHandler);
}