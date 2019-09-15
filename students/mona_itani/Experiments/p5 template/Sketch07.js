// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup() {
  let canvas = createCanvas(windowWidth/2,windowWidth/2)
  
  
  canvas.parent('sketch-holder');
  var a = 99
}

function draw(){

background(0)


 translate(width/2,height/2);

 for(var a =70; a<140; a += 10){
   var x = random(1,10);
   var xx = random(11,2);
   push();
   rotate(radians(a*10));
  

   stroke(0);
   strokeWeight(0.5);
   fill(random(255),random(255),random(255))
   rect(250,250,mouseX,mouseY);
   ellipse(250,250,mouseX,mouseY);
   
   
   strokeCap(CORNER);
   pop();
 }
}

  

