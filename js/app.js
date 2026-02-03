const session = JSON.parse(localStorage.getItem("session"));
if(!session) location.href="index.html";

document.getElementById("user").innerText = session.login;
document.getElementById("unit").innerText = session.unit;

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
    const qty = +document.getElementById("p_qty").value;
    const price = +document.getElementById("p_price").value;
    const vatP = +document.getElementById("p_vat").value;

    const net = qty * price;
    const vat = net * vatP/100;
    const gross = net + vat;

    document.getElementById("netto").innerText = net.toFixed(2);
    document.getElementById("vat").innerText = vat.toFixed(2);
    document.getElementById("brutto").innerText = gross.toFixed(2);
}

function addInvoice(){
    calculate();
    const inv = {
        number: "FV/"+new Date().getFullYear()+"/"+Date.now(),
        buyer: document.getElementById("b_name").value,
        gross: document.getElementById("brutto").innerText,
        date: new Date().toLocaleString()
    };

    const invoices = JSON.parse(localStorage.getItem("invoices"));
    invoices.push(inv);
    localStorage.setItem("invoices", JSON.stringify(invoices));
    alert("Faktura zapisana");
}

function loadInvoices(){
    const invoiceList = document.getElementById("invoiceList");
    invoiceList.innerHTML = "";
    JSON.parse(localStorage.getItem("invoices")).forEach(inv=>{
        invoiceList.innerHTML += `<tr>
            <td>${inv.number}</td>
            <td>${inv.buyer}</td>
            <td>${inv.gross} PLN</td>
            <td>${inv.date}</td>
        </tr>`;
    });
}
