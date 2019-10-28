var rectsize = 3
var a = 32
function setup() {
let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');
  background(255)

}

function draw(){

    for (var angle=1; angle < TWO_PI; angle+= TWO_PI/rectsize){
      console.log(angle)

      push()
      translate(width/2,height/2)
      rotate(angle)
      noFill()
       stroke(590,random(255),random(100),random(5))
       strokeWeight(200)
      triangle(15,2,random(20,12,90),random(2,2,9))
      triangle(100,0,random(2,2,9),random(0,9))
     
      pop()
    }
}

  if (mouseIsPressed){
    background(255)
  }

