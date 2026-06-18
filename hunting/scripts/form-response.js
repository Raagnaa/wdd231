const experienceLabels = {
    never: "Never hunted",
    once: "Once or twice",
    learning: "Still learning"
};

function showFormData() {
    const summary = document.querySelector("#summary");
    const params = new URLSearchParams(window.location.search);

    const fname = params.get("fname");

    if (!fname) {
        summary.innerHTML = "<p>No form data found. Please use the <a href=\"form.html\">contact form</a> first.</p>";
        return;
    }

    const experienceValue = params.get("experience");
    const experienceText = experienceLabels[experienceValue] || experienceValue || "Not provided";

    summary.innerHTML = "";

    const fields = [
        ["First Name", fname],
        ["Last Name", params.get("lname")],
        ["Email", params.get("email")],
        ["Experience", experienceText],
        ["Question", params.get("question")],
        ["Submitted", params.get("timestamp")]
    ];

    fields.forEach(([label, value]) => {
        const p = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = `${label}: `;
        p.appendChild(strong);
        p.appendChild(document.createTextNode(value || "Not provided"));
        summary.appendChild(p);
    });
}

showFormData();
