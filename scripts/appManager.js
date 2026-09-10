const apps = {
    welcome: {
        name: "Welcome",
        icon: "",
        window: "welcomeWindow",
        location: "desktop"
    },
    sigma: {
        name: "Sigma",
        icon: "",
        window: "sigmaWindow",
        location: "desktop"
    },
    notepad: {
        name: "Notepad",
        icon: "📓",
        window: "notepadWindow",
        location: "desktop"
    }
}

const appIcons = document.getElementsByClassName("app-icon");

for (let i = 0; i < appIcons.length; i++) {
        
    appIcons.item(i).addEventListener("click", function() {
        const appName = this.dataset.app;
        const appWindow = document.getElementById(appName + "Window");

        if (appWindow) {
            openWindow(appWindow);
        }
    })
}

// Add something to auto add apps to desktop later