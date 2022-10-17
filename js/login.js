// <<<<<<<<<<<<<<<<<< variable >>>>>>>>>>>>>>>>>>>>>>>//

let btnLogin = document.querySelector(".login-form");
let loginUserInput = document.getElementById("loginUsername");
let loginPassInput = document.getElementById("loginPassword");
let employeeInfo = JSON.parse(
  localStorage.getItem("employeeInformations") || "[]"
);

// <<<<<<<<<<<<<<<<<< event >>>>>>>>>>>>>>>>>>>>>>>//
btnLogin.addEventListener("submit", loginUser);

// <<<<<<<<<<<<<<<<<< function >>>>>>>>>>>>>>>>>>>>>>>//

function loginUser(e) {
  e.preventDefault();

  if (loginUserInput.value === "" || loginPassInput.value === "") {
    alert("بعض الحقول فارغة !! ");
  } else {
    if (
      loginUserInput.value === "admin123" &&
      loginPassInput.value === "admin123"
    ) {
      localStorage.setItem("username", "admin123");
      localStorage.setItem("password", "admin123");
      setTimeout(() => {
        window.location = "../index.html";
      }, 1000);
    } else {
      const loginInfo = employeeInfo
        .filter((emp) => emp.username === loginUserInput.value)
        .filter((emp) => emp.password === loginPassInput.value);

      if (loginInfo.length !== 0) {
        localStorage.setItem("username", loginInfo[0].username);
        localStorage.setItem("password", loginInfo[0].password);
        setTimeout(() => {
          window.location = "../index.html";
        }, 1000);
      } else {
        alert("اسم الموظف أو كلمة المرور خاطئة !!");
      }
    }
  }
}
