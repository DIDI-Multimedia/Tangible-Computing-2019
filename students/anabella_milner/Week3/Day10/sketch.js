


let i,j,k
var xoff = 0;
var yoff = 0;


function setup(){

  createCanvas(800,800);
  noStroke()
  rectMode(CENTER);
  // initialize perlin noise values with random parameters
  i = random()
  j = random()
  k = random()
  fill(random(10))
  strokeWeight(10)
}
function draw(){

  var x = map(noise(xoff,yoff),0,1,0,width);
  var y = map(noise(yoff),0,1,0,height);
  xoff += 0.01;
  yoff += 0.01;

  let numCol = 10
  let numRow = 25
  let stepX = width / numCol // height of box 
  let stepY = height / numRow // width of box 
  
   
  background(255)

  for (var col = 0; col < numRow; col++ ){
    for (var row = 0; row < numCol; row++){

     
  //push()
  //translate(positionX,positionY)
  //rotate(angle)
  
  ellipse(mouseX,mouseY,50,50)


  ellipse(x,y,24,24);
     //fill(col/numCol*255,row/numRow*255,mouseX/width*255)
     let r = noise(row/numRow+i)*255
     let b = noise(col/numCol+j)*255
     let g = noise(col/numCol+k)*255
     boxWidth = noise(k*row/numRow)*stepX*3
     boxHeight = noise(j*col/numCol)*stepY*6
     stroke(r,g,b,200)
     //translate();
     rect(row*stepX,col*stepY,boxWidth,boxHeight) 
    
    }
  }

    j += 0.01
    k += 0.01
    i += 0.01
}
