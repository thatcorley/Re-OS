import systemSettings from "./config.js";
var booted = false

const bootScreen = document.getElementById("boot-screen");
const heart = document.getElementById("boot-heart");
const rbdAudio = new Audio('assets/audio/return-by-death.mp3');
const flash = document.getElementById("white-flash");
const heartbeatAudio = new Audio("assets/audio/heartbeat.mp3");
const boneBreakAudio = new Audio("assets/audio/bone-break.mp3");

const unmuteButton = document.getElementById("unmute-button");
const audioPromptBlur = document.getElementById("audio-popup-blur");
const audioPrompt = document.getElementById("audio-popup");

unmuteButton.addEventListener("click", async () => {
    audioPrompt.remove()
    audioPromptBlur.remove()
    beatHeart()
});

function beatHeart() {
    if (booted == false){
        heartbeatAudio.play();
        heart.style.animationDuration = `${heartbeatAudio.duration}s`;
        heart.classList.add("beat-active");

        heartbeatAudio.addEventListener("ended", () => {
            if (booted == false){
                heartbeatAudio.play();
            };
        });
    };
}



if (systemSettings.skipBootScreen.state == false) {
    bootScreen.style.display = "flex"

    heart.addEventListener("click", function() {
        booted = true
        boneBreakAudio.play()
        heart.classList.add("crushed-heart");
        heart.classList.remove("beat-active");
        heartbeatAudio.pause()

        setTimeout(() => {
            bootOS();
            rbdAudio.play();
        }, 1000);

    })

    function bootOS() {
        flash.classList.add("flash");
        bootScreen.remove();
    }

    setInterval(function () {
    document.getElementById("timeElement").innerHTML = new Date().toLocaleString();
    }, 1000);
} else {
    bootScreen.remove()
}