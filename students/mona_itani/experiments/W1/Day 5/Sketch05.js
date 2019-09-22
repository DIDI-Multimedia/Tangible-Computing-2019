// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 


function setup() {
  let canvas = createCanvas(windowWidth/3,windowWidth/3)
  
  
  canvas.parent('sketch-holder');
  var a = 99
}

function draw(){

  background(255)
  translate(width/2,height/2);

 for(var a =70; a<220; a += 1){

   var x = random(32,56);
   var xx = random(11,2);
   
   push();
   
   rotate(radians(a*8));
   stroke(0);
   strokeWeight(2);
   line(250,250,mouseX,mouseY);
   ellipse(20,20,mouseX,mouseY);
   strokeCap(CORNER);

   pop();

 }

}
  
    