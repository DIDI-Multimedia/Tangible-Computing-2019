// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
let capture
let poseNet
let noseX = 0
let noseY = 0

function setup() 
{
  createCanvas(windowWidth, 700);
  capture = createCapture(VIDEO);
  capture.size(1920,660);
  capture.hide();
  poseNet = ml5.poseNet(capture, modelReady)
  poseNet.on('pose' , gotPoses)
}

function gotPoses(poses)
{
  console. log(poses)
  noseX = poses[0].pose.keypoints[0].position.x
  noseY = poses[0].pose.keypoints[0].position.y

}


function modelReady()
{
   console.log('model ready')
}

function draw() 
{
  background(0);
  image(capture, 0, 0, 1920, 1080);

  fill(255,0,0)
  ellipse(noseX,noseY,100,100)


  
  
  
}



