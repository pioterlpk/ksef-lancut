if(!localStorage.getItem("users")){
    localStorage.setItem("users", JSON.stringify([
        {login:"admin",password:"admin",unit:"KSeF",role:"admin"}
    ]));
}

if(!localStorage.getItem("invoices")){
    localStorage.setItem("invoices", JSON.stringify([]));
}
