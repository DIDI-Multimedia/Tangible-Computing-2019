var container;
var camera, scene, mesh, renderer;

var meshFloor, meshBldg;

//var mx = -3;

var a=0
var b=0
var s=100


//animate();

function preload(argument) 
{
  init();
}



function init() 
{


  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.set(0,0,10);
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

  
  mesh = new THREE.Mesh(
    new THREE.SphereGeometry(1,2,2),
    new THREE.MeshLambertMaterial({color: 0xff2500})
  );
  mesh.position.y = 1

  scene.add(mesh);

  // for(var j=0 ; j<1000 ; j++)
  // {
  //   addMesh(((Math.random()-0.5)*50), ((Math.random()-0.5)*50)/2, ((Math.random()-0.5)*50) ,1,1,1)
  // }


  render();
}

function addMesh(x,y,z, d,e,f){

  console.log('add mesh')
  //let col = sin(millis()/100)
  let voxel = new THREE.Mesh(
    new THREE.BoxGeometry(d,e,f),
    new THREE.MeshLambertMaterial({color: 0x009999})
  );

  voxel.position.x = x
  voxel.position.y = y
  voxel.position.z = z

 scene.add(voxel);

 return voxel 

}





function render()
{

  renderer.render (scene, camera);
}






  
  




//posenet part 


let capture
let poseNet
let noseX = 0
let noseY = 0
// let wristX=0
// let wristY=0
let confidence = 0

function setup() 
{
  createCanvas(640,480,WEBGL);
  capture = createCapture(VIDEO);
  capture.size(640,480);
  capture.hide();
  poseNet = ml5.poseNet(capture, modelReady)
  poseNet.on('pose' , gotPoses)

  animate();

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


      
      


      push()
      translate(0,0,40)
      rotateX(a)
      rotateY(b)
      box(s,s,s)
      pop()

     
      
}


function animate()
{

  if(noseY>=360) 
      {
        a+=0.001
        camera.position.z += a;
      }
      if(noseY<=150)
      {
        a-=0.001
        camera.position.z -= a;
      }

      if(noseX>=330)
      {
        b+=0.001
        camera.position.x += b;
      }

      if(noseX<=150)
      {
        b-=0.001
        camera.position.x -= b;
      }

  requestAnimationFrame(animate);

  
  camera.position.y =2
  
  



  // camera.rotation.y =b;
  // camera.rotation.x =a;
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  //mesh.position.z -=0.01;

  render();
}


