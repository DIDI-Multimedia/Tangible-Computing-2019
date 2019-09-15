// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

  let canvas = createCanvas(windowWidth/4,windowWidth/4)
  
  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
   background(0)
  
  noStroke()
  noLoop()
}

function draw(){
  rectMode(RADIUS)
  fill(100)
  drawTarget(width*0.25, height*0.4,300,4)
  drawTarget(width*0.5, height*0.5,400,10)
  drawTarget(width*0.75, height*0.3,100,6)  
  //drawTarget(width*0.1, height*10,700,7)
}

function drawTarget( height, width, size, num){
  const grayvalues = 110/num;
  const steps = size/num;
  for (let i = 0; i < num; i++) {
   fill(i*grayvalues/1);
    circle(height, width, size - i * steps)
    circle(height, width/ size - i * steps,)
    circle(height/2, width/2, size - i * steps/2)
    rect(height/2, width/2, size - i * steps, size - i *steps)

  

}
}

