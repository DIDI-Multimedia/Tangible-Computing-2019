
function setup() {
let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');
  background(255)

}

function draw(){

      if (mouseIsPressed === true) {
        stroke(200,random(255),random(255),random(255))
        strokeWeight(70)
        line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

