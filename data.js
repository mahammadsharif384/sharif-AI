let btn=document.getElementById("btn");
let text=document.getElementById("text");
let email=document.getElementById("email");
let password=document.getElementById("password");

btn.addEventListener("click",ali);
function ali(){
    if(text.value===""){
        text.style.borderColor="red";
        alert("you are not enter name");

    }
    else if(email.value===""){
        text.style.borderColor="red";
        alert("you are not enter email");
    }
    else if(password.value===""){
        text.style.borderColor="red";
        alert("you are not enter password");
    }
    else{
    alert("Form is submited succefuly");
    localStorage.setItem("name",text.value);
    localStorage.setItem("email",email.value);
    setTimeout((btn)=>{
        window.location.href="index.html" ;
       
    },3000);
    }

}