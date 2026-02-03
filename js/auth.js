function login(){
    const u = login.value;
    const p = password.value;
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(x=>x.login===u && x.password===p);

    if(!user){
        error.innerText="Błędne dane";
        return;
    }
    localStorage.setItem("session", JSON.stringify(user));
    location.href="dashboard.html";
}
