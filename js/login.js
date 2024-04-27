//click submit btn
document.getElementById("btn-submit").addEventListener("click",function(){
    //take email value
    const email = document.getElementById("email");
    const useremail = email.value;

    //take password
    const password = document.getElementById("password");
    const userpass = password.value;

    //check user
    if(useremail=="ysufali9999@gmail.com"&&userpass=="1234"){
        window.location.href = "bank.html";

    }
    else{
        alert("wrong email or password");
    }
})