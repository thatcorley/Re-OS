const wallpapers = document.querySelectorAll(".wallpaper-selection");
for (let i = 0; i < wallpapers.length; i++) {
  wallpapers[i].addEventListener("click", function() {
    const wallpaper = this.dataset.wallpaper;

    document.body.style.backgroundImage = `url("assets/wallpapers/${wallpaper}")`
  })
}