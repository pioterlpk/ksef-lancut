const s = JSON.parse(localStorage.getItem("session"));
if(!s) location.href="index.html";

user.innerText = s.login;
unit.innerText = s.unit;
if(s.role!=="admin") usersTab.style.display="none";

function show(id){
    document.querySelectorAll(".section").forEach(x=>x.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
    if(id==="registry") loadInvoices();
    if(id==="users") loadUsers();
}

function logout(){
    localStorage.removeItem("session");
    location.href="index.html";
}

function addInvoice(){
    const net = p_qty.value * p_price.value;
    const vat = net * (p_vat.value/100);
    const gross = net + vat;

    const inv = {
        number: "FV/"+Date.now(),
        seller: s_name.value,
        buyer: b_name.value,
        net, vat, gross,
        author: s.login,
        date: new Date().toLocaleString()
    };

    const list = JSON.parse(localStorage.getItem("invoices"));
    list.push(inv);
    localStorage.setItem("invoices", JSON.stringify(list));
    alert("Faktura wystawiona");
}

function loadInvoices(){
    invoiceList.innerHTML="";
    JSON.parse(localStorage.getItem("invoices")).forEach(i=>{
        const li=document.createElement("li");
        li.innerText=`${i.number} | ${i.buyer} | ${i.gross} PLN`;
        invoiceList.appendChild(li);
    });
}

function loadUsers(){
    userList.innerHTML="";
    JSON.parse(localStorage.getItem("users")).forEach(u=>{
        const li=document.createElement("li");
        li.innerText=`${u.login} – ${u.unit}`;
        userList.appendChild(li);
    });
}
