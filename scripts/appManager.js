const apps = {
    welcome: {
        name: "Welcome",
        icon: "🤔",
        window: "welcome",
        desktop: true
    },
    browser: {
        name: "Wikipedia",
        icon: "🌐",
        window: "wikipedia",
        desktop: true
    },
    map: {
        name: "World Map",
        icon: "🗺️",
        window: "map",
        desktop: true
    },
    webNovel: {
        name: "Web Novel",
        icon: "📖",
        window: "webNovel",
        desktop: true
    },
    wallpapers: {
        name: "Wallpapers",
        icon: "🖼️",
        window: "wallpapers",
        desktop: true
    }
}

const desktop = document.getElementById("desktop");

for (const appID in apps) {
    const app = apps[appID];
    if (app.desktop == false) {
        continue;
    }

    const appIcon = document.createElement("div");
    appIcon.classList.add("app-icon");
    appIcon.innerHTML = `
        <h1>${app.icon}</h1>
    `;

    appIcon.addEventListener("click", function() {
        const appWindow = document.getElementById(app.window+"Window");
        if (appWindow) {
            openWindow(appWindow);
        }
    });

    desktop.appendChild(appIcon);
}