

function setup (){
  createCanvas (400,400)
  background(0)



  let line = {

    x1: width/2,
    y1: 0, 
    x2: width/2,
    y2: height,

  }



  let numLines = 20

  drawLineRecursion (line,numLines)

}




function drawLineRecursion(l,numLines){

  stroke(random(255),random(255),random(255),50)
  strokeWeight (numLines*10)

  let mid = (l.y1 +l.y2)/2
  line(l.x1,l.y1,l.x2,l.y2)


    numLines = numLines - 1

    let lineA = {

    	x1: l.x1,
    	y1: mid,
    	x2: l.x2,
    	y2: l.y2,
    }


    let lineB = {

    	x1: l.x1,
    	y1: l.y1,
    	x2: l.x2,
    	y2: mid,
    }

    console.log(lineA)


    if (numLines > 0){
      drawLineRecursion (l,numLines)
      console.log(numLines)

    }

  // drawLineRecursion()

}


