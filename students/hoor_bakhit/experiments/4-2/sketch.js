let y = 100;

function setup() {
  let canvas = createCanvas(windowWidth/2,windowWidth/2,WEBGL)
  canvas.parent('sketch-holder');
}

function draw() {
  background(0);

  normalMaterial();
  

  translate(-40, 0, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  
  torus(70, 20,width, y,);
  pop();

}
