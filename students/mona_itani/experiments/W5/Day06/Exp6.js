function setup() {
  let canvas = createCanvas(windowWidth/3,windowWidth/3)
  
  
  canvas.parent('sketch-holder');
  var a = 100
}

function draw(){

background(random(255),mouseX, mouseY)


 translate(width/2,height/2);

 for(var a =7; a<220; a += 99){

   var x = random(6,1);
   var xx = random(1,100);
   push();

   rotate(radians(a*100));
   stroke(90);
   strokeWeight(10);
   rect(20,20,mouseX,mouseY);
   circle(250,250,random(10,width),random(10,height))
   strokeCap(CORNER);
   
   pop();
 }
}

