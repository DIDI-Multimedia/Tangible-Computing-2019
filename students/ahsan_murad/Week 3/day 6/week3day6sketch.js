
function setup() {

  let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');


}

function draw() {
  background(255);
  translate(width/2,height/2);

  fill(0);

  beginShape();
  for(let a=0; a<TWO_PI; a+=0.05){
    let r = random(100,150);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
}
endShape();

beginShape();
fill(155,0,0);
for (let a = 0; a < TWO_PI; a+=0.1){
  let r = random(30,50);
  let x = r * cos(a);
  let y = r * sin(a);
  vertex(x,y);
}
endShape();
   
   }
