

//function setup(){







let i,j,k
var video;

function setup(){

  createCanvas(800,800);
  //noStroke()
  rectMode(CENTER);
  // initialize perlin noise values with random parameters
  i = random()
  j = random()
  k = random()
  noFill()
  strokeWeight(3)
  video = createCapture(VIDEO);
 video.size(320,240);
 video.hide();
}
function draw(){

  let numCol = 50
  let numRow = 50
  let stepX = width / numCol // height of box 
  let stepY = height / numRow // width of box 
  
   
  background(255)

  for (var col = 0; col < numRow; col++ ){
    for (var row = 0; row < numCol; row++){
     //fill(col/numCol*255,row/numRow*255,mouseX/width*255)
     let r = noise(row/numRow+i)*255
     let b = noise(col/numCol+j)*255
     let g = noise(col/numCol+k)*255
     boxWidth = noise(k*row/numRow)*stepX*3
     boxHeight = noise(j*col/numCol)*stepY*6
     stroke(r,g,b,200)
     
     rect(row*stepX,col*stepY,boxWidth,boxHeight) 

  tint(255, 0, 150);
  image(video, 0, 0, mouseX, height);
  
}
    
    }
  }

    j += 0.01
    k += 0.0025
    i += 0.005

