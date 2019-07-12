document.onkeydown = targetPress;
  function targetPress (key){
    key = key || window.event;
    let keycode = key.keyCode;
    console.log(keycode);
    var posizione =document.getElementById('barretta').style.left; //dx-> m
    //console.log(posizione);
    var pixel = '';
    if ( keycode == 39){
      posizione = posizione.split('p')[0];
      posizione = parseInt(posizione);
      posizione= posizione+6;
      pixel = posizione + 'px';
      if (posizione >=400){
        pixel = '400px'
      }
      document.getElementById('barretta').style.left = pixel;
      console.log(pixel);
      }

    else if ( keycode == 37){
      while (posizione > '0px'){
        posizione = posizione.split('p')[0];
        posizione = parseInt(posizione);
        posizione= posizione-6;
        pixel = posizione + 'px';
        document.getElementById('barretta').style.left = pixel;
        console.log(pixel);
    }
  }
}
// JSBouncingBallSimple.js
window.onload = init;

// Constants to define the box dimensions
const MIN_X = 0;
const MIN_Y = 0;
const WIDTH = 600;
const HEIGHT = 400;
const MAX_X = MIN_X + WIDTH - 20;
const MAX_Y = MIN_Y + HEIGHT - 1;

// The ball
var ballRadius = 30;
var ballSize = ballRadius;
// Randomly place the initial ball within the box, slightly off from border
var ballCenterX = (WIDTH - 2*ballSize)*Math.random() + (MIN_X + ballSize);
var ballCenterY = (HEIGHT - 2*ballSize)*Math.random() + (MIN_Y + ballSize);
// Initial speed
var ballSpeedX = 10;
var ballSpeedY = 20;

function init() {
   var box = document.getElementById("container");
   // Position the box absolutely via CSS style
   box.style.left = (MIN_X) + "px";  // unit in px (pixels)
   box.style.top = (MIN_Y) + "px";
   box.style.width = WIDTH + "px";
   box.style.height = HEIGHT + "px";

   var balls = document.getElementsByClassName("pallina");
   // Position the ball image absolutely via CSS style
   balls[0].style.left = (ballCenterX) + "px";
   balls[0].style.top  = (ballCenterY + ballRadius) + "px";
   balls[0].style.width = ballSize + "px";
   balls[0].style.height = ballSize + "px";
   moveOneStep();
}

function moveOneStep() {
   // Calculate the ball's new position
   ballCenterX += ballSpeedX +2;
   ballCenterY += ballSpeedY;
   // Check if the ball moves over the bounds
   // If so, adjust the position and speed.
   if (ballCenterX - ballRadius < MIN_X) {
      ballSpeedX = -ballSpeedX; // Reflect along normal
      ballCenterX = MIN_X + ballRadius; // Re-position the ball at the edge
   } else if (ballCenterX - ballRadius > MAX_X) {
      ballSpeedX = -ballSpeedX;
      ballCenterX = MAX_X + ballRadius;
   }
   // May cross both x and y bounds
   if (ballCenterY - ballRadius < MIN_Y) {
      ballSpeedY = -ballSpeedY;
      ballCenterY = MIN_Y + ballRadius;
   } else if (ballCenterY + ballRadius > MAX_Y) {
      ballSpeedY = -ballSpeedY;
      ballCenterY = MAX_Y - ballRadius;
   }

   var balls = document.getElementsByClassName("pallina");
   balls[0].style.left = (ballCenterX - ballRadius-10) + "px";
   balls[0].style.top  = (ballCenterY - ballRadius) + "px";

   // Recursively call move after the specified msec
   setTimeout("moveOneStep()", 60);
}
