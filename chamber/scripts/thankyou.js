const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

const params = new URLSearchParams(window.location.search);

const summary = document.querySelector("#summary");
summary.innerHTML = `
    <p><strong>First Name:</strong> ${params.get("fname")}</p>
    <p><strong>Last Name:</strong> ${params.get("lname")}</p>
    <p><strong>Organization Title:</strong> ${params.get("title")}</p>
    <p><strong>Email:</strong> ${params.get("email")}</p>
    <p><strong>Mobile:</strong> ${params.get("phone")}</p>
    <p><strong>Organization:</strong> ${params.get("organization")}</p>
    <p><strong>Description:</strong> ${params.get("description")}</p>
    <p><strong>Membership:</strong> ${params.get("membership")}</p>
    <p><strong>Submitted:</strong> ${params.get("timestamp")}</p>
`;

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;