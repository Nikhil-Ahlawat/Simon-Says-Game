let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["yellow","red","purple","green"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false){
    console.log("game started")
    started = true;
    levelUp();
    };
});
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`
    let ranidx = Math.floor(Math.random()*3);
let randcolor = btns[ranidx];
let randbtn = document.querySelector(`.${randcolor}`);
gameSeq.push(randcolor);
console.log(gameSeq);

gameflash(randbtn);
}


function gameflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    };
function checkans(idx){
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
            levelUp();
        }
   }else{
    h2.innerHTML = `Game Over! Your score was <b>${level} <b> <br> Press any key to start.`
    document.querySelector("body").style.backgroundColor = "red"
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white"
    },150);
    reset();
    console.log(`${level}`)
};
};
    function btnpress(){
        console.log(this);
        let btn = this;
        userFlash(btn);

        usercolor = btn.getAttribute("id");
        userSeq.push(usercolor);
       checkans(userSeq.length-1);
    }
    let allbtns = document.querySelectorAll(".btn");
    for(btn of allbtns){
        btn.addEventListener("click",btnpress);
    }
function reset(){
started = false;
gameSeq =[];
userSeq=[];
level =0;
};
