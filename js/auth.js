const btn = document.getElementById("btnLogin");
if(btn){
btn.onclick = ()=>{
    const login = document.getElementById("login").value;
    const pass = document.getElementById("password").value;
    const user = JSON.parse(localStorage.getItem("users"))
        .find(u=>u.login===login && u.password===pass);

    if(!user){
        document.getElementById("error").innerText="Błędne dane";
        return;
    }
    localStorage.setItem("session", JSON.stringify(user));
    location.href="dashboard.html";
};
}

function logout(){
    localStorage.removeItem("session");
    location.href="index.html";
}
