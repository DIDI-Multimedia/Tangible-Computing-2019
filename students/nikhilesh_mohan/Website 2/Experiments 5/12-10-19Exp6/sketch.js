var container;
var camera, scene, mesh, renderer;

var meshFloor;

init();
animate();

function init() 
{
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(90, 1920/1080, 0.1, 1000);
  scene.background = new THREE.Color( 0 );
  

  meshFLoor = new THREE.Mesh(
    new THREE.PlaneGeometry(100,50, 50,50),
    new THREE.MeshBasicMaterial({color: 0x009999, wireframe:true})
  );


  meshFLoor.rotation.x += Math.PI/2;
  scene.add(meshFLoor);


  mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff4500})
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
  mesh.rotation.y += 0.02;

  renderer.render(scene, camera);

} 

