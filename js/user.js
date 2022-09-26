let logged = document.getElementById("userLogged")
let user = document.getElementById("userNameLoged")
let unlogged = document.getElementById("userUnlogged")
let out = document.getElementById("signOut") ; 


let empty = 0

employee = localStorage.getItem('username') || localStorage.setItem("username" , JSON.stringify(empty))




if (employee != empty) {
        
        unlogged.remove() ;
        logged.style.display = 'block';
        user.innerHTML = localStorage.getItem("username")
        
    }


    unlogged.addEventListener("click" , ()=>{
        setTimeout(()=>{
            window.location='../mybank/login.html'
        },1000)
    })

out.addEventListener("click" ,  ()=>{
    setTimeout(()=>{
        localStorage.removeItem("username")
        localStorage.removeItem("password")
        localStorage.removeItem("email")
        user.style.display="none";
        unlogged.style.display="block"
        setTimeout(()=>{
            window.location = "../index.html"
        })
    },1000)

})