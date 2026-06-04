const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelector("#timestamp").value = new Date().toISOString();

document.querySelectorAll(".info-link").forEach((btn) => {
    btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-dialog");
        document.querySelector(`#${id}`).showModal();
    });
});

document.querySelectorAll(".close-modal").forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.closest("dialog").close();
    });
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;