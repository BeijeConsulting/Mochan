var lineTop = document.getElementById("lineTop");
var lineBot = document.getElementById("lineBot");
var ball = document.getElementById("ball");
var box = document.getElementById("box-game");
var pos = 100;
var posB = 200;
var vertical = 0;
var posBX = 115;
lineTop.style.left = pos + 'px';
lineBot.style.left = pos + 'px';
ball.style.top = posB + 'px';
ball.style.left = posBX + 'px';

document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        //lineTop.style.top = parseInt(lineTop.style.top) - 5 + 'px'; // up arrow
    }
    else if (e.keyCode == '40') {
        //lineTop.style.top = parseInt(lineTop.style.top) + 5 + 'px'; // down arrow
    }
    else if (e.keyCode == '37' && pos>0) {
        pos=pos-10;
        lineTop.style.left = pos + 'px'; // left arrow
        lineBot.style.left = pos + 'px';
        
    }
    else if (e.keyCode == '39' && pos<200) {
        pos=pos+10;
        lineTop.style.left = pos + 'px'; // right arrow
        lineBot.style.left = pos + 'px';
        
    }
}
var rand= 0;
var animation = setInterval(draw,15);
function draw(){
    ball.style.top = posB + 'px';
    ball.style.left = posBX + 'px';
    posBX = posBX + rand;
    console.log(posBX);
    if(posBX<1||posBX>230){
        rand=rand*(-1);
    }
    if(vertical==0){
        posB = posB-3;
        if (isCollapsed(ball, lineTop)){
            vertical=1;
            rand= Math.floor(Math.random() * 5) -2;
        }
        else {
            if(posB<-30){
                clearInterval(animation);
                document.getElementById("restart").style.display="block"; 
            }
            //ball.style.display="none";
            //clearInterval(animation);
        }
    }else{
        posB = posB+3;
        if (isCollapsed(ball, lineBot)){
            vertical=0;
            rand= Math.floor(Math.random() * 5) + -2;
        }
        else{
            if(posB>430){
                clearInterval(animation);
                document.getElementById("restart").style.display="block";  
            }
            //ball.style.display="none";
            //clearInterval(animation);
        }
    }
}

function isCollapsed(dragMe, rect){
    var object_1 = dragMe.getBoundingClientRect();
    var object_2 = rect.getBoundingClientRect();
    
    if (object_1.left < object_2.left + object_2.width  && object_1.left + object_1.width  > object_2.left &&
          object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {
      return true;
    }
    else{
      return false;
    }
}
function restart(){
    document.getElementById("restart").style.display="none";  
    posB=200;
    posBX=115;
    pos = 100;
    lineTop.style.left = pos + 'px';
    lineBot.style.left = pos + 'px';
    ball.style.top = posB + 'px';
    ball.style.left = posBX + 'px';
    animation = setInterval(draw,15);
    rand= 0;
}
function changeDir(){

}