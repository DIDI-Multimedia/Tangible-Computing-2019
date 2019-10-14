var video;

var vScale = 5;

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
 // background(51); 
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
 
      let posX = x*vScale
      let posY = y*vScale
      let px = {x:posX,y:posY,r:r,g:g,b:b,scale:vScale}
      pixels[k] = px

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

fill(pixel.r,pixel.g,pixel.b)
      rect(pixel.x,pixel.y, pixel.scale, pixel.scale); 
       fill(random(255), random(255), random(255),80)
        stroke(random(255), random(255), random(255),80);

    }

    function draw() {

      //var c = 0;
      
     // if(c => 255){
        //c = 0
       // fill(c+=0.1,c+=0.1,c+=0.1);
       // tint(c++,c++,c++)

         var w = 80;
  var h = 60;
  var x = 0;
  var y = 0;
  for (var i = 0; i < pixels.length; i++) {
    tint (random(255),random(255),random(255), 50);
    var index = (i + vScale) % pixels.length;
   image(pixels[index], x, y, w, h);
   x = x + w;
   if (x > width) {
    x = 0;
    y = y + h;



    
      }
    }

    // draw the pixels 
    //if (random()<255){
    
    //for (var c = 0; c < 255; c++){
        //fill(c,c,c);
     }
}
    
  }



