let coustomersInfo = JSON.parse(localStorage.getItem('coustomerInformations')) || localStorage.setItem('coustomerInformations' ,JSON.stringify(UserDB));
const CustomerDom = document.querySelector(".customer");



if(localStorage.getItem('username') == 0){
    setTimeout(()=>{
        alert("يجب علي تسجيل الدخول أولاً")
        window.location= "../index.html"
    }, 1000)
}


function DrowCustomerUI (coustomersInfo = [] ){
    let customerUI = coustomersInfo.map(customer => {

        return`
        <div>
        <span>${customer.id}</span>
        <span>${customer.uName}</span>
        <span  >${customer.nationalID}</span>
        <span>${customer.address}</span>
        <span style="text-align: right ; direction: ltr;" >${customer.tele}</span>
        <span> <b>${customer.balance}</b> SDG</span>
        <span onClick="deleteAction(${customer.id})" class="delete" style="text-align: center;">x</span>
        </div> 
        `
        
    })
    CustomerDom.innerHTML = customerUI.join("") ;
}

DrowCustomerUI(coustomersInfo);







function deleteAction(id) {
    let confirmAction = confirm("هل انت متأكد من أنك تود حذف العميل؟")
    
    if (confirmAction) {
        console.log(id);
        // let customer = coustomersInfo.filter(item => item.id !== id)
        customer = coustomersInfo.find(user => user.id == id)
        userLocation = coustomersInfo.indexOf(customer);
        console.log(userLocation);
        coustomersInfo.splice(userLocation , 1)
        localStorage.setItem("coustomerInformations" , JSON.stringify(coustomersInfo))
        setTimeout(() => {
            DrowCustomerUI(coustomersInfo)
            alert("تم الحذف بنجاح")
        },1500)
       
    } else {

        alert("تم الغاء الحذف")
    }
}