const bootScreen = document.getElementById("boot-screen");
const heart = document.getElementById("boot-heart");
const rbdAudio = new Audio('assets/audio/return-by-death.mp3');
const flash = document.getElementById("white-flash")

heart.addEventListener("click", function() {
    heart.classList.add("crushed-heart");

    setTimeout(() => {
        bootOS();
        rbdAudio.play();
    }, 1000);

})

function bootOS() {
    flash.classList.add("flash");
    bootScreen.remove();
}