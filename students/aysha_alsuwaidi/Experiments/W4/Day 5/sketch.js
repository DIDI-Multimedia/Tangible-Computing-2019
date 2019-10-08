// <<<<<<< HEAD
let x = 100
function setup() {
  let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');


  }


function draw() {

 x=x-50;
 if (x< 0.5){
 	x= width;
 }

stroke(0)
line(2,width/2,mouseX,x);

line(10,width/6,x,x);

line(width/10,100,x,mouseY);
}
// =======
// let a = 0.0;
// let s = 0.0;
// function setup() {
// let canvas = createCanvas(windowWidth/3, windowWidth/3)
//   canvas.parent('sketch-holder');
  

// }

// function draw(){
// background(255)
  
 
//   a = a + 0.02;
//   s = cos(a) * 2;
//   translate(width / 3, height / 3);
//       scale(s);
//       noFill()
//       stroke(random(255),random(255),random(255))
//       ellipse(0,0,50,50)

// }



// >>>>>>> cce274124229c837dde04b2ed863913fe377d1b7
