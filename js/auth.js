function login() {
    const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");
    const errorBox = document.getElementById("error");

    const login = loginInput.value.trim();
    const password = passwordInput.value.trim();

    if (!login || !password) {
        errorBox.innerText = "Uzupełnij login i hasło";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
        u => u.login === login && u.password === password
    );

    if (!user) {
        errorBox.innerText = "Nieprawidłowy login lub hasło";
        return;
    }

    // Zapis sesji
    localStorage.setItem("session", JSON.stringify({
        login: user.login,
        unit: user.unit,
        role: user.role
    }));

    // Przekierowanie
    window.location.href = "dashboard.html";
}

// Auto-redirect jeśli ktoś już zalogowany
(function () {
    const session = localStorage.getItem("session");
    if (session && window.location.pathname.endsWith("index.html")) {
        window.location.href = "dashboard.html";
    }
})();
