const tickerData = ["FREE SHIPPING ABOVE ₹999","SS26 POLO DROP IS LIVE","COLLAR UP. STANDARDS HIGHER.","USE CODE ROW10 FOR 10% OFF","rex$row.in","PREMIUM PIQUÉ CRAFTED FOR INDIA","THE POLO OR NOTHING"];
const tel = document.getElementById("tickerEl");
const full = [...tickerData,...tickerData,...tickerData,...tickerData];
tel.innerHTML = full.map(t => `<span class="tick-item">— ${t}</span>`).join("");

// Polo SVG icon function — collar silhouette drawn inline
function poloSVG(color) {
  return `<svg width="72" height="80" viewBox="0 0 72 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Body -->
    <path d="M12 30 L6 22 L20 16 L24 26 L36 20 L48 26 L52 16 L66 22 L60 30 L58 72 L14 72 Z" fill="${color}"/>
    <!-- Collar left -->
    <path d="M24 26 L28 14 L36 20 Z" fill="#1a1a1a"/>
    <!-- Collar right -->
    <path d="M48 26 L44 14 L36 20 Z" fill="#1a1a1a"/>
    <!-- Placket -->
    <rect x="33" y="20" width="6" height="20" rx="1" fill="#1a1a1a" opacity="0.4"/>
    <!-- Button 1 -->
    <circle cx="36" cy="26" r="1.5" fill="#1a1a1a" opacity="0.6"/>
    <!-- Button 2 -->
    <circle cx="36" cy="32" r="1.5" fill="#1a1a1a" opacity="0.6"/>
  </svg>`;
}

const poloColours = ["#2a2a2a","#1c2b3a","#1a2e1a","#3a2a1a","#2a1a2e","#1e3030","#3a1a1a","#2e2e1a"];
const poloColourNames = ["Noir","Midnight Navy","Forest","Tobacco","Plum","Slate Teal","Burgundy","Khaki"];

const products = [
  {name:"Sovereign Polo",sub:"Classic Fit · Piqué Cotton",price:"₹ 1,199",colIdx:0,badge:"NEW DROP"},
  {name:"Row Slim Polo",sub:"Slim Fit · Stretch Piqué",price:"₹ 1,299",colIdx:1,badge:"BESTSELLER"},
  {name:"Midnight Navy Polo",sub:"Classic Fit · Premium Piqué",price:"₹ 1,199",colIdx:1,badge:null},
  {name:"Forest Green Polo",sub:"Relaxed Fit · Piqué Cotton",price:"₹ 1,199",colIdx:2,badge:"LIMITED"},
  {name:"Tobacco Edition Polo",sub:"Classic Fit · Piqué Cotton",price:"₹ 1,299",colIdx:3,badge:"NEW DROP"},
  {name:"Plum Luxe Polo",sub:"Slim Fit · Premium Piqué",price:"₹ 1,399",colIdx:4,badge:"LIMITED"},
  {name:"Teal Structured Polo",sub:"Classic Fit · Heavy Piqué",price:"₹ 1,299",colIdx:5,badge:null},
  {name:"Noir Oversized Polo",sub:"Oversized Fit · Piqué Cotton",price:"₹ 1,499",colIdx:0,badge:"SOLD OUT SOON"},
];

const grid = document.getElementById("prodGrid");
products.forEach(p => {
  const d = document.createElement("div");
  d.className = "prod-card";
  const isSoldOut = p.badge === "SOLD OUT SOON";
  d.innerHTML = `
    <div class="prod-visual">${poloSVG(poloColours[p.colIdx])}</div>
    ${p.badge ? `<div class="prod-badge">${p.badge}</div>` : ""}
    <button class="prod-action" onclick="addCart('${p.name}','${p.price}')">${isSoldOut ? "NOTIFY ME" : "ADD TO BAG"}</button>
    <div class="prod-info">
      <div class="prod-name">${p.name}</div>
      <div class="prod-sub">${p.sub}</div>
      <div class="prod-price">${p.price}</div>
    </div>
  `;
  grid.appendChild(d);
});

document.getElementById("bagIcon").addEventListener("click", () => showToast("YOUR BAG IS EMPTY — SHOP THE POLO DROP"));

function addCart(n, p) { showToast("ADDED TO BAG: " + n + "  " + p); }

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
}

function doSubscribe() {
  const v = document.getElementById("emailEl").value;
  if(v && v.includes("@")) {
    showToast("WELCOME TO THE ROW — CHECK YOUR INBOX");
    document.getElementById("emailEl").value = "";
  } else {
    showToast("PLEASE ENTER A VALID EMAIL ADDRESS");
  }
}