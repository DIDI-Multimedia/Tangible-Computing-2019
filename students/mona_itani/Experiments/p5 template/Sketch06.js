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
   stroke(random(255),random(255),random(255))
   rect(250,250,random(0,width),random(0,height))


rect(500,150,random(0,width),random(0,height))
strokeWeight(100)
   
   
   strokeCap(CORNER);
   pop();
 }
}
  

