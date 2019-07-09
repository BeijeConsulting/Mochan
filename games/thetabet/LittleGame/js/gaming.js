var up = 38;
var down = 40;
var left = 37;
var right = 39;
var counter = 0


document.onkeydown = targetPress;

function targetPress(key) {
  key = key || window.event;
  let keycode = key.keyCode;
  console.log(keycode);
  movePg(keycode)

};

function movePg(keyCode) {
  let pos;
  posup = document.getElementById('pg').style.top
  posleft = document.getElementById('pg').style.left

 /* let possciaup = posup;
  let poscialeft = posleft;
  console.log(possciaup)
  if (possciaup == "") {possciaup = "50px"};
  if (poscialeft == "") {poscialeft = "50px"};
  console.log(possciaup)
  let scia = document.createElement("div");
  scia.setAttribute("id", "scia")
  scia.style.position = "fixed";
  scia.style.top = possciaup;
  scia.style.left = poscialeft;
  scia.style.width = "100px";
  scia.style.height = "100px";
  scia.style.backgroundColor = getRandomColor();
  scia.style.zIndex = "-100"
  document.getElementById('bodybody').appendChild(scia)*/
  // let img = document.createElement("img");
  // img.setAttribute("src", "bubu.jpg");
  // img.setAttribute("width", "auto");
  // img.setAttribute("height", "100px");
  // img.style.position = "fixed";
  // img.style.top = possciaup;
  // img.style.left = poscialeft;
  // document.getElementById("bodybody").appendChild(img)


  if (posup == "") {
    posup = 50
  } else if (posup != "") {
    posup = posup.split('p')[0]

  }
  console.log(posup)

  if (posleft == "") {
    posleft = 50
  } else if (posleft != "") {
    posleft = posleft.split('p')[0]
  }

  posup = parseInt(posup);
  posleft = parseInt(posleft);



  if (keyCode == up) {
    posup = posup - 10
    if (posup < -100) {
      let res = window.innerHeight
      posup = res
    }
  } else if (keyCode == down) {
    posup = posup + 10
    let res = window.innerHeight
    if (posup > res) {
      posup = -100
    }
  } else if (keyCode == left) {
    posleft = posleft - 10
    if (posleft < -100) {
      let res = window.innerWidth
      posleft = res
    }
  } else if (keyCode == right) {
    posleft = posleft + 10
    let res = window.innerWidth
    if (posleft > res) {
      posleft = -100
    }
  } else {
    posup = posup;
    posleft = posleft;
  }
  let topvar = posup + "px";
  let leftvar = posleft + "px";
  document.getElementById('pg').style.top = topvar;
  document.getElementById('pg').style.left = leftvar;

}

// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }


