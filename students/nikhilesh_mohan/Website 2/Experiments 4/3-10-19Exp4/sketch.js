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
  createCanvas(640,480,WEBGL);
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

      if (confidence1 > 0.1){

        noseX = obj.pose['rightWrist'].x
        noseY = obj.pose['rightWrist'].y
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

var a=0
var s=100

function draw() 
{
  rectMode(CENTER)
  background(0)

  // beginShape()
  push()
  translate(-width/2,-height/2)
  image(capture,0,0,width,height,20)
  beginShape()
  fill(0,210,230,220)
  rect(width/2,height/2,width,height)
  endShape()
  fill(255,0,0)


  // if (confidence > 0.10){

      ellipse(noseX,noseY,100,100)

  pop()
  // image(capture, -windowWidth/2, -windowHeight/2, windowWidth, windowHeight)
  // endShape()


      if(noseX>=200) 
      {
        a+=0.01
      }

      if(noseY>=300)
      {
        s++
      }
      if(noseY<=100)
      {
        s--
      }


      push()
      // translate(width/2,height/2)
      rotateX(a)
      box(s,s,s)
      pop()

     
      
}



