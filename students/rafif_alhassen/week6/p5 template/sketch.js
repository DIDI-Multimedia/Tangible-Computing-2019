function setup(){
 createCanvas(400,400)
 background(0);

  let line = {
  
  x1: width/2,
  y1:0,
  x2: width/2,
  y2: height,
 
 }
 
 let numlines = 28

 drawlineRecursion(line,numlines);
}

function drawlineRecursion(l,numlines){

 fill(random(255),random(255),random(255),30)
  //strokeWeight(numlines*25)
  //line(l.x1,l.y1,l.x2,l.y2
  push()
  translate(width/6,height/6)
 ellipse(10,50,numlines*25-4,numlines*25)
 pop()
 
  numlines=numlines -0.5

  if (numlines>2){
    drawlineRecursion(l,numlines)
    //console.log(numlines)
  }
  // line(l.x1,1.y1,1.x2,y2)
  //drawlineRecursion()
}


