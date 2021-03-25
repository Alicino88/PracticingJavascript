//SWITCH
//the switch statement is used to perform different actions based on different conditions
/*

The switch expression is compared to the cases, when a match is found then the block of code is executed
If no match is found, then the default block code is executed.
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
} 


if the food is equal to fast food then the paragraph "Today you eat not healthy" will be displayed
if the food is equal to Vegetables then the message "Today you eat yummy and healthy!" is displayed
The break will prevent, when the condition is met, to execute the code blocks which come after

let isHealthy;
let food = "carrot";

switch (food) {
  case "Fast food":
    isHealthy = "not healthy";
    break;
  case "Vegetables":
    isHealthy = "Yummy and healthy!";
  default:
    isHealthy = "something new";
}

paragraph = document.querySelector(".text");
paragraph.innerHTML = "Today you eat " + isHealthy;
*/

let car = document.querySelector(".saetta");
let x = 0;
let y = 0;
let speed = 4;
let flipped = false;
let rotate = 0;

function handleKeyDown(event) {
  console.log(event);
  console.log(event.key);
  //if we are pressing any key other than arrows nothing will happen:
  if (!event.key.includes("Arrow")) {
    return;
  }
  switch (event.key) {
    case "ArrowUp":
      y = y - 1;
      rotate = -90;
      break;
    case "ArrowDown":
      y = y + 1;
      rotate = 90;
      break;
    case "ArrowLeft":
      x = x - 1;
      rotate = 0;
      flipped = true;
      break;
    case "ArrowRight":
      x = x + 1;
      rotate = 0;
      flipped = false;
      break;
    default:
      console.log("Not a valid move");
      break;
  }
  /*in case we wanted to change the car background whenever an arrow key is pressed
  car.style.background = "red";
  or
  car.style["background"] = "red";*/
  car.setAttribute(
    "style",
    `
  --rotateX: ${flipped ? "180deg" : "0"};
  --x: ${x * speed}px;
  --y: ${y * speed}px;
  --rotate: ${rotate}deg;
`
  );
}

window.addEventListener("keydown", handleKeyDown);
