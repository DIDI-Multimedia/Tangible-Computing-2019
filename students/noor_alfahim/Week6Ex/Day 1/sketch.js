

function setup (){
  createCanvas (400,400)
  background(0)



  let line = {

    x1: width/2,
    y1: 0, 
    x2: width/2,
    y2: height/2,

  }



  let numLines = 10

  drawLineRecursion (line,numLines)

}




function drawLineRecursion(l,numLines){

  stroke(34,155,215)
  line(l.x1,l.y1,l.x2,l.y2)

  // drawLineRecursion()

}