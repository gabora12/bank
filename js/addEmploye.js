// <<<<<<<<<<<<<<<<<< variable >>>>>>>>>>>>>>>>>>>>>>>//

let btnRegister = document.querySelector(".register-form");
let success = document.querySelector(".credit");

// <<<<<<<<<<<<<<<<<< event >>>>>>>>>>>>>>>>>>>>>>>//

btnRegister.addEventListener("submit", registerNewUser);

// <<<<<<<<<<<<<<<<<< function >>>>>>>>>>>>>>>>>>>>>>>//

function registerNewUser(e) {
  e.preventDefault();

  // <<<<<<<<<<<<<<<<<< employe info >>>>>>>>>>>>>>>>>>>>>>>//
  const Ename = btnRegister.name.value;
  const nationalID = btnRegister.nationalID.value;
  const address = btnRegister.address.value;
  const tele = btnRegister.tele.value;
  const username = btnRegister.username.value;
  const password = btnRegister.password.value;

  if (Ename && nationalID && address && tele && username && password) {
    let employeeInfo = JSON.parse(
      localStorage.getItem("employeeInformations") || "[]"
    );

    // <<<<<<<<<<<<<<<<<< unique nationalID >>>>>>>>>>>>>>>>>>>>>>>//
    if (employeeInfo.find((emp) => emp.username == username)) {
      success.style.display = "block";
      success.innerHTML = "اسم المستخدم هذا غير متاح من فضلك استخدم اخر";

      // <<<<<<<<<<<<<<<<<< unique username >>>>>>>>>>>>>>>>>>>>>>>//
    } else if (employeeInfo.find((emp) => emp.nationalID == nationalID)) {
      success.style.display = "block";
      success.innerHTML = "رقم البطاقة الشخصية الي هذا الموظف موجود";
    } else {
      // <<<<<<<<<<<<<<<<<< add employe to  employee Informations database >>>>>>>>>>>>>>>>>>>>>>>//
      employeeInfo.push({
        id: employeeInfo.length + 1,
        name: Ename,
        nationalID,
        address,
        tele,
        username,
        password,
      });

      // <<<<<<<<<<<<<<<<<< save employee Informations database to local storage >>>>>>>>>>>>>>>>>>>>>>>//
      localStorage.setItem(
        "employeeInformations",
        JSON.stringify(employeeInfo)
      );

      setTimeout(() => {
        // <<<<<<<<<<<<<<<<<< clear input values >>>>>>>>>>>>>>>>>>>>>>>//
        btnRegister
          .querySelectorAll("input")
          .forEach((inp) => (inp.value = ""));

        success.style.display = "block";
        success.innerHTML = "تم اضافة موظف جديد";
      }, 1500);
      setTimeout(() => {
        // <<<<<<<<<<<<<<<<<< redirect to employe page >>>>>>>>>>>>>>>>>>>>>>>//
        alert(`تمت اضافة موظف جديد باسم ${Ename}`);
        window.location.href = "employe.html";
      }, 3000);
    }
  } else {
    // <<<<<<<<<<<<<<<<<< invalid input values >>>>>>>>>>>>>>>>>>>>>>>//
    alert("الرجاء ملء جميع الحقول !! ");
  }
}
