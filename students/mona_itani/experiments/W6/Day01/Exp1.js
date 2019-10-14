function setup(){
 createCanvas(400,400)
 background(0);

  let line = {
  
  x1: width/2,
  y1:10,
  x2: width/2,
  y2: height,
 
 }
 
 let numlines = 25

 drawlineRecursion(line,numlines);
}

function drawlineRecursion(l,numlines){

 fill(random(255),random(255),random(255),30)
  //strokeWeight(numlines*25)
  //line(l.x1,l.y1,l.x2,l.y2
  push()
  translate(width/3,height/3)
 ellipse(40,30,numlines*25,numlines*25)
 pop()
 


  numlines=numlines -1

  if (numlines>0){
    drawlineRecursion(l,numlines)
    //console.log(numlines)
  }
  // line(l.x1,1.y1,1.x2,y2)
  //drawlineRecursion()






}




    