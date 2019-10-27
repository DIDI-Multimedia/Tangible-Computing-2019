var container;
var camera, scene, mesh, renderer;
var meshFloor, meshBldg;

//var mx = -3;

function preload(argument) {
  // body...
  init();


}



function init() 
{


  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.set(0,0,20);
  camera.lookAt(scene.position)

  scene.background = new THREE.Color( 0 );
  scene.fog = new THREE.Fog('black', 20,30);

  var light = new THREE.HemisphereLight( 0xffffff, 2 );
  light.position.set( 1, 1, 1 ).normalize();
  scene.add( light );

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild( renderer.domElement );

  //

  var size=50;
  var step=1;

  var geometry = new THREE.Geometry();
  var material = new THREE.LineBasicMaterial({color: 0x009999});

  for(var i = -size ; i<=size ; i+=step)
  {
    geometry.vertices.push(new THREE.Vector3( size, -0.04, i ) );
    geometry.vertices.push(new THREE.Vector3(-size, -0.04, i ) );

    geometry.vertices.push(new THREE.Vector3( i, -0.04, -size ) );
    geometry.vertices.push(new THREE.Vector3( i, -0.04,  size ) );
  }

  var line = new THREE.Line(geometry, material, THREE.LineSegment);
  scene.add(line);

  mesh = addMesh(0,1,0)


  render();
}


function addMesh(x,y,z){

  console.log('add mesh')
  let col = sin(millis()/100)
  let voxel = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,0.1),
    new THREE.MeshLambertMaterial({color: 0xff2500})
  );
  voxel.rotation.y=90


  voxel.position.x = 0
  voxel.position.y = y
  voxel.position.z = 0

scene.add(voxel);

return voxel 

}

let meshes =[]

function animate() {
  requestAnimationFrame(animate);
  let val = sin(millis()/1000)*2
  //camera.position.z += 0.01;
  camera.position.x=val
  camera.position.y = 2
  //camera.rotation.y +=0.001;

  for (var i = 0; i < meshes.length; i++){

    let m = meshes[i]
    m.rotation.x += 0.05;
    m.rotation.y += 0.01;
    m.rotation.z += 0.03;

  }

  mesh.position.z = camera.position.z - 6


  render();
}

function render()
{

  renderer.render (scene, camera);
}








let capture
let poseNet
let noseX = 0
let noseY = 0
// let wristX=0
// let wristY=0
let confidence = 0

function setup() 
{
  console.log('set up p5 ML5')
  createCanvas(640,480,WEBGL);
  capture = createCapture(VIDEO);
  capture.size(640,480);
  capture.hide();
  poseNet = ml5.poseNet(capture, modelReady)
  poseNet.on('pose' , gotPoses)
  animate();


}

function gotPoses(poses) {

  // console.log('got poses!')
  // console. log(poses)
  poses.forEach(obj=>{

    console.log(obj)
    try
   {
     for (let i = 0; i < poses.length; i++) 
     {
       // For each pose detected, loop through all the keypoints
       let pose = poses[i].pose;

       for (let j = 0; j < pose.keypoints.length; j++) 
       {
         // A keypoint is an object describing a body part (like rightArm or leftShoulder)

         let keypoint = pose.keypoints[j]; // 

         // Only draw an ellipse is the pose probability is bigger than 0.2

         if (keypoint.score > 0.1) 
         {

             mesh = addMesh(keypoint.position.x/500, keypoints.position.y/500,0);
             meshes.push(mesh)
           
         }
       }
     }

        if (meshes.length > 30)
        {
          let m = meshes.shift()
          scene.remove(m)
        }
      
   }

  catch
  {

  }

})


}


function modelReady()
{
   console.log('model ready')
}

var a=0
var b=0
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
      


      push()
      translate(0,0,40)
      rotateX(a)
      rotateY(b)
      box(s,s,s)
      pop()

     
      
}



