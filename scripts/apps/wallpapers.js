import saveManager from "../saveManager.js";

const wallpapers = document.querySelectorAll(".wallpaper-selection");
const loadedWallpaper = saveManager.get("wallpaper")
if (loadedWallpaper != null) {
    setWallpaper(saveManager.get("wallpaper"))
} else {
    setWallpaper("watchtower.jpg")
}

for (let i = 0; i < wallpapers.length; i++) {
    wallpapers[i].addEventListener("click", function() {
        const wallpaper = this.dataset.wallpaper;
        setWallpaper(wallpaper)

        saveManager.set("wallpaper", wallpaper)
  })
}

function setWallpaper(wallpaper) {
    document.body.style.backgroundImage = `url("assets/wallpapers/${wallpaper}")`
}