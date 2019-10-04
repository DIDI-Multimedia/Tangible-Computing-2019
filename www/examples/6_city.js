  
/**
Digital Blue Foam (2017 - 2019 )
Procedural City
Updated May 16, 2019
 **/


$(function() {


 
  function loop(){

    requestAnimationFrame(loop);
    renderer.render(scene, camera);

    // composer.render();
  }


    setInterval(function() {
      $("#title h1").toggleClass('glow');
    }, 5000);

  var colorList = ['#029DAF','#F07C19','#FFC219', '#E42251', '#E5D599', '#118AB2'] // color scheme 
  var updateFcts  = []  // set up scene
  var scene = new THREE.Scene() // initialize scene
  var clouds = []
  var renderer,camera,light
  

  //

  
  initRenderer()
  initCamera()
   
  function initRenderer(argument) {
    
    renderer = new THREE.WebGLRenderer( { alpha:true, antialias: true })
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( window.innerWidth*0.51, window.innerHeight*0.77)
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    var body = document.getElementById('procity');
    body.appendChild( renderer.domElement );
  
  }

  function initCamera(){
  
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 3000)
    camera.position.y = 80

  }

  initLight()

  function initLight(argument) {

    scene.fog = new THREE.FogExp2( 0x029DAF, 0.0013 ); // fog is c1
// 0x029DAF
    var ambientLight = new THREE.AmbientLight(0xdc8874, 1.1);
    ambientLight.castShadow = true;   

    scene.add(ambientLight );
    
  }
          window.addEventListener( 'resize', onWindowResize, false );
  


         // default false


    var c1 = 0xffffff
    var intensity = 1;
    var distance = 0;
    var decay = 0;

  var controls  = new THREE.FirstPersonControls( camera );
  controls.movementSpeed  = 0;
  controls.lookSpeed  = 0.001;
  controls.lookVertical = true;
  updateFcts.push(function(delta, now){
    controls.update( delta );
  })

  updateFcts.push(function(){

    renderer.render( scene, camera );
  
  })

  var lastTimeMsec= null
  requestAnimationFrame(function animate(nowMsec){
    requestAnimationFrame( animate );// keep looping
    lastTimeMsec  = lastTimeMsec || nowMsec-1000/60 // measure time
    var deltaMsec = Math.min(200, nowMsec - lastTimeMsec)
    lastTimeMsec  = nowMsec
    updateFcts.forEach(function(updateFn){// call each update function
      updateFn(deltaMsec/1000, nowMsec/1000)
    })
  })


initScene()

  function initScene(){
    initPlane()
    setSunlight()

    addCity(4000)

    // scene.add(new ProceduralCity(1000,colorList))
    // scene.add(new ProceduralCity(1000,colorList))

   // scene.add(new ProceduralCity(1000,colorList))
   //  scene.add(new ProceduralCity(1000,colorList))
   //  scene.add(new ProceduralCity(1000,colorList))
  }

  function addCity(limit) {
    var min=5; 
    var max=500;  
    var random =Math.floor(Math.random() * (+max - +min)) + +min; 
    // console.log(num)
    scene.add(new ProceduralCity(random,colorList))
    limit -= random
    if (limit > 0){
      addCity(limit)
    } 
  }

  function initPlane(argument) {

      var planeGeometry = new THREE.PlaneGeometry( 1000, 1000 );
      planeGeometry.rotateX( - Math.PI / 2 );
      
      var planeMaterial = new THREE.ShadowMaterial();
      planeMaterial.opacity = 0.5;

      let plane = new THREE.Mesh( planeGeometry, planeMaterial);

      plane.position.y = -1;
      plane.receiveShadow = true;
      
      scene.add(plane)

  }

  function setSunlight(){
    //sets the sun 
    var c1 =0xffffff
    var lightArray = []

    // light
    var light = new THREE.DirectionalLight( c1, 0.5);
    light.position.set( 100, 1000, 500 );
    light.castShadow = true;
    light.radius = 5000
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    lightArray.push( light );

    var d = 1000;
    light.shadow.camera.left = - d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = - d;
    light.shadow.camera.far = 3500;
    light.shadow.bias = - 0.0001;

    // this.sun = light
    // setHalo(light)
    scene.add(light );
  }




  function ProceduralCity(numBldgs, colorList){


    var geometry = new THREE.CubeGeometry( 1, 1, 1 );
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );
    var buildingMesh= new THREE.Mesh( geometry );
    var light = new THREE.Color( 0xffffff )
    var shadow  = new THREE.Color( 0x303050 )
    var cityGeometry= new THREE.Geometry();

    for( var i = 0; i < numBldgs; i ++ ){

      buildingMesh.position.x = Math.floor( Math.random() * 200 - 100 ) * 10;
      buildingMesh.position.z = Math.floor( Math.random() * 200 - 100 ) * 10;
      // buildingMesh.rotation.y = Math.random()*Math.PI*2;

      // put a random scale
      buildingMesh.scale.x  = Math.random() * Math.random() * Math.random() * Math.random() * 50 + 10;
      buildingMesh.scale.y  = (Math.random() * Math.random() * Math.random() * buildingMesh.scale.x) * 8 + 8;
      buildingMesh.scale.z  = buildingMesh.scale.x

      // establish the base color for the buildingMesh
      var value = 1 - Math.random() * Math.random();
      var baseColor = new THREE.Color().setRGB( value + Math.random() * 0.1, value, value + Math.random() * 0.1 );

      // set topColor/bottom vertexColors as adjustement of baseColor
      var topColor  = baseColor.clone().multiply( light );
      var bottomColor = baseColor.clone().multiply( shadow );

      // set .vertexColors for each face
      var geometry  = buildingMesh.geometry;

      for ( var j = 0, jl = geometry.faces.length; j < jl; j ++ ) {

        if ( j === 2 ) {

          // set face.vertexColors on root face
          geometry.faces[ j ].vertexColors = [ baseColor, baseColor, baseColor, baseColor ];

        } else {
          // set face.vertexColors on sides faces
          geometry.faces[ j ].vertexColors = [ topColor, bottomColor, bottomColor, topColor ];
        }
      }
      // merge it with cityGeometry - very important for performance
      THREE.GeometryUtils.merge( cityGeometry, buildingMesh );
    }

    // generate the texture
    var color = colorList[Math.floor(Math.random() * colorList.length)];
    var texture   = new THREE.Texture( generateTextureCanvas(buildingMesh.scale.y,color) );
    texture.anisotropy  = renderer.getMaxAnisotropy();
    texture.needsUpdate = true;

    // build the mesh
    var material  = new THREE.MeshPhongMaterial({

      map   : texture,
      vertexColors  : THREE.VertexColors,
      side: THREE.doubleSide,
      opacity: 0.98
    
    });


    var mesh = new THREE.Mesh(cityGeometry, material );
    mesh.castShadow = true
    mesh.receiveShadow = true

    return mesh

    function generateTextureCanvas(steps,style){

      var t = Math.random()
      var canvas  = document.createElement( 'canvas');
      canvas.width = 6;
      canvas.height    = 8*120; // what do all of these values mean can we fix this one...
      var context = canvas.getContext( '2d' )
      context.fillStyle    =  style
      context.fillRect( 0, 0, 6, canvas.height);

      for( var y = 20; y < canvas.height; y += 20 ){
      
        for( var x = 0; x < canvas.width; x += 2 ){
      
          var value   = Math.floor( Math.random() * 62 );
          context.fillStyle = 'rgb(' + [value, value, value].join( ',' )  + ')';
          context.fillRect( x, y, 2, 1 );
      
        }
      
      }
      
      var canvas2 = document.createElement( 'canvas' )
      canvas2.width  = 512
      canvas2.height = 1024
      var context = canvas2.getContext( '2d' )
      context.imageSmoothingEnabled        = false;
      context.webkitImageSmoothingEnabled  = false;
      context.mozImageSmoothingEnabled = false;
      context.drawImage( canvas, 0, 0, canvas2.width, canvas2.height );
      
      return canvas2;

    }

  }

  var clouds=[]

  var min = 500
    var maxDist = 2000
    var cld = {}
    var numClds = 500;
    for (var i = 1; i < numClds; i++ ){
      var x,y,z,dist = 0
      while(dist < min){
        var x = Math.random()*maxDist - maxDist/2
        var y = Math.random()*maxDist/3 + 200
        var z = Math.random()*maxDist - maxDist/2
        dist = Math.sqrt(x*x+y*y+z*z)
      }
      cld =   Cloud(x,y,z,  [0.9, '#FFFFFF'])
      cld.motion = new THREE.Vector3(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1)
      clouds.push(cld)
      scene.add(cld.mesh)
    }



  function Cloud(x,y,z,color){
    // Create an empty container that will hold the different parts of the cloud
    var mesh = new THREE.Object3D();    // this shape will be duplicated to create the cloud
    var geom = new THREE.CubeGeometry(50,50,50);    // var geom = new THREE.SphereGeometry(50,8,8)
    var mat = new THREE.MeshPhongMaterial({
      color: color[1],
      transparent: true,
      opacity:0.35
    });

    // duplicate the geometry a random number of times
    var nBlocs = 15+Math.floor(Math.random()*3);
    for (var i=0; i<nBlocs; i++ ){

      // create the mesh by cloning the geometry
      var m = new THREE.Mesh(geom, mat);

      // set the position and the rotation of each cube randomly
      m.position.x = i*10*Math.random();
      m.position.y = -Math.random()*10;
      m.position.z = Math.random()*50;
      m.rotation.z = Math.random()*Math.PI*2;
      m.rotation.y = Math.random()*Math.PI*2;

      // set the size of the cube randomly
      var s = .001 + Math.random()*.55;
      m.scale.set(s,s,s);
      mesh.add(m);
    }
    mesh.position.x = x
    mesh.position.y = y
    mesh.position.z = z
    scene.add(mesh)
    // return new THREE.Mesh(geom)
    return mesh
  }

  loop()

      function onWindowResize() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize( width, height );
        // ssaoPass.setSize( width, height );
      }
})
