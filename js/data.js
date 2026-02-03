// Inicjalizacja użytkowników
if (!localStorage.getItem("users")) {
    const users = [
        { login: "admin", password: "admin123", unit: "KPP", role: "admin" },
        { login: "psp01", password: "psp123", unit: "PSP", role: "user" },
        { login: "osp01", password: "osp123", unit: "OSP", role: "user" },
        { login: "sd01", password: "sd123", unit: "Służba Drogowa", role: "user" },
        { login: "rspr01", password: "rspr123", unit: "RSPR", role: "user" },
        { login: "szpital01", password: "szpital123", unit: "Szpital Powiatowy", role: "user" }
    ];
    localStorage.setItem("users", JSON.stringify(users));
}

// Inicjalizacja dokumentów
if (!localStorage.getItem("documents")) {
    localStorage.setItem("documents", JSON.stringify([]));
}
