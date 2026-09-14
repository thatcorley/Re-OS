import unlock from "../achivements.js";

const doors = document.getElementsByClassName("FB-door")
const failText = document.getElementById("FB-fails")
const winText = document.getElementById("FB-wins")

var fail = 0
var success = 0

for (let i = 0; i < doors.length; i++) {
    doors.item(i).addEventListener("click", function() {
        var randomNum = Math.random()
        if (randomNum <= (1/3)) {
            success += 1
            winText.innerHTML = "Wins: " + success
            // alert("YOU FOUND BETTY! Replace later")
        } else {
            fail += 1
            failText.innerHTML = "Fails: " + fail
        }

        if (fail == 100) {
            unlock("fail_betty_10")
        }
    })
}