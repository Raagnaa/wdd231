const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

const messageBox = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("discoverLastVisit");
const now = Date.now();

if (!lastVisit) {
    messageBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
    if (days < 1) {
        messageBox.textContent = "Back so Soon! Awesome!";
    } else if (days === 1) {
        messageBox.textContent = "You last visited 1 day ago.";
    } else {
        messageBox.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("discoverLastVisit", String(now));

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;
