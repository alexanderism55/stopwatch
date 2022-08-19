import { BEGIN_EVENT } from "../../data/constants.js";
import { STOP_COUNT } from "../data/constants.js";
import { START_COUNT } from "../../data/constants.js";
import { startCountListener } from "./listeners/start-listener.js";
import {stopCountListener } from "./listeners/stop-listener.js"

startCountListener(document.getElementById(START_COUNT));
stopCountListener(document.getElementById(STOP_COUNT));