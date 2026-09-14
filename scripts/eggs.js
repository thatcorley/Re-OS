import unlock from "./achivements.js";

let lastInteraction = Date.now();

function userInteracted() {
    lastInteraction = Date.now();
}

document.addEventListener("keydown", userInteracted);
document.addEventListener("click", userInteracted);

setInterval(() => {
    const idleTime = Date.now() - lastInteraction;

    if (idleTime >= 300000) {
        unlock("sloth_5_mins")
    }
}, 1000);