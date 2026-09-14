import saveManager from "./saveManager.js";

const achievementList = [
    {
        id: "crush_heart",
        title: "\"I love you\"",
        description: "Crush your heart and trigger Return By Death",
        icon: "🫀"
    },
    {
        id: "play_rbd_audio",
        title: "PTSD",
        description: "Play the Return By Death sound effect",
        icon: "😨"
    },
    {
        id: "fail_betty_10",
        title: "She doesn't want to see you...",
        description: "Fail to find betty 100 times",
        icon: "🚪"
    },
    {
        id: "sloth_5_mins",
        title: "Slothful",
        description: "Don't interact with the site for 5 minutes",
        icon: "💤"
    }
];

const victoryAudio = new Audio("assets/audio/victory.mp3");

function getUnlockedSaved() {
    return saveManager.get("achievements", []);
}

function saveUnlocked(achievement) {
    saveManager.set("achievements", achievement);
}

function isUnlocked(id) {
    return getUnlockedSaved().includes(id);
}

function unlock(id) {
    const unlocked = getUnlockedSaved();
    if (unlocked.includes(id)) return;

    unlocked.push(id)

    saveUnlocked(unlocked);
    showAchievementPopup(id);
    updateApp();
}

function showAchievementPopup(id) {
    const achievement = achievementList.find(a => a.id === id);
    const popup = document.getElementById("achievement-popup");
    const icon = document.getElementById("achievement-icon");
    const title = document.getElementById("achievement-title");
    const description = document.getElementById("achievement-description");

    icon.innerHTML = achievement.icon;
    title.innerHTML = achievement.title;
    description.innerHTML = achievement.description
    victoryAudio.play();
    popup.classList.remove("show");
    void popup.offsetWidth;
    popup.classList.add("show");
}

function updateApp() {
    const achievementsUI = document.getElementById("achievements-list");
        achievementsUI.innerHTML = achievementList.map(a => {
            const unlocked = isUnlocked(a.id);
            return `
            <div class="achievement achievement-${unlocked ? "unlocked" : "locked"}">
                <h1 class="achievement-icon">${a.icon}</h1>
                <div style="flex-direction: column; width: 100%;">
                    <h1 class="achievement-title" style="padding-left: 1rem;">${a.title}</h1>
                    <p class="achievement-description" style="padding-left: 1rem;">${a.description}</p>
                </div>
            </div>
                `}).join("");
}

updateApp()

export default unlock;