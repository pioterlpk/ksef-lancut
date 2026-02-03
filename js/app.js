const s = JSON.parse(localStorage.getItem("session"));
if (!s) location.href = "index.html";

user.innerText = s.login;
unit.innerText = s.unit;

function show(id){
    document.querySelectorAll(".section").forEach(x=>x.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
    if(id==="registry") loadInvoices();
}

function logout(){
    localStorage.removeItem("session");
    location.href="index.html";
}

function calculate(){
    const qty = +p_qty.value;
    const price = +p_price.value;
    const vatP = +p_vat.value;

    const net = qty * price;
    const vat = net * vatP / 100;
    const gross = net + vat;

    netto.innerText = net.toFixed(2);
    vat.innerText = vat.toFixed(2);
    brutto.innerText = gross.toFixed(2);
}

function addInvoice(){
    calculate();
    const inv = {
        number: "FV/" + new Date().getFullYear() + "/" + Date.now(),
        buyer: b_name.value,
        gross: brutto.innerText,
        date: new Date().toLocaleString()
    };

    const list = JSON.parse(localStorage.getItem("invoices"));
    list.push(inv);
    localStorage.setItem("invoices", JSON.stringify(list));
    alert("Faktura zapisana");
}

function loadInvoices(){
    invoiceList.innerHTML="";
    JSON.parse(localStorage.getItem("invoices")).forEach(i=>{
        invoiceList.innerHTML += `
        <tr>
            <td>${i.number}</td>
            <td>${i.buyer}</td>
            <td>${i.gross} PLN</td>
            <td>${i.date}</td>
        </tr>`;
    });
}
