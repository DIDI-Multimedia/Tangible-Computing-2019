





let bx;
let by;
let boxSize = 75;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

function setup (){


  createCanvas (400,400)
  background(0)



  let line = {

    x1: width/2,
    y1: 0, 
    x2: width/2,
    y2: height/2,

  }



  let numLines = 10

  drawLineRecursion (line,numLines)



  function mousepress(){
    if mousepress 


  }

}


function drawLineRecursion(l,numLines){

  stroke(random(255),random(255),random(255))
  strokeWeight (numLines*25)
  line(l.x1,l.y1,l.x2,l.y2)


    numLines = numLines - 1
    if (numLines > 0){
      drawLineRecursion (l,numLines)
      console.log(numLines)

    }

    function draw() {
  background(237, 34, 93);

  // Test if the cursor is over the box
  if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true;
    if (!locked) {
      stroke(255);
      fill(244, 122, 158);
    }
  } else {
    stroke(156, 39, 176);
    fill(244, 122, 158);
    overBox = false;
  }


}

















