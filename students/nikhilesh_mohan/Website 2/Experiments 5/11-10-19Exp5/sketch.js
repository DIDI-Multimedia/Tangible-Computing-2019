var container;
var camera, scene, mesh, renderer;

var meshFloor, meshBldg;

init();
animate();

var camZ;

var h;

function init() {

  
  container = document.createElement( 'div' );

  //document.body.appendChild( container ); // place three.js in body of file
  //var aspect = window.innerWidth / window.innerHeight;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.1, 1000);  

  scene.background = new THREE.Color( 0 );

  var light = new THREE.HemisphereLight( 0xffffff, 0x009999, 2 );
  light.position.set( 1, 1, 1 ).normalize();
  scene.add( light );




  meshFLoor = new THREE.Mesh(
    new THREE.PlaneGeometry(100,50, 50,50),
    new THREE.MeshLambertMaterial({color: 0x009999, wireframe:true})
  );


  meshFLoor.rotation.x += Math.PI/2;
  scene.add(meshFLoor);


  meshBldg = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshLambertMaterial({color: 0x009999})
  );
  scene.add(meshBldg);
  




  mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshLambertMaterial({color: 0xff2500})
  );


  mesh.position.y +=1;
  scene.add(mesh);


  camera.position.set (0,1.8,-5);
  camera.lookAt(new THREE.Vector3(0,0,0));

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(1280, 720);
  document.body.appendChild(renderer.domElement);

  animate();

  



}


function animate()
{

  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

    //camera.position.x = Math.sin(camera.position.y) * 10;
    camera.position.z += 0.01;
    mesh.position.z += 0.01;



    camZ = camera.position.z;

  renderer.render(scene, camera);
  

    h+= 1;
  

}

//posenet part 


// let capture
// let poseNet
// let noseX = 0
// let noseY = 0
// // let wristX=0
// // let wristY=0
// let confidence = 0

// function setup() 
// {
//   createCanvas(640,480,WEBGL);
//   capture = createCapture(VIDEO);
//   capture.size(640,480);
//   capture.hide();
//   poseNet = ml5.poseNet(capture, modelReady)
//   poseNet.on('pose' , gotPoses)

// }

// function gotPoses(poses) {

//   console. log(poses)
//   poses.forEach(obj=>{

//     console.log(obj)

//     try{

//       let confidence1 = obj.pose['rightWrist'].confidence

//       if (confidence1 > 0.1){

//         noseX = obj.pose['rightWrist'].x
//         noseY = obj.pose['rightWrist'].y
//       }


//     } 

//     catch {

//     }
//     // noseX = obj.pose['leftWrist'].position.x
//     // noseY = obj.pose['leftWrist'].position.y

//   })
//   // noseX = poses[0].pose.keypoints[0].position.x
//   // noseY = poses[0].pose.keypoints[0].position.y

// }


// function modelReady()
// {
//    console.log('model ready')
// }

// var a=0
// var b=0
// var s=100

// function draw() 
// {
//   rectMode(CENTER)
//   background(0)

//   // beginShape()
//   push()
//   translate(-width/2,-height/2)
//   image(capture,0,0,width,height,20)
//   beginShape()
//   fill(0,210,230,220)
//   rect(width/2,height/2,width,height)
//   endShape()
//   fill(255,0,0)


//   // if (confidence > 0.10){

//       ellipse(noseX,noseY,100,100)

//   pop()
//   // image(capture, -windowWidth/2, -windowHeight/2, windowWidth, windowHeight)
//   // endShape()


//       if(noseY>=360) 
//       {
//         a+=0.01
//       }
//       if(noseY<=150)
//       {
//         a-=0.01
//       }

//       if(noseX>=330)
//       {
//         b+=0.01
//       }

//       if(noseX<=150)
//       {
//         b-=0.01
//       }
      


//       push()
//       translate(0,0,40)
//       rotateX(a)
//       rotateY(b)
//       box(s,s,s)
//       pop()

     
      
// }



