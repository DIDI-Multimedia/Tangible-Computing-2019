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

var scl = 30
var cols, rows

var w=800
var h=600

var terrain = []

var flying = 0

function setup() 
{
  createCanvas(640,480,WEBGL);
  capture = createCapture(VIDEO);
  capture.size(640,480);
  capture.hide();
  poseNet = ml5.poseNet(capture, modelReady)
  poseNet.on('pose' , gotPoses)


  frameRate(24)
  

  cols= w/scl
  rows= h/scl


  for (var x = 0; x < cols; x++) {

    terrain[x] = [];

    for (var y = 0; y < rows; y++) {

      terrain[x][y] = 0; 

    }

  }


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
var b=0
var s=50

function draw() 
{


  rectMode(CENTER)
  background(0)

  // beginShape()
  push()
  translate(-width/2,-height/2)
  image(capture,0,0,width,height,20)
  beginShape()
  fill(0,230)
  rect(width/2,height/2,width,height)
  endShape()

  fill(255,69,0,50)
  // if (confidence > 0.10){

      ellipse(noseX,noseY,100,100)

  pop()
  // image(capture, -windowWidth/2, -windowHeight/2, windowWidth, windowHeight)
  // endShape()


      if(noseY>=360) 
      {
        a+=0.01
      }
      if(noseY<=150)
      {
        a-=0.01
      }

      if(noseX>=330)
      {
        b+=0.01
      }

      if(noseX<=150)
      {
        b-=0.01
      }
      



      ambientLight(225)
      push()
      translate(0,-20,40)
      rotateX(a)
      rotateY(b)
      fill(0,210,225)
      box(s,s,s)
      pop()


      beginShape()
      Floor()
      endShape()

      
}



function Floor()
{
  flying -= 0.1

  var yoff = flying

  for (var y = 0; y < rows; y++) {

    var xoff = 0

    for (var x = 0; x < cols; x++) {

      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100)

      xoff += 0.2

    }

    yoff += 0.2

  }





  //translate(0, 100)

  rotateX(PI/3)

  fill(0,210,230, 50)

  translate(-w/2, -h/2)

  for (var y = 0; y < rows-1; y++) {

    beginShape(TRIANGLE_STRIP)

    for (var x = 0; x < cols; x++) {

      vertex(x*scl, y*scl, terrain[x][y]);

      vertex(x*scl, (y+1)*scl, terrain[x][y+1])

    }

    endShape()

  }


}


