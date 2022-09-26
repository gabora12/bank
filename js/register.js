
// <<<<<<<<<<<<<<<<<< variable >>>>>>>>>>>>>>>>>>>>>>>//

let btnRegister = document.querySelector(".register-form")
let registerUserInput= document.getElementById("registerUsername")
let registerEmailInput = document.getElementById("registerEmail")
let registerPassInput= document.getElementById("registerPassword")





// <<<<<<<<<<<<<<<<<< event >>>>>>>>>>>>>>>>>>>>>>>//

btnRegister.addEventListener("submit", registerNewUser);



// <<<<<<<<<<<<<<<<<< function >>>>>>>>>>>>>>>>>>>>>>>//


function registerNewUser(e) {
    e.preventDefault()
    if (registerUserInput.value === "" || registerPassInput.value === "" || registerEmailInput.value === "") {
        alert("الرجاء ملء جميع الحقول !! ")
    } else {
     
        localStorage.setItem("username", registerUserInput.value);
        localStorage.setItem("email", registerEmailInput.value);
        localStorage.setItem("password", registerPassInput.value);
        setTimeout(() => {
            window.location = "login.html"
        } , 1000)
    }
}


