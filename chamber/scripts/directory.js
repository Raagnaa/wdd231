const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
const directory = document.querySelector("#directory");
const gridBtn = document.querySelector("#grid-btn");
const listBtn = document.querySelector("#list-btn");

const levelLabels = {
    1: { text: "Member", class: "member" },
    2: { text: "Silver", class: "silver" },
    3: { text: "Gold", class: "gold" }
};

let members = [];

function getBadge(level) {
    const info = levelLabels[level] || levelLabels[1];
    return `<span class="badge ${info.class}">${info.text}</span>`;
}

function formatPhoneLink(phone) {
    return phone.replace(/\D/g, "");
}

function renderCards() {
    directory.innerHTML = members.map((m) => `
        <article class="card">
            <img src="images/${m.image}" alt="${m.name}" width="320" height="160" loading="lazy">
            <h2>${m.name}</h2>
            <p class="card-phone"><a href="tel:${formatPhoneLink(m.phone)}">${m.phone}</a></p>
            <p class="card-web"><a href="${m.website}" target="_blank" rel="noopener noreferrer">Website</a></p>
            <div class="card-details">
                ${getBadge(m.level)}
                <p class="tagline">${m.tagline}</p>
                <p class="address">${m.address}</p>
            </div>
        </article>
    `).join("");
}

async function loadMembers() {
    const response = await fetch("data/members.json");
    members = await response.json();
    renderCards();
}

menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
});

gridBtn.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;

loadMembers();
