// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
let capture
let poseNet
let noseX = 0
let noseY = 0
let wristX=0
let wristY=0
let confidence = 0

function setup() 
{
  createCanvas(windowWidth, 700);
  capture = createCapture(VIDEO);
  capture.size(640,480);
  capture.hide();
  poseNet = ml5.poseNet(capture, modelReady)
  poseNet.on('pose' , gotPoses)
}

function gotPoses(poses) {

  console. log(poses)
  poses.forEach(obj=>{

    console.log(obj)

    try{

      let confidence1 = obj.pose['rightWrist'].confidence
      let confidence2 = obj.pose['leftWrist'].confidence

      if (confidence1 > 0.1){

        noseX = obj.pose['rightWrist'].x
        noseY = obj.pose['rightWrist'].y
      }

      if(confidence2 > 0.1)
      {
        wristX = obj.pose['leftWrist'].x
        wristY = obj.pose['leftWrist'].y
      }

    } 

    catch {

    }
    // noseX = obj.pose['leftWrist'].position.x
    // noseY = obj.pose['leftWrist'].position.y

  })
  // noseX = poses[0].pose.keypoints[0].position.x
  // noseY = poses[0].pose.keypoints[0].position.y

}


function modelReady()
{
   console.log('model ready')
}

function draw() 
{
  background(0);
  image(capture, 0, 0, 640, 480);

  fill(0,210,230)

  // if (confidence > 0.10){

      ellipse(noseX,noseY,100,100)
      ellipse(wristX,wristY,100,100)
    
  
  
}



