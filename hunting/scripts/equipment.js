import { openModal, setupModal } from "./modal.js";

const list = document.querySelector("#equipment-list");
const FAVORITES_KEY = "huntingBasicsFavorites";

let equipment = [];

function getFavorites() {
    const saved = localStorage.getItem(FAVORITES_KEY);
    return saved ? JSON.parse(saved) : [];
}

function saveFavorites(names) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(names));
}

function toggleFavorite(name) {
    let favorites = getFavorites();
    if (favorites.includes(name)) {
        favorites = favorites.filter((item) => item !== name);
    } else {
        favorites.push(name);
    }
    saveFavorites(favorites);
    renderEquipment();
}

function renderEquipment() {
    const favorites = getFavorites();

    list.innerHTML = equipment.map((item, index) => `
        <article class="card equipment-card">
            <span class="badge">${item.category}</span>
            <h3>${item.name}</h3>
            <p><strong>Why:</strong> ${item.why}</p>
            <p class="card-tip"><strong>Tip:</strong> ${item.tip}</p>
            <div class="card-actions">
                <button type="button" class="details-btn" data-index="${index}">Details</button>
                <button type="button" class="favorite-btn${favorites.includes(item.name) ? " saved" : ""}" data-name="${item.name}">
                    ${favorites.includes(item.name) ? "Saved" : "Save item"}
                </button>
            </div>
        </article>
    `).join("");
}

list.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("details-btn")) {
        openModal(equipment[target.dataset.index]);
    }

    if (target.classList.contains("favorite-btn")) {
        toggleFavorite(target.dataset.name);
    }
});

async function loadEquipment() {
    try {
        const response = await fetch("data/equipment.json");

        if (!response.ok) {
            throw new Error("Could not load equipment file");
        }

        const data = await response.json();
        equipment = data;
        renderEquipment();
    } catch (error) {
        console.error(error);
        list.innerHTML = "<p>Sorry, the equipment list could not load.</p>";
    }
}

setupModal();
loadEquipment();
