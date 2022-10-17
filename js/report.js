let userInfo = localStorage.getItem("report")
  ? JSON.parse(localStorage.getItem("report"))
  : [];

let input = document.querySelector(".findId");
let confirmBtn = document.querySelector(".confirmId");
let rebortDom = document.querySelector(".report");
let emptty = document.querySelector(".noProccess");
let print = document.querySelector(".print");
let nav = document.querySelector("header");

// <<<<<<<<<<<<<<<<<< Authentication login >>>>>>>>>>>>>>>>>>>>>>>//
if (
  !localStorage.getItem("username") ||
  localStorage.getItem("username") == 0
) {
  setTimeout(() => {
    alert("يجب علي تسجيل الدخول أولاً");
    window.location = "../index.html";
  }, 1000);
}

print.addEventListener("click", () => {
  print.style.display = "none";
  input.style.opacity = 0;
  emptty.style = { marginBottom: "2rem" };
  nav.style.display = "none";
  setTimeout(() => {
    window.print();
    window.location = "../mybank/report.html";
  }, 1500);
});

input.addEventListener("keyup", insertId);
confirmBtn.addEventListener("click", confirm);

function insertId(e) {
  id = e.target.value;
  confirmBtn.style.display = "block";
  localStorage.setItem("id", JSON.stringify(id));
}

function confirm(e) {
  e.preventDefault();
  let id = localStorage.getItem("id")
    ? JSON.parse(localStorage.getItem("id"))
    : [];
  let process = userInfo.filter((i) => i.id == id);

  let ReprtUI = process.map((customer) => {
    return `
        <div>
        <span  >${customer.process}</span>
        <span>${customer.mount}</span>
        <span> <b>${customer.balance}</b> SDG</span>
        <span> <b>${customer.balanceAfterProccess}</b> SDG</span>
        <span> ${customer.time}</span>
        </div> 
        `;
  });
  if (ReprtUI == "") {
    print.style.display = "none";
    emptty.style.display = "block";
    emptty.innerHTML = `<h1>لا توجد عمليات لهذا العميل</h1>`;
    rebortDom.innerHTML = "";
    confirmBtn.style.display = "none";
    setTimeout(() => {
      emptty.style.display = "none";
    }, 2000);
  } else {
    let info = process.at(-1);
    emptty.style.display = "block";
    setTimeout(() => {
      emptty.innerHTML = `<div>
            <span>اسم العميل <b> : ${info.uName}</b></span>
            &nbsp;
            &nbsp;
            <span style="float: left;">رقم الحساب <b> : ${info.id}</b></span>
            </div>`;
      rebortDom.innerHTML = ReprtUI.join("");
      confirmBtn.style.display = "none";
      print.style.display = "block";
    }, 2000);
  }
  // emptty.style.display = "block";
  // emptty.innerHTML = `<h1>لا يوجد عمليات لهذا العميل</h1> <h1>sadadada</h1>`
}
