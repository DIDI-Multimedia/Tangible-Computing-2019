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

background(random(255),mouseX, mouseY)


 translate(width/2,height/2);

 for(var a =7; a<220; a += 99){
   var x = random(30,5);
   var xx = random(90,2);
   push();
   rotate(radians(a*100));
  

   stroke(90);
   strokeWeight(100);
   line(xx,0,20,100);
   rect(250,250,random(10,width),random(10,height))
   
   
   strokeCap(CORNER);
   pop();
 }
}
  

