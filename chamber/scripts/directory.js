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

const members = [
    {
        name: "Café del Puente",
        address: "Calle Morelos 215, Centro, Matamoros, TM 87300",
        phone: "(868) 888-881",
        website: "https://example.com",
        image: "cafe-del-puente.svg",
        level: 2,
        tagline: "Coffe and Food"
    },
    {
        name: "Clínica Frontera Salud",
        address: "Blvd. Constitución 890, Matamoros, TM 87330",
        phone: "(868) 888-882",
        website: "https://example.com",
        image: "clinica-frontera.svg",
        level: 3,
        tagline: "Family Clinic for all the Family"
    },
    {
        name: "Auto Servicio Río",
        address: "Av. Puente Internacional 402, Matamoros, TM 87340",
        phone: "(868) 888-883",
        website: "https://example.com",
        image: "auto-rio.svg",
        level: 1,
        tagline: "Repairs, oil changes and tire service"
    },
    {
        name: "Puente Legal Group",
        address: "Calle Primera 118, Zona Centro, Matamoros, TM 87300",
        phone: "(868) 888-884",
        website: "https://example.com",
        image: "puente-legal.svg",
        level: 2,
        tagline: "Business and relocation leagal support"
    },
    {
        name: "Mercado Centro Local",
        address: "Calle Sexta 55, Matamoros, TM 87300",
        phone: "(868) 888-885",
        website: "https://example.com",
        image: "mercado-centro.svg",
        level: 1,
        tagline: "Fresh and regional products"
    },
    {
        name: "Hotel Río Grande Plaza",
        address: "Av. Alvaro Obregón 1500, Matamoros, TM 87330",
        phone: "(868) 888-886",
        website: "https://example.com",
        image: "hotel-rio.svg",
        level: 3,
        tagline: "Nice place to Stay with Family"
    },
    {
        name: "TecnoBorder IT",
        address: "Parque Industrial 12, Matamoros, TM 87385",
        phone: "(868) 888-887",
        website: "https://example.com",
        image: "tecnoborder.svg",
        level: 2,
        tagline: "Fix laptops and install internet"
    },
    {
        name: "Escuela de Idiomas Frontera",
        address: "Calle Iguala 330, Matamoros, TM 87300",
        phone: "(868) 888-888",
        website: "https://example.com",
        image: "idiomas-frontera.svg",
        level: 1,
        tagline: "English and Spanish classes"
    }
];

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
            <img src="images/${m.image}" alt="${m.name} storefront" width="320" height="160" loading="lazy">
            <div class="card-body">
                ${getBadge(m.level)}
                <h2>${m.name}</h2>
                <p class="tagline">${m.tagline}</p>
                <p>${m.address}</p>
                <p><a href="tel:${formatPhoneLink(m.phone)}">${m.phone}</a></p>
                <p><a href="${m.website}" target="_blank" rel="noopener noreferrer">Visit website</a></p>
            </div>
        </article>
    `).join("");
}

menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
});

gridBtn.addEventListener("click", () => {
    directory.classList.remove("list");
    directory.classList.add("grid");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
    directory.classList.remove("grid");
    directory.classList.add("list");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;

renderCards();
