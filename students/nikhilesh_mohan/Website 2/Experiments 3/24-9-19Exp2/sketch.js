// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
let capture;

function setup() 
{
  createCanvas(windowWidth, 700);
  capture = createCapture(VIDEO);
  capture.size(1920,660);
  capture.hide();
}

function draw() 
{
  background(0);
  //scale(-1,1)
  
  image(capture, 0, 0, 1920, 1080);
  translate(windowWidth/2,0)
  scale(-1.0,1.0)
  image(capture, 0, 0, 1920, 1080);
  
  
  
}



