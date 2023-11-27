function register() {
    const email=document.getElementById("email").value
    const Username=document.getElementById("Username").value
    const password=document.getElementById("password").value
if(email==""||Username==""||password==""){
    alert("Insufficient Data")
}
else{

if(email.endsWith("@gmail.com")){




    if(Username in localStorage){
alert("user exist")

    }
    else{

    
    const details={
         user_email:email,
         Username:Username,
         password:password

    }
    const savedetails=JSON.stringify(details)
    window.localStorage.setItem(Username,savedetails)
    window.location="/login.html"
} }
else{
    alert("invalid email")
}
}

}
function login() {
   
    const user=document.getElementById("user").value

    const pass=document.getElementById("user1").value
    if(user==""||pass==""){
        alert("Insufficient Data")
    }
    else{
    if(user in localStorage){
     const details=   window.localStorage.getItem(user)
     const new_detail=JSON.parse(details)
    
     if(pass==new_detail.password){
        window.location="/zmain.html"
     }
     else{
        alert("check password")
     }
    }
    else{
        alert("check username")
    }}
    
}

function register1() {
    window.location="/register.html"
}