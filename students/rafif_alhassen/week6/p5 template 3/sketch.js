function setup(){
 createCanvas(500,500)
 background(0);

  let line = {
  
  x1: width/6,
  y1:3,
  x2: width/3,
  y2: height+3,
 
 }
 
 let numlines = 40

 drawlineRecursion(line,numlines);
}

function drawlineRecursion(l,numlines){

 fill(random(100),random(100),random(100),30)
 stroke(255);
  // strokeWeight(numlines*25)
  //line(l.x1,l.y1,l.x2,l.y2
  push()
  translate(width/2.5,height/2.5)
 ellipse(10,50,numlines*25-4,numlines*25)
  ellipse(5,10,numlines*10,numlines*10)
  ellipse(20,70,numlines*30,numlines*30)
 pop()
 


  numlines=numlines -1

  if (numlines>3){
    drawlineRecursion(l,numlines)
    //console.log(numlines)
  }
  // line(l.x1,1.y1,1.x2,y2)
  //drawlineRecursion()






}
