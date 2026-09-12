const apps = {
    welcome: {
        enabled: true,
        name: "Welcome",
        icon: "🤔",
        window: "welcome",
        desktop: true,
        openOnStart: true
    },
    wikipedia: {
        enabled: false,
        name: "Wikipedia",
        icon: "🌐",
        window: "wikipedia",
        desktop: true,
        openOnStart: false
    },
    map: {
        enabled: true,
        name: "World Map",
        icon: "🗺️",
        window: "map",
        desktop: true,
        openOnStart: false
    },
    webNovel: {
        enabled: false,
        name: "Web Novel",
        icon: "📖",
        window: "webNovel",
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
    }
}

function playRBD() {
    var audio = new Audio('assets/audio/return-by-death.mp3');
    audio.play();
}

const desktop = document.getElementById("desktop");

for (const appID in apps) {
    const app = apps[appID];
    if (app.enabled) {
        const appWindow = document.getElementById(app.window+"Window");
        

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
    }
}