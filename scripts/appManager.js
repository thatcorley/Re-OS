import systemSettings from "./config.js";
import unlock from "./achivements.js";

const apps = {
    welcome: {
        enabled: true,
        name: "Welcome",
        icon: "🤔",
        window: "welcome",
        desktop: true,
        openOnStart: true,
        path: "apps/welcome"
    },
    map: {
        enabled: true,
        name: "World Map",
        icon: "🗺️",
        window: "map",
        desktop: true,
        openOnStart: false
    },
    wallpapers: {
        enabled: true,
        name: "Wallpapers",
        icon: "🖼️",
        window: "wallpapers",
        desktop: true,
        openOnStart: false
    },
    rbdAudio: {
        enabled: true,
        name: "Return By Death Audio",
        icon: "🔊",
        desktop: true,
        openOnStart: false,
        function: playRBD
    },
    findBetty: {
        enabled: true,
        name: "Find Betty",
        icon: "🚪",
        window: "findBetty",
        desktop: true,
        openOnStart: false
    },
    achievements: {
        enabled: true,
        name: "Achievements",
        icon: "🏅",
        window: "achievements",
        desktop: true
    }
};

function playRBD() {
    var audio = new Audio('assets/audio/return-by-death.mp3');
    audio.play();
    setTimeout(() => {
            unlock("play_rbd_audio")
        }, 2000);
}

const desktop = document.getElementById("desktop");

if (systemSettings.appEnabled.state) {
    for (const appID in apps) {
        const app = apps[appID];
        const appWindow = document.getElementById(app.window+"Window");
        if (app.enabled) {
            if (app.desktop == false) {
                continue;
            }
            
            if (app.openOnStart == true) {
                openWindow(appWindow);
            }

            const appIcon = document.createElement("div");
            appIcon.classList.add("app-icon");
            appIcon.innerHTML = `
                <h1>${app.icon}</h1>
            `;

            appIcon.addEventListener("click", function() {
                if (appWindow) {
                    openWindow(appWindow);
                }
                if (app.function) {
                    app.function()
                }
            });

            desktop.appendChild(appIcon);
        } else {
            if (appWindow) {appWindow.remove()};
        }
    }
}