const session = JSON.parse(localStorage.getItem("session"));

if (!session) {
    window.location.href = "index.html";
}

document.getElementById("userName").innerText = session.login;
document.getElementById("unit").innerText = session.unit;

if (session.role !== "admin") {
    document.getElementById("adminTab").style.display = "none";
}

function logout() {
    localStorage.removeItem("session");
    window.location.href = "index.html";
}
