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

  background(0)
  translate(width/2,height/2);

 for(var a =70; a<220; a += 1){

   var x = random(10,80);
   var xx = random(11,2);
   
   push();
   
   rotate(radians(a*8));
   stroke(random(255),random(255),random(255));
   strokeWeight(9);
   circle(250,250,mouseX,mouseY);
   rect(20,20,mouseX,mouseY);
   line(20,70,mouseX,mouseY);
   rect(60,10,mouseX,mouseY);
   strokeCap(CORNER);

   pop();

 }

}
  
    