//랜덤 번호 지정 t
//유저가 번호를 입력한다 and go 버튼 클릭 t
//만약 랜덤 번호를 맞추면 맞췄다고 알려주기t 
//랜덤번호<유저번호=downt
//랜덤번호>유저번호=upt
//리셋을 누르면 초기화t
//기회는 5번 t
//범위 밖에 숫자를 입력하면 알려주고 기회는 안날린다.t
//숫자 중복이 나오면 알려주고 기회를 안깎는다. t

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
        Result.textContent="1과 100 사이 숫자를 입력하시오"
        return;
    }

    if(history.includes(userVal)){
        Result.textContent="이미 입력한 숫자 입니다. 다른 숫자를 입력하세여";
        return;
    }

    chance -- ;
    chanceArea.textContent=`남은 기회:${chance}번`;
    console.log ('chance',chance);
    if(userVal<cnum){
            result.textContent='UP!';
       
    }else if(userVal>cnum){
            result.textContent='DOWN!';
        
    }else{
            result.textContent='Correct';
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

    result.textContent='결과값이 나옴'
}



pickrannum();
