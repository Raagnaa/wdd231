const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    const open = nav.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", open);
});

const yearEl = document.querySelector("#year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
