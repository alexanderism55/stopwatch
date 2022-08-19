import { END_EVENT } from "../../data/constants.js";
import {resetCountHandler } from "../handlers/reset-handler.js"

export const resetCountListener = (element) => {
    element.addEventListener(END_EVENT,resetCountHandler)
}