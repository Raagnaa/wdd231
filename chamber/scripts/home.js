const apiKey = "b54dc4812b3af9e8b8c618b4d208a5bb"

const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

function pickRandom(list, count) {
    const pool = [...list];
    const chosen = [];
    while (chosen.length < count && pool.length > 0) {
        const i = Math.floor(Math.random() * pool.length);
        chosen.push(pool.splice(i, 1)[0]);
    }
    return chosen;
}

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Matamoros,MX&units=imperial&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    document.querySelector("#current-temp").textContent = `${Math.round(data.main.temp)}°F`;
    document.querySelector("#weather-desc").textContent = data.weather[0].description;
}

async function getForecast() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=Matamoros,MX&units=imperial&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const forecastEl = document.querySelector("#forecast");
    const daysShown = [];
    let html = " "

    for (const item of data.list) {
        const date = item.dt_txt.split(" ")[0];
        if (daysShown.includes(date) || daysShown.length >= 3) continue;
        if (item.dt_txt.includes("12:00:00")) {
            daysShown.push(date);
            const dayName = new Date(item.dt_txt).toLocaleDateString("en-US", { weekday: "long" });
            html += `<p><strong>${dayName}</strong>: ${Math.round(item.main.temp)}°F</p>`;
        }
    }

    forecastEl.innerHTML = html;
}

loadSpotlights();
getWeather();
getForecast();

async function loadSpotlights() {
    const response = await fetch("data/members.json");
    const members = await response.json();
    const eligible = members.filter((m) => m.level === 2 || m.level === 3);
    const spotlights = pickRandom(eligible, 3);

    const container = document.querySelector("#spotlight-cards");
    container.innerHTML = spotlights.map((m) => `
        <article class="spotlight-card">
            <img src="images/${m.image}" alt="${m.name} logo">
            <h3>${m.name}</h3>
            <p>${m.address}</p>
            <p><a href="tel:${m.phone.replace(/\D/g, "")}">${m.phone}</a></p>
            <p><a href="${m.website}" target="_blank" rel="noopener">Website</a></p>
            <p>Level: ${m.level === 3 ? "Gold" : "Silver"}</p>
        </article>
    `).join("");
}

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;


