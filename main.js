

let cnum=0
let platbutton=document.getElementById("playbutton");//document--웹페이지 그 자체 id로 선택
let userInp=document.getElementById('userinp');
let Result=document.getElementById('result');
let resetbutton=document.getElementById('rbutton');
let chance=5;
let gameover=false;
let chanceArea=document.getElementById('chance-area');
let history=[]

platbutton.addEventListener('click',play);
resetbutton.addEventListener('click',reset);
userInp.addEventListener("focus",function(){
    userInp.value='';
});


function pickrannum(){
    cnum=Math.floor(Math.random()*100)+1;
    console.log('정답',cnum);
}
function play(){
    let userVal=userInp.value;

    if(userVal<1 || userVal>100){
        Result.textContent="1과 100 사이 숫자를 입력하거라";
        return;
    }

    if(history.includes(userVal)){
        Result.textContent="이미 입력한 숫자잖아! 다시!";
        return;
    }

    chance -- ;
    chanceArea.textContent=`남은 기회:${chance}번`;
    console.log ('chance',chance);
    if(userVal<cnum){
            result.textContent='아니야 올려!';
       
    }else if(userVal>cnum){
            result.textContent='아니야 내려!';
        
    }else{
            result.textContent='쳇...맞춰버렸군...ㅌ..통과!!';
         gameover=true;
    }

    history.push(userVal)
    console.log(history)



    if(chance<1){
         gameover=true
    }

    if(gameover==true){
        platbutton.disabled=true;
    }
}


function reset(){
    userInp.value='';
    pickrannum();   

    result.textContent='1~100까지 수 중에서 내가 가장 좋아하는 수는 뭘까?'
}



pickrannum();
