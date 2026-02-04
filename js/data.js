localStorage.clear();

localStorage.setItem("users", JSON.stringify([
    {
        login: "admin",
        password: "admin",
        unit: "KSeF",
        role: "admin"
    }
]));

localStorage.setItem("invoices", JSON.stringify([]));
