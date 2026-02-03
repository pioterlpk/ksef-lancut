if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([
        {login:"admin",password:"admin123",unit:"KPP",role:"admin"},
        {login:"psp01",password:"psp123",unit:"PSP",role:"user"},
        {login:"osp01",password:"osp123",unit:"OSP",role:"user"},
        {login:"sd01",password:"sd123",unit:"Służba Drogowa",role:"user"},
        {login:"med01",password:"med123",unit:"RSPR",role:"user"}
    ]));
}

if (!localStorage.getItem("invoices")) {
    localStorage.setItem("invoices", JSON.stringify([]));
}
