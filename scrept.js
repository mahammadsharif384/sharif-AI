let p=document.querySelectorAll("p");
let text=document.querySelector("#text");
let input=document.getElementById("in");
let mic=document.getElementById("mic");
let search=document.getElementById("search");
let body=document.body;
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

