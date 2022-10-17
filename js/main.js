// <<<<<<<<<<<<<<<<<< variable >>>>>>>>>>>>>>>>>>>>>>>//
let employeeInfo = JSON.parse(
  localStorage.getItem("employeeInformations") || "[]"
);
const employeeDom = document.querySelector(".employee");

// <<<<<<<<<<<<<<<<<< condations >>>>>>>>>>>>>>>>>>>>>>>//

// <<<<<<<<<<<<<<<<<< function >>>>>>>>>>>>>>>>>>>>>>>//
function DrowCustomerUI(employeeInfo = []) {
  let employeeUI = employeeInfo.map((employee) => {
    return `
      <div>
      <span>${employee.name}</span>
      <span>${employee.nationalID}</span>
      <span>${employee.address}</span>
      <span style="text-align: right ; direction: ltr;" >${employee.tele}</span>
      <span>${employee.username}</span>
      <span>
        <input type="checkbox" onclick="showPassword('${employee.password}', '${employee.id}')">
        <span class="pass${employee.id}" id="hide" style="letter-spacing: 2px; font-weight: bold;">*********</span>
      </span>
      <span onClick="deleteActions(${employee.id})" class="delete">x</span>
      </div> 
      `;
  });
  if (employeeDom) {
    employeeDom.innerHTML = employeeUI.join("");
  }
}

DrowCustomerUI(employeeInfo);

// <<<<<<<<<<<<<<<<<< delete employe >>>>>>>>>>>>>>>>>>>>>>>//
function deleteActions(id) {
  let confirmAction = confirm("هل انت متأكد من أنك تود حذف الموظف");
  if (confirmAction) {
    const employeeDB = employeeInfo.filter((emp) => emp.id !== id);
    localStorage.setItem("employeeInformations", JSON.stringify(employeeDB));

    setTimeout(() => {
      alert("تم الحذف بنجاح");
      location.reload();
    }, 1000);
  } else {
    alert("تم الغاء الحذف");
  }
}

// <<<<<<<<<<<<<<<<<< show employe password >>>>>>>>>>>>>>>>>>>>>>>//
function showPassword(pass, id) {
  const hidePassword = document.querySelector(`.pass${id}`);

  if (hidePassword.id == "hide") {
    hidePassword.style.fontWeight = "normal";
    hidePassword.textContent = pass;
    hidePassword.id = "show";
  } else {
    hidePassword.style.fontWeight = "bold";
    hidePassword.textContent = "*********";
    hidePassword.id = "hide";
  }
}
