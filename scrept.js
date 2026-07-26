let p=document.querySelectorAll("p");
let text=document.querySelector("#text");
let input=document.getElementById("in");
let mic=document.getElementById("mic");
let search=document.getElementById("search");
let body=document.body;
let profile=document.querySelector(".profile");
let profilepic=document.getElementById("profilepic");
let fileinput=document.getElementById("fileinput");
let men=document.getElementById("men");
let menubar=document.querySelector(".menubar");
let name=document.getElementById("name");
let email=document.getElementById("email");
let username=localStorage.getItem("name");
let useremail=localStorage.getItem("email");
 name.innerText=username;
 email.innerText=useremail;
let bg="dark";
p.forEach((pl)=> {
    pl.addEventListener("click",(e)=>{
        let s=e.target.innerText;
        if(s=="mode"){
            bg=(prompt("normal:1\ndark :2 \n"));
            if(bg=="1"){
                 body.style.background="linear-gradient(120deg,darkblue,black)";
              
                bg="dark";
            }
            else if(bg=="2"){
                body.style.background="linear-gradient(180deg,rgb(43, 41, 41))";
                 
                 
                bg="white";
            }
            else{
                alert("choouse correct one");
            }
        }
    })
});
const SpeechRecognition = window.SpeechRecognition||window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();
if(!SpeechRecognition){
    alert("speech recongenetion not suppoerting");
}
search.addEventListener("click", () => {
    const question = input.value.trim();

    if(question === ""){
        alert("Please enter a question.");
        return;
    }

    localStorage.setItem("question", question);

    window.location.href = "dashboard.html";
});

recognition.lang="en-US";
recognition.continuous=false;
recognition.interimResults=false;
mic.addEventListener("click",()=>{
    recognition.start();
});
recognition.onresult=(event)=>{
    let text=event.results[0][0].transcript;
    input.value=text;
};
recognition.onerror = (event)=>{
    alert("Error:"+event.error);
}

//profile input

profilepic.addEventListener("click",()=>{
   fileinput.click();
})
fileinput.addEventListener("change",()=>{
   let file=fileinput.files[0];
   if(file){
      let reader=new FileReader();
      reader.onload=function(e){
         profilepic.src=e.target.result;
      };
      reader.readAsDataURL(file);
   }
})
//dash board showing
let count=0;
men.addEventListener("click",hanif);
function hanif(){
  if(count == 0){
    menubar.style.visibility="visible";
    men.style.left="13em";
    count =1;
  }
  else{
    menubar.style.visibility="hidden";
     men.style.left="0px";
    count = 0;
  }
}