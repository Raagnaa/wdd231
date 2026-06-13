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
        messageBox.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        messageBox.textContent = "You last visited 1 day ago.";
    } else {
        messageBox.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("discoverLastVisit", String(now));

async function loadPlaces() {
    const response = await fetch("data/places.json");
    const places = await response.json();
    const container = document.querySelector("#cards");

    places.forEach((place) => {
        const card = document.createElement("article");
        card.className = "place-card";
        card.innerHTML = `
            <img src="images/${place.image}" alt="${place.name}" width="400" height="300" loading="lazy">
            <h2>${place.name}</h2>
            <p class="address">${place.address}</p>
            <p class="description">${place.description}</p>
            <a class="learn-more" href="${place.link}">Learn More</a>
        `;
        container.appendChild(card);
    });
}

loadPlaces();

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;
