let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;
        levelup();
    }
})


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let ranIdx = Math.floor(Math.random() * btns.length);

    let randColor = btns[ranIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);

    gameFlash(randBtn);
}


function checkAns(idx){
 
   if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelup,1000);
    }
    console.log("Same value");
   }else{
    h2.innerHTML = `Game Over!<b>${level}<b/><br>Press any key to start`;

    document.querySelector("body").style.color="red";
    setTimeout(() => {
        document.querySelector("body").style.color="white";
    }, 250);
    reset();
   }
}
function btnPress(){
  let btn=this;
  userFlash(btn);
  userColor=btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}