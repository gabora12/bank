let report = localStorage.getItem("report") ? JSON.parse(localStorage.getItem("report")) : []

// تعريف المتغيرات في صفحة ال HTML

let selectId = document.querySelector('.idAccount');
let customerName = document.querySelector('.uname');
let customerBalance = document.querySelector('.balance');
let increseMount = document.querySelector('.mount');
let afterIncreseMount = document.querySelector('.nowBalance');
let increaseBtn = document.querySelector(".confirmIncrease");
let usersInfo = localStorage.getItem('coustomerInformations') ? JSON.parse(localStorage.getItem("coustomerInformations")) : [];
let creditUpdate= document.querySelector(".credit")




if(localStorage.getItem('username') == 0){
    setTimeout(()=>{
        alert("يجب علي تسجيل الدخول أولاً")
        window.location= "../index.html"
    }, 1000)
}

// تعريف دوال الازرار وجلب البيانات
function SelectAcount() {
    let userSelected = usersInfo.map(item => {
        return `
        <option  hidden value="0">رقم الحساب</option>
        <option value=${item.id}>${item.id}</option>`
    })
    selectId.innerHTML = userSelected;
    

   
}

SelectAcount(usersInfo);

// >>>>>>>>>>>>>>>>>> // 

increseMount.addEventListener('keyup', Increse)

function Increse(e) {
 
    MountNeed = e.target.value; 
    increaseBtn.style.display = "block"
    localStorage.setItem("Mount" , JSON.stringify(MountNeed))
}


// >>>>>>>>>>>>>>>>>> // 

selectId.addEventListener('change', getIdValue)

function getIdValue(e) {
    let idSelected = e.target.value; 
    localStorage.setItem("id" , JSON.stringify(idSelected))
    let id = localStorage.getItem("id") ? JSON.parse(localStorage.getItem("id")) : [];
    e.preventDefault()
    let Mount = localStorage.getItem("Mount") ? JSON.parse(localStorage.getItem("Mount")) : [] ;
    // console.log(Mount , 546546546);
    let userSelect = usersInfo.find(user => user.id == id )
    localStorage.setItem("user" , JSON.stringify(userSelect))
     
    console.log(userSelect.balance);
    let existMount = userSelect.balance;
    localStorage.setItem("existing" , JSON.stringify(existMount))
    let existing = localStorage.getItem("existing")? JSON.parse(localStorage.getItem("existing")):[]

    console.log(userSelect);
    customerName.value = userSelect.uName
    customerBalance.value = userSelect.balance;
    increseMount.value = Mount;
    let mountInt = parseInt(Mount)
    
    let sumition = [existing , mountInt]
    let z = sumition.reduce((a, b) => a + b)
    
    localStorage.setItem("lastMount", JSON.stringify(z))

}
// >>>>>>>>>>>>>>>>>> //


increaseBtn.addEventListener("click" , ConfirmIncrease)


function ConfirmIncrease(e) {
    e.preventDefault()
    
    let id = localStorage.getItem("id") ? JSON.parse(localStorage.getItem("id")) : [];
    let user = usersInfo.find(item => item.id == id)
    let mount = parseInt(localStorage.getItem("Mount") ? JSON.parse(localStorage.getItem("Mount")) : []);
    let balancebefor = user.balance
    let updateMount = user.balance + mount
    console.log(mount); 
    console.log(updateMount);
    user.balance = updateMount; 
    console.log(user.balance, user);
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + '--'
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    let repo = {
        id: user.id,
        uName: user.uName,
        process: "ايداع نقدي",
        mount: mount,
        balance: balancebefor,
        balanceAfterProccess: updateMount,
        time:datetime
    };
    let finalRebort = [ ...report , repo]
    localStorage.setItem("report", JSON.stringify(finalRebort));
    
    localStorage.setItem("coustomerInformations", JSON.stringify(usersInfo));

    customerName.value = ""
    customerBalance.value = ""
    increseMount.value = ""
    increaseBtn.style.display = "none"
    
    setTimeout(() => {
        afterIncreseMount.value = user.balance
        creditUpdate.style.display = "block"; 
        creditUpdate.innerHTML = "تم اضافة المبلغ المحدد لرصيد العميل"
       
    }, 1500)

    setTimeout(() => {
        window.location ="../mybank/deposit.html"
    },5000)
   

}
