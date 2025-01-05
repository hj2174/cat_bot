var light = false;
var punch = false;

var app = document.getElementById("topText");


      var typewriter = new Typewriter(app, {
        loop: true,
      });

      typewriter
        .typeString("냥냥이에게 말을 걸어보자! <br>")
        .pauseFor(1300)
        .deleteAll()
        .typeString("가이드 : '안녕', '냥냥펀치','냥냥펀치 취소', '불꺼줘', '불켜줘', '좋아하는 음식은?'")
        .pauseFor(1300)
        .deleteAll()
        .start();

function check_text() {
    var value = document.getElementById("input_text").value;
    var input_text = document.getElementById("input_text");
    var talk = document.getElementById("bot_text");
    var bg = document.getElementById("bg");
    var bot_img = document.getElementById("bot_img");



    if(value == "alert"){
        alert("경고창이 떴습니다.");
    }
    else if(value=="안녕"){
        bot_img.style.backgroundImage = "url(./cat.png)"
        talk.innerHTML="안냥~";
    }
    else if(value=="냥냥펀치"){
        if(punch==false){
            talk.innerHTML="한번 맞아볼래?";
            bot_img.style.backgroundImage = "url(./cat_name.png)"
            punch = true;
        }else{
            talk.innerHTML="한대 더 원해?";
        }
    }else if(value=="냥냥펀치 취소"){
        if(punch==true){
            talk.innerHTML="역시 무섭냥?";
            bot_img.style.backgroundImage = "url(./cat.png)"
            punch=false;
        }else{
            talk.innerHTML="특별히 봐주겠다냥";
        }
    }
    else if(value=="좋아하는 음식은?"){
        bot_img.style.backgroundImage = "url(./cat.png)"
        talk.innerHTML="연 어 내 놔";
    }
    else if(value=="불꺼줘"){
        if(light==false){
            bot_img.style.backgroundImage = "url(./cat.png)"
            talk.innerHTML="다크 모드 좋아하냥? 내가 안보인다냥!! ";
            bg.style.backgroundColor = "black";
            bg.style.color = "white";
            input_text.style.color = "white";
            input_text.style.backgroundColor = "black";
            light = true;

        }else{
            talk.innerHTML="껐다냥;;";
        }

    }else if(value=="불켜줘"){
        if(light==true){
            bot_img.style.backgroundImage = "url(./cat.png)"
            talk.innerHTML="전기세 책임져라냥";
            bg.style.backgroundColor = "";
            bg.style.color = "";
            input_text.style.color = "";
            input_text.style.backgroundColor = "";
            light=false;
        }else{
            talk.innerHTML="이미 켰다냥 ㅡㅡ";
        }
    }
    else{
        bot_img.style.backgroundImage = "url(./cat.png)"
        talk.innerHTML="아직 배우지 못한 말이다냥^;";
    }
}

document.getElementById("btn").addEventListener('click',check_text);


