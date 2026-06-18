const dialog = document.querySelector("#equipment-modal");
const closeBtn = document.querySelector("#close-modal");

export function openModal(item) {
    document.querySelector("#modal-name").textContent = item.name;
    document.querySelector("#modal-category").textContent = item.category;
    document.querySelector("#modal-why").textContent = item.why;
    document.querySelector("#modal-tip").textContent = item.tip;
    dialog.showModal();
}

export function setupModal() {
    closeBtn.addEventListener("click", () => {
        dialog.close();
    });
}
