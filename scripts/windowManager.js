const windows = document.getElementsByClassName("window")

for (let i = 0; i < windows.length; i++) {
        
    dragElement(windows.item(i));

    windows.item(i).querySelector(".window-close").addEventListener("click", function() {closeWindow(windows.item(i))})
}


function dragElement(element) {
    var initX = 0, initY = 0, currX = 0, currY = 0;
    // if (document.getElementById("window-handle")) {
    //     document.getElementById("window-handle").onmousedown = dragMouseDown;
    // } else {
    //     element.onmousedown = dragMouseDown;
    // }

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
        element.style.top = (element.offsetTop - initY) + "px";
        element.style.left = (element.offsetLeft - initX) + "px";
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
    element.style.display = "block"
}