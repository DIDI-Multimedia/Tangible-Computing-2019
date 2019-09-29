
let i = 0 
var video;

function setup(){

  createCanvas(320,240);
  background(51);
 video = createCapture(VIDEO);
 video.size(320,240);
 video.hide();

let numCol = 100
  let numRow = 100
  let stepX = width / numCol // height of box 
  let stepY = height / numRow // width of box 
}

function draw(){
  tint(255, 0, 150);
  image(video, 0, 0, mouseX, height);
  background(255)
  for (var col = 0; col < numRow; col++){
    for (var row = 0; row < numCol; row++){
     //fill(col/numCol*255,row/numRow*255,mouseX/width*255)
     let r = noise(row/numRow+i)*255
     let b = noise(row/numRow+i)*100
     let g = noise(col/numCol+i)*255
     fill(r,g,b)
     
     rect(row*stepX,col*stepY,stepX,stepY) 

    i += 0.01;
 
  
}
    
    }
  }


