function showToast(text) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = text;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 50);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

function copyEmail() {
    const email = document.getElementById("email-text").innerText;

    navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied");
    });
}