const session = JSON.parse(localStorage.getItem("session"));
if(!session) location.href="index.html";

const items = document.getElementById("items");

document.getElementById("invNumber").innerText =
"FV/"+new Date().getFullYear()+"/"+Date.now();

addRow();

function addRow(){
    const i = items.children.length + 1;
    items.innerHTML += `
    <tr>
        <td>${i}</td>
        <td><input></td>
        <td><input type="number" value="1" oninput="calc()"></td>
        <td><input value="szt"></td>
        <td><input type="number" value="0" oninput="calc()"></td>
        <td><input type="number" value="23" oninput="calc()"></td>
        <td class="n">0.00</td>
        <td class="v">0.00</td>
        <td class="b">0.00</td>
    </tr>`;
}

function calc(){
    let n=0,v=0,b=0;
    [...items.children].forEach(r=>{
        const qty = +r.children[2].children[0].value;
        const price = +r.children[4].children[0].value;
        const vatp = +r.children[5].children[0].value;
        const net = qty*price;
        const vat = net*vatp/100;
        const gross = net+vat;
        r.querySelector(".n").innerText=net.toFixed(2);
        r.querySelector(".v").innerText=vat.toFixed(2);
        r.querySelector(".b").innerText=gross.toFixed(2);
        n+=net; v+=vat; b+=gross;
    });
    sumNet.innerText=n.toFixed(2);
    sumVat.innerText=v.toFixed(2);
    sumGross.innerText=b.toFixed(2);
}

function saveInvoice(){
    calc();
    const invoices = JSON.parse(localStorage.getItem("invoices"));
    invoices.push({
        number:invNumber.innerText,
        buyer:b_name.value,
        gross:sumGross.innerText,
        date:new Date().toLocaleString()
    });
    localStorage.setItem("invoices", JSON.stringify(invoices));
    alert("Faktura zapisana w KSeF RP");
}
