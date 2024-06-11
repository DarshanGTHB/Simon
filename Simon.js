let start = false;
let gameSeq=[];
// let userSeq=[];
let lev=0;
let box=["zero","one","two","three"]
let clickCountInd=0;

let GameOver = document.querySelector(".para");


function levUp(){
    if(start){
        lev++;
        //console.log(gameSeq);
    clickCountInd=0;
    // console.log("Level up : ",lev,clickCountInd);
    let randomInd = Math.floor(Math.random()*4);
    let randomBox = box[randomInd];
    let curBox = document.querySelector(`#${randomBox}`);
    // console.log(curBox,randomBox);
    curBox.classList.add("blink");
    setTimeout(()=>{
        curBox.classList.remove("blink");
    },250);
    gameSeq.push(randomBox);
    // console.log(gameSeq);
    }
}

let allBtns = document.querySelector(".maindiv");
allBtns.addEventListener("click",function(event){
    // console.log(event.target.getAttribute("id"));
    if(start){
        let val=event.target.getAttribute("id");
    if(val){
        // userSeq.push(val);
        if(val != gameSeq[clickCountInd]){
            // console.log("Game OVER");
            GameOver.innerHTML="<b style='color:red;'>Game Over</b> "  + "Click Start To Play Again.."+"<br>You've reached at level : "+`${lev}`;
            startBtn.classList.remove("dis-none");
            gameSeq=[]
            lev=0;
            start=false;
        }else{
            clickCountInd++;
        }
        // console.log("clickiind = ",clickCountInd);
        if(clickCountInd==lev){
            // console.log("Lev , ClickCount" , lev , clickCountInd);
            clickCountInd=0;
            levUp();
        }
    }
    // console.log(userSeq)
    }
})




let startBtn = document.querySelector(".start");
startBtn.addEventListener("click",function(){
    if(!start){
        start=true;
        // startBtn.remove();
        GameOver.innerHTML="";
        startBtn.classList.add("dis-none");
        levUp();
    }
})






let btns = document.querySelectorAll(".blocks");
// console.log(btns);
for(btn of btns){
    btn.addEventListener("click",function(){

    })
}


