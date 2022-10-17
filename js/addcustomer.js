let AccountID = document.querySelector(".idNumber");
let CustomerName = document.querySelector(".uname");
let Identity = document.querySelector(".identity");
let Address = document.querySelector(".address");
let Tele = document.querySelector(".telephone");
let addmount = document.querySelector(".mount");
let confirmBtn = document.querySelector(".confirmIncrease");
let success = document.querySelector(".credit");

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

AccountID.addEventListener("keyup", (e) => {
  let registerid = e.target.value;
  localStorage.setItem("registerId", JSON.stringify(registerid));
});

confirmBtn.addEventListener("click", addNewCustomer);
addmount.addEventListener("keyup", (e) => {
  let mount = e.target.value;
  if (mount < 999) {
    confirm.style.display = "none";
  } else {
    confirmBtn.style.display = "block";
  }
});

function addNewCustomer(e) {
  let customerDB = JSON.parse(localStorage.getItem("coustomerInformations"));
  let registerId = parseInt(JSON.parse(localStorage.getItem("registerId")));
  let check = customerDB.find((user) => user.id == registerId);
  console.log(check);
  e.preventDefault();
  console.log(customerDB);
  let id = AccountID.value;
  let name = CustomerName.value;
  let idnty = Identity.value;
  let adres = Address.value;
  let tel = Tele.value;
  let mount = addmount.value;

  if (mount < 999) {
    alert("اقل قيمة لفتح حساب هي 2000 جنيه");
  }

  if (id && name && mount && adres) {
    let customerDet = {
      id: id,
      uName: name,
      balance: mount,
      address: adres,
      tele: tel,
      nationalID: idnty,
    };

    if (check) {
      alert("رقم الحساب مخصص لعميل آخر");
    } else {
      let newCustomerDB = [...customerDB, customerDet];
      localStorage.setItem(
        "coustomerInformations",
        JSON.stringify(newCustomerDB)
      );

      setTimeout(() => {
        AccountID.value = "";
        CustomerName.value = "";
        Identity.value = "";
        Address.value = "";
        Tele.value = "";
        addmount.value = "";
        success.style.display = "block";
        success.innerHTML = "تم اضافة عميل جديد";
      }, 1500);

      setTimeout(() => {
        alert(`تمت اضافة حساب جديد باسم "${name}" , برقم الحساب:"${id}"`);
        window.location = "../mybank/customer.html";
      }, 5000);
    }
  } else {
    alert("يجب ملأ جميع الحقول");
  }
}

// address: "الخرطوم"
// balance: 850
// id: 2
// mountUpdate: ""
// nationalID: "115-25654646"
// tele: 922254566
// uName: "صابر العبيد"
