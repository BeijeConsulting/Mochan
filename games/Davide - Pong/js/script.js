var lineTop = document.getElementById("lineTop");
var lineBot = document.getElementById("lineBot");
var ball = document.getElementById("ball");
var box = document.getElementById("box-game");
var boxWidth = box.clientWidth;
var pos = (boxWidth - 70) / 2;
var posB = 290;
var posBX = (boxWidth - 20) / 2;
var vertical = 0;
var rand = 0;
var scoreA = 0;
var scoreB = 0;
var animation;
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
    else if (e.keyCode == '37' && pos > 0) {
        pos = pos - 10;
        lineTop.style.left = pos + 'px'; // left arrow
        lineBot.style.left = pos + 'px';

    }
    else if (e.keyCode == '39' && pos < boxWidth - 70) {
        pos = pos + 10;
        lineTop.style.left = pos + 'px'; // right arrow
        lineBot.style.left = pos + 'px';

    }
}
function draw() {
    ball.style.top = posB + 'px';
    ball.style.left = posBX + 'px';
    if (posBX < 1 || posBX > (boxWidth - 20)) {
        rand = rand * (-1);
    }
    if (vertical == 0) {
        posB = posB - 5;
        if (isCollapsed(ball, lineTop) == 1) {
            vertical = 1;
            if (rand < 0) {
                rand++;
            } else {
                rand--;
            }
            rand = rand * (-1);
        } else if (isCollapsed(ball, lineTop) == 2) {
            vertical = 1;
            rand = -3;
        } else if (isCollapsed(ball, lineTop) == 3) {
            vertical = 1;
            rand = 3;
        }
        else {
            if (posB < -20) {
                clearInterval(animation);
                document.getElementById("overlay").style.display = "block";
                setTimeout(function () { goal() }, 3000);
                scoreB++;
                document.getElementById("scoreB").innerHTML = scoreB;
            }
            //ball.style.display="none";
            //clearInterval(animation);
        }
    } else {
        posB = posB + 5;
        if (isCollapsed(ball, lineBot) == 1) {
            vertical = 0;
            if (rand < 0) {
                rand++;
            } else {
                rand--;
            }
            rand = rand * (-1);
        }
        else if (isCollapsed(ball, lineBot) == 2) {
            vertical = 0;
            rand = -3;
        } else if (isCollapsed(ball, lineBot) == 3) {
            vertical = 0;
            rand = 3;
        }
        else {
            if (posB > 620) {
                clearInterval(animation);
                document.getElementById("overlay").style.display = "block";
                setTimeout(function () { goal() }, 3000);
                scoreA++;
                document.getElementById("scoreA").innerHTML = scoreA;
            }
            //ball.style.display="none";
            //clearInterval(animation);
        }
    }
    posBX = posBX + rand;
}

function isCollapsed(dragMe, rect) {
    var result = 0;
    var object_1 = dragMe.getBoundingClientRect();
    var object_2 = rect.getBoundingClientRect();

    if (object_1.left < object_2.left + object_2.width && object_1.left + object_1.width > object_2.left &&
        object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {
        if (object_2.left - object_1.left > 0) {
            result = 2;
        } else if (object_2.left - object_1.left < -34) {
            result = 3;
        } else {
            result = 1;
        }

    }
    else {
        result = 0;
    }
    return result;
}
var oldX;
function move(e) {
    var x = e.clientX;
    var spostamento = 8;
    if (oldX < x && pos < boxWidth - 70) {
        pos = pos + spostamento;
        lineTop.style.left = pos + 'px'; // right arrow
        lineBot.style.left = pos + 'px';
    } else if (pos > 0) {
        pos = pos - spostamento;
        lineTop.style.left = pos + 'px'; // left arrow
        lineBot.style.left = pos + 'px';
    }
    oldX = x;
}

function restart() {
    document.getElementById("restart").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    posB = 290;
    posBX = (boxWidth - 20) / 2;
    pos = (boxWidth - 70) / 2;
    lineTop.style.left = pos + 'px';
    lineBot.style.left = pos + 'px';
    ball.style.top = posB + 'px';
    ball.style.left = posBX + 'px';
    animation = setInterval(draw, 15);
    rand = 0;
}
function goal() {
    document.getElementById("overlay").style.display = "none";
    posB = 290;
    posBX = (boxWidth - 20) / 2;
    pos = (boxWidth - 70) / 2;
    lineTop.style.left = pos + 'px';
    lineBot.style.left = pos + 'px';
    ball.style.top = posB + 'px';
    ball.style.left = posBX + 'px';
    animation = setInterval(draw, 15);
    rand = 0;
}