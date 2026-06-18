const form = document.querySelector("#contact-form");
const timestampField = document.querySelector("#timestamp");
const DRAFT_KEY = "huntingBasicsFormDraft";

if (form && timestampField) {
    const savedDraft = localStorage.getItem(DRAFT_KEY);

    if (savedDraft) {
        const draft = JSON.parse(savedDraft);
        Object.keys(draft).forEach((key) => {
            const field = form.elements.namedItem(key);
            if (field && "value" in field) {
                field.value = draft[key];
            }
        });
    }

    form.addEventListener("input", () => {
        const draft = {};
        const data = new FormData(form);
        data.forEach((value, key) => {
            if (key !== "timestamp") {
                draft[key] = value;
            }
        });
        localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    });

    form.addEventListener("submit", () => {
        timestampField.value = new Date().toISOString();
        localStorage.removeItem(DRAFT_KEY);
    });
}
