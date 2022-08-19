import { END_EVENT } from "../../data/constants.js";
import {stopCountHandler } from "../../src/handlers/stop-handler.js"

//exporting an event listener for the stop button
export const stopCountListener = (element) => {
element.addEventListener(END_EVENT, stopCountHandler)
}