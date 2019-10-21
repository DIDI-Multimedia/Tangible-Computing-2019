var container;
var camZ, scene, raycaster, renderer;
//var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 500, theta = 0;
var frustumSize = 1000;


//posenet part 


let videoCamera;
let poseNet;
let poses = [];


init();
animate();

function init() {

  container = document.createElement( 'div' );

  document.body.appendChild( container ); // place three.js in body of file
  var aspect = window.innerWidth / window.innerHeight;
  camZ = new THREE.PerspectiveCamera( 45, innerWidth/ innerHeight, 1, 1000 ); // camZ.position.set(1)
  camZ.position.set(10,10,10)

  camZ.lookAt(0,0,0)

  scene = new THREE.Scene();
  scene.add( camZ );
  scene.background = new THREE.Color( 0 );


  var light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( 50, 50, 50 ).normalize();
  scene.add( light );

  light.position.set( 1, 1, 1 ).normalize();
  var light = new THREE.HemisphereLight( 0xffffff, 1 );

  scene.add( light );

  // raycaster = new THREE.Raycaster();
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );

  var geo = new THREE.BoxBufferGeometry( 1,1,1)
  fractalCubes(geo,4,300,0,0,0)


}

let particles = []
function drawCubes(keypoint,time) {


  console.log('draw cubes', keypoint)

  var geo = new THREE.BoxBufferGeometry( 1,1,1)
  var scale = 100 
  var object = new THREE.Mesh( geo, new THREE.MeshLambertMaterial( { color: 0x009999 } ) ); 
  object.position.set(keypoint.x,keypoint.y,time)
  // object.rotation.set(Math.random()*2*3.14,Math.random()*2*3.14,Math.random()*2*3.14)
  object.scale.set(scale,scale,scale)
  scene.add( object )

  particles.push(object)
  // if(time>100)
  // {
  //   scene.remove( object )
  //   time=0
  // }

  // scale *= 0.5
  // step -- 

}

function fractalCubes(geo,step,scale,x,y,z){

  var object = new THREE.Mesh( geo, new THREE.MeshLambertMaterial( { color: 0x009999 } ) ); 
  object.position.set(x,y,z)
  object.rotation.set(Math.random()*2*3.14,Math.random()*2*3.14,Math.random()*2*3.14)
  object.scale.set(scale,scale,scale)
  //scene.add( object )

  scale *= 0.5
  step -- 


  if (step > 0){

    //fractalCubes(geo,step,scale,x+scale,y+scale,z+scale)
    // fractalCubes(geo,step,scale,x-scale,y+scale,z+scale)
    // fractalCubes(geo,step,scale,x-scale,y-scale,z+scale)
    // fractalCubes(geo,step,scale,x-scale,y-scale,z-scale)  
    // fractalCubes(geo,step,scale,x+scale,y+scale,z-scale)
    // fractalCubes(geo,step,scale,x-scale,y+scale,z-scale)
    // fractalCubes(geo,step,scale,x+scale,y-scale,z+scale)
    // fractalCubes(geo,step,scale,x+scale,y-scale,z-scale)

  } 



}


function animate() {

  requestAnimationFrame( animate );
  render();
  // stats.update();

}

function render() {

  theta += 0.1;
  // camZ.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
  // camZ.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
  // camZ.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
  // camZ.tate( scene.position );
  camZ.updateMatrixWorld();

  renderer.render( scene, camZ );

}






function setup() {

  createCanvas(640, 480);
  videoCamera = createCapture(VIDEO);
  videoCamera.size(width, height);


  // Create a new poseNet method with a single detection

  poseNet = ml5.poseNet(videoCamera, modelReady);

  // This sets up an event that fills the global variable "poses"

  // with an array every time new poses are detected

  poseNet.on('pose', function(results) {

    poses = results;

  });

  // Hide the video element, and just show the canvas

  videoCamera.hide();

}



function modelReady() {

  console.log('model ready!')
  // select('#status').html('Model Loaded');

}




function draw() {

  //image(video, 0, 0, width, height);
  background(0,0)



  // We can call both functions to draw all keypoints and the skeletons

  drawKeypoints(null);

  //drawSkeleton();

}

let time = 0 

// A function to draw ellipses over the detected keypoints

// let keypoints = []

function drawKeypoints() {
  

  time += second()/50

  // Loop through all the poses detected

  for (let i = 0; i < poses.length; i++) 
  {
    // For each pose detected, loop through all the keypoints

    let pose = poses[i].pose;

    for (let j = 0; j < pose.keypoints.length; j++) 
    {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)

      let keypoint = pose.keypoints[j]; // 

      // Only draw an ellipse is the pose probability is bigger than 0.2

      if (keypoint.score > 0.2) 
      {

        fill(0, 210, 230);

        if (keypoint.position)
        {
          noStroke();
          drawCubes(keypoint.position)
        }

        // fractalCubes(geo , step , scale , keypoint.position.x , keypoint.position.y , z)

        //ellipse(keypoint.position.x, keypoint.position.y, 1, 1);
      }

    }

  }



}



// A function to draw the skeletons

function drawSkeleton() {


  // Loop through all the skeletons detected

  for (let i = 0; i < poses.length; i++) 
  {

    let skeleton = poses[i].skeleton;

    // For every skeleton, loop through all body connections

    for (let j = 0; j < skeleton.length; j++) 
    {

      let partA = skeleton[j][0];

      let partB = skeleton[j][1];

      stroke(0, 210, 230);

      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);

    }

  }

}