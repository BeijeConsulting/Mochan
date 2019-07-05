var playAreaElement = document.getElementById("play_area");

var playArea = {
    height: playAreaElement.clientHeight,
    width: playAreaElement.clientWidth
}

var player = document.getElementById("player");

console.log(playArea.width + " " + playArea.height)

setInterval(function () {clouds()}, 1000);  //spawn clouds in the background

function clouds() {
    let cloud = document.createElement("img");
    let rndWidth = randomizer(1000); //different dimensions for clouds
    cloud.classList.add("cloud");
    cloud.src = "./imgs/cloud.png";
    cloud.width = rndWidth;
    cloud.style.right = "-" + rndWidth + "px"; //starts out of the screen
    cloud.style.top = (randomizer(playArea.height) - 200) + "px"; // -200 is bc it tends to go too low
    playAreaElement.appendChild(cloud); //add the cloud to the DOM
    setTimeout(function () {playAreaElement.removeChild(playAreaElement.childNodes[0])}, 15000) //removes the first cloud from the DOM after it hs gone through
}

function  randomizer(param) {
    let randomized = Math.floor(Math.random() * param);
    return randomized;
}

// PLAYER MOVES
var player = document.getElementById("player");


document.onkeydown = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    console.log(charCode);
    playerAction(charCode);
};

function playerAction(keypressed) {
    var left = player.offsetLeft;
    var top = player.offsetTop;

    switch (keypressed) {
        case 87:
            if (top > 90) { top -= 10; document.getElementById("player").style.top = top + "px" } break
        case 65:
            if (left > 80) { left -= 10; document.getElementById("player").style.left = left + "px" } break
        case 83:
            if (top < playArea.height) { top += 10; document.getElementById("player").style.top = top + "px" } break
        case 68:
            if (left < playArea.width - 100) { left += 10; document.getElementById("player").style.left = left + "px" } break
        case 32:
            { shoot() }
    }

    console.log(left + " " + top);
}


function shoot() {
    let projectile = document.createElement("div");
    projectile.classList.add("projectile");
    projectile.style.top = player.style.top;
    projectile.style.left = player.style.left;
    projectile.id = "projectile";
    playAreaElement.appendChild(projectile);
    setTimeout(function () {
        document.getElementById("projectile").remove();
    }, 900)
}