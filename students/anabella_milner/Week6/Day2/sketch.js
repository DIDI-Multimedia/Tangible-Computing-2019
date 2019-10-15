var video;

var vScale = 15;

let pixels

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  video.hide()
  noStroke()

    pixels = []

    initializePixels()


}


function initializePixels(){

    for (var y = 0; y < video.height; y++){
    for (var x = 0; x < video.width; x++){
      var index = (x + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
 
      let posX = x*vScale
      let posY = y*vScale
      let px = {x:posX,y:posY,r:r,g:g,b:b,scale:vScale}
      pixels.push(px)
    }
  }

}
function draw() {
  background(51); 
  video.loadPixels();
  loadPixels();
  let k = 0
  for (var y = 0; y < video.height; y++){
    for (var x = 0; x < video.width; x++){

      if(random()>0.9){
        var index = (x + y * video.width)*4;
        var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

       //for (var r = 0; r < 255; r++){
        //for (var g = 0; g < 255; g++){
        //  for (var b = 0; b < 255; b++){
       // fill(r,g,b);

        //var c = 0;
      
     if(r,g,b => 255){
        r = 0
       fill(r=0.1,g+=0.1,b+=0.1);
       //tint(c++,c++,c++)

 
      let posX = x*vScale
      let posY = y*vScale
      let px = {x:posX,y:posY,r:r,g:g,b:b,scale:vScale}
      pixels[k] = px

      //var counter = 5
   // counter --
    //if(counter = 0){
      //c = c+1
    }


      }


      k++
    }
  }


  for (var i = pixels.length - 1; i >= 0; i--) {
    let pixel = pixels[i]
    if (random()>0.5){ // try replacing 0.5 with another number
      // randomly swaping the positions of pixels
      let pixel1 =  Object.assign({}, pixels[i])
      let j = constrain(i - 1,0,pixels.length)
      let pixel2 = pixels[j]
      pixel1.r = pixel2.r 
      pixel1.g = pixel2.g 
      pixel1.b = pixel2.b
      pixel = pixel1
      pixel2 = pixel1

    }

    
    // draw the pixels 
    fill(pixel.r,pixel.g,pixel.b)
    rect(pixel.x,pixel.y, pixel.scale, pixel.scale); 

   
  }

}

