// var angle = 180
var mic;


function setup(){
  let canvas = createCanvas(windowWidth/2,windowWidth/2)
    canvas.parent('sketch-holder');
    // angleMode(DEGREES) 
  mic = new p5.AudioIn()
  mic.start()
}

function draw(){

    background(0)
  eyes ()
  // smile()
 
}

function eyes(){
    var vol = mic.getLevel();
   ellipseMode(CENTER)
   push()
   translate(100,100)
  fill(255)
    ellipse (100,100, width/4, vol*width/2)
  ellipse ((width/2)+50, 100, width/4, vol*width/2)
  fill(0)
  ellipse(100,100,vol*200,vol*200)
   ellipse((width/2)+50,100,vol*200,vol*200)
pop()
}
