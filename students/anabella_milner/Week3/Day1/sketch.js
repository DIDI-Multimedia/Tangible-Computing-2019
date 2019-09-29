
  var xoff = 0;
var yoff = 0;


function setup(){
  createCanvas(1420,400);

}

function draw(){
  background(0);

  var x = map(noise(xoff,yoff),0,1,0,width);
  var y = map(noise(yoff),0,1,0,height);
  xoff += 0.01;
ellipse(60,24);

  yoff += 0.01;


  ellipse(x,y,24,24);
  

  
}