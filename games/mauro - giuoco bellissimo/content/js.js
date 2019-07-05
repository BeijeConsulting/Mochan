console.log("questo è un bel gioco davvero")

var playArea = {
    height: document.getElementById("play_area").clientHeight,
    width: document.getElementById("play_area").clientWidth
}

setInterval(function () {clouds()}, 2500);

function clouds() {
    let cloud = document.createElement("img");
    let rndWidth = randomizer(1000);
    cloud.src = "./imgs/cloud.png";
    cloud.width = rndWidth;
    cloud.style.position = "absolute";
    cloud.style.right = "-" + rndWidth + "px";
    cloud.style.top = randomizer(playArea.height) + "px";
    document.getElementById("play_area").appendChild(cloud);
}

function  randomizer(param) {
    let randomized = Math.floor(Math.random() * param);
    return randomized;
}