document.getElementById("btnLogin").addEventListener("click", function(){
    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value.trim();
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(u=>u.login===login && u.password===password);

    if(!user){
        document.getElementById("error").innerText="Nieprawidłowy login lub hasło";
        return;
    }

    localStorage.setItem("session", JSON.stringify(user));
    window.location.href="dashboard.html";
});
