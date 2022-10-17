let logged = document.getElementById("userLogged");
let user = document.getElementById("userNameLoged");
let unlogged = document.getElementById("userUnlogged");
let out = document.getElementById("signOut");
const navbar = document.querySelector(".navbar ul");
const navbarHome = document.querySelector(".navbar.home ul");

// <<<<<<<<<<<<<<<<<< Authentication Admin pages >>>>>>>>>>>>>>>>>>>>>>>//
if (
  location.pathname == "/mybank/addEmploye.html" ||
  (location.pathname == "/mybank/employe.html" &&
    localStorage.getItem("username") !== "admin123" &&
    localStorage.getItem("password") !== "admin123")
) {
  alert("ليس لديك الصلاحية للدخول الي هذه الصفحة");
  window.location = "../index.html";
}

// <<<<<<<<<<<<<<<<<< add admin pages after loged >>>>>>>>>>>>>>>>>>>>>>>//
if (
  localStorage.getItem("username") === "admin123" &&
  localStorage.getItem("password") === "admin123"
) {
  navbar.insertAdjacentHTML(
    "beforeend",
    `<li><a href=".${
      navbarHome ? "/mybank/" : "/"
    }employe.html">الموظفين</a></li>`
  );
}

// <<<<<<<<<<<<<<<<<< Authentication login >>>>>>>>>>>>>>>>>>>>>>>//
if (localStorage.getItem("username") && localStorage.getItem("username") != 0) {
  unlogged.style.display = "none";
  logged.style.display = "block";
  user.innerHTML = localStorage.getItem("username");
} else {
  unlogged.style.display = "block";
  logged.style.display = "none";
}

// <<<<<<<<<<<<<<<<<< redirect to login page >>>>>>>>>>>>>>>>>>>>>>>//
unlogged.addEventListener("click", () => {
  setTimeout(() => {
    window.location = "../mybank/login.html";
  }, 1000);
});

// <<<<<<<<<<<<<<<<<< logout >>>>>>>>>>>>>>>>>>>>>>>//
out.addEventListener("click", () => {
  setTimeout(() => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location = "../index.html";
  }, 1000);
});
