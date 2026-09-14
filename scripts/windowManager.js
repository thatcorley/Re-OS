const windows = document.getElementsByClassName("window")
const navBar = document.getElementById("nav-bar")
const navbarHeight = navBar.offsetHeight;
const achievementPopup = document.getElementById("achievement-popup")

var biggestIndex = 1;

for (let i = 0; i < windows.length; i++) {
        
    dragElement(windows.item(i));

    windows.item(i).querySelector(".window-close").addEventListener("click", function() {closeWindow(windows.item(i))})
}

function bringToTop(element) {
    biggestIndex++;
    element.style.zIndex = biggestIndex;
    achievementPopup.style.zIndex = biggestIndex + 1;
    navBar.style.zIndex = biggestIndex + 2;
}

function dragElement(element) {
    var initX = 0, initY = 0, currX = 0, currY = 0;

    const windowHandle = element.querySelector(".window-handle");
    if (windowHandle) {
        windowHandle.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        currX = e.clientX;
        currY = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        initX = currX - e.clientX;
        initY = currY - e.clientY;
        currX = e.clientX;
        currY = e.clientY;
        element.style.top = Math.max((element.offsetTop - initY), navbarHeight) + "px";
        element.style.left = (element.offsetLeft - initX) + "px";
        bringToTop(element)
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function closeWindow(element) {
    element.style.display = "none"
}

function openWindow(element) {
    element.style.display = "flex"
    bringToTop(element)
}