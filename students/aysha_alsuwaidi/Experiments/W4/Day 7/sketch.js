
function setup() {
let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');
  

}

function draw(){
background(255)
  
 
  
  translate(width / 2, height / 2);
      fill(155)
      noStroke()
      ellipse(0,0,75,150)

      fill(158)
     noStroke()
     ellipse(30,60,50,10)

      fill(0)
     noStroke()
     ellipse(-20,-30,10,10)
     ellipse(20,-30,10,10)

       fill(255)
     noStroke()
     ellipse(-20,-28,5,5)
     ellipse(20,-28,5,5)

      fill(255,9,150)
     noStroke()
     ellipse(0,-15,3,3)
     rect(-10,-10,20,8)
     

}



