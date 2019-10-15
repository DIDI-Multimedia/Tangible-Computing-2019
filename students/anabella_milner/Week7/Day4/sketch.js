var video;

var vScale = 8;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  video.hide()
  noStroke()

  
  let line = {
  x1: width/2,
  y1: 0,
  x2: width/2,
  y2: height,

  }

  let numLines = 10

  drawLineRecursion(line, numLines)
}

function draw() {
  background(51); 
  video.loadPixels();
  loadPixels();
  let pixels = []

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

  for (var i = pixels.length - 1; i >= 0; i--) {
    let pixel = pixels[i]
    if (random()>0.9){ // try replacing 0.5 with another number
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

 

function drawLineRecursion(l,numLines){

  stroke(random(255), random(255), random(255),10)
  strokeWeight(numLines*30)

   let mid = (l.y1 + l.y2)/2
  line(l.x1,l.y1,l.x2,l.y2)

  
  //rectMode(CENTER)
  //ect(windowWidth/2, windowHeight/2, numLines,numLines)

  numLines--

  let lineA = {
    x1: l.x1,
    y1: l.y1,
    x2: l.x2,
    y2: mid,

  }

    let lineB = {
    x1: l.x1,
    y1: mid,
    x2: l.x2,
    y2: l.y2,

  }





  if(numLines > 0){
    drawLineRecursion(lineA, numLines)
    drawLineRecursion(lineB, numLines)
    //console.log(numLines)
  }

  //drawLineRecursion()
}

