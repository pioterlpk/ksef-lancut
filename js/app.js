const session = JSON.parse(localStorage.getItem("session"));
if (!session) window.location.href = "index.html";

document.getElementById("userName").innerText = session.login;
document.getElementById("unit").innerText = session.unit;

if (session.role !== "admin") {
    document.getElementById("usersTab").style.display = "none";
}

function showSection(id) {
    document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");

    if (id === "register") loadDocuments();
    if (id === "users") loadUsers();
}

function logout() {
    localStorage.removeItem("session");
    window.location.href = "index.html";
}

/* DOKUMENTY */
function addDocument() {
    const title = docTitle.value;
    const desc = docDesc.value;

    if (!title || !desc) return alert("Uzupełnij dane");

    const docs = JSON.parse(localStorage.getItem("documents") || "[]");
    docs.push({
        title,
        desc,
        unit: session.unit,
        author: session.login,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("documents", JSON.stringify(docs));
    docTitle.value = "";
    docDesc.value = "";
    alert("Zapisano dokument");
}

function loadDocuments() {
    const list = document.getElementById("docList");
    list.innerHTML = "";

    const docs = JSON.parse(localStorage.getItem("documents") || "[]");
    docs.forEach(d => {
        const li = document.createElement("li");
        li.innerText = `${d.date} | ${d.unit} | ${d.title}`;
        list.appendChild(li);
    });
}

/* UŻYTKOWNICY */
function loadUsers() {
    const list = document.getElementById("userList");
    list.innerHTML = "";

    const users = JSON.parse(localStorage.getItem("users"));
    users.forEach(u => {
        const li = document.createElement("li");
        li.innerText = `${u.login} – ${u.unit}`;
        list.appendChild(li);
    });
}
