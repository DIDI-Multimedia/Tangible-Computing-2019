
var mic;
let x = 23
function setup() {
  let canvas = createCanvas(windowWidth/3, windowWidth/3)

  mic = new p5.AudioIn();
  mic.start();
  }


function draw() {


var vol= mic.getLevel();

 x=x-20;
 if (x< 1){
 	x= height;
 }
noFill()
stroke(random(255),random(255),random(255))
  strokeWeight(2)


line(20,width/2,vol*1000,vol*1000);

line(10,width/6,vol*1000,vol*1000);

line(width/10,100,vol*1000,vol*1000);



  console.log(vol)
}
// =======


// function setup() {
// let canvas = createCanvas(windowWidth/1, windowWidth/2)
//   canvas.parent('sketch-holder');
//   capture = createCapture(VIDEO);
  

// }

// function draw(){
//   background(255);
//   image(capture, 100,50,1000, 500);
//   tint(255,0,150);
 
  

// }
// >>>>>>> cce274124229c837dde04b2ed863913fe377d1b7
