var lineTop = document.getElementById("lineTop");
var lineBot = document.getElementById("lineBot");
var pos = 100;
lineTop.style.left = pos + 'px';
lineBot.style.left = pos + 'px';

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
        lineTop.style.left = pos - 5 + 'px'; // left arrow
        lineBot.style.left = pos - 5 + 'px';
        pos=pos-5;
    }
    else if (e.keyCode == '39' && pos<200) {
        lineTop.style.left = pos + 5 + 'px'; // right arrow
        lineBot.style.left = pos + 5 + 'px';
        pos=pos+5;
    }
}
