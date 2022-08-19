import { BEGIN_EVENT } from "../../data/constants.js";
import { START_COUNT } from "../../data/constants.js";
import { startCountListener } from "./listeners/start-listener.js";

startCountListener(document.getElementById(START_COUNT));
